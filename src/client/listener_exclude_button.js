
// ┌─────────────────────────────────────┐
// │                                     │
// │   EXCLUDE button Event Listener     │
// │                                     │
// └─────────────────────────────────────┘
const excludeButton = document.getElementById('drawer-exclude');

excludeButton.addEventListener('click', function(event) {

    // Get current ID & source
    const excludeID = document.getElementById('drawer-id').dataset.id;
    const excludeIDinteger = parseInt(excludeID);
    const excludeSource = document.getElementById('drawer-source').dataset.source;
    
    const excludeArray = [excludeIDinteger, excludeSource]

    var blacklist = [];

    // Get the blacklist from localStorage
    blacklist = JSON.parse(window.localStorage.getItem('blacklistedIDs'));

    if (blacklist){
        // push new ID onto array.
        addToBlacklist(blacklist,excludeArray)
        list_blacklist()
        removeFeatureFromMap(excludeIDinteger);
        drawer.hide();
    } else {
        blacklist = [excludeArray];
    }
    

    // Re-save array back to localStorage
    window.localStorage.setItem('blacklistedIDs', JSON.stringify(blacklist));

});



function addToBlacklist(blacklist,excludeArray)
{
    if (blacklist.find(element => element === excludeArray))
    {
        console.log("found ID:"+excludeArray+" already in the blacklist, No need to add again.")
        console.log(element)
    } else {
        blacklist.push(excludeArray);
    }

}


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