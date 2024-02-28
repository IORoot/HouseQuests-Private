// ┌─────────────────────────────────────┐
// │                                     │
// │   Filter Properties Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

import { load_property_details } from '../requests/load_property_details.js'
import { list_blacklist } from '../blacklist/list_blacklist.js'
import { listener_blacklist_item } from './listener_blacklist_item.js'
import { listener_blacklist_item_remove } from './listener_blacklist_item_remove.js'
import { filter_text_field } from '../filters/filter_text_field.js'


export function listener_filter_highlight_property()
{

    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                      MAIN REGEX HIGHLIGHT FUNCTION                           │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    var filterHighlightProperties = function() {

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

        // Get highlights
        var hightlight_icon_colour = document.getElementById("filter-action-icon-colour").value
        var hightlight_icon_svg = document.getElementById("filter-action-icon-svg-id").value

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
                            var highlightProperty = false;

                            // Do filters
                            highlightProperty = filter_text_field(propertyDetails_decoded.tenure, regex_tenure) ? true : highlightProperty;
                            highlightProperty = filter_text_field(propertyDetails_decoded.title, regex_title) ? true : highlightProperty;
                            highlightProperty = filter_text_field(propertyDetails_decoded.description, regex_description) ? true : highlightProperty;

                            if (highlightProperty)
                            {
                                var property_id = parseInt(propertyDetails_decoded.id);
                                console.log("HIGHLIGHT : " + property_id);

                                // Get current Icon Colour if not set
                                if (hightlight_icon_colour === "") { 
                                    // get the current icon Src
                                    let oldSrc = feature.getStyle().getImage().getSrc();
                                    let regex = /fill=([^&]+)/;
                                    let match = oldSrc.match(regex);
                                    if (match) { 
                                        let matched = match[1];
                                        let decodedMatched = matched.substring(3);
                                        hightlight_icon_colour = decodedMatched;
                                    }
                                }

                                // Alter icon if specified
                                let custom_icon_highlighted = icon_highlighted;
                                if (hightlight_icon_svg != "") { 
                                    custom_icon_highlighted = custom_icon_highlighted.replace(/svg%2F[^&]*/, 'svg%2F' + hightlight_icon_svg + ".svg");
                                }

                                if (hightlight_icon_colour == ""){ hightlight_icon_colour = "FF0000"; }

                                const newIcon = custom_icon_highlighted+hightlight_icon_colour+"&stroke=%23ffffff&stroke-width=0.5&width="+icon_width+"px&height="+icon_height+"px";
                                
                                feature.setStyle(
                                    new ol.style.Style({
                                        image: new ol.style.Icon({
                                            imgSize: [icon_width, icon_height],
                                            src: newIcon,
                                        }),
                                    })
                                );
                            }


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

    // Put eventListener onto the filter action highlight button.
    var filter_action_highlight_button = document.getElementById("filter-action-highlight");
    filter_action_highlight_button.addEventListener('click', filterHighlightProperties, false);

}