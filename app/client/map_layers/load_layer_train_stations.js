export async function load_layer_train_stations()
{

    show_spinner()

    const json_train_stations = await fetch('./maps/london_rail/train_stations.json', {method: 'GET'})
    .then(response => response.json())
    .catch(error => console.log("ERROR loading /maps/london_rail/train_stations.json file."+error));

    let stationList = [];

    json_train_stations.features.forEach(

        station => {

            // create a new feature
            const stationFeature = new ol.Feature({
                geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([ station.geometry.coordinates[0],  station.geometry.coordinates[1] ])
                ),
                Station: station.properties.Name,
                description: station.properties.description,
                type: 'london_train_station'
            })


            // Set the style
            stationFeature.setStyle(
                new ol.style.Style({
                    image: new ol.style.Circle({ 
                        fill: new ol.style.Fill({
                            color: "#581C87"
                        }),                      
                        stroke: new ol.style.Stroke({
                            color: "#000",
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
        name: "train-stations",
        title: "train-stations",
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