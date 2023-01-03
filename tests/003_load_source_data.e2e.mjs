
import { Key } from 'webdriverio'

describe('Test Loading Source Data', () => {
    it('should load data from zoopla, rightmove, onthemarket and display markers', async () => {
        
        // Close the advert
        let advert_close_button_id = "#popup-modal-advert-close"
        await browser.$(advert_close_button_id).click()

        // Close the tutorial
        let tutorial_close_button_id = "#popup-modal-tutorial-close"
        await browser.$(tutorial_close_button_id).click()

        // Close the intro
        let intro_close_button_id = "#popup-modal-intro-close"
        await browser.$(intro_close_button_id).click()

        // Open the left drawer
        let settings_button = "#settings-button"
        await browser.$(settings_button).click()

        // Paste zoopla search into search box
        // SE London, 325k to 350k, has garden, freehold
        let zoopla_search_url = "https://www.zoopla.co.uk/for-sale/map/property/london/south-east/?q=South+East+London&search_source=refine&price_max=325000&price_min=300000&feature=has_garden&is_auction=false&is_retirement_home=false&is_shared_ownership=false&new_homes=exclude&keywords=freehold"
        let zoopla_input_textbox= "#zooplaInput"
        // set value
        await browser.$(zoopla_input_textbox).setValue(zoopla_search_url)
        // select all copy
        await browser.keys([Key.Command, 'a', 'c'])
        // paste
        await browser.keys([Key.Command, 'v'])


        await browser.pause(3000)
    })
})
