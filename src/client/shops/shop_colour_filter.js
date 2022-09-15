

export function shop_colour_filter(brand, defaultColour, defaultStroke)
{

    let regex = new RegExp(".*planet organic.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(0, 0, 0, 1.0)"
        defaultStroke = "rgba(255, 255, 255, 1.0)"
    }

    regex = new RegExp(".*tesco.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(0, 83, 159, 1.0)"
        defaultStroke = "rgba(229, 42, 34, 1.0)"
    }

    regex = new RegExp(".*co-op.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(2, 177, 231, 1.0)"
        defaultStroke = "rgba(255, 255, 255, 1.0)"
    }

    regex = new RegExp(".*cooperative.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(2, 177, 231, 1.0)"
        defaultStroke = "rgba(255, 255, 255, 1.0)"
    }

    regex = new RegExp(".*Co-operative.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(2, 177, 231, 1.0)"
        defaultStroke = "rgba(255, 255, 255, 1.0)"
    }

    regex = new RegExp(".*lidl.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(255, 240, 0, 1.0)"
        defaultStroke = "rgba(2, 79, 170, 1.0)"
    }

    regex = new RegExp(".*aldi.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(1, 0, 97, 1.0)"
        defaultStroke = "rgba(247, 205, 4, 1.0)"
    }

    regex = new RegExp(".*asda.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(104, 165, 27, 1.0)"
        defaultStroke = "rgba(255, 255, 255, 1.0)"
    }

    console.log(brand)
    regex = new RegExp(".*sainsbury.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(240, 108, 2, 1.0)"
        defaultStroke = "rgba(255, 255, 255, 1.0)"
    }

    regex = new RegExp(".*spencer.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(188, 215, 85, 1.0)"
        defaultStroke = "rgba(0, 0, 0, 1.0)"
    }

    regex = new RegExp(".*M&S.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(188, 215, 85, 1.0)"
        defaultStroke = "rgba(0, 0, 0, 1.0)"
    }

    regex = new RegExp(".*waitrose.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(93, 128, 25, 1.0)"
        defaultStroke = "rgba(255, 255, 255, 1.0)"
    }

    regex = new RegExp("Nisa.*",'i');
    if (regex.test(brand)) {
        defaultColour = "rgba(37, 48, 59, 1.0)"
        defaultStroke = "rgba(254, 201, 18, 1.0)"
    }

    let palette = [defaultColour, defaultStroke]
    return palette
}