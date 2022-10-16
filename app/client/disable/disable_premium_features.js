
export function disable_premium_features()
{

    clone_and_recolour('clear-all-markers')
    clone_and_recolour('toggle-tube-stations')
    clone_and_recolour('toggle-train-lines')
    clone_and_recolour('toggle-train-stations')
    clone_and_recolour('toggle-bus-routes')
    clone_and_recolour('toggle-supermarkets')
    clone_and_recolour('toggle-universities')
    clone_and_recolour('toggle-schools')
    clone_and_recolour('toggle-schools-childcenters')
    clone_and_recolour('toggle-schools')
    clone_and_recolour('toggle-crime-boroughs')
    clone_and_recolour('inspector-positive')
    clone_and_recolour('inspector-negative')
    clone_and_recolour('filter-monochrome-toggle')
    clone_and_recolour('filter-invert-toggle')
    clone_and_recolour('filter-dark-toggle')
    clone_and_recolour('filter-sepia-toggle')
    clone_and_recolour('blacklist')
    clone_and_recolour('reset-icon-colours')
    clone_and_recolour('import-all-settings')
    clone_and_recolour('admin-export')
    clone_and_recolour('new-save-entry')
    clone_and_recolour('saved-searches-list')
    clone_and_recolour('drawer-google-streetview')
    clone_and_recolour('drawer-favourite')
    clone_and_recolour('load-local-crimes')
    clone_and_recolour('load-local-supermarkets')
    clone_and_recolour('load-local-convenience')
    clone_and_recolour('load-local-coffee')
    clone_and_recolour('load-local-schools')
    clone_and_recolour('load-neighbourhood-crimes')
    clone_and_recolour('load-neighbourhood-renters')
    clone_and_recolour('introModalToggle')
}


/**
 * Function will clone the element and recolour it with faded classes
 * 
 * @param {*} elementID 
 */
function clone_and_recolour(elementID)
{
    // Clone the element and replace it - this will remove all eventListeners on it.
    let oldNode = document.getElementById(elementID);
    let newNode = oldNode.cloneNode(true);

    // Remove any functionality of colours.
    let newClassList = []
    newNode.classList.forEach( function (item,index) {

        if(/^bg/.test(item)) { return }
        if(/^hover/.test(item)) { return }
        
        newClassList.push(item)
    })

    // Replace the classes with filtered class list
    newNode.className = "";
    newNode.classList.add(...newClassList)

    // Add a gray background
    newNode.classList.add('bg-gray-200')
    newNode.classList.add('text-white')

    // Add disabled parameter
    newNode.setAttribute("disabled", "");

    // Replace the old node for the new one.
    oldNode.parentNode.replaceChild(newNode, oldNode);
}