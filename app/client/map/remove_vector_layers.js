// name of the layer to toggle on/off
export function remove_vector_layers(name)
{


    // Get all layers
    let layersCollection = [...map.getLayers().getArray()]

    // loop through layers
    layersCollection.forEach(function(layer, index){

        if (!layer){ return }
        
        // Instance of Tile source / Vector source
        let source = layer.getSource()
        let props = layer.getProperties()
        
        if (!(source instanceof ol.source.Vector)){
            return;
        }

        if (!(props.name == name)){
            return;
        }

        map.removeLayer(layer);

    })
}