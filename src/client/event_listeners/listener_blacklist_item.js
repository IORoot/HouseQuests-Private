// ┌─────────────────────────────────────┐
// │                                     │
// │    Blacklist Item Event Listeners   │
// │                                     │
// └─────────────────────────────────────┘
import {update_drawer_contents} from '../drawer/update_drawer_contents.js'
import {load_property_details} from '../requests/load_property_details.js'

export function listener_blacklist_item()
{

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

        if (blacklistSource == 'onthemarket'){
            domain = 'https://www.onthemarket.com/details/'
        }

        if (blacklistSource == ''){
            return;
        }


        // Update drawer
        let blacklistMarker = {
            'source': blacklistSource,
            'url': domain+blacklistId
        }

        var propertyDetails = await load_property_details(blacklistMarker)

        // update the right drawer contents with results.
        update_drawer_contents(propertyDetails, blacklistMarker.source)

        // Open the drawer
        drawer.show();

    };


    // Loop through all buttons and give them an event listener.
    for (var blacklistIndex = 0; blacklistIndex < blacklistID_links.length; blacklistIndex++) {
        blacklistID_links[blacklistIndex].addEventListener('click', openBlacklistDrawer, false);
    }

}