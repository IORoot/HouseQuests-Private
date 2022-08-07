
// ┌─────────────────────────────────────┐
// │                                     │
// │    Get the FULL feature details     │
// │                                     │
// └─────────────────────────────────────┘
export async function load_property_details(marker)
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

    
    if (marker.source == 'onthemarket')
    {
        
        // Send the marker details to the backend.
        const onthemarketPropertyDetails = await fetch(hostname+'/onthemarketProperty', {method: 'POST', body: JSON.stringify(marker)})
            .then(response => response.text())
            .catch(function(error) {
                console.log("ERROR:"+error);
            });

        return onthemarketPropertyDetails;
    }
}