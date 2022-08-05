function addToHighlightList(propertyID,colour)
{

    let propertyColourArray = {'propertyID' : propertyID, 'colour': colour}

    let highlightList = []

    // Get the highlightList from localStorage
    highlightList = JSON.parse(window.localStorage.getItem('highlightList'));

    // if array already exists, check if property is in array, else push onto it.
    if (highlightList){

        if (highlightList.find(element => element === propertyColourArray))
        {
            console.log("found ID:"+propertyID+" already in the highlightlist, changing colour")
            console.log(element)
        } else {
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