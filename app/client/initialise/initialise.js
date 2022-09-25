
// ┌─────────────────────────────────────┐
// │                                     │
// │           Global Variables          │
// │                                     │
// └─────────────────────────────────────┘

// Authentication
var authenticated = false
var numberOfExclusionsForFree = 200

// Icons
var icon_rightmove = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle.svg&fill=%230284C7&width=20px&height=20px";
var icon_zoopla = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle-outline.svg&fill=%234C1D95&width=20px&height=20px";
var icon_zooplaAll = icon_zoopla;
var icon_onthemarket = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-map-marker.svg&fill=%23E11D48&width=20px&height=20px";

// Colours
var hex_rightmove   = '0284C7'
var hex_zoopla      = '4C1D95'
var hex_onthemarket = 'E11D48'
var hex_highlighted = 'FF0000'

// Hostname of node app
var hostname = 'http://localhost:3000'
var auth_server = 'http://138.68.156.78'

// New Map Instance
var map;

// blacklist enabled state
var blacklistEnabled = true

// Current viewed property
var currentProperty;

// Total count of markers
var totalMarkerCount = 0;

// ┌─────────────────────────────────────┐
// │                                     │
// │       Initialise the Drawer         │
// │                                     │
// └─────────────────────────────────────┘


    const options = {
        placement: 'right',
        backdrop: false,
        bodyScrolling: false,
        edge: false,
        edgeOffset: '',
        backdropClasses: 'bg-gray-900 bg-opacity-50 fixed inset-0 z-30',
    };

    const targetEl = document.getElementById('drawer');

    const drawer = new Drawer(targetEl, options);


    // ┌─────────────────────────────────────┐
    // │                Popup                │
    // └─────────────────────────────────────┘

    // https://openlayers.org/en/latest/examples/overlay.html
    const popupContainer = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const popupCloser = document.getElementById('popup-closer');

    const overlay = new ol.Overlay({
        element: popupContainer,
        autoPan: {
            animation: {
                duration: 250,
            },
        },
    });

    popupCloser.onclick = function () {
        overlay.setPosition(undefined);
        popupCloser.blur();
        return false;
    };



    // ┌─────────────────────────────────────┐
    // │                                     │
    // │           Initialise Map            │
    // │                                     │
    // └─────────────────────────────────────┘
    var measurementToolSource = new ol.source.Vector();
    var measurementToolVector = new ol.layer.Vector({
        source: measurementToolSource,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)',
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(225, 29, 72, 1.0)',
                width: 2,
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: 'rgba(225, 29, 72, 1.0)',
                }),
            }),
        }),
        name: 'measurementTool',
        title: 'measurementTool',
    });


    var openStreetMap = new ol.layer.Tile({ source: new ol.source.OSM() })
    
    map = new ol.Map({
        target: 'map',

        // Use new OSM OpenSourceMap
        layers: [
            openStreetMap,
            measurementToolVector
        ],

        // Popup overlays
        overlays: [overlay],

        // Default view
        view: new ol.View({
            center: ol.proj.fromLonLat([0.0098,51.4934]),
            zoom: 12
        }),

    });

    // ┌─────────────────────────────────────┐
    // │         Set Version Numbers         │
    // └─────────────────────────────────────┘
    var packageJsonVersion = require('../package.json');
    document.getElementById('version-intro').innerText = packageJsonVersion.productName + ' ' + packageJsonVersion.version
    document.title = packageJsonVersion.productName + ' ' + packageJsonVersion.version