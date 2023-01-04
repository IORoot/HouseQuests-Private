
// ol.layer.Vector will automatically pass in 'feature' to the function.
function crime_style(feature) {


    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#ff0000',
            width: 1,
        }),
        fill: new ol.style.Fill({
            color: random_rgba(),
        }),
    })];
}


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',0.2)';
}


export async function load_layer_boroughs()
{

    show_spinner()

    const json_boroughs = await fetch('./maps/boroughs/boroughs.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/boroughs/boroughs.json file."+error));

    // create new GeoJSON object.
    let borough_format = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let borough_lines = borough_format.readFeatures(json_boroughs, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });

    // create new vector
    let jsonSource_Spots = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    jsonSource_Spots.addFeatures(borough_lines);
    
    // Create new vector layer with GeoJSON object in it.
    let boroughs = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_Spots,
        style: crime_style,
        name: "boroughs",
        title: 'boroughs',
        visible: true
    });
    
    // Add to map.
    map.addLayer(boroughs);

    hide_spinner()
}