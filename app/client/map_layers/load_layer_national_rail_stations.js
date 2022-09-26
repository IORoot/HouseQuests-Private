/**
 * Vector Tube map Layers
 */
import { getColour_Lines } from '../train_lines/line_colours.js'

// ol.layer.Vector will automatically pass in 'feature' to the function.
function rail_stations_style_Lines(feature) {
    
    return [new ol.style.Style({
        image: new ol.style.Circle({ 
            fill: new ol.style.Fill({
                color: "#de005c"
            }),                      
            stroke: new ol.style.Stroke({
                color: "#000",
                width: 1
            }),
            radius: 4,
        }),
    })];
}


export async function load_layer_national_rail_stations()
{

    show_spinner()

    const json_national_rail = await fetch('./maps/national_rail/national_rail_stations.geojson', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/national_rail/national_rail_stations.geojson file."+error));

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
        style: rail_stations_style_Lines,
        name: "national-rail-stations",
        title: 'national-rail-stations',
        visible: true
    });

    // Add to map.
    map.addLayer(national_rail);

    hide_spinner()
}