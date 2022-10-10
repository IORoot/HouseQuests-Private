/**
 * Vector supermarket Route map Layer
 */

 import { set_icon_style } from '../icons/set_icon_style.js'

export async function load_layer_supermarkets()
{
    show_spinner()

    const json_supermarkets = await fetch('./maps/supermarkets/supermarkets.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/supermarkets/supermarkets.json file."+error));

    // create new GeoJSON object.
    let supermarket_format_Lines = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let supermarket_features_Lines = supermarket_format_Lines.readFeatures(json_supermarkets, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });

    // create new vector
    let jsonSource_supermarketLines = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    jsonSource_supermarketLines.addFeatures(supermarket_features_Lines);
    
    // Create new vector layer with GeoJSON object in it.
    let supermarkets = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_supermarketLines,
        style: [set_icon_style(icon_country_supermarket)],
        name: "supermarkets",
        title: 'supermarkets',
        visible: true
    });
    
    // Add to map.
    map.addLayer(supermarkets);

    hide_spinner()
}