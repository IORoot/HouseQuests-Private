
// ┌─────────────────────────────────────┐
// │                                     │
// │    Get the FULL feature details     │
// │                                     │
// └─────────────────────────────────────┘
export async function request_renters(postcode)
{

        let renters = {}

        // Send the marker details to the backend.
        const zooplaRentersCount = await fetch(hostname+'/zooplaRenters', {method: 'POST', body: JSON.stringify(postcode)})
            .then(response => response.json())
            .catch(function(error) {
                console.log("ERROR:"+error);
            });

        renters['zooplaRentersCount'] = zooplaRentersCount


        
        return renters;
    
}