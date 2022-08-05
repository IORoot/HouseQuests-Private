// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘
const toggleFilterMonochrome = document.getElementById('filter-monochrome-toggle');

toggleFilterMonochrome.addEventListener('click', async function(event) { 

    if (this.dataset.toggle)
    {
        document.querySelector('canvas').style.filter="grayscale(0%)";
        this.dataset.toggle = ""
    } else {
        document.querySelector('canvas').style.filter="grayscale(90%)";
        this.dataset.toggle = "on"
    }

});
