
export async function request_overpass_api(boundingBox, query){

    let north = boundingBox.north
    let south = boundingBox.south
    let east = boundingBox.east
    let west = boundingBox.west

    let endpoint = 'https://overpass.kumi.systems/api/interpreter?data='

    let bbox = '[bbox:'+south+','+west+','+north+','+east+'][out:json][timeout:15];'

    let encodedQuery = encodeURIComponent(query)

    const overpassMarkers = await fetch(endpoint+bbox+encodedQuery, {method: 'GET'})
        .then(response => response.json())
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    return overpassMarkers
}