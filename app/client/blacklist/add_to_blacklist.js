import { list_blacklist } from "./list_blacklist.js";

export function add_to_blacklist(blacklist,excludeArray)
{
    if (blacklist.find(element => element === excludeArray))
    {
        console.log("found ID:"+excludeArray+" already in the blacklist, No need to add again.")
    } else {
        blacklist.push(excludeArray);
    }

}