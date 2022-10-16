// ┌─────────────────────────────────────┐
// │                                     │
// │        PASTE Event Listeners        │
// │                                     │
// └─────────────────────────────────────┘
import { request_markers } from '../requests/request_markers.js'
import { alert_modal } from '../alerts/alert_modal.js'

var url = require('url');

export function listener_paste(){


    const zooplaInput = document.getElementById('zooplaInput');
    zooplaInput.addEventListener('paste', function(event) {

        show_spinner()
        let pastedURL = event.clipboardData.getData('text/plain');
        if ( ! checkZooplaInput(pastedURL) ){ 
            return
        }
        request_markers(pastedURL, 'zoopla')

        request_markers(pastedURL, 'zoopla', 'zooplaAllMap')

        hide_spinner()
    });

    const rightmoveInput = document.getElementById('rightmoveInput');
    rightmoveInput.addEventListener('paste', async function(event) {
        show_spinner()
        let pastedURL = event.clipboardData.getData('text/plain');
        if ( ! checkRightmoveInput(pastedURL) ){ 
            return
        }
        request_markers(pastedURL, 'rightmove')
        hide_spinner()
    });

    const onthemarketInput = document.getElementById('onthemarketInput');
    onthemarketInput.addEventListener('paste', async function(event) {
        show_spinner()
        let pastedURL = event.clipboardData.getData('text/plain');
        if ( ! checkOnTheMarketInput(pastedURL) ){ 
            return
        }
        request_markers(pastedURL, 'onthemarket')
        hide_spinner()
    });

}


function checkZooplaInput(pastedURL)
{
    const address = url.parse(pastedURL, true);

    if ( ! address.hostname.includes("zoopla.co.uk") )
    {
        alert_modal('The pasted link is not from Zoopla.co.uk. It is: '+address.hostname+'.<br/> Please try again.')
        return false
    }

    return true
    // https://www.zoopla.co.uk/for-sale/map/property/london/south-east/?beds_max=3&beds_min=1&feature=has_garden&is_auction=false&is_retirement_home=false&is_shared_ownership=false&keywords=garden&new_homes=exclude&page_size=100&price_max=325000&price_min=275000&property_sub_type=semi_detached&property_sub_type=flats&property_sub_type=bungalow&property_sub_type=terraced&property_sub_type=detached&view_type=map&q=South%20East%20London&radius=0&results_sort=newest_listings&search_source=refine&hidePoly=false&polyenc=c%7BjyHx%7CTp%60Qy~CfeFehHooBckRclI%7BwQsfL_%5D


    // If view_type' is a key in the object
    if ( !("view_type" in address.query) ) 
    {
        alert_modal('The pasted Zoopla link does not have a view type set. Please try again.')
        return false
    }

    // view_type is set to 'map'
    if ( address.query.view_type !== 'map')
    {
        alert_modal('The pasted link does not have a Zoopla view-type set as a map page. Please try again.')
        return false
    }

    // '/map/' is in the pathname
    if ( ! address.pathname.includes("map") )
    {
        alert_modal('The pasted link is not a Zoopla Map page URL. Please try again.')
        return false
    }

    return true
}


function checkRightmoveInput(pastedURL)
{
    const address = url.parse(pastedURL, true);

    // https://www.rightmove.co.uk/property-for-sale/map.html?locationIdentifier=USERDEFINEDAREA%5E%7B%22polylines%22%3A%22qg_yHn%60V%7BlD_%7DLbk%40sqSrsKkcZlmRzlTypPdk%5CicDhjDejDrnD%22%7D&maxBedrooms=2&minBedrooms=1&maxPrice=500000&minPrice=270000&numberOfPropertiesPerPage=499&propertyTypes=&viewType=MAP&mustHave=garden&dontShow=newHome%2Cretirement%2CsharedOwnership&furnishTypes=&keywords=

    if ( ! address.hostname.includes("rightmove.co.uk"))
    {
        alert_modal('The pasted link is not from Rightmove.co.uk. It is: '+address.hostname+'.<br/> Please try again.')
        return false
    }

    return true
    // // If view_type' is a key in the object
    // if ( !("viewType" in address.query) ) 
    // {
    //     alert_modal('The pasted Rightmove link does not have a view type set. Please try again.')
    //     return false
    // }

    // // view_type is set to 'map'
    // if ( address.query.viewType !== 'MAP')
    // {
    //     alert_modal('The pasted link does not have a Rightmove view-type set as a map page. Please try again.')
    //     return false
    // }

    // // '/map/' is in the pathname
    // if ( ! address.pathname.includes("map.html") )
    // {
    //     alert_modal('The pasted link is not a Rightmove Map page URL. Please try again.')
    //     return false
    // }

}


function checkOnTheMarketInput(pastedURL)
{
    const address = url.parse(pastedURL, true);

    // https://www.onthemarket.com/for-sale/1-bed-property/south-west-london/?keywords=Garden&max-price=325000&min-price=275000&new-home-flag=F&prop-types=bungalows&prop-types=detached&prop-types=flats-apartments&prop-types=semi-detached&prop-types=terraced&retirement=false&shared-ownership=false&sort-field=keywords&view=map

    if ( ! address.hostname.includes("onthemarket.com") )
    {
        alert_modal('The pasted link is not from OnTheMarket.com. It is: '+address.hostname+'.<br/> Please try again.')
        return false
    }

    // If view_type' is a key in the object
    // if ( !("view" in address.query) ) 
    // {
    //     alert_modal('The pasted OnTheMarket link does not have a view type set. Please try again.')
    //     return false
    // }

    return true
}