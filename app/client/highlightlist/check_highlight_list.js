// ┌─────────────────────────────────────┐
// │                                     │
// │     Check highlightlist entries     │
// │                                     │
// └─────────────────────────────────────┘

export function check_highlight_list(currentPropertyID)
{

    let newIcon = null;
    let customIcon = "pin";

    // get highlightlist array
    var highlightlist = JSON.parse(window.localStorage.getItem('highlightList'));

    if (!highlightlist){ return }

    // Loop through each highlightlist checking against currentPropertyID
    highlightlist.forEach(function(propertyColourArray, index) {

        if ( propertyColourArray.propertyID == currentPropertyID) {

            if ("icon" in propertyColourArray){
                customIcon = propertyColourArray.icon;
            }

            newIcon = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2F"+customIcon+".svg&fill=%23"+propertyColourArray.colour+"&stroke=%23ffffff&stroke-width=0.5&width="+icon_width+"px&height="+icon_height+"px";
        }

    })

    return newIcon

}

