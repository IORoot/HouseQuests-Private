
// ┌─────────────────────────────────────┐
// │    Listen for click on marker       │
// └─────────────────────────────────────┘
map.addEventListener('click', async function(event) {

    var feature = map.forEachFeatureAtPixel(event.pixel,
        function(feature) { return feature; }
    );

    var marker = '';

    if (feature) {
        marker = feature.A
    }

    /**
     * Click on Property
     */
    if (marker.type == 'property')
    {
        var propertyDetails = await load_feature_details(marker)

        // update the right drawer contents with results.
        update_drawer_contents(propertyDetails, marker.source)

        // Open the drawer
        drawer.show();
    }


    /**
     * Click on Tube station
     */
    if (marker.type == 'london_tube_station')
    {
        overlay.setPosition(event.coordinate);

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-md">'+marker.station+'</div>'
            popupHTML += '<div class="text-sm">'+marker.description+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;
    }




        /**
     * Click on Train Line
     */
    if (marker.type == 'tube_line')
    {
        overlay.setPosition(event.coordinate);

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-md text-blue-700">London Underground Line</div>'
            popupHTML += '<div class="text-sm">'+marker.Name+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;
    }




    /**
     * Click on Train station
     */
    if (marker.type == 'london_train_station')
    {
        overlay.setPosition(event.coordinate);

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-md">'+marker.Station+'</div>'
            popupHTML += '<div class="text-sm">'+marker.description+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;
    }




    /**
     * Click on Train Line
     */
    if (marker.type == 'train_line')
    {
        overlay.setPosition(event.coordinate);

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-md text-cyan-700">Train Line</div>'
            popupHTML += '<div class="text-sm">'+marker.Name+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;
    }





    /**
     * Click on Property Crime Spot
     */
    if (marker.type == 'crime')
    {
        overlay.setPosition(event.coordinate);

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-md text-red-800">'+marker.category+'</div>'
            popupHTML += '<div class="text-sm">'+marker.street+'</div>'
            popupHTML += '<div class="text-sm">'+marker.month+'</div>'
            popupHTML += '<div class="text-sm">'+marker.outcome.category+'</div>'
            popupHTML += '<div class="text-sm">'+marker.outcome.date+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;

    }




    /**
     * Click on Bus Route
     */
    if (marker.type == 'route')
    {
        overlay.setPosition(event.coordinate);

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-md text-red-800">'+marker.name+'</div>'
            popupHTML += '<div class="text-md text-red-500">'+marker.ref+'</div>'
            popupHTML += '<div class="text-sm">From: '+marker.from+'</div>'
            popupHTML += '<div class="text-sm">To: '+marker.to+'</div>'
            popupHTML += '<div class="text-sm">Operator: '+marker.operator+'</div>'
            popupHTML += '<a class="text-sm text-blue-500 underline" href="https://tfl.gov.uk/maps_/bus-spider-maps?Query='+marker.ref+'" target="_blank">Spider Maps</a>'
            popupHTML += '<a class="text-sm text-blue-500 underline" href="https://tfl.gov.uk/bus/route/'+marker.ref+'/?direction=inbound" target="_blank">Inbound Map towards '+marker.from+'</a>'
            popupHTML += '<a class="text-sm text-blue-500 underline" href="https://tfl.gov.uk/bus/route/'+marker.ref+'/?direction=outbound" target="_blank">Outbound Map towards '+marker.to+'</a>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;

    }



    /**
     * Click on Supermarket
     */
    if (marker.shop == 'supermarket')
    {
        overlay.setPosition(event.coordinate);

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-md text-lime-800">'+marker.name+'</div>'
            popupHTML += '<div class="text-sm">Street: '+marker["addr:street"]+'</div>'
            popupHTML += '<a class="text-sm text-blue-500 underline" href="'+marker.website+'" target="_blank">Website</a>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;

    }





    /**
     * Click on Universities
     */
    if (marker.type == 'university')
    {
        overlay.setPosition(event.coordinate);

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-md text-yellow-800">'+marker.name+'</div>'
            popupHTML += '<img class="w-full h-30" src="'+marker.image+'">'
            popupHTML += '<a href="https://'+marker.url+'" class="text-sm underline text-blue-500" target="_blank">'+marker.url+'</a>'
            popupHTML += '<div class="text-sm">'+marker.phone+'</div>'
            popupHTML += '<div class="text-sm">'+marker.email+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;
    }


    /**
     * Click on Free Schools and Academies
     */
    if (marker.Type == 'FreeSchool')
    {
        overlay.setPosition(event.coordinate);

        var prefix = 'http://';
        if (marker.SchoolWebsite.substr(0, prefix.length) !== prefix)
        {
            marker.SchoolWebsite = prefix + marker.SchoolWebsite;
        }

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-xs text-orange-400">Academy / Free School</div>'
            popupHTML += '<div class="text-md text-yellow-800">'+marker.EstablishmentName+'</div>'
            popupHTML += '<div class="text-xs">Stage: '+marker.PhaseOfEducation+'</div>'
            popupHTML += '<div class="text-xs">Local Authority: '+marker.LocalAuthority+'</div>'
            popupHTML += '<div class="text-xs">Ages: '+marker.StatutoryLowAge+' to '+marker.StatutoryHighAge+'</div>'
            popupHTML += '<div class="text-xs">Gender: '+marker.Gender+'</div>'
            popupHTML += '<div class="text-xs">6th Form: '+marker.OfficialSixthForm+'</div>'
            popupHTML += '<div class="text-xs bg-stone-100 p-1 rounded m-1 flex flex-col">'+marker.Address1
                popupHTML += '<div>'+marker.Address2+ '</div>'
                popupHTML += '<div>'+marker.Address3+ '</div>'
                popupHTML += '<div>'+marker.Address4+ '</div>'
                popupHTML += '<div>'+marker.Address5+ '</div>'
                popupHTML += '<div>'+marker.Address6+ '</div>'
            popupHTML += '</div>'
            popupHTML += '<a href="'+marker.SchoolWebsite+'" class="text-xs underline text-blue-500" target="_blank">'+marker.SchoolWebsite+'</a>'
            popupHTML += '<div class="text-xs">Phone: '+marker.Phone+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;
    }




    /**
     * Click on Free Schools and Academies
     */
    if (marker.Type == 'StateFundedSchool')
    {
        overlay.setPosition(event.coordinate);

        var prefix = 'http://';
        if (marker.SchoolWebsite.substr(0, prefix.length) !== prefix)
        {
            marker.SchoolWebsite = prefix + marker.SchoolWebsite;
        }

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-xs text-orange-400">State Funded</div>'
            popupHTML += '<div class="text-md text-yellow-800">'+marker.EstablishmentName+'</div>'
            popupHTML += '<div class="text-xs">Stage: '+marker.PhaseOfEducation+'</div>'
            popupHTML += '<div class="text-xs">Local Authority: '+marker.LocalAuthority+'</div>'
            popupHTML += '<div class="text-xs">Ages: '+marker.StatutoryLowAge+' to '+marker.StatutoryHighAge+'</div>'
            popupHTML += '<div class="text-xs">Gender: '+marker.Gender+'</div>'
            popupHTML += '<div class="text-xs">6th Form: '+marker.OfficialSixthForm+'</div>'
            popupHTML += '<div class="text-xs bg-stone-100 p-1 rounded m-1 flex flex-col">'+marker.Address1
                popupHTML += '<div>'+marker.Address2+ '</div>'
                popupHTML += '<div>'+marker.Address3+ '</div>'
                popupHTML += '<div>'+marker.Address4+ '</div>'
                popupHTML += '<div>'+marker.Address5+ '</div>'
                popupHTML += '<div>'+marker.Address6+ '</div>'
            popupHTML += '</div>'
            popupHTML += '<a href="'+marker.SchoolWebsite+'" class="text-xs underline text-blue-500" target="_blank">'+marker.SchoolWebsite+'</a>'
            popupHTML += '<div class="text-xs">Phone: '+marker.Phone+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;
    }
    




    /**
     * Click on Child Centers
     */
    if (marker.Type == 'ChildCenters')
    {
        overlay.setPosition(event.coordinate);

        if (marker.SchoolWebsite){
            var prefix = 'http://';
            if (marker.SchoolWebsite.substr(0, prefix.length) !== prefix)
            {
                marker.SchoolWebsite = prefix + marker.SchoolWebsite;
            }
        }

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-2">';
            popupHTML += '<div class="text-xs text-orange-400">Childrens Center</div>'
            popupHTML += '<div class="text-md text-yellow-800">'+marker.EstablishmentName+'</div>'
            popupHTML += '<div class="text-xs">Local Authority: '+marker.LocalAuthority+'</div>'
            popupHTML += '<div class="text-xs bg-stone-100 p-1 rounded m-1 flex flex-col">'+marker.Address1
                popupHTML += '<div>'+marker.Address2+ '</div>'
                popupHTML += '<div>'+marker.Address3+ '</div>'
                popupHTML += '<div>'+marker.Address4+ '</div>'
                popupHTML += '<div>'+marker.Address5+ '</div>'
                popupHTML += '<div>'+marker.Address6+ '</div>'
            popupHTML += '</div>'
            popupHTML += '<a href="'+marker.SchoolWebsite+'" class="text-xs underline text-blue-500" target="_blank">'+marker.SchoolWebsite+'</a>'
            popupHTML += '<div class="text-xs">Phone: '+marker.TelephoneNum+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;
    }
    

    /**
     * Click on Crime Spot
     */
    if (marker.pcon17cd)
    {
        overlay.setPosition(event.coordinate);

        let maxCrime = 40842; // Central London "All crimes"

        let boroughCrime = parseInt(marker[ 'All crimes' ]);

        let percentageCrime = (100 / maxCrime) * boroughCrime

        var popupHTML = '';
        popupHTML += '<div class="flex flex-col gap-1">';
            popupHTML += '<div class="text-lg text-emerald-700">'+marker[ 'Constituency' ]+' (2018)</div>'

            popupHTML += '<div class="text-sm">All crimes: '+marker[ 'All crimes' ]+' ('+ Math.round(percentageCrime)+'% of max)</div>'
            popupHTML += '<div class="text-sm">Anti-social behaviour: '+marker[ 'Anti-social behaviour' ]+'</div>'
            popupHTML += '<div class="text-sm">Bicycle theft: '+marker[ 'Bicycle theft' ]+'</div>'
            popupHTML += '<div class="text-sm">Burglary: '+marker[ 'Burglary' ]+'</div>'
            popupHTML += '<div class="text-sm">Criminal damage and arson: '+marker[ 'Criminal damage and arson' ]+'</div>'
            popupHTML += '<div class="text-sm">Drugs: '+marker[ 'Drugs' ]+'</div>'
            popupHTML += '<div class="text-sm">Other crime: '+marker[ 'Other crime' ]+'</div>'
            popupHTML += '<div class="text-sm">Other theft: '+marker[ 'Other theft' ]+'</div>'
            popupHTML += '<div class="text-sm">Possession of weapons: '+marker[ 'Possession of weapons' ]+'</div>'
            popupHTML += '<div class="text-sm">Public order: '+marker[ 'Public order' ]+'</div>'
            popupHTML += '<div class="text-sm">Robbery: '+marker[ 'Robbery' ]+'</div>'
            popupHTML += '<div class="text-sm">Shoplifting: '+marker[ 'Shoplifting' ]+'</div>'
            popupHTML += '<div class="text-sm">Theft from the person: '+marker[ 'Theft from the person' ]+'</div>'
            popupHTML += '<div class="text-sm">Vehicle crime: '+marker[ 'Vehicle crime' ]+'</div>'
            popupHTML += '<div class="text-sm">Violence and sexual offences: '+marker[ 'Violence and sexual offences' ]+'</div>'
        popupHTML += '</div>';

        popupContent.innerHTML = popupHTML;

    }

});