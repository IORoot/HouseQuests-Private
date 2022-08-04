// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘
const toggleFilterDark = document.getElementById('filter-dark-toggle');

toggleFilterDark.addEventListener('click', async function(event) { 

    if (this.dataset.toggle)
    {
        document.querySelector('canvas').style.filter="invert(0%) grayscale(0%)";
        this.dataset.toggle = ""
    } else {
        document.querySelector('canvas').style.filter="invert(90%) grayscale(90%)";
        this.dataset.toggle = "on"
    }

});
