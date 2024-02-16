// ┌─────────────────────────────────────┐
// │                                     │
// │ Property Icon colour Event Listener │
// │                                     │
// └─────────────────────────────────────┘

import { add_to_highlight_list } from '../highlightlist/add_to_highlight_list.js'

export function listener_change_property_icon()
{

    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                     MAIN MARKER ICON CHANGING FUNCTION                       │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    var changeIconSVG = function() {

        // attribute doesn't exist and isn't set.
        if (!this.hasAttribute("data-marker-svg")) { return }

        // get 'this' buttons svg
        var svg = this.getAttribute("data-marker-svg");

        // If no svg is set, return.
        if (!svg){ return }

        // define new Icon with custom colour
        const newIcon = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2F"+svg+".svg&fill=%23FF0000&width="+icon_width+"px&height="+icon_height+"px";

        // define new style with new icon
        const newStyle = new ol.style.Style({
            image: new ol.style.Icon({
                imgSize: [icon_width, icon_height],
                src: newIcon,
            }),
        })


        // get the current property ID.
        const propertyID = document.getElementById('drawer-id').dataset.id;

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
                features.forEach( function(feature){

                    // get ID of feature
                    let featureID = feature.get('ID');

                    // match against current property
                    if (featureID == propertyID){
                        feature.setStyle(newStyle);
                        add_to_highlight_list(propertyID, null,svg)
                    }
                })

            }
        })

        // close modal
        let target = document.getElementById('popup-modal-colour-close-button');

        var event = new CustomEvent("click");

        // Dispatch/Trigger/Fire the event
        target.dispatchEvent(event);
    };

    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                    SET ICON COLOUR AND RUN MAIN FUNCTION                     │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    var changeIconSvg = function() {
        this.setAttribute("data-marker-svg", modal_icon_svg.value);
        changeIconSVG.call(this) // use the 'call' function to set the 'this' object.
    }


    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                             ADD EVENT LISTENERS                              │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    // Put eventListener onto the ICON Set button.
    var modal_icon_svg = document.getElementById("modal-icon-custom");
    var modal_icon_set_button = document.getElementById("modal-icon-custom-set");
    modal_icon_set_button.addEventListener('click', changeIconSvg, false);


}