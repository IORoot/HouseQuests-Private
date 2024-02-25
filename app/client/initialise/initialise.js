

// ┌─────────────────────────────────────┐
// │                                     │
// │           Global Variables          │
// │                                     │
// └─────────────────────────────────────┘

// Authentication
var authenticated = true
var numberOfExclusionsForFree = 200

// Icon Size
icon_width = 40;
icon_height = 40;

// Icons
var icon_rightmove = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle.svg&fill=%230284C7&opacity=1&width="+icon_width+"px&height="+icon_height+"px";
var icon_zoopla = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-circle-outline.svg&fill=%234C1D95&opacity=1&width="+icon_width+"px&height="+icon_height+"px";
var icon_zooplaAll = icon_zoopla;
var icon_onthemarket = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fhome-map-marker.svg&fill=%23E11D48&opacity=1&width="+icon_width+"px&height="+icon_height+"px";

// this is just the icon, not the colour - see hex_highlighted below for fill colour.
var icon_highlighted = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fmap-marker.svg&fill=%23"

// Local Area Icons
// mdi-Icon name, size (px), HEX fill colour (not rgba) , HEX stroke colour (not rgba), stroke-width
var icon_local_crimes = ['police-badge', icon_width, '991B1B', 'FFFFFF']
var icon_local_supermarket = ['cart', icon_width, '16A34A', '000000', 1]
var icon_local_convenience = ['basket', icon_width, '16A34A', '000000', 1]
var icon_local_cafe = ['coffee', icon_width, '78350f', 'f59e0b', 1]
var icon_local_gym = ['dumbbell', icon_width, '1e1e1e', '780000', 1]
var icon_local_school = ['school', icon_width, 'fcd34d', '040404', 1]
var icon_local_post = ['email', icon_width, 'ff0000', '000000', 1]
var icon_local_station = ['subway', icon_width, '0000f0', 'ffffff', 1]
var icon_local_bus = ['bus-double-decker', icon_width, '00f000', '000000', 1]
var icon_local_airport = ['airplane', icon_width, '787800', '0596ff', 1]
var icon_local_doctor = ['stethoscope', icon_width, 'ffffff', 'e60000', 1]
var icon_local_hospital = ['hospital-box', icon_width, 'ffc8c8', 'e60000', 1]
var icon_local_default = ['map-marker', icon_width, 'DC2626', 'FFFFFF']

// County-Area Icons
var icon_country_supermarket = ['cart', icon_width, '16A34A', '000000']

// Colours
var hex_rightmove = '0284C7'
var hex_zoopla = '4C1D95'
var hex_onthemarket = 'E11D48'
var hex_highlighted = '3E2DFF'

// Hostname of node app
var hostname = 'http://localhost:3000'

// Unique User ID
var uuid

// User MAC address
var mac

// User Hostname
var machine_hostname

// Mixpanel Analytics - HouseQuests Electron App
var mixpanel_token = 'f84177e6fd6610f6ac3826d1b5d138d6'

// Where any Notifcations come from
var notification_url = 'https://raw.githubusercontent.com/IORoot/HouseQuests/main/notifications.html'

// New Map Instance
var map;

// blacklist enabled state
var blacklistEnabled = true

// Current viewed property
var currentProperty;

// Total count of markers
var totalMarkerCount = 0;

// Advert Timer
var advertRepeats = 360000      // 6mins
var advertButtonEnable = 30000  // 30sec

// Used for testing
// contains the last marker to be loaded
// and it's X/Y pixel on the canvas.
var lastMarkerLoadedXYPixel = 'NothingLoaded';

// HAVE YOU BEEN BANNED?
var banned = false;

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
        center: ol.proj.fromLonLat([0.0098, 51.4934]),
        zoom: 12
    }),

});

// ┌─────────────────────────────────────┐
// │         Set Version Numbers         │
// └─────────────────────────────────────┘
var packageJson = require('../package.json');
document.getElementById('version-intro').innerText = packageJson.productName + ' v' + packageJson.version
document.title = packageJson.productName + ' ' + packageJson.version

// ┌─────────────────────────────────────┐
// │             Set Changelog           │
// └─────────────────────────────────────┘
let changelog = packageJson.release_notes.join("\r\n");
document.getElementById('intro-description').innerText = changelog


// ┌─────────────────────────────────────┐
// │         Spinner Functions           │
// └─────────────────────────────────────┘
function show_spinner() {
    document.getElementById('loading-spinner').classList.remove("hidden")
}

function hide_spinner() {
    document.getElementById('loading-spinner').classList.add("hidden")
}

