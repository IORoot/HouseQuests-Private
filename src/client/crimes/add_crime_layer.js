
// ┌─────────────────────────────────────┐
// │                                     │
// │       Insert Markers onto Map       │
// │                                     │
// └─────────────────────────────────────┘

export function update_crime_markers(markerdata){

    let featuresList = [];

    markerdata.forEach( 

        crime => {

            let street      = crime.location.street.name ?? ""
            let category    = crime.category ?? ""
            let month       = crime.month ?? ""
            let outcome     = crime.outcome_status

            // create a new feature
            const feature = new ol.Feature({
                geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([ crime.location.longitude,  crime.location.latitude ])
                ),
                ID: crime.id,
                street: street,
                category: category,
                month: month,
                outcome: outcome,
                longitude: crime.location.longitude,
                latitude: crime.location.latitude,
                type: 'crime'
            })

            feature.setStyle(
                new ol.style.Style({
                    image: new ol.style.Circle({ 
                        fill: new ol.style.Fill({
                            color: "rgba(127, 29, 29, 1.0)"
                        }),
                        radius: 2,
                    }),
                })
            );

            featuresList.push(feature);

        }
        
    );

     // Add New VECTOR layer.
    var layer = new ol.layer.Vector({

        // Source of Vector layer.
        name: "crime-spots",
        title: "crime-spots",
        source: new ol.source.Vector({

            // Add all features to single layer.
            features: featuresList 
        }),

    }); 

    // Add layer to map
    map.addLayer(layer); 

}