export function getColour_Lines(lineName) {
    return  lineName == "C2C" ? "rgba(178, 137, 191, 1.0)" : 
            lineName == "Chiltern Railways" ? "rgba(237, 1, 140, 1.0)" : 
            lineName == "Great Northern" ? "rgba(206, 156, 97, 1.0)" : 
            lineName == "Great Western" ? "rgba(46, 48, 146, 1.0)" : 
            lineName == "Greater Anglia" ? "rgba(138, 143, 164, 1.0)" : 
            lineName == "Heathrow Connect" ? "rgba(102,102,153,1.0)" : 
            lineName == "Heathrow Express" ? "rgba(89, 196, 189, 1.0)" : 
            lineName == "London Midland" ? "rgba(140, 197, 62, 1.0)" : 
            lineName == "South Western" ? "rgba(239, 29, 34, 1.0)" : 
            lineName == "Southeastern" ? "rgba(4, 114, 187, 1.0)" : 
            lineName == "Southern" ? "rgba(0, 165, 79, 1.0)" : 
            lineName == "TfL Rail" ? "rgba(3, 23, 163, 1.0)" : 
            lineName == "Thameslink" ? "rgba(176, 1, 106, 1.0)" : 
            lineName == "Bakerloo" ? "rgba(153, 102, 51,1.0)" : 
            lineName == "Central" ? "rgba(204,51,51,1.0)" : 
            lineName == "Circle" ? "rgba(255,204,0,1.0)" : 
            lineName == "District" ? "rgba(0,102,51,1.0)" : 
            lineName == "Hammersmith and City" ? "rgba(204,153,153,1.0)" : 
            lineName == "Jubilee" ? "rgba(134,143,152,1.0)" : 
            lineName == "Metropolitan" ? "rgba(102,0,102,1.0)" : 
            lineName == "Northern" ? "rgba(0,0,0,1.0)" : 
            lineName == "Piccadilly" ? "rgba(0,0,153,1.0)" : 
            lineName == "Victoria" ? "rgba(0,153,204,1.0)" : 
            lineName == "Waterloo and City" ? "rgba(102,204,204,1.0)" : 
            lineName == "DLR" ? "rgba(0,153,153,1.0)" : 
            lineName == "Overground" ? "rgba(255,102,0,1.0)" : 
            lineName == "Tramlink" ? "rgba(102,204,0,1.0)" :
            lineName == "Elizabeth" ? "rgba(102,102,153,1.0)" : 
            "rgba(255,102,255,1.0)"
}