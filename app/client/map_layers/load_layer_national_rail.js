/**
 * Vector Tube map Layers
 */
import { getColour_Lines } from '../train_lines/line_colours.js'

// ol.layer.Vector will automatically pass in 'feature' to the function.
function rail_style_Lines(feature) {
    
    let name = feature.get("operator")
    // var lineName = name.split(' - ')
    let theColour = getColour_Lines(name);

    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "rgba(0, 165, 79, 1.0)",
            width: 3,
            lineDash: [10, 10],
            lineCap: 'square',
        }),
    })];
}


export async function load_layer_national_rail()
{

    show_spinner()

    const json_national_rail = await fetch('./maps/national_rail/national_rail.geojson', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/national_rail/national_rail.geojson file."+error));

    // create new GeoJSON object.
    let format_Lines = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let features_Lines = format_Lines.readFeatures(json_national_rail, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });
    // create new vector
    let json_vector_national_rail = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    json_vector_national_rail.addFeatures(features_Lines);
    
    // Create new vector layer with GeoJSON object in it.
    let national_rail = new ol.layer.Vector({
        declutter: false,
        source: json_vector_national_rail,
        style: rail_style_Lines,
        name: "national-rail",
        title: 'national-rail',
        visible: true
    });

    // Add to map.
    map.addLayer(national_rail);

    hide_spinner()
}