import { Key } from 'webdriverio'

describe('Test Loading onthemarket Source Data', () => {
    it('should load data from onthemarket and display markers', async () => {

        // Close the tutorial
        let tutorial_close_button_id = "#popup-modal-tutorial-close"
        await browser.$(tutorial_close_button_id).click()

        // Close the intro
        let intro_close_button_id = "#popup-modal-intro-close"
        await browser.$(intro_close_button_id).click()

        // Open the left drawer
        let settings_button = "#settings-button"
        await browser.$(settings_button).click()

        // Paste onthemarket search into search box
        // SE London, 325k to 350k, has garden, freehold
        let onthemarket_search_url = "https://www.onthemarket.com/for-sale/property/greenwich/?max-price=3000000&min-price=1000000&view=grid"
        let onthemarket_input_textbox= "#onthemarketInput"

        // Needed to load the drawer with animation
        await browser.pause(100)

        // set value
        await browser.$(onthemarket_input_textbox).setValue(onthemarket_search_url)

        // select all copy
        await browser.keys([Key.Command, 'a', 'c'])

        // paste
        await browser.keys([Key.Command, 'v'])

        // close drawer
        let settings_close_button = "#settings-button-close"
        await browser.$(settings_close_button).click()

        // Wait for markers to load
        await browser.pause(1000)

        // Execute a command to get the value of lastMarkerLoadedXYPixel
        const markerLocationArray = await browser.execute(() => { return window['lastMarkerLoadedXYPixel'] })

        // A 'click' clicks in the middle of an element.
        // Since we click on the map, the X/Y is taken from the center.
        // Therefore to get the top left corner X/Y we are removing half height / width
        const x_pixels = Math.trunc(markerLocationArray[0]) - 499 // Half width of browser
        const y_pixels = Math.trunc(markerLocationArray[1]) - 275 // Half height of browser
        // console.log('x:',x_pixels,', y:',y_pixels)

        // select canvas
        const map_canvas = await $("#map canvas")

        // await map_canvas.moveTo(x_pixels,y_pixels)
        await map_canvas.click({
            x: x_pixels,
            y: y_pixels
        })

        // Get the right drawer 
        const drawer = await $('#drawer')

        // Check that the right drawer has been opened!
        // drawer.getAttribute("class").contains('transform-none');
        await expect(drawer).toHaveElementClass('transform-none', { message: 'Drawer not opened! Marker not clicked on.', })

    })
})
