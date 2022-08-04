function load_layer_universities()
{

    let universityList = [];

    json_universities.features.forEach(

        university => {

            // create a new feature
            const universityFeature = new ol.Feature({
                geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([ university.geometry.coordinates[0],  university.geometry.coordinates[1] ])
                ),
                name: university.properties.name,
                image: university.properties.image,
                address: university.properties.address,
                url: university.properties.url,
                phone: university.properties.phone,
                email: university.properties.email,
                sortName: university.properties.sortName,
                type: 'university'
            })


            // Set the style
            universityFeature.setStyle(
                new ol.style.Style({
                    image: new ol.style.Circle({ 
                        fill: new ol.style.Fill({
                            color: "rgba(253, 224, 71, 1.0)"
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
            universityList.push(universityFeature);

        }
    );


    // Add New VECTOR layer.
    var layer = new ol.layer.Vector({
        // Source of Vector layer.
        name: "universities",
        title: "universities",
        source: new ol.source.Vector({
            // Source Features to array of universitys
            features: universityList
        }),
        visible: false

    }); 


    // Add layer to map
    map.addLayer(layer); 

}
load_layer_universities()