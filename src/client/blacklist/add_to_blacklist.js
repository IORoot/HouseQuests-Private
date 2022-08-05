function addToBlacklist(blacklist,excludeArray)
{
    if (blacklist.find(element => element === excludeArray))
    {
        console.log("found ID:"+excludeArray+" already in the blacklist, No need to add again.")
        console.log(element)
    } else {
        blacklist.push(excludeArray);
    }

}