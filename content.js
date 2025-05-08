// this script run inside the webpage DOM , it will help us to query the DOM

// for example : i want to extract some article from a web page

// scripts for scraping the text

function getArticleText() {

  // whole article or blog in website inside this article tag

  // querySelector :: Returns the first element that is a descendant of node that matches selectors.

  // querySelectorAll :: Returns all element descendants of node that match selectors.

  const article = document.querySelector("article");
  if (article) return article.innerText;

  // An iterable object to convert to an array.Creates an array from an iterable object.

  // join :: Adds all the elements of an array into a string, separated by the specified separator string.

  const paragraphs = Array.from(document.querySelectorAll("p"));

  return paragraphs.map((p) => p.innerText).join("\n");

}

// content.js file this listens for some commands from pop-up.js , it will not run automatically obvious 


chrome.runtime.onMessage.addListener(( req , _sender , sendResponse ) => {

  // in this we will listen specific type of request
  
  if (req.type === "GET_ARTICLE_TEXT") {
    const text = getArticleText();
    sendResponse({ text });
    return true // this will return asynchronously
    
    // Keeps message channel open (best practice)
  }  
})