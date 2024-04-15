// ┌─────────────────────────────────────┐
// │                                     │
// │        Change the current icon      │
// │                                     │
// └─────────────────────────────────────┘

export function change_icon(propertyID,hexColour,strokeColour = ""){
    
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

                    // If no hexcolour provided, use existing one.
                    if (hexColour === "") { 
                        // get the current icon Src
                        let oldSrc = feature.getStyle().getImage().getSrc();
                        let regex = /fill=([^&]+)/;
                        let match = oldSrc.match(regex);
                        if (match) { 
                            let matched = match[1];
                            let decodedMatched = matched.substring(3);
                            hexColour = decodedMatched;
                        }
                    }

                    if (hexColour == ""){ hexColour = "FF0000"; }

                    const newIcon = icon_highlighted+hexColour+"&stroke=%23000000&stroke-width=1&width="+icon_width+"px&height="+icon_height+"px";

                    feature.setStyle(
                        new ol.style.Style({
                            image: new ol.style.Icon({
                                imgSize: [icon_width, icon_height],
                                src: newIcon,
                            }),
                        })
                    );
                    
                }
            })

        }
    })

}

