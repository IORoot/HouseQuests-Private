import { request_markers } from '../requests/request_markers.js'

export function listener_zoopla_get_all(){

    const zooplaInput = document.getElementById('zooplaInput');
    if (!zooplaInput.value){ return }

    const zooplaGetAll = document.getElementById('zooplaGetAll');

    zooplaGetAll.addEventListener('click', function(event) {
        request_markers(zooplaInput.value, 'zoopla', 'zooplaAllMap')
    });

}