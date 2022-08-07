// ┌─────────────────────────────────────┐
// │                                     │
// │         Clear All Markers           │
// │                                     │
// └─────────────────────────────────────┘

export function listener_clear_all_markers()
{
        
    const clearAllMarkers = document.getElementById('clear-all-markers');

    clearAllMarkers.addEventListener('click', function(event) {
        removeVectorLayers('properties')
        clear_search_boxes();
    });


    // name of the layer to toggle on/off
    function removeVectorLayers(name)
    {

        // Get all layers
        let layersCollection = map.getLayers();

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


    function clear_search_boxes()
    {
        let sources = [
            'zoopla',
            'rightmove',
            'onthemarket'
        ]

        sources.forEach(function(source){
            let inputTextBox = document.getElementById(source+'Input');
            inputTextBox.value = ''
        })
    }
    
}