/**
 * Vector Bus Route map Layer
 */

export async function load_layer_bus_routes()
{
    
    show_spinner()

    const json_bus_routes = await fetch('./maps/buses/london_buses.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/buses/london_buses.json file."+error));


    // create new GeoJSON object.
    let bus_format_Lines = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let bus_features_Lines = bus_format_Lines.readFeatures(json_bus_routes, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });

    // create new vector
    let jsonSource_busLines = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    jsonSource_busLines.addFeatures(bus_features_Lines);

    // Create new vector layer with GeoJSON object in it.
    let bus_routes = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_busLines,
        style: [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: "rgba(220, 38, 38, 1.0)",
                width: 2,
            })
        })],
        name: "bus-routes",
        title: 'bus-routes',
        visible: true
    });
    
    // Add to map.
    map.addLayer(bus_routes);

    hide_spinner()
}
