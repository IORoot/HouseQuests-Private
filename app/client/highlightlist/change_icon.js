// ┌─────────────────────────────────────┐
// │                                     │
// │        Change the current icon      │
// │                                     │
// └─────────────────────────────────────┘

export function change_icon(propertyID,hexColour){

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

                let featureID = feature.get('ID');

                if (featureID == propertyID){

                    var currentStyle = feature.getStyle();

                    const newIcon = icon_highlighted+hexColour+"&stroke=%23ffffff&stroke-width=0.5&width=20px&height=20px";

                    feature.setStyle(
                        new ol.style.Style({
                            image: new ol.style.Icon({
                                imgSize: [20, 20],
                                src: newIcon,
                            }),
                        })
                    );
                    
                }
            })

        }
    })

}

