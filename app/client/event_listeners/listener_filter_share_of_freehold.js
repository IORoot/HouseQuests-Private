// ┌─────────────────────────────────────┐
// │                                     │
// │   Filter Leaseholds Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

import {load_property_details} from '../requests/load_property_details.js'
import { add_to_blacklist } from '../blacklist/add_to_blacklist.js'
import { list_blacklist } from '../blacklist/list_blacklist.js'
import { remove_map_feature } from '../map/remove_map_feature.js'
import { listener_blacklist_item } from './listener_blacklist_item.js'
import { listener_blacklist_item_remove } from './listener_blacklist_item_remove.js'


export function listener_filter_share_of_freehold()
{

    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                     MAIN MARKER ICON CHANGING FUNCTION                       │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    var filterShareOfFreeholds = function() {

        // Get blacklist for later
        var blacklist = [];
        blacklist = JSON.parse(window.localStorage.getItem('blacklistedIDs'));

        // Get all layers
        let layersCollection = map.getLayers();

        // loop through layers
        layersCollection.forEach(function(layer, index){

            // Instance of Tile source / Vector source
            let source = layer.getSource()

            // Filter for vectors only
            if (source instanceof ol.source.Vector){

                // Get Array of Features on Vector
                let features = source.getFeatures();

                // Loop through all features array
                features.forEach( async function(feature){

                    var marker = '';

                    if (feature) {
                        marker = feature.A
                    }

                    if (marker.type == 'property')
                    {

                        // skip all zoopla for now.
                        if (marker.source == "onthemarket" || marker.source == "rightmove"){ 

                            var propertyDetails = await load_property_details(marker)

                            var propertyDetails_decoded = JSON.parse(propertyDetails);

                            var property_id     = parseInt(propertyDetails_decoded.id);
                            var property_source = propertyDetails_decoded.source;
                            var property_tenure = propertyDetails_decoded.tenure;
                            var excludeArray = [property_id, property_source]

                            // Do check
                            const regex = /share/i;
                            if (regex.test(property_tenure))
                            {
                                console.log("DELETE : " + property_id + " = " + property_tenure);
                                add_to_blacklist(blacklist,excludeArray)
                                remove_map_feature(property_id);
                            }

                            // Re-save array back to localStorage
                            window.localStorage.setItem('blacklistedIDs', JSON.stringify(blacklist));

                        }

                    }

                })

                // list the new array
                list_blacklist()

                // add new event listeners to all elements of list (add the remove button)
                listener_blacklist_item()
                listener_blacklist_item_remove()

            }
        })

    };



    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                             ADD EVENT LISTENERS                              │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯

    // Put eventListener onto the filter leaseholds button.
    var filter_share_of_freeholds_button = document.getElementById("filter-all-share");
    filter_share_of_freeholds_button.addEventListener('click', filterShareOfFreeholds, false);


}