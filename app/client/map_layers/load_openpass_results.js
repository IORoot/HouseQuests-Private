
// ┌─────────────────────────────────────┐
// │                                     │
// │       Insert Markers onto Map       │
// │                                     │
// └─────────────────────────────────────┘

import { shop_colour_filter } from '../shops/shop_colour_filter.js'

export function load_openpass_results(title, markerdata, fill, stroke){

    let featuresList = [];
    var defaultColour = fill
    var defaultStroke = stroke
    
    markerdata.elements.forEach( 

        element => {

            if (element.type == 'node'){  
                var longitude   = element.lon
                var latitude    = element.lat
            }

            if (element.type == 'way'){  

                var firstNode = element.nodes[0]

                // loop through markerdata to get the nodeID that matches
                markerdata.elements.forEach(
                    function( subelement, index){
                        if (subelement.id == firstNode)
                        {
                            longitude   = subelement.lon
                            latitude    = subelement.lat
                        }
                    }
                )

            }

            // if it doesn't have a name, (this is a reference node for a polygon on the 'way' type)
            if (!element.tags){ return }
            if (!element.tags['name']){ return }
            
            let type        = title
            let city        = element.tags['addr:city'] ?? ""
            let number      = element.tags['addr:housenumber'] ?? ""
            let postcode    = element.tags['addr:postcode'] ?? ""
            let street      = element.tags['addr:street'] ?? ""
            let name        = element.tags['name'] ?? ""
            let brand       = element.tags['brand'] ?? ""
            let contact     = element.tags['contact:website'] ?? ""
            let website     = element.tags['website'] ?? ""
            let hours       = element.tags['opening_hours'] ?? ""

            // filter colours
            let markerColours = shop_colour_filter(name,defaultColour,defaultStroke)

            if (brand !== ""){
                markerColours = shop_colour_filter(brand,defaultColour,defaultStroke)
            }

            
            // create a new feature
            const feature = new ol.Feature({
                geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([ longitude,  latitude ])
                ),
                ID: element.id,
                city: city,
                number: number,
                postcode: postcode,
                street: street,
                name: name,
                brand: brand,
                contact: contact,
                website: website,
                hours: hours,
                type: type,
                colour: defaultColour,
                stroke: defaultStroke,
                longitude: element.lon,
                latitude: element.lat,
            })
            

            feature.setStyle(
                new ol.style.Style({

                    // square shape
                    
                    // image: new ol.style.RegularShape({
                    //     fill: new ol.style.Fill({
                    //         color: markerColours[0]
                    //     }),
                    //     stroke: new ol.style.Stroke({
                    //         color: markerColours[1],
                    //         width: 2,
                    //     }),
                    //     points: 4,
                    //     radius: 5,
                    //     angle: Math.PI / 4,
                    // }),
                    
                    image: new ol.style.Circle({ 
                        fill: new ol.style.Fill({
                            color: markerColours[0]
                        }),
                        radius: 5,
                        stroke: new ol.style.Stroke({
                            color: markerColours[1],
                            width: 2,
                        }),
                    }),
                    
                })
            );

            featuresList.push(feature);

        }
        
    );

     // Add New VECTOR layer.
    var layer = new ol.layer.Vector({

        // Source of Vector layer.
        name: title,
        title: title,
        source: new ol.source.Vector({

            // Add all features to single layer.
            features: featuresList 
        }),

    }); 

    // Add layer to map
    map.addLayer(layer); 

}