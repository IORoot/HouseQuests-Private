// ┌─────────────────────────────────────┐
// │                                     │
// │       Insert Markers onto Map       │
// │                                     │
// └─────────────────────────────────────┘

import { check_highlight_list } from '../highlightlist/check_highlight_list.js'
import { check_blacklist } from '../blacklist/check_blacklist.js'

export function update_OL_markers(markerdata, icon, source){

    let coords

    // Check if any ID is on the blacklist
    if (blacklistEnabled)
    {
        markerdata = check_blacklist(markerdata);
    }

    let featuresList = [];

    markerdata.forEach(

        property => {

            let currentIcon = null;
            
            // change icon if in highlightlist in localStorage
            let customIcon = check_highlight_list(property.id)
            if (customIcon){
                currentIcon = customIcon 
                customIcon = null
            } else {
                currentIcon = icon
            }

            let long_lat = ol.proj.fromLonLat([ property.longitude,  property.latitude ])
            coords = long_lat
            // create a new feature
            const feature = new ol.Feature({
                geometry: new ol.geom.Point(long_lat),
                ID: property.id,
                url: property.url,
                source: property.source,
                type: 'property'
            })
            
            feature.setStyle(
                new ol.style.Style({
                    image: new ol.style.Icon({
                        imgSize: [icon_width, icon_height],
                        src: currentIcon,
                    }),
                })
            );

            featuresList.push(feature);

        }
        
    );

     // Add New VECTOR layer.
    var layer = new ol.layer.Vector({

        name: source,
        title: 'properties',
        
        // Source of Vector layer.
        source: new ol.source.Vector({

            // Add all features to single layer.
            features: featuresList 
        }),

        // style: markerStyle

    }); 

    // Add layer to map
    map.addLayer(layer); 

    // Add the pixel coords of the canvas to variable
    // this is used for testing and knowing where a marker
    // is on the canvas to click it.
    lastMarkerLoadedXYPixel = map.getPixelFromCoordinate(coords)
}