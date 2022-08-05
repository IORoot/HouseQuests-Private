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