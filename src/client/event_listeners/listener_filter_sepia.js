// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘

export function filter_sepia(){

    const toggleFilterSepia = document.getElementById('filter-sepia-toggle');

    toggleFilterSepia.addEventListener('click', async function(event) { 

        if (this.dataset.toggle)
        {
            document.querySelector('canvas').style.filter="sepia(0%)";
            this.dataset.toggle = ""
        } else {
            document.querySelector('canvas').style.filter="sepia(50%)";
            this.dataset.toggle = "on"
        }

    });

}