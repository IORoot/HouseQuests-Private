// ┌─────────────────────────────────────┐
// │                                     │
// │   Filter Properties Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

import { load_property_details } from '../requests/load_property_details.js'
import { add_to_blacklist } from '../blacklist/add_to_blacklist.js'
import { list_blacklist } from '../blacklist/list_blacklist.js'
import { remove_map_feature } from '../map/remove_map_feature.js'
import { listener_blacklist_item } from './listener_blacklist_item.js'
import { listener_blacklist_item_remove } from './listener_blacklist_item_remove.js'
import { filter_text_field } from '../filters/filter_text_field.js'


export function listener_filter_exclude_property()
{

    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                        MAIN REGEX EXCLUDE FUNCTION                           │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    var filterExcludeProperties = function() {

        // Get all targets
        var targetzoopla = document.getElementById("zoopla-filter-target");
        var targetrightmove = document.getElementById("rightmove-filter-target");
        var targetonthemarket = document.getElementById("onthemarket-filter-target");
        var filterZoopla;
        var filterRightmove;
        var filterOnthemarket;
        if (targetzoopla.checked){ filterZoopla = "zoopla"; }
        if (targetrightmove.checked){ filterRightmove = "rightmove"; }
        if (targetonthemarket.checked){ filterOnthemarket = "onthemarket"; }

        // Get all regex parameters
        var regex_tenure      = createRegexFromString(document.getElementById("filter-parameter-tenure").value);
        var regex_title       = createRegexFromString(document.getElementById("filter-parameter-title").value);
        var regex_description = createRegexFromString(document.getElementById("filter-parameter-description").value);

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

                        // Check for which sources are toggled.
                        if ( marker.source == filterZoopla || marker.source == filterOnthemarket || marker.source == filterRightmove ){ 

                            // Load the property details
                            var propertyDetails = await load_property_details(marker)
                            

                            // Json decode
                            var propertyDetails_decoded = JSON.parse(propertyDetails);

                            // set default state
                            var removeProperty = false;

                            // setup exclusion array
                            var property_id     = parseInt(propertyDetails_decoded.id);
                            var property_source = propertyDetails_decoded.source;
                            var excludeArray = [property_id, property_source]


                            // Do filters
                            removeProperty = filter_text_field(propertyDetails_decoded.tenure, regex_tenure) ? true : removeProperty;
                            removeProperty = filter_text_field(propertyDetails_decoded.title, regex_title) ? true : removeProperty;
                            removeProperty = filter_text_field(propertyDetails_decoded.description, regex_description) ? true : removeProperty;

                            if (removeProperty)
                            {
                                console.log("BLACKLIST : " + property_id);
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

    function createRegexFromString(pattern) {

        if (pattern == ""){ return ""; }

        // Remove leading and trailing slashes if present
        const regexPattern = pattern.replace(/^\/|\/$/g, '');
      
        // Create the regular expression object
        return new RegExp(regexPattern, 'i'); // 'i' flag for case-insensitive matching
    }

    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                             ADD EVENT LISTENERS                              │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯

    // Put eventListener onto the filter action exclude button.
    var filter_action_exclude_button = document.getElementById("filter-action-exclude");
    filter_action_exclude_button.addEventListener('click', filterExcludeProperties, false);

}