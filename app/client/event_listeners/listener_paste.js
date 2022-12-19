// ┌─────────────────────────────────────┐
// │                                     │
// │        PASTE Event Listeners        │
// │                                     │
// └─────────────────────────────────────┘
import { request_markers } from '../requests/request_markers.js'

var url = require('url');

export function listener_paste(){


    const zooplaInput = document.getElementById('zooplaInput');
    zooplaInput.addEventListener('paste', function(event) {
        show_spinner()
        let pastedURL = event.clipboardData.getData('text/plain');
        request_markers(pastedURL, 'zoopla')
        request_markers(pastedURL, 'zoopla', 'zooplaAllMap')
        hide_spinner()
    });

    const rightmoveInput = document.getElementById('rightmoveInput');
    rightmoveInput.addEventListener('paste', async function(event) {
        show_spinner()
        let pastedURL = event.clipboardData.getData('text/plain');
        request_markers(pastedURL, 'rightmove')
        hide_spinner()
    });

    const onthemarketInput = document.getElementById('onthemarketInput');
    onthemarketInput.addEventListener('paste', async function(event) {
        show_spinner()
        let pastedURL = event.clipboardData.getData('text/plain');
        request_markers(pastedURL, 'onthemarket')
        hide_spinner()
    });

}
