// ┌─────────────────────────────────────┐
// │                                     │
// │ Property Icon colour Event Listener │
// │                                     │
// └─────────────────────────────────────┘

export function listener_change_property_colour()
{

    var modal_colour_buttons = document.getElementsByClassName("modal-icon-colour-button");

    var changeIconColour = function() {

        // get 'this' buttons colour
        var colour = this.getAttribute("data-marker-colour");

        // define new Icon with custom colour
        const newIcon = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle.svg&fill=%23"+colour+"&width=20px&height=20px";

        // define new style with new icon
        const newStyle = new ol.style.Style({
            image: new ol.style.Icon({
                imgSize: [20, 20],
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
            source = layer.getSource()

            // Filter for vectors only
            if (source instanceof ol.source.Vector){

                // Get Array of Features on Vector
                features = source.getFeatures();

                // Loop through all features array
                features.forEach( function(feature){

                    // get ID of feature
                    let featureID = feature.get('ID');

                    // match against current property
                    if (featureID == propertyID){
                        feature.setStyle(newStyle);
                        addToHighlightList(propertyID,colour)
                    }
                })

            }
        })
    };


    // Loop through all buttons and give them an event listener.
    for (var i = 0; i < modal_colour_buttons.length; i++) {
        modal_colour_buttons[i].addEventListener('click', changeIconColour, false);
    }

}