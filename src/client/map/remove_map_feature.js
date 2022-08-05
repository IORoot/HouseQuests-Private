// ID of the property to exclude and remove off map.
function removeFeatureFromMap(excludeID)
{

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

                let featureID = feature.get('ID');

                if (featureID == excludeID){
                    // Delete feature
                    source.removeFeature(feature)
                    
                }
            })

        }
    })
}