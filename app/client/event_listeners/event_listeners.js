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
import { listener_show_supermarkets } from "./listener_show_supermarkets.js";
import { listener_show_schools } from "./listener_show_schools.js";
import { listener_show_convenience } from "./listener_show_convenience.js";
import { listener_show_coffee } from "./listener_show_coffee.js";
import { listener_blacklist_item } from "./listener_blacklist_item.js";
import { listener_blacklist_item_remove } from "./listener_blacklist_item_remove.js";
import { listener_inspector_text } from "./listener_inspector_text.js";
import { listener_clear_all_markers } from "./listener_clear_all_markers.js";
import { listener_clear_highlightlist } from "./listener_clear_highlightlist.js";
import { listener_change_property_colour } from "./listener_change_property_colour.js";
import { listener_zoopla_get_all } from "./listener_zoopla_get_all.js";
import { listener_export } from "./listener_export.js";
import { listener_import } from "./listener_import.js";
import { listener_searches_load } from "./listener_searches_load.js";
import { listener_searches_save } from "./listener_searches_save.js";
import { listener_searches_overwrite } from "./listener_searches_overwrite.js";
import { listener_ratings_crimes } from "./listener_ratings_crimes.js";
import { listener_ratings_renters } from "./listener_ratings_renters.js";
import { listener_toggle_intro_modal } from "./listener_toggle_intro_modal.js";
import { listener_streetview } from "./listener_streetview.js";
import { listener_website_link } from "./listener_website_link.js";

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
    listener_show_supermarkets()
    listener_show_schools()
    listener_show_convenience()
    listener_show_coffee()
    listener_blacklist_item()
    listener_blacklist_item_remove()
    listener_inspector_text()
    listener_clear_all_markers()
    listener_clear_highlightlist()
    listener_change_property_colour()
    listener_zoopla_get_all()
    listener_export()
    listener_import()
    listener_searches_save()
    listener_searches_load()
    listener_searches_overwrite()
    listener_ratings_crimes()
    listener_ratings_renters()
    listener_toggle_intro_modal()
    listener_streetview()
    listener_website_link()
    
    filter_monochrome()
    filter_invert()
    filter_dark()
    filter_sepia()
}
