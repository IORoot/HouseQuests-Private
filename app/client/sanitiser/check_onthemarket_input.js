import { alert_modal } from '../alerts/alert_modal.js'
var url = require('url');

export function check_onthemarket_input(pastedURL){

    // ╭──────────────────────────────────────────────────────────╮
    // │ TEST - IS THERE ANY INPUT?                               │
    // ╰──────────────────────────────────────────────────────────╯
    if (!pastedURL){ return false }

    const address = url.parse(pastedURL, true);

    // console.log(address)

    if ( ! address.hostname.includes("onthemarket.com") )
    {
        alert_modal('The pasted link is not from OnTheMarket.com. It is: '+address.hostname+'.<br/> Please try again.')
        return false
    }

    return pastedURL

}