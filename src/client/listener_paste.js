// ┌─────────────────────────────────────┐
// │                                     │
// │        PASTE Event Listeners        │
// │                                     │
// └─────────────────────────────────────┘

// Icons
var icon_rightmove = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle.svg&fill=%230284C7&width=20px&height=20px";
var icon_zoopla = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle-outline.svg&fill=%234C1D95&width=20px&height=20px";
var icon_onthemarket = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-map-marker.svg&fill=%23E11D48&width=20px&height=20px";

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



async function request_markers(currentURL, source) {

    let path = hostname+'/'+source+'Map'
    let icon = window['icon_'+source]

    const currentMarkers = await fetch(path, {method: 'POST', body: currentURL})
        .then(response => response.text())
        .catch(function(error) {
            console.log("ERROR:"+error);
        });
    
    update_OL_markers(JSON.parse(currentMarkers), icon, source);

    set_searches(currentURL, source)
}
