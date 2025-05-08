// inbuilt functions of chrome 
// 2 types of storage in chrome ( local and sync )

// local stores the API key locally inside our current browser 

// sync stores it across all of our chrome sessions

// If I have multiple chrome accounts in laptop , this will syncronize all accounts with this particular storage

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["geminiApiKey"],(result) => {
    if (!result.geminiApiKey){
      
      // then we will open the chrome extension options :: option's page ---> options.html

      // we will open a new tab with URL options.html

      chrome.tabs.create({ url : "options.html"})
    }
  })
})

// it is default script of chrome that sents to particular HTML

