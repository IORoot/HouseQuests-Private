// ┌─────────────────────────────────────┐
// │                                     │
// │  Show Crimes button Event Listener  │
// │                                     │
// └─────────────────────────────────────┘

import { output_neighbourhood_row } from '../drawer/output_neighbourhood_row.js'
import { request_renters } from '../requests/request_renters.js'

export function listener_ratings_renters()
{

    const propertyRentersButton = document.getElementById('load-neighbourhood-renters');

    propertyRentersButton.addEventListener('click', async function(event) {

        // Get current Postcode
        const propertyPostcode = currentProperty.postcode;

        if (!propertyPostcode){ return }

        let renters = await request_renters(propertyPostcode)

        let zooplaRentersCount = renters.zooplaRentersCount
        
        // ┌─────────────────────────────────────┐
        // │     Update Neighbourhood Rating     │
        // └─────────────────────────────────────┘
        var rating = 'N/A'

        switch (true) {
            case (zooplaRentersCount < 10):
                rating = '<span class="text-emerald-400">Great</span>';
                break;
            case (zooplaRentersCount < 30):
                rating = '<span class="text-yellow-400">Good</span>';
                break;
            case (zooplaRentersCount < 50):
                rating = '<span class="text-orange-400">OK</span>';
                break;
            case (zooplaRentersCount < 100):
                rating = '<span class="text-red-400">High</span>';
                break;
            case (zooplaRentersCount > 100):
                    rating = '<span class="text-red-700">Extreme</span>';
                    break;
            default:
                rating = "N/A";
                break;
        }
        output_neighbourhood_row({
            'attribute':    zooplaRentersCount,
            'icon':         '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.5,2C8.46,2 10.13,3.25 10.74,5H22V8H18V11H15V8H10.74C10.13,9.75 8.46,11 6.5,11C4,11 2,9 2,6.5C2,4 4,2 6.5,2M6.5,5A1.5,1.5 0 0,0 5,6.5A1.5,1.5 0 0,0 6.5,8A1.5,1.5 0 0,0 8,6.5A1.5,1.5 0 0,0 6.5,5M6.5,13C8.46,13 10.13,14.25 10.74,16H22V19H20V22H18V19H16V22H13V19H10.74C10.13,20.75 8.46,22 6.5,22C4,22 2,20 2,17.5C2,15 4,13 6.5,13M6.5,16A1.5,1.5 0 0,0 5,17.5A1.5,1.5 0 0,0 6.5,19A1.5,1.5 0 0,0 8,17.5A1.5,1.5 0 0,0 6.5,16Z"/></svg>',
            'target':       'neighbourhood-results-table',
            'title':        'Number of (Zoopla) places to rent in area ' + currentProperty.postcode +'.',
            'guide':        '(Lower is better)',
            'rating':       rating
        })
    });

}
