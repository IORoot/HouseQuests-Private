
// name of the layer to toggle on/off
export function toggle_layer(name)
{

    // Get all layers
    let layersCollection = map.getLayers();

    // loop through layers
    layersCollection.forEach(function(layer, index){

        // Instance of Tile source / Vector source
        let source = layer.getSource()
        let props = layer.getProperties()
        
        if (!(source instanceof ol.source.Vector)){
            return;
        }

        if (!(props.name == name)){
            return;
        }

        let visibility = layer.getVisible()
        layer.setVisible(!visibility);

    })
}