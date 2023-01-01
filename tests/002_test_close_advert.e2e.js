var packagejson = require('../package.json');

describe('Test Close Advert', () => {
    it('should close the advert after 10 seconds', async () => {

        await browser.pause(1)

        let advert_close_button_id = "#popup-modal-advert-close"

        await browser.$(advert_close_button_id).click()

        await expect($('#popup-modal-advert')).toHaveAttributeContaining('class','hidden')
    })
})
