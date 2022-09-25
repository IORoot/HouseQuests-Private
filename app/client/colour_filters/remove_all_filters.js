
// Remove all colourize filters (ol-ext) from base layer openStreetMap

export function remove_all_filters(){

    let FilterList = openStreetMap.getFilters();
    
    for (let i=FilterList.length-1; i>=0; i--) openStreetMap.removeFilter(FilterList[i]);


}