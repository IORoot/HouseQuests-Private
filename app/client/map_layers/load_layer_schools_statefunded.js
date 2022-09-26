/**
 * Vector Schools / Academies map Layer
 */

export async function load_layer_schools_statefunded()
{
    show_spinner()

    const json_schools_statefunded = await fetch('./maps/schools/state_funded_schools.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/schools/state_funded_schools.json file."+error));

    // create new GeoJSON object.
    let school_format = new ol.format.GeoJSON;

    // Read file data into GeoJSON object
    let school_features = school_format.readFeatures(json_schools_statefunded, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
    });

    // create new vector
    let jsonSource_schoolstatefunded = new ol.source.Vector({});
    
    // Add GeoJSON object into vector
    jsonSource_schoolstatefunded.addFeatures(school_features);

    // Create new vector layer with GeoJSON object in it.
    let schools_statefunded = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_schoolstatefunded,
        style: [new ol.style.Style({
            image: new ol.style.Circle({ 
                fill: new ol.style.Fill({
                    color: "rgba(217, 119, 6, 1.0)"
                }),                      
                stroke: new ol.style.Stroke({
                    color: "rgba(254, 252, 232, 1.0)",
                    width: 2
                }),
                radius: 4,
            }),
        })],
        name: "schools-statefunded",
        title: 'schools-statefunded',
        visible: true
    });

    // Add to map.
    map.addLayer(schools_statefunded);

    hide_spinner()
}