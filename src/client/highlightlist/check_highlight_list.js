// ┌─────────────────────────────────────┐
// │                                     │
// │     Check highlightlist entries     │
// │                                     │
// └─────────────────────────────────────┘

export function check_highlight_list(currentPropertyID)
{

    let newIcon = null;

    // get highlightlist array
    var highlightlist = JSON.parse(window.localStorage.getItem('highlightList'));

    if (!highlightlist){ return }

    // Loop through each highlightlist checking against currentPropertyID
    highlightlist.forEach(function(propertyColourArray, index) {

        if ( propertyColourArray.propertyID == currentPropertyID) {
            newIcon = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle.svg&fill=%23"+propertyColourArray.colour+"&width=20px&height=20px";
        }

    })

    return newIcon

}

