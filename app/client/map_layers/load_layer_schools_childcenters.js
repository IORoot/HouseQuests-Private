/**
 * Vector Schools / Academies map Layer
 */

export async function load_layer_schools_childcenters()
{
    show_spinner()

    const json_child_centers = await fetch('./maps/schools/children_centers.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/schools/children_centers.json file."+error));

    // create new GeoJSON object.
    let school_format = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let school_features = school_format.readFeatures(json_child_centers, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });

    // create new vector
    let jsonSource_childCenters = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    jsonSource_childCenters.addFeatures(school_features);

    // Create new vector layer with GeoJSON object in it.
    let child_centers = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_childCenters,
        style: [new ol.style.Style({
            image: new ol.style.Circle({ 
                fill: new ol.style.Fill({
                    color: "rgba(161, 98, 7, 1.0)"
                }),                      
                stroke: new ol.style.Stroke({
                    color: "rgba(245, 158, 11, 1.0)",
                    width: 2
                }),
                radius: 4,
            }),
        })],
        name: "schools-child-centers",
        title: 'schools-child-centers',
        visible: true
    });

    // Add to map.
    map.addLayer(child_centers);

    hide_spinner()
}