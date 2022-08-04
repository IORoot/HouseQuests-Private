// ┌─────────────────────────────────────┐
// │                                     │
// │     Remove blacklisted entries      │
// │                                     │
// └─────────────────────────────────────┘

function check_blacklist(markers)
{

    // get blacklist array
    var blacklist = JSON.parse(window.localStorage.getItem('blacklistedIDs'));

    if (!blacklist){ return }

    // Create an array of just the IDs. (remove the source.)
    var blacklistIDs = []
    blacklist.forEach(function(blacklistItem, index){
        blacklistIDs.push(blacklistItem[0])
    })

    // Loop through ALL markers, checking if any in blacklist.
    markers.forEach(function(marker, index) {

        markerID = marker[0];
        markerSource = marker[1];

        if ( blacklistIDs.includes(marker.id) ){
            markers = markers.filter(function(item) {
                return item !== marker
            })
        }

    });
    

    return markers;
}