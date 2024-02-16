export function add_to_highlight_list(propertyID, colour, icon )
{

    let propertyColourArray = {'propertyID' : propertyID, 'colour': colour, 'icon': icon}

    let highlightList = []

    // Get the highlightList from localStorage
    highlightList = JSON.parse(window.localStorage.getItem('highlightList'));

    // if array already exists, check if property is in array, else push onto it.
    if (highlightList){

        // find the index of the entry
        const indexToUpdate = highlightList.findIndex(entry => entry.propertyID === propertyColourArray.propertyID);

        if (indexToUpdate !== -1) {
            // Update the existing entry with the new data

            // If the colour has a value, then update it.
            if (propertyColourArray.colour && propertyColourArray.colour.trim() !== ''){
                highlightList[indexToUpdate].colour = propertyColourArray.colour;
            }
            
            if (propertyColourArray.icon && propertyColourArray.icon.trim() !== ''){
                highlightList[indexToUpdate].icon = propertyColourArray.icon;
            }

            // Update any other properties as needed
        }  else {
            // If no entry with the matching propertyID is found, push the new entry
            highlightList.push(propertyColourArray);
        }

    }

    // if this is a new array, push onto new array
    if (!highlightList){
        highlightList = []
        highlightList.push(propertyColourArray);
    }

    window.localStorage.setItem('highlightList', JSON.stringify(highlightList));

}