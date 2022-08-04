
// ┌─────────────────────────────────────┐
// │                                     │
// │    Get the FULL feature details     │
// │                                     │
// └─────────────────────────────────────┘
async function load_feature_details(marker)
{

    if (marker.source == 'zoopla')
    {
        // Send the marker details to the backend.
        const zooplaPropertyDetails = await fetch(hostname+'/zooplaProperty', {method: 'POST', body: JSON.stringify(marker)})
            .then(response => response.text())
            .catch(function(error) {
                console.log("ERROR:"+error);
            });

        return zooplaPropertyDetails;
    }

    if (marker.source == 'rightmove')
    {
        
        // Send the marker details to the backend.
        const rightmovePropertyDetails = await fetch(hostname+'/rightmoveProperty', {method: 'POST', body: JSON.stringify(marker)})
            .then(response => response.text())
            .catch(function(error) {
                console.log("ERROR:"+error);
            });

        return rightmovePropertyDetails;
    }

    
}