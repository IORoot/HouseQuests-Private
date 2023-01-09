
export function validate_authentication(authenticationData) {

    if (authenticationData.message == "banned"){
        console.log(authenticationData.message)
        banned = true
        return false
    }

    if (authenticationData.message){
        console.log(authenticationData.message)
        return false
    }

    // If enabled is false.
    if (!authenticationData.enabled){
        console.log('This account is disabled')
        return false
    }

    // If there is no valid-until date
    if (!authenticationData['valid-until']){
        console.log('This account has not got a valid-until date.')
        return false
    }
    
    // If there is no name is present
    if (!authenticationData['email']){
        console.log('This account does not have a correct email address.')
        return false
    }

    // If valid-date has passed
    let now = new Date();
    now = now.getTime();

    let validDate = new Date(authenticationData['valid-until']);
    validDate = validDate.getTime()

    if (validDate < now)
    {
        console.log('This account has run out of a subscription. The valid-date is older than now.')
        return false
    }

    // finally return true.
    return true

}