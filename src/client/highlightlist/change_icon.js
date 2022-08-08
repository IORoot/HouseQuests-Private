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

                    console.log('FOUND!')

                    var currentStyle = feature.getStyle();

                    const newIcon = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle.svg&fill=%23"+hexColour+"&width=20px&height=20px";

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

