// ┌─────────────────────────────────────┐
// │                                     │
// │    Blacklist Item Event Listeners   │
// │                                     │
// └─────────────────────────────────────┘
var blacklistID_links = document.getElementsByClassName("blacklistid-link");


// Function to run when blacklist link clicked.
var openBlacklistDrawer = async function() {

    // get 'this' buttons colour
    var blacklistId = this.getAttribute("data-blacklist-id");
    var blacklistSource = this.getAttribute("data-blacklist-source");
    var domain = ''

    if (blacklistSource == 'rightmove'){
        domain = 'https://rightmove.co.uk/properties/'
    }

    if (blacklistSource == 'zoopla'){
        domain = 'https://zoopla.co.uk/for-sale/details/'
    }

    if (blacklistSource == ''){
        return;
    }


    // Update drawer
    let blacklistMarker = {
        'source': blacklistSource,
        'url': domain+blacklistId
    }

    // Send the marker to backend to get all further details from zoopla/rightmove
    var propertyDetails = await load_feature_details(blacklistMarker)

    // update the right drawer contents with results.
    update_drawer_contents(propertyDetails, blacklistMarker.source)

    // Open the drawer
    drawer.show();

};


// Loop through all buttons and give them an event listener.
for (var blacklistIndex = 0; blacklistIndex < blacklistID_links.length; blacklistIndex++) {
    blacklistID_links[blacklistIndex].addEventListener('click', openBlacklistDrawer, false);
}
