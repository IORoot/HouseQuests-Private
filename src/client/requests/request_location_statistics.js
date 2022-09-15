
// ┌─────────────────────────────────────┐
// │                                     │
// │    Get the FULL feature details     │
// │                                     │
// └─────────────────────────────────────┘
export async function request_location_statistics(propertyData)
{

        let data = JSON.parse(propertyData)

        // Send the marker details to the backend.
        const locationStatistics = await fetch(hostname+'/locationStatistics', {method: 'POST', body: JSON.stringify(data.postcode)})
            .then(response => response.json())
            .catch(function(error) {
                console.log("ERROR:"+error);
            });

        return locationStatistics;
    
}