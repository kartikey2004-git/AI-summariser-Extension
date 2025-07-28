# AI Summariser Extension
A browser extension I built that uses AI to summarize web page content instantly—ideal for quickly grasping articles, blogs, or long-form texts.

## 🚀 What It Does
- Summarizes entire web pages or highlighted text using OpenAI’s GPT API

- Displays concise summaries in a clean popup UI

- Supports adjustable summary length or focus topics (if enabled)



## ⚙️ Core Features
- Summarize full pages or only selected text

- Summary modes: bullet points, paragraph form, or keywords-driven

- API communication managed via background script or local server

- Chrome manifest v3 compliant

- Environment variable support for secure API key usage

## 📝 Why I Built It
- Inspired by open-source summarizer extensions like Page Summarizer and others, I wanted to build something scalable and neat for real-world use 




- This repo helped me learn extension architecture, API flows, and UI integration inside the browser.

### 🛠️ Setup & Run
Clone the repo

```bash
git clone https://github.com/kartikey2004-git/AI-summariser-Extension.git
```

Install dependencies for local API server (if applicable)
```
bash
npm install
Configure API Key from gemini AI API
```

Create .env inside the openai-server folder:
```bash
GEMINI_API_KEY=your_api_key_here
```

Run server (if used)
```bash
node server.js
```

- Install the extension in Chrome
- Navigate to chrome://extensions/
- Enable Developer mode
- Click “Load unpacked” and select this project folder



## 🧪 Usage
- Navigate to any article or blog in Chrome
- Click the extension icon in your browser toolbar
- Choose to summarize the page or selected text
- AI-generated summary will appear in the popup UI


## 🔭 Future Enhancements
- Add settings UI to customize summary style (e.g., bullet vs paragraph)
- Support multiple AI backends (OpenAI, Cohere, ApyHub, etc.)
- Store user preferences or summary history in localStorage
- Enable summarization length control and keyword filters

## Status
This project is production-ready as a summarizer tool.
Server integration and configurations are complete—only polish and UI improvements remain.
