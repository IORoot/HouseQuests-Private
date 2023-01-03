describe('Test Close Advert', () => {
    it('should close the advert after 10 seconds', async () => {
        
        // ╭──────────────────────────────────────────────────────────────────────────────╮
        // │                                                                              │
        // │         NOTE - The environment variable HQ_TEST=test must be set to          │
        // │                     cancel the 10-second advent timeout.                     │
        // │                                                                              │
        // ╰──────────────────────────────────────────────────────────────────────────────╯
        let advert_close_button_id = "#popup-modal-advert-close"

        await browser.$(advert_close_button_id).click()

        await expect($('#popup-modal-advert')).toHaveAttributeContaining('class','hidden')
    })
})
