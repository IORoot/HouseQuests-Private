
// ┌─────────────────────────────────────┐
// │                                     │
// │            Refresh Page             │
// │                                     │
// └─────────────────────────────────────┘

export function listener_refresh_page(){

    const refreshPage = document.getElementById("refresh-page")

    refreshPage.addEventListener('click', async function(event) { 

        // Open in chrome.
        location.reload();

    });
}