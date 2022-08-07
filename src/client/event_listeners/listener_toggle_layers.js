// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘

export function listener_toggle_layers(){

    const toggleTubeLines = document.getElementById('toggle-tube-lines');
    toggleTubeLines.addEventListener('click', async function(event) {
        toggleVectorLayer('tube-lines')
    });

    const toggleTubeStations = document.getElementById('toggle-tube-stations');
    toggleTubeStations.addEventListener('click', async function(event) {
        toggleVectorLayer('tube-stations')
    });

    const toggleTrainLines = document.getElementById('toggle-train-lines');
    toggleTrainLines.addEventListener('click', async function(event) {
        toggleVectorLayer('train-lines')
    });

    const toggleTrainStations = document.getElementById('toggle-train-stations');
    toggleTrainStations.addEventListener('click', async function(event) {
        toggleVectorLayer('train-stations')
    });

    const toggleCrimeBoroughs = document.getElementById('toggle-crime-boroughs');
    toggleCrimeBoroughs.addEventListener('click', async function(event) {
        toggleVectorLayer('crime-boroughs')
    });

    const toggleCrimeSpots = document.getElementById('toggle-crime-spots');
    toggleCrimeSpots.addEventListener('click', async function(event) {
        toggleVectorLayer('crime-spots')
    });

    const toggleUniversities = document.getElementById('toggle-universities');
    toggleUniversities.addEventListener('click', async function(event) {
        toggleVectorLayer('universities')
    });

    const toggleSupermarkets = document.getElementById('toggle-supermarkets');
    toggleSupermarkets.addEventListener('click', async function(event) {
        toggleVectorLayer('supermarkets')
    });

    const toggleBusRoutes = document.getElementById('toggle-bus-routes');
    toggleBusRoutes.addEventListener('click', async function(event) {

        // Only load once. Set data attribute to indicate data has loaded.
        if (!this.dataset.loaded){
            load_layer_bus_routes()
            this.dataset.loaded = "loaded"
        }
        toggleVectorLayer('bus-routes')
    });


    const toggleSchoolAcademies = document.getElementById('toggle-schools-academies');
    toggleSchoolAcademies.addEventListener('click', async function(event) {
        // Only load once. Set data attribute to indicate data has loaded.
        if (!this.dataset.loaded){
            load_layer_schools_academies()
            this.dataset.loaded = "loaded"
        }
        toggleVectorLayer('schools-academies')
    });


    const toggleSchoolStateFunded = document.getElementById('toggle-schools-statefunded');
    toggleSchoolStateFunded.addEventListener('click', async function(event) {
        // Only load once. Set data attribute to indicate data has loaded.
        if (!this.dataset.loaded){
            load_layer_schools_statefunded()
            this.dataset.loaded = "loaded"
        }
        toggleVectorLayer('schools-statefunded')
    });


    const toggleChildCenters = document.getElementById('toggle-schools-childcenters');
    toggleChildCenters.addEventListener('click', async function(event) {
        // Only load once. Set data attribute to indicate data has loaded.
        if (!this.dataset.loaded){
            load_layer_schools_childcenters()
            this.dataset.loaded = "loaded"
        }
        toggleVectorLayer('schools-child-centers')
    });

}