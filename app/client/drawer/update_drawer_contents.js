// ┌─────────────────────────────────────┐
// │                                     │
// │     Update the Drawer Contents      │
// │                                     │
// └─────────────────────────────────────┘
import { inspector_check } from '../text_inspector/inspector_check.js'

export function update_drawer_contents(propertyDetails, source)
{
    
    const property = JSON.parse(propertyDetails);
    
    // Update global variable.
    currentProperty = property;

    // Set Source
    document.getElementById("drawer-source").innerHTML = source;
    document.getElementById("drawer-source").dataset.source = source;

    // Set ID
    document.getElementById("drawer-id").innerHTML = property.id;
    document.getElementById("drawer-id").dataset.id = property.id;

    // Set Longitude
    document.getElementById("drawer-longitude").innerHTML = "Longitude: "+property.longitude;
    document.getElementById("drawer-longitude").dataset.longitude = property.longitude;

    // Set Latitude
    document.getElementById("drawer-latitude").innerHTML = "Latitude: "+property.latitude;
    document.getElementById("drawer-latitude").dataset.latitude = property.latitude;

    // Set Title
    document.getElementById("drawer-title").innerHTML = property.title;

    // Set Price
    document.getElementById("drawer-price").innerHTML = property.price;

    // Set Bedrooms
    document.getElementById("drawer-bedrooms").innerHTML = property.bedrooms + " Bedrooms";

    // Set Tenure
    document.getElementById("drawer-tenure").innerHTML = property.tenure;
    
    // Set Station
    document.getElementById("drawer-station").innerHTML = property.station;

    // Set Images
    const images = property.images;
    var grid = "";
    images.forEach(image => {
        grid += '<a class="w-full h-30 bg-gray-200" href="'+ image.url +'" target="_blank"><img src="'+ image.thumbnail +'" /></a>'
    });
    document.getElementById("drawer-image-grid").innerHTML = grid;

    // Set Floor Plan (if available)
    if (property.floorplan){
        document.getElementById("drawer-floorplan").innerHTML = '<a class="mx-auto h-60" href="'+property.floorplan+'" target="_blank"><img class="h-60" src="'+property.floorplan+'"/></a>';
    } else {
        document.getElementById("drawer-floorplan").innerHTML = '';
    }

    // Clear the inspector contents (before inspector_check)
    document.getElementById("drawer-inspector-words").innerHTML = ''

    // Set Text
    document.getElementById("drawer-contents").innerHTML = inspector_check(property.description);

    // Set URL
    document.getElementById("drawer-link").href = property.link;
    document.getElementById("drawer-link-text").innerHTML = source;


}