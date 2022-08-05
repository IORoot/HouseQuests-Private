/**
 * Vector Tube map Layers
 */

// ol.layer.Vector will automatically pass in 'feature' to the function.
function tube_style_Lines(feature) {

    let name = feature.get("Name")
    let lineName = name.split(' - ')

    // function getColour_Lines is in load_layer_train_lines.js
    let theColour = getColour_TubeLines(lineName[0]);

    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: theColour,
            width: 4,
        }),
    })];
}


function getColour_TubeLines(lineName) {
    return  lineName == "C2C" ? "rgba(178, 137, 191, 1.0)" : 
            lineName == "Chiltern Railways" ? "rgba(237, 1, 140, 1.0)" : 
            lineName == "Great Northern" ? "rgba(206, 156, 97, 1.0)" : 
            lineName == "Great Western" ? "rgba(46, 48, 146, 1.0)" : 
            lineName == "Greater Anglia" ? "rgba(138, 143, 164, 1.0)" : 
            lineName == "Heathrow Connect" ? "rgba(102,102,153,1.0)" : 
            lineName == "Heathrow Express" ? "rgba(89, 196, 189, 1.0)" : 
            lineName == "London Midland" ? "rgba(140, 197, 62, 1.0)" : 
            lineName == "South Western" ? "rgba(239, 29, 34, 1.0)" : 
            lineName == "Southeastern" ? "rgba(4, 114, 187, 1.0)" : 
            lineName == "Southern" ? "rgba(0, 165, 79, 1.0)" : 
            lineName == "TfL Rail" ? "rgba(3, 23, 163, 1.0)" : 
            lineName == "Thameslink" ? "rgba(176, 1, 106, 1.0)" : 
            lineName == "Bakerloo" ? "rgba(153, 102, 51,1.0)" : 
            lineName == "Central" ? "rgba(204,51,51,1.0)" : 
            lineName == "Circle" ? "rgba(255,204,0,1.0)" : 
            lineName == "District" ? "rgba(0,102,51,1.0)" : 
            lineName == "Hammersmith and City" ? "rgba(204,153,153,1.0)" : 
            lineName == "Jubilee" ? "rgba(134,143,152,1.0)" : 
            lineName == "Metropolitan" ? "rgba(102,0,102,1.0)" : 
            lineName == "Northern" ? "rgba(0,0,0,1.0)" : 
            lineName == "Piccadilly" ? "rgba(0,0,153,1.0)" : 
            lineName == "Victoria" ? "rgba(0,153,204,1.0)" : 
            lineName == "Waterloo and City" ? "rgba(102,204,204,1.0)" : 
            lineName == "DLR" ? "rgba(0,153,153,1.0)" : 
            lineName == "Overground" ? "rgba(255,102,0,1.0)" : 
            lineName == "Tramlink" ? "rgba(102,204,0,1.0)" :
            lineName == "Elizabeth" ? "rgba(102,102,153,1.0)" : 
            "rgba(255,102,255,1.0)"
}

async function load_layer_tube_lines()
{

    const json_tube_lines = await fetch(hostname+'/maps/tfl/tube_lines.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/tfl/tube_lines.json file."+error));

    // create new GeoJSON object.
    let tube_format_Lines = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let tube_features_Lines = tube_format_Lines.readFeatures(json_tube_lines, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });

    // create new vector
    let jsonSource_TubeLines = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    jsonSource_TubeLines.addFeatures(tube_features_Lines);
    
    // Create new vector layer with GeoJSON object in it.
    let tube_lines = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_TubeLines,
        style: tube_style_Lines,
        name: "tube-lines",
        title: 'tube-lines',
        visible: false
    });
    
    // Add to map.
    map.addLayer(tube_lines);

}
load_layer_tube_lines()