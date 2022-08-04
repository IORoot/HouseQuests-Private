// ┌─────────────────────────────────────┐
// │                                     │
// │    Check for 'inspector words       │
// │                                     │
// └─────────────────────────────────────┘

function inspector_check(sentance)
{
    sentance = check_words(sentance, 'positive', 'emerald-500')
    sentance = check_words(sentance, 'negative', 'red-500')
    return sentance
}



function check_words(sentance, positiveNegative, colour)
{
    const drawerInspector = document.getElementById('drawer-inspector-words');

    let inspectorList = document.getElementById('inspector-'+positiveNegative).value;
    let wordList = inspectorList.split(',');

    wordList.forEach(function(word, index){

        // remove whitespace
        word = word.trim();

        var replacementString = '<span class="bg-'+colour+' text-white py-0.5 px-2 rounded">' + word + '</span>'

        var indexOfWord = sentance.indexOf(word)

        // var replace = "regex\\d";
        var regex = new RegExp(word,"gi");
        // "mystring1".replace(re, "newstring");

        if (indexOfWord !== -1) {

            sentance = sentance.replace(regex, replacementString)

            // let html = drawerInspector.innerHTML
            drawerInspector.innerHTML = drawerInspector.innerHTML + replacementString 
        }

    });

    return sentance
}