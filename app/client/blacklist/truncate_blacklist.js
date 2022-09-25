// ┌─────────────────────────────────────┐
// │                                     │
// │      Remove blacklisted entries     │
// │                                     │
// └─────────────────────────────────────┘

// all / rightmove / onthemarket / zoopla
export function truncate_blacklist(sourceType){
        
        if (sourceType == 'all'){
            window.localStorage.setItem('blacklistedIDs', null)
        }

        if (sourceType == 'zoopla' || sourceType == 'rightmove' || sourceType == 'onthemarket' ){

            var blacklist = JSON.parse(window.localStorage.getItem('blacklistedIDs'));

            console.log(blacklist)
            if (!blacklist){ return }


            for (let index=blacklist.length-1; index>=0; index--) {

                if (blacklist[index][1] == sourceType)
                {
                    blacklist.splice(index, 1);
                }
                
            }


            window.localStorage.setItem('blacklistedIDs', JSON.stringify(blacklist))
        }
}