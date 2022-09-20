
// ┌─────────────────────────────────────┐
// │                                     │
// │          Streetview button          │
// │                                     │
// └─────────────────────────────────────┘

export function listener_website_link(){

    const websiteLink = document.getElementById("drawer-link")

    websiteLink.addEventListener('click', async function(event) { 

        event.preventDefault();
        
        // Open in chrome.
        require("electron").shell.openExternal(websiteLink.href);

    });
}