// ┌─────────────────────────────────────┐
// │                                     │
// │        PASTE Event Listeners        │
// │                                     │
// └─────────────────────────────────────┘
import { request_markers } from '../requests/request_markers.js'

var url = require('url');

export function listener_search(){


    const zooplaButton = document.getElementById('zoopla-search');
    zooplaButton.addEventListener('click', function(event) {
        show_spinner()
        let zooplaInput = document.getElementById('zooplaInput').value;
        request_markers(zooplaInput, 'zoopla')
        request_markers(zooplaInput, 'zoopla', 'zooplaAllMap')
        hide_spinner()
    });

    const rightmoveButton = document.getElementById('rightmove-search');
    rightmoveButton.addEventListener('click', async function(event) {
        show_spinner()
        let rightmoveInput = document.getElementById('rightmoveInput').value;
        request_markers(rightmoveInput, 'rightmove')
        hide_spinner()
    });

    const onthemarketButton = document.getElementById('onthemarket-search');
    onthemarketButton.addEventListener('click', async function(event) {
        show_spinner()
        let onthemarketInput = document.getElementById('onthemarketInput').value;
        request_markers(onthemarketInput, 'onthemarket')
        hide_spinner()
    });

}
