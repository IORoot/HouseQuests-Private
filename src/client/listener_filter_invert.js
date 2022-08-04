// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘
const toggleFilterInvert = document.getElementById('filter-invert-toggle');

toggleFilterInvert.addEventListener('click', async function(event) { 

    if (this.dataset.toggle)
    {
        document.querySelector('canvas').style.filter="invert(0%)";
        this.dataset.toggle = ""
    } else {
        document.querySelector('canvas').style.filter="invert(90%)";
        this.dataset.toggle = "on"
    }

});
