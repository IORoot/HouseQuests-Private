
// ┌─────────────────────────────────────┐
// │                                     │
// │       Insert Markers onto Map       │
// │                                     │
// └─────────────────────────────────────┘

import { set_icon_style } from '../icons/set_icon_style.js'

export function load_crime_layer(markerdata){

    show_spinner()

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
                set_icon_style(icon_local_crimes)
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

    hide_spinner()
}