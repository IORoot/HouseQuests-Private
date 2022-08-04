// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Crimes button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

const propertyCrimesButton = document.getElementById('drawer-crimes');

propertyCrimesButton.addEventListener('click', async function(event) {

    // Get current ID.
    const propertyLongitude = document.getElementById('drawer-longitude').dataset.longitude;
    const propertyLatitude = document.getElementById('drawer-latitude').dataset.latitude;

    let policeURL = 'https://data.police.uk/api/crimes-street/all-crime'
    policeURL += '?'
    policeURL += 'lat='+propertyLatitude
    policeURL += '&'
    policeURL += 'lng='+propertyLongitude

    const crimeMarkers = await fetch(policeURL, {method: 'GET'})
        .then(response => response.json())
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    update_OL_crime_markers(crimeMarkers);


});




// ┌─────────────────────────────────────┐
// │                                     │
// │       Insert Markers onto Map       │
// │                                     │
// └─────────────────────────────────────┘
function update_OL_crime_markers(markerdata){

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