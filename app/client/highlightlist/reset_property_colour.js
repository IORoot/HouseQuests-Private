
import { change_icon } from "./change_icon.js"
import { check_highlight_list_hex } from "./check_highlight_list_hex.js"

export function reset_property_colour(nextPropertyID)
{

    if (!currentProperty){ return }
    if (currentProperty.id == nextPropertyID){ return }

    let hex = window['hex_' + currentProperty.source]

    let customHex = check_highlight_list_hex(currentProperty.id)

    if (customHex){ hex = customHex }

    change_icon(currentProperty.id, hex)

    return
}