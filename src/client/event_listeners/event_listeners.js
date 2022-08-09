/**
 * ┌─────────────────────────────────────┐
 * │                                     │
 * │     Event Listener Initialiser      │
 * │                                     │
 * └─────────────────────────────────────┘
 */
import { listener_paste } from "./listener_paste.js";
import { listener_map } from "./listener_map.js";
import { listener_exclude_button } from "./listener_exclude_button.js";
import { listener_toggle_layers } from "./listener_toggle_layers.js";
import { listener_toggle_blacklist } from "./listener_toggle_blacklist.js";
import { listener_show_crimes } from "./listener_show_crimes.js";
import { listener_blacklist_item } from "./listener_blacklist_item.js";
import { listener_blacklist_item_remove } from "./listener_blacklist_item_remove.js";
import { listener_inspector_text } from "./listener_inspector_text.js";
import { listener_clear_all_markers } from "./listener_clear_all_markers.js";
import { listener_clear_highlightlist } from "./listener_clear_highlightlist.js";
import { listener_change_property_colour } from "./listener_change_property_colour.js";
import { filter_monochrome } from "./listener_filter_monochrome.js";
import { filter_invert } from "./listener_filter_invert.js";
import { filter_dark } from "./listener_filter_dark.js";
import { filter_sepia } from "./listener_filter_sepia.js";

export function load_event_listeners(){
    listener_paste()
    listener_map()
    listener_exclude_button()
    listener_toggle_layers()
    listener_toggle_blacklist()
    listener_show_crimes()
    listener_blacklist_item()
    listener_blacklist_item_remove()
    listener_inspector_text()
    listener_clear_all_markers()
    listener_clear_highlightlist()
    listener_change_property_colour()
    filter_monochrome()
    filter_invert()
    filter_dark()
    filter_sepia()
}
