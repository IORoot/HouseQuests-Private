
// ol.layer.Vector will automatically pass in 'feature' to the function.
function crime_style(feature) {

    let maxCrime = 40842; // Central London "All crimes"

    let crimes = feature.get("All crimes")

    let crimePercentage = (100 / maxCrime) * parseInt(crimes);

    let roundedCrimePercentage = Math.round(crimePercentage);

    let backgroundColour = 'rgba(34, 197, 94, 0.25)'
    if (crimePercentage > 20){ backgroundColour = 'rgba(132, 204, 22, 0.25)' }
    if (crimePercentage > 40){ backgroundColour = 'rgba(250, 204, 21, 0.25)' }
    if (crimePercentage > 60){ backgroundColour = 'rgba(249, 115, 22, 0.25)' }
    if (crimePercentage > 80){ backgroundColour = 'rgba(220, 38, 38, 0.25)' }

    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#ff0000',
            width: 1,
        }),
        fill: new ol.style.Fill({
            color: backgroundColour,
        }),
    })];
}



export async function load_layer_crime_boroughs()
{

    show_spinner()

    const json_crime_spots = await fetch('./maps/crime/crime-boroughs-2018.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/crime/crime-boroughs-2018.json file."+error));

    // create new GeoJSON object.
    let crime_format = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let crime_lines = crime_format.readFeatures(json_crime_spots, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });

    // create new vector
    let jsonSource_CrimeSpots = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    jsonSource_CrimeSpots.addFeatures(crime_lines);
    
    // Create new vector layer with GeoJSON object in it.
    let crime_spots = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_CrimeSpots,
        style: crime_style,
        name: "crime-boroughs",
        title: 'crime-boroughs',
        visible: true
    });
    
    // Add to map.
    map.addLayer(crime_spots);

    hide_spinner()
}