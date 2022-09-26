/**
 * Vector Schools / Academies map Layer
 */

export async function load_layer_schools_academies()
{
    show_spinner()

    const json_schools_academies = await fetch('./maps/schools/academies_and_free.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/schools/academies_and_free.json file."+error));

    // create new GeoJSON object.
    let school_format = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let school_features = school_format.readFeatures(json_schools_academies, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });

    // create new vector
    let jsonSource_schoolAcademies = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    jsonSource_schoolAcademies.addFeatures(school_features);

    // Create new vector layer with GeoJSON object in it.
    let schools_academies = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_schoolAcademies,
        style: [new ol.style.Style({
            image: new ol.style.Circle({ 
                fill: new ol.style.Fill({
                    color: "rgba(254, 240, 138, 1.0)"
                }),                      
                stroke: new ol.style.Stroke({
                    color: "rgba(161, 98, 7, 1.0)",
                    width: 2
                }),
                radius: 4,
            }),
        })],
        name: "schools-academies",
        title: 'schools-academies',
        visible: true
    });

    // Add to map.
    map.addLayer(schools_academies);

    hide_spinner()
}