
// ┌─────────────────────────────────────┐
// │                                     │
// │       Insert Markers onto Map       │
// │                                     │
// └─────────────────────────────────────┘

import { shop_colour_filter } from '../shops/shop_colour_filter.js'
import { set_icon_style } from '../icons/set_icon_style.js'

export function load_openpass_results(title, markerdata, iconStyle){

    show_spinner()

    let featuresList = [];
    
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
            let defaultColour = iconStyle[2]
            let defaultStroke = iconStyle[3]

            let markerColours = shop_colour_filter(name,defaultColour,defaultStroke)

            if (brand !== ""){
                markerColours = shop_colour_filter(brand,defaultColour,defaultStroke)
            }
            // Set Icon Style to new colours
            iconStyle[2] = markerColours[0]
            iconStyle[3] = markerColours[1]

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
                colour: markerColours[0],
                stroke: markerColours[1],
                longitude: element.lon,
                latitude: element.lat,
            })

            feature.setStyle(set_icon_style(iconStyle));

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

    hide_spinner()
}