- manifest.json to full fledged script for our chrome extension

- file which is DNA of chrome extension (hahaha) :: manifest.json file

    - in this file we define the chrome , what this extension going to be
      
       - what all the permission it needs ?
       - what all the files that it needs ? 
       - All of the scripts related to popup, that will be showing on the chrome and all the background scripts etc..


- what all the permission it needs from chrome ? we can study from official docs
   
   - taking out content of website :: we need the right for scripting ( or to run javascript code )

   - ability to let pop-up talk to the current tab that user has clicked 

   - storing user's Gemini API key securely


action --> all the default files and stuff , we provide to our extension like HTML of the pop up

there can be multiple content scripts  

  - content scripts : helps us in querying the DOM of particular webpage 


- and then we need to define the scripts for service worker  
   
   - what are service worker and background scripts  ?  
   
       - basically when we run our extension for the very first time , 
   
       - this script will run , when I installed the extension or loaded the extension , it was asking for the gemini API key ,  use case of background script in our case


- background script routed us to a page of gemini API :: we need to create the UI for that ( options.html )


- options_page is only name bcoz this is the built-in link for the chrome which shows us the extension options 
   
   - where we configure the extension options 

- host permission allowed to hit any website 

