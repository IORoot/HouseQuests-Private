
// ┌─────────────────────────────────────┐
// │                                     │
// │   EXCLUDE button Event Listener     │
// │                                     │
// └─────────────────────────────────────┘

import { add_to_blacklist } from '../blacklist/add_to_blacklist.js'
import { list_blacklist } from '../blacklist/list_blacklist.js'
import { remove_map_feature } from '../map/remove_map_feature.js'
import { listener_blacklist_item } from '../event_listeners/listener_blacklist_item.js'
import { listener_blacklist_item_remove } from '../event_listeners/listener_blacklist_item_remove.js'

export function listener_exclude_button(){

    const excludeButton = document.getElementById('drawer-exclude');

    excludeButton.addEventListener('click', function(event) {

        // Get current ID & source
        const excludeID = document.getElementById('drawer-id').dataset.id;
        const excludeIDinteger = parseInt(excludeID);
        const excludeSource = document.getElementById('drawer-source').dataset.source;
        
        const excludeArray = [excludeIDinteger, excludeSource]

        var blacklist = [];

        // Get the blacklist from localStorage
        blacklist = JSON.parse(window.localStorage.getItem('blacklistedIDs'));

        if (blacklist){
            // push new ID onto array.
            add_to_blacklist(blacklist,excludeArray)
            remove_map_feature(excludeIDinteger);
            drawer.hide();
        } else {
            blacklist = [excludeArray];
        }
        

        // Re-save array back to localStorage
        window.localStorage.setItem('blacklistedIDs', JSON.stringify(blacklist));

        // list the new array
        list_blacklist()

        // add new event listeners to all elements of list (add the remove button)
        listener_blacklist_item()
        listener_blacklist_item_remove()
    });

}