// ╭──────────────────────────────────────────────────────────────────────────────╮
// │                                                                              │
// │               CHECK THAT THE URL FOLLOWS ALL THE CORRECT RULES               │
// │                                                                              │
// ╰──────────────────────────────────────────────────────────────────────────────╯

import { alert_modal } from '../alerts/alert_modal.js'
var url = require('url');

export function check_zoopla_input(pastedURL){


    // ╭──────────────────────────────────────────────────────────╮
    // │ TEST - IS THERE ANY INPUT?                               │
    // ╰──────────────────────────────────────────────────────────╯
    if (!pastedURL){ return false }

    const address = url.parse(pastedURL, true);

    // ╭──────────────────────────────────────────────────────────╮
    // │ TEST - IS THIS A ZOOPLA PAGE?                            │
    // ╰──────────────────────────────────────────────────────────╯
    if ( ! address.hostname.includes("zoopla.co.uk") )
    {
        alert_modal('The pasted link is not from Zoopla.co.uk. It is: '+address.hostname+'.<br/> Please try again.')
        return false
    }

    // ╭──────────────────────────────────────────────────────────╮
    // │ TEST - Is it a property search page or not?              │
    // ╰──────────────────────────────────────────────────────────╯
    if ( ! address.pathname.includes("property"))
    {
        alert_modal('<div class="text-center w-full">The pasted link is not a property search page.<br/>It should have <code class="text-gray-700">/property/</code> in the URL.<br/> Please try again.</div>')
        return false
    }

    // ╭──────────────────────────────────────────────────────────╮
    // │ TEST - Test if it's a map page. If not, add it.          │
    // ╰──────────────────────────────────────────────────────────╯
    if ( ! address.pathname.includes("map"))
    {
        let search_for   = "property"
        let replace_with = "map/property"
        address.pathname = address.pathname.replace(search_for, replace_with)
    }

    // ╭──────────────────────────────────────────────────────────╮
    // │ Return the URL back (altered if needed)                  │
    // ╰──────────────────────────────────────────────────────────╯
    let returnURL = address.protocol + '//' + address.hostname + address.pathname + address.search
    return returnURL

}