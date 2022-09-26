/**
 * Vector Tube map Layers
 */
import { getColour_Lines } from '../train_lines/line_colours.js'

// ol.layer.Vector will automatically pass in 'feature' to the function.
function train_style_Lines(feature) {
    
    let name = feature.get("Name")
    var lineName = name.split(' - ')
    let theColour = getColour_Lines(lineName[0]);

    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: theColour,
            width: 4,
            lineDash: [10, 10],
            lineCap: 'square',
        }),
    })];
}


export async function load_layer_train_lines()
{
    show_spinner()

    const json_train_lines = await fetch('./maps/london_rail/train_lines.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/london_rail/train_lines.json file."+error));

    // create new GeoJSON object.
    let format_Lines = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let features_Lines = format_Lines.readFeatures(json_train_lines, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });
    // create new vector
    let jsonTrain_Lines = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    jsonTrain_Lines.addFeatures(features_Lines);
    
    // Create new vector layer with GeoJSON object in it.
    let underground_lines = new ol.layer.Vector({
        declutter: false,
        source: jsonTrain_Lines,
        style: train_style_Lines,
        name: "train-lines",
        title: 'train-lines',
        visible: true
    });

    // Add to map.
    map.addLayer(underground_lines);

    hide_spinner()
}