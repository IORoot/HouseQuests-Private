
// ┌─────────────────────────────────────┐
// │                                     │
// │          Streetview button          │
// │                                     │
// └─────────────────────────────────────┘

export function listener_streetview(){

    const streetViewButton = document.getElementById("drawer-google-streetview")

    streetViewButton.addEventListener('click', async function(event) { 

        event.preventDefault();

        let url = 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint='+currentProperty.latitude+','+currentProperty.longitude
        
        // Open in chrome.
        require("electron").shell.openExternal(url);

    });
}