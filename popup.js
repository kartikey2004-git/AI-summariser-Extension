document.getElementById("summarize").addEventListener("click", () => {
  const result = document.getElementById("result");

  const summaryType = document.getElementById("summary-type").value;

  result.innerHTML = '<div class="loader"></div>';

  // Get the user's API Key first

  chrome.storage.sync.get(
    ["geminiApiKey"],

    ({ geminiApiKey }) => {
      if (!geminiApiKey) {
        result.textContent = "No API key set. Click the gear icon to add one";
        return;
      }

      // Now query active tab and Ask content.js for page text

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];

        if (!tab.url.startsWith("http")) {
          result.textContent = "Cannot summarize this page.";
          return;
        }

        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            files: ["content.js"],
          },

          () => {
            chrome.tabs.sendMessage(
              tab.id,
              { type: "GET_ARTICLE_TEXT" },

              async ({ text } = {}) => {
                if (chrome.runtime.lastError) {
                  result.textContent =
                    "Error: " + chrome.runtime.lastError.message;

                  console.error(chrome.runtime.lastError.message);

                  return;
                }

                if (text === undefined) {
                  result.textContent = "No response received.";

                  console.error("No response from content script.");

                  return;
                }

                // Send text to gemini for processing and return it

                try {
                  const summary = await getGeminiSummary(
                    text,
                    summaryType,
                    geminiApiKey
                  );

                  result.textContent = summary;
                } catch (error) {
                  result.textContent = "Gemini error: " + error.message;
                }
              }
            );
          }
        );
      });
    }
  );
});

async function getGeminiSummary(rawText, type, apiKey) {
  const max = 20000;
  const text = rawText.length > max ? rawText.slice(0, max) + "..." : rawText;

  const promptMap = { 
    brief: `Summarize the following content briefly in 4-5 sentences:\n\n${text}`,

    detailed: `Provide a detailed summary covering all key points from the following content in 500-1000 words :\n\n${text}`,
    
    bullets: `Summarize the following content in 5-7 bullet points and Start each point with " - ":\n\n${text}`,
  };
  

  const prompt = promptMap[type] || promptMap.brief;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2 },
      }),
    }
  );

  if(!res.ok){
    const { error } = await res.json()

    throw new Error(error?.message || "Request Failed")
  }

  const data = await res.json()

  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No summary."
}

document.getElementById('copy-btn').addEventListener('click',() => {

  const txt = document.getElementById("result").innerText;

  if (!txt) return;

  // navigator API from javascript browser 

  navigator.clipboard.writeText(txt).then(() => {
    const btn = document.getElementById("copy-btn")

    const old = btn.textContent;
    btn.textContent = "Copied!";

    setTimeout(() => (btn.textContent = old),2000)
  })
})


/* 

chrome.scripting.executeScript() injects content.js into the current active tab.

Then your chrome.tabs.sendMessage() talks to that script immediately after injection.

This way you never have the timing issue of "popup clicked before content script was ready."

popup.js is the file where our main logic of AI summarizer is going to be

A POST request is an HTTP method used to send data to a server to create or update a resource

stringfy :: Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

generationConfig: { temparature: 0.2 }, :: how creative you want model to be


*/