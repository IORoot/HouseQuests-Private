// ┌─────────────────────────────────────┐
// │                                     │
// │           Initialise Map            │
// │                                     │
// └─────────────────────────────────────┘

var sourceOSM = new ol.source.OSM();

map = new ol.Map({
    target: 'map',

    // Use new OSM OpenSourceMap
    layers: [
        new ol.layer.Tile({
            source: sourceOSM
        })
    ],

    // Popup overlays
    overlays: [overlay],

    // Default view
    view: new ol.View({
        center: ol.proj.fromLonLat([0.0098,51.4934]),
        zoom: 12
    }),

});
