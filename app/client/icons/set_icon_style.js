
// ┌─────────────────────────────────────┐
// │                                     │
// │       Return proper Icon URL        │
// │                                     │
// └─────────────────────────────────────┘

// Icons are defined in initialise.js
export function set_icon_style(iconArray){


    let url = "https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2F" + iconArray[0]
    let strokeWidth = '';

    if (iconArray[1])
    {
        url += ".svg&width=" + iconArray[1] + "px&height=" + iconArray[1] + "px"
    }

    if (iconArray[2])
    {
        url += "&fill=%23" + iconArray[2]
    }

    if (iconArray[3])
    {
        url += "&stroke=%23" + iconArray[3]
        strokeWidth = "&stroke-width=0.5"
    }

    if (iconArray[4])
    {
        strokeWidth = "&stroke-width=" + iconArray[4]
    }

    url += strokeWidth


    let iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            imgSize: [iconArray[1], iconArray[1]],
            src: url,
        }),
    })

    return iconStyle

}