/**
 * Vector Tube map Layers
 */

import { getColour_Lines } from '../train_lines/line_colours.js'

// ol.layer.Vector will automatically pass in 'feature' to the function.
function tube_style_Lines(feature) {

    let name = feature.get("Name")
    let lineName = name.split(' - ')

    // function getColour_Lines is in load_layer_train_lines.js
    let theColour = getColour_Lines(lineName[0]);

    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: theColour,
            width: 4,
        }),
    })];
}

export async function load_layer_tube_lines()
{

    show_spinner()

    const json_tube_lines = await fetch('./maps/tfl/tube_lines.json', {method: 'GET'})
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
        visible: true
    });
    
    // Add to map.
    map.addLayer(tube_lines);

    hide_spinner()
}