// ┌─────────────────────────────────────┐
// │                                     │
// │    Toggle Layers Event Listeners    │
// │                                     │
// └─────────────────────────────────────┘
import { toggle_layer } from "../map_layers/toggle_layer.js";
import { load_layer_tube_lines } from "../map_layers/load_layer_tube_lines.js";
import { load_layer_tube_stations } from "../map_layers/load_layer_tube_stations.js";
import { load_layer_train_lines } from "../map_layers/load_layer_train_lines.js";
import { load_layer_train_stations } from "../map_layers/load_layer_train_stations.js";
import { load_layer_crime_boroughs } from "../map_layers/load_layer_crime_boroughs.js";
import { load_layer_bus_routes } from "../map_layers/load_layer_bus_routes.js";
import { load_layer_schools_academies } from "../map_layers/load_layer_schools_academies.js";
import { load_layer_schools_childcenters } from "../map_layers/load_layer_schools_childcenters.js";
import { load_layer_schools_statefunded } from "../map_layers/load_layer_schools_statefunded.js";
import { load_layer_universities } from "../map_layers/load_layer_universities.js";
import { load_layer_supermarkets } from "../map_layers/load_layer_supermarkets.js";


export function listener_toggle_layers(){

    const toggleZooplaMarkers = document.getElementById('zooplaInputToggle');
    toggleZooplaMarkers.addEventListener('click', async function(event) {
        toggle_layer('zoopla')
    });

    const toggleRightmoveMarkers = document.getElementById('rightmoveInputToggle');
    toggleRightmoveMarkers.addEventListener('click', async function(event) {
        toggle_layer('rightmove')
    });

    const toggleOnthemarketMarkers = document.getElementById('onthemarketInputToggle');
    toggleOnthemarketMarkers.addEventListener('click', async function(event) {
        toggle_layer('onthemarket')
    });
    
    const toggleTubeLines = document.getElementById('toggle-tube-lines');
    toggleTubeLines.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_tube_lines()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('tube-lines')
    });

    const toggleTubeStations = document.getElementById('toggle-tube-stations');
    toggleTubeStations.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_tube_stations()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('tube-stations')
    });

    const toggleTrainLines = document.getElementById('toggle-train-lines');
    toggleTrainLines.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_train_lines()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('train-lines')
    });

    const toggleTrainStations = document.getElementById('toggle-train-stations');
    toggleTrainStations.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_train_stations()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('train-stations')
    });

    const toggleCrimeBoroughs = document.getElementById('toggle-crime-boroughs');
    toggleCrimeBoroughs.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_crime_boroughs()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('crime-boroughs')
    });

    const toggleCrimeSpots = document.getElementById('toggle-crime-spots');
    toggleCrimeSpots.addEventListener('click', async function(event) {
        toggle_layer('crime-spots')
    });

    const toggleSupermarkets = document.getElementById('toggle-supermarkets');
    toggleSupermarkets.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_supermarkets()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('supermarkets')
    });

    const toggleBusRoutes = document.getElementById('toggle-bus-routes');
    toggleBusRoutes.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_bus_routes()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('bus-routes')
    });


    const toggleUniversities = document.getElementById('toggle-universities');
    toggleUniversities.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_universities()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('universities')
    });


    const toggleSchoolAcademies = document.getElementById('toggle-schools-academies');
    toggleSchoolAcademies.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_schools_academies()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('schools-academies')
    });


    const toggleSchoolStateFunded = document.getElementById('toggle-schools-statefunded');
    toggleSchoolStateFunded.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_schools_statefunded()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('schools-statefunded')
    });


    const toggleChildCenters = document.getElementById('toggle-schools-childcenters');
    toggleChildCenters.addEventListener('click', async function(event) {
        if (!this.dataset.loaded){
            load_layer_schools_childcenters()
            this.dataset.loaded = "loaded"
        }
        toggle_layer('schools-child-centers')
    });

}