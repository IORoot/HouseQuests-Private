    import {toggle_layer} from '../map_layers/toggle_layer.js'
    
    /**
     * Currently drawn feature.
     * @type {import("../src/ol/Feature.js").default}
     */
    let sketch;

    /**
     * The help tooltip element.
     * @type {HTMLElement}
     */
    let helpTooltipElement;

    /**
     * Overlay to show the help messages.
     * @type {Overlay}
     */
    let helpTooltip;

    /**
     * The measure tooltip element.
     * @type {HTMLElement}
     */
    let measureTooltipElement;

    /**
     * Overlay to show the measurement.
     * @type {Overlay}
     */
    let measureTooltip;

    /** 
     * global so we can remove it later
    */
    let draw; 

    /**
     * Handle pointer move.
     * @param {import("../src/ol/MapBrowserEvent").default} evt The event.
     */
    const pointerMoveHandler = function (evt) {

        // dragging the map
        if (evt.dragging) {
            return;
        }

        let helpMsg = 'Click to start drawing';
        if (sketch) {
            helpMsg = 'Click to continue drawing the line';
        }

        helpTooltipElement.innerHTML = helpMsg;
        helpTooltip.setPosition(evt.coordinate);

        helpTooltipElement.classList.remove('hidden');
    };
    


    /**
     * Format length output.
     * @param {LineString} line The line.
     * @return {string} The formatted length.
     */
    const formatLength = function (line) {
        const length = ol.sphere.getLength(line);
        let output;
        if (length > 100) {
            output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
        } else {
            output = Math.round(length * 100) / 100 + ' ' + 'm';
        }
        return '<div>' + output + '</div>';
    };


    const walkingTime = function (line) {
        const distanceMeters = ol.sphere.getLength(line);
        let timeWalk = Math.round(distanceMeters / 80)
        let timeBike = Math.round(distanceMeters / 300)
        let timeCar = Math.round(distanceMeters / 500)

        let output = '<svg class="w-3 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z"/></svg>'
            output += '<span>'
            output += timeWalk
            output += 'mins</span>'
            // output += ' | '
            // output += '<svg class="w-3 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z"/></svg>'
            // output += '<span>'
            // output += timeCar
            // output += 'mins</span>'

        return output
    }


    function addInteraction() {
        const type = 'LineString';
        draw = new ol.interaction.Draw({
            source: measurementToolSource,
            type: type,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)',
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(225, 29, 72, 1.0)',
                    lineDash: [10, 10],
                    width: 2,
                }),
                image: new ol.style.Circle({
                    radius: 5,
                    stroke: new ol.style.Stroke({
                        color: 'rgba(225, 29, 72, 1.0)',
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)',
                    }),
                }),
            }),
        });
        map.addInteraction(draw);

        createMeasureTooltip();
        createHelpTooltip();

        let listener;
        draw.on('drawstart', function (evt) {
        // set sketch
            sketch = evt.feature;

            /** @type {import("../src/ol/coordinate.js").Coordinate|undefined} */
            let tooltipCoord = evt.coordinate;
        
            listener = sketch.getGeometry().on('change', function (evt) {
                const geom = evt.target;
                let output = formatLength(geom);
                let timeToWalk = walkingTime(geom);
                tooltipCoord = geom.getLastCoordinate();
                measureTooltipElement.innerHTML = '<div class="flex flex-row gap-1">' + output + '<span>|</span>' + timeToWalk + '</div>';
                measureTooltip.setPosition(tooltipCoord);
            });
        });
        
        draw.on('drawend', function () {
            measureTooltipElement.className = 'text-xs';
            measureTooltip.setOffset([0, -7]);
            // unset sketch
            sketch = null;
            // unset tooltip so that a new one can be created
            measureTooltipElement = null;
            createMeasureTooltip();
            ol.Observable.unByKey(listener);
        });
    }


    function removeInteraction(){
        let interactionList = map.getInteractions();

        interactionList.forEach(function(singleInteraction){

            if (singleInteraction instanceof ol.interaction.Draw ){
                map.removeInteraction(singleInteraction)
            }
        })
    }

    /**
    * Creates a new help tooltip
    */
    function createHelpTooltip() {
        if (helpTooltipElement) {
            helpTooltipElement.parentNode.removeChild(helpTooltipElement);
        }
        helpTooltipElement = document.createElement('div');
        helpTooltipElement.className = 'hidden text-xs';
        helpTooltip = new ol.Overlay({
            element: helpTooltipElement,
            offset: [15, 0],
            positioning: 'center-left',
        });
        map.addOverlay(helpTooltip);
    }

    /**
    * Creates a new measure tooltip
    */
    function createMeasureTooltip() {
        if (measureTooltipElement) {
            measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement('div');
        measureTooltipElement.className = 'text-xs';
        measureTooltip = new ol.Overlay({
            element: measureTooltipElement,
            offset: [0, -15],
            positioning: 'bottom-center',
            stopEvent: false,
            insertFirst: false,
        });
        map.addOverlay(measureTooltip);
    }

    

/**
 * Listen for measurement tool button toggle
 */
const measurementToolToggle = document.getElementById('toggleMeasurementTool');
measurementToolToggle.addEventListener('click', function(event) { 

    if (this.dataset.toggle)
    {
        this.dataset.toggle = ""
        map.un('pointermove', pointerMoveHandler);
        removeInteraction();
        return;
    } 

    this.dataset.toggle = "on"
    map.on('pointermove', pointerMoveHandler);
    map.getViewport().addEventListener('mouseout', function () {
        helpTooltipElement.classList.add('hidden');
    });
    addInteraction();

});

measurementToolToggle.addEventListener('dblclick', function(event) { 
    toggle_layer('measurementTool')
});