export async function load_layer_tube_stations()
{

    show_spinner()

    const json_tube_stations = await fetch('./maps/tfl/tube_stations.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/tfl/tube_stations.json file."+error));

    let stationList = [];

    json_tube_stations.features.forEach(

        station => {

            // create a new feature
            const stationFeature = new ol.Feature({
                geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([ station.geometry.coordinates[0],  station.geometry.coordinates[1] ])
                ),
                station: station.properties.Name,
                description: station.properties.description,
                type: 'london_tube_station'
            })


            // Set the style
            stationFeature.setStyle(
                new ol.style.Style({
                    image: new ol.style.Circle({ 
                        fill: new ol.style.Fill({
                            color: "rgba(234, 88, 12, 1.0)"
                        }),                      
                        stroke: new ol.style.Stroke({
                            color: "#fff",
                            width: 2
                        }),
                        radius: 4,
                    }),
                })
            );

            // push to array
            stationList.push(stationFeature);

        }
    );


    // Add New VECTOR layer.
    var layer = new ol.layer.Vector({
        // Source of Vector layer.
        name: "tube-stations",
        title: "tube-stations",
        source: new ol.source.Vector({
            // Source Features to array of stations
            features: stationList
        }),
        visible: true

    }); 


    // Add layer to map
    map.addLayer(layer); 

    hide_spinner()
}