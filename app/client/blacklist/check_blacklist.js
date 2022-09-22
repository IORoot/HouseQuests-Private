// ┌─────────────────────────────────────┐
// │                                     │
// │     Remove blacklisted entries      │
// │                                     │
// └─────────────────────────────────────┘

export function check_blacklist(markers)
{

    // get blacklist array
    var blacklist = JSON.parse(window.localStorage.getItem('blacklistedIDs'));

    if (!blacklist){ return markers }

    // if not authenticated, only show the first 100.
    if ( ! authenticated )
    {
        blacklist = blacklist.slice(0, numberOfExclusionsForFree);
    }


    // Create an array of just the IDs. (remove the source.)
    var blacklistIDs = []
    blacklist.forEach(function(blacklistItem, index){
        blacklistIDs.push(blacklistItem[0])
    })

    // Loop through ALL markers, checking if any in blacklist.
    markers.forEach(function(marker, index) {

        let propertyID = parseInt(marker.id);

        if ( blacklistIDs.includes(propertyID) ){

            markers = markers.filter(function(item) {
                return item !== marker
            })
        }

    });

    return markers;
}