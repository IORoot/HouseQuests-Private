
export function validate_authentication(authenticationData) {

        // If enabled is false.
        if (!authenticationData.enabled){
            return false
        }

        // If there is no valid-until date
        if (!authenticationData['valid-until']){
            return false
        }
        
        // If there is no name is present
        if (!authenticationData['name']){
            return false
        }

        // If valid-date has passed
        let now = new Date();
        now = now.getTime();

        let validDate = new Date(authenticationData['valid-until']);
        validDate = validDate.getTime()

        if (validDate < now)
        {
            return false
        }


        // finally return true.
        return true

}