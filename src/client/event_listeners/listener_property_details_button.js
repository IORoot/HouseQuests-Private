// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘

import { update_details_contents } from '../drawer/update_details_contents.js'

export function listener_property_details_button(){

    const propertyDetailsButton = document.getElementById('drawer-more-details');

    propertyDetailsButton.addEventListener('click', async function(event) { 
        // Update the details LEFT drawer
        update_details_contents()
    });

}