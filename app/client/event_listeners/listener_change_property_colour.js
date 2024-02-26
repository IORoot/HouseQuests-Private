// ┌─────────────────────────────────────┐
// │                                     │
// │ Property Icon colour Event Listener │
// │                                     │
// └─────────────────────────────────────┘

import { add_to_highlight_list } from '../highlightlist/add_to_highlight_list.js'

export function listener_change_property_colour()
{

    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                     MAIN MARKER COLOUR CHANGING FUNCTION                     │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    var changeIconColour = function() {

        // attribute doesn't exist and isn't set.
        if (!this.hasAttribute("data-marker-colour")) { return }

        // get 'this' buttons colour
        var colour = this.getAttribute("data-marker-colour");

        // If no colour is set, return.
        if (!colour){ return }

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

                        // get the current icon Src
                        let oldSrc = feature.getStyle().getImage().getSrc();

                        let regex = /svg%2F([^&]+)/;
                        let match = oldSrc.match(regex);
                        if (match == null){
                            match = [];
                            match[1] = "pin"; 
                        }
                        let matchedIcon = match[1];
                        matchedIcon = matchedIcon.replace(/\.svg$/, "");


                        // define new Icon with custom colour
                        const newIcon = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2F"+matchedIcon+".svg&fill=%23"+colour+"&width="+icon_width+"px&height="+icon_height+"px";

                        // define new style with new icon
                        const newStyle = new ol.style.Style({
                            image: new ol.style.Icon({
                                imgSize: [icon_width, icon_height],
                                src: newIcon,
                            }),
                        })

                        feature.setStyle(newStyle);

                        add_to_highlight_list(propertyID, colour, matchedIcon)
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
    // │                             TEST IF REAL HEXCODE                             │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    function isHexColor (hex) {
        return typeof hex === 'string'
            && hex.length === 6
            && !isNaN(Number('0x' + hex))
    }

    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                    SET ICON COLOUR AND RUN MAIN FUNCTION                     │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    var changeIconHexcode = function() {
        this.setAttribute("data-marker-colour", modal_colour_hexcode.value);
        if (!isHexColor(modal_colour_hexcode.value)){ return }
        changeIconColour.call(this) // use the 'call' function to set the 'this' object.
    }


    // ╭──────────────────────────────────────────────────────────────────────────────╮
    // │                                                                              │
    // │                             ADD EVENT LISTENERS                              │
    // │                                                                              │
    // ╰──────────────────────────────────────────────────────────────────────────────╯
    var modal_colour_buttons = document.getElementsByClassName("modal-icon-colour-button");
    // Loop through all buttons and give them an event listener.
    for (var i = 0; i < modal_colour_buttons.length; i++) {
        modal_colour_buttons[i].addEventListener('click', changeIconColour, false);
    }

    // Put eventListener onto the HEXCODE Set button.
    var modal_colour_hexcode = document.getElementById("modal-icon-colour-hexcode");
    var modal_colour_set_button = document.getElementById("modal-icon-colour-set");
    modal_colour_set_button.addEventListener('click', changeIconHexcode, false);


}