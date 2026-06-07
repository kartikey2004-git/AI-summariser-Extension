# AI Summariser Extension

A small browser extension that generates concise summaries of web pages or selected text using an AI backend. It’s designed to help you quickly grasp long-form articles, blog posts, and other content.

**Project status:** Prototype — core summarization, popup UI, and extension wiring are implemented.

**Quick links:** [manifest.json](manifest.json) • [popup.html](popup.html) • [background.js](background.js) • [content.js](content.js) • [options.html](options.html)

## What this project does
- **Summarize pages or selections:** Generate short, readable summaries for the active page or highlighted text.
- **Popup UI:** Shows summaries in a compact popup (`popup.html` / `popup.js`).
- **Background bridging:** Uses `background.js` for API calls and long-running tasks.
- **Content script extraction:** `content.js` extracts article text from pages for summarization.

## Why it’s useful
- **Faster reading:** Quickly understand long articles without reading every word.
- **Focused summaries:** Supports different summary styles (bulleted, paragraph, keywords).
- **Lightweight & local-first:** Runs as a browser extension without a heavy UI footprint.

## Features
- **Page or selection summarization**
- **Multiple output styles** (bullet list, short paragraph)
- **Chrome Manifest V3 compatible**
- **Configurable API backend** via a local server or direct API calls
- **Options page** (`options.html`) to change settings

## Getting started (user)
1. Download or clone this repository.

```bash
git clone https://github.com/kartikey2004-git/AI-summariser-Extension.git
cd "article summariser by AI"
```

2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle top-right).
4. Click **Load unpacked** and select this project folder.
5. Click the extension icon to open the popup and summarize the current page or selected text.

## Configuration (developer)
- If the extension calls an external AI API from a server, create a `.env` file in your local server folder (for example `openai-server/`) with your API key:

```bash
GEMINI_API_KEY=your_api_key_here
```

- Start your local API server (if used):

```bash
cd openai-server
npm install
node server.js
```

- The extension is set to call the background script which can forward requests to a local server or directly to an API provider. Check `background.js` to adapt API endpoints and key handling.

## Development
- Files to inspect:
	- `manifest.json` — extension metadata and permissions
	- `content.js` — page content extraction
	- `background.js` — API request handling and long-running logic
	- `popup.html` / `popup.js` — user-facing UI and interactions
	- `options.html` / `options.js` — user-configurable settings

- Recommended local workflow:
	1. Run a local API server (if you use one).
	2. Load the unpacked extension in Chrome.
	3. Use DevTools to inspect background/service worker logs and popup console.

## Usage examples
- Summarize full page: open an article → click the extension icon → click “Summarize page”.
- Summarize selection: select text → click extension icon → click “Summarize selection”.

## Contributing
- **Bug reports & feature requests:** Open an issue.
- **Pull requests:** Fork, branch, and open a PR. Keep changes focused and add notes in the PR description.

If you want a dedicated contribution guide, add `CONTRIBUTING.md` and link to it here.

## Support
- Open an issue in this repository for help or feature requests.

## License
- See the `LICENSE` file in this repository for license details.

---

If you want, I can also:
- add a short demo GIF for the popup flow
- create `CONTRIBUTING.md` and `LICENSE` placeholders
- wire an environment-aware background-to-server example in `background.js`
