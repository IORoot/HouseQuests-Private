

export async function request_postcode(longitude, latitude)
{

    const postcodeURL = 'https://api.postcodes.io/postcodes?lon='+longitude+'&lat='+latitude

    const postcodeResult = await fetch(postcodeURL, {
        method: 'GET',
    })
        .then(function(response){
            return response.json()
        })
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    let postcode = postcodeResult.result[0].postcode

    return postcode;
}