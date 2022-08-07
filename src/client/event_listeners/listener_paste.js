// ┌─────────────────────────────────────┐
// │                                     │
// │        PASTE Event Listeners        │
// │                                     │
// └─────────────────────────────────────┘
import { request_markers } from '../requests/request_markers.js'

export function listener_paste(){

    const zooplaInput = document.getElementById('zooplaInput');
    zooplaInput.addEventListener('paste', function(event) {
        let pastedURL = event.clipboardData.getData('text/plain');
        request_markers(pastedURL, 'zoopla')
    });

    const rightmoveInput = document.getElementById('rightmoveInput');
    rightmoveInput.addEventListener('paste', async function(event) {
        let pastedURL = event.clipboardData.getData('text/plain');
        request_markers(pastedURL, 'rightmove')
    });

    const onthemarketInput = document.getElementById('onthemarketInput');
    onthemarketInput.addEventListener('paste', async function(event) {
        let pastedURL = event.clipboardData.getData('text/plain');
        request_markers(pastedURL, 'onthemarket')
    });

}