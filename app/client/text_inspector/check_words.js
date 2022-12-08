export function check_words(sentance, positiveNegative, colour)
{
    const drawerInspector = document.getElementById('drawer-inspector-words');

    let inspectorList = document.getElementById('inspector-'+positiveNegative).value;
    let wordList = inspectorList.split(',');

    if ((wordList.length == 1) && (wordList[0] == '')){ return sentance }

    wordList.forEach(function(word, index){

        // remove whitespace
        word = word.trim();

        // remove null
        if (!word){ return }

        var replacementString = '<span class="bg-'+colour+' text-white py-0.5 px-2 rounded">' + word + '</span>'

        var indexOfWord = sentance.indexOf(word)

        var regex = new RegExp(word,"gi");

        if (indexOfWord !== -1) {

            sentance = sentance.replace(regex, replacementString)

            // let html = drawerInspector.innerHTML
            drawerInspector.innerHTML = drawerInspector.innerHTML + replacementString 
        }

    });

    return sentance
}