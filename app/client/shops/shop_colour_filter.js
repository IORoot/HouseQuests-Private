

export function shop_colour_filter(brand, defaultColour, defaultStroke)
{

    let regex = new RegExp(".*planet organic.*",'i');
    if (regex.test(brand)) {
        defaultColour = "000000"
        defaultStroke = "ffffff"
    }

    regex = new RegExp(".*tesco.*",'i');
    if (regex.test(brand)) {
        defaultColour = "00539f"
        defaultStroke = "e52a22"
    }

    regex = new RegExp(".*co-op.*",'i');
    if (regex.test(brand)) {
        defaultColour = "02b1e7"
        defaultStroke = "ffffff"
    }

    regex = new RegExp(".*cooperative.*",'i');
    if (regex.test(brand)) {
        defaultColour = "02b1e7"
        defaultStroke = "ffffff"
    }

    regex = new RegExp(".*Co-operative.*",'i');
    if (regex.test(brand)) {
        defaultColour = "02b1e7"
        defaultStroke = "ffffff"
    }

    regex = new RegExp(".*lidl.*",'i');
    if (regex.test(brand)) {
        defaultColour = "fff000"
        defaultStroke = "024faa"
    }

    regex = new RegExp(".*aldi.*",'i');
    if (regex.test(brand)) {
        defaultColour = "010061"
        defaultStroke = "f7cd04"
    }

    regex = new RegExp(".*asda.*",'i');
    if (regex.test(brand)) {
        defaultColour = "68a51b"
        defaultStroke = "ffffff"
    }

    regex = new RegExp(".*sainsbury.*",'i');
    if (regex.test(brand)) {
        defaultColour = "f06c02"
        defaultStroke = "ffffff"
    }

    regex = new RegExp(".*spencer.*",'i');
    if (regex.test(brand)) {
        defaultColour = "bcd755"
        defaultStroke = "000000"
    }

    regex = new RegExp(".*M&S.*",'i');
    if (regex.test(brand)) {
        defaultColour = "bcd755"
        defaultStroke = "000000"
    }

    regex = new RegExp(".*waitrose.*",'i');
    if (regex.test(brand)) {
        defaultColour = "5d8019"
        defaultStroke = "ffffff"
    }

    regex = new RegExp("Nisa.*",'i');
    if (regex.test(brand)) {
        defaultColour = "25303b"
        defaultStroke = "fec912"
    }

    let palette = [defaultColour, defaultStroke]
    return palette
}