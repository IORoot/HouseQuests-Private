// ┌─────────────────────────────────────┐
// │                                     │
// │        PASTE Event Listeners        │
// │                                     │
// └─────────────────────────────────────┘

// Icons
const iconRightmove = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle.svg&fill=%232563EB&width=20px&height=20px";
const iconZoopla = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle-outline.svg&fill=%23DC2626&width=20px&height=20px";

const zooplaInput = document.getElementById('zooplaInput');
zooplaInput.addEventListener('paste', async function(event) {

    var zooplaURL = event.clipboardData.getData('text/plain');

    const zooplaMarkers = await fetch(hostname+'/zooplaMap', {method: 'POST', body: zooplaURL})
        .then(response => response.text())
        .catch(function(error) {
            console.log("ERROR:"+error);
        });
    
    update_OL_markers(JSON.parse(zooplaMarkers), iconZoopla, 'zoopla');
});

const rightmoveInput = document.getElementById('rightmoveInput');
rightmoveInput.addEventListener('paste', async function(event) {

    var rightmoveURL = event.clipboardData.getData('text/plain');

    const rightmoveMarkers = await fetch(hostname+'/rightmoveMap', {method: 'POST', body: rightmoveURL})
        .then(response => response.text())
        .catch(function(error) {
            console.log("ERROR:"+error);
        });

    update_OL_markers(JSON.parse(rightmoveMarkers), iconRightmove, 'rightmove');
});
