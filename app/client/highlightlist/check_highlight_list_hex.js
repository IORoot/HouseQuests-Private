// ┌─────────────────────────────────────┐
// │                                     │
// │     Check highlightlist entries     │
// │                                     │
// └─────────────────────────────────────┘

export function check_highlight_list_hex(currentPropertyID)
{

    let newHex = null;

    // get highlightlist array
    var highlightlist = JSON.parse(window.localStorage.getItem('highlightList'));

    if (!highlightlist){ return }

    // Loop through each highlightlist checking against currentPropertyID
    highlightlist.forEach(function(propertyColourArray, index) {

        if ( propertyColourArray.propertyID == currentPropertyID) {
            newHex = propertyColourArray.colour;
        }

    })

    return newHex

}