// ┌─────────────────────────────────────┐
// │                                     │
// │   Blacklist Remove Event Listener   │
// │                                     │
// └─────────────────────────────────────┘
import { truncate_blacklist } from '../blacklist/truncate_blacklist.js'

export function listener_blacklist_truncate()
{

    const truncateAll = document.getElementById('truncate-all-blacklist');
    truncateAll.addEventListener('click', async function(event) { 
        truncate_blacklist('all')
        location.reload();
    })

    const truncateAllZoopla = document.getElementById('truncate-zoopla-blacklist');
    truncateAllZoopla.addEventListener('click', async function(event) { 
        truncate_blacklist('zoopla')
        location.reload();
    })

    const truncateAllRightmove = document.getElementById('truncate-rightmove-blacklist');
    truncateAllRightmove.addEventListener('click', async function(event) { 
        truncate_blacklist('rightmove')
        location.reload();
    })
    const truncateAllOnthemarket = document.getElementById('truncate-onthemarket-blacklist');
    truncateAllOnthemarket.addEventListener('click', async function(event) { 
        truncate_blacklist('onthemarket')
        // location.reload();
    })



}