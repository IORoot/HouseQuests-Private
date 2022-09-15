// ┌─────────────────────────────────────┐
// │                                     │
// │   Blacklist Remove Event Listener   │
// │                                     │
// └─────────────────────────────────────┘
import { list_blacklist } from '../blacklist/list_blacklist.js'

export function listener_blacklist_item_remove()
{

    var blacklistID_remove = document.getElementsByClassName("blacklistid-remove");


    // Function to run when blacklist link clicked.
    var removeBlacklistItem = function() {

        var propertyID = parseInt(this.getAttribute("data-blacklist-id"));
        
        var blacklist = JSON.parse(window.localStorage.getItem('blacklistedIDs'));
        
        if (!blacklist){ return }

        // Create an array of just the IDs. (remove the source.)
        var blacklistIDList = []
        blacklist.forEach(function(blacklistItem, index){
            blacklistIDList.push(blacklistItem[0])
        })

        let index = blacklistIDList.indexOf(propertyID);

        if (index > -1) { // only splice array when item is found
            blacklist.splice(index, 1); // Remove from the blacklist.
        }

        window.localStorage.setItem('blacklistedIDs', JSON.stringify(blacklist));

        list_blacklist()
    };


    // Loop through all buttons and give them an event listener.
    for (var blacklistRemoveIndex = 0; blacklistRemoveIndex < blacklistID_remove.length; blacklistRemoveIndex++) {
        blacklistID_remove[blacklistRemoveIndex].addEventListener('click', removeBlacklistItem, false);
    }

}