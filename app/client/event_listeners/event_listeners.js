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
import { listener_show_openpass } from "./listener_show_openpass.js";
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
import { listener_refresh_page } from "./listener_refresh_page.js";
import { listener_goto_search_url } from "./listener_goto_search_url.js";
import { listener_blacklist_truncate } from "./listener_blacklist_truncate.js";

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
    listener_refresh_page()
    listener_goto_search_url()
    listener_blacklist_truncate()
    
    filter_monochrome()
    filter_invert()
    filter_dark()
    filter_sepia()

    // OpenPass layers
    // GYMS
    listener_show_openpass({
        'layerID':      'local-gyms',
        'buttonID':     'load-local-gyms',
        'openpassKey':  'leisure',
        'openpassValue':'fitness_centre',
        'fill':         'rgba(30,30,30, 1.0)',
        'stroke':       'rgba(120, 0, 0, 1.0)',
    })

    // Convenience stores
    listener_show_openpass({
        'layerID':      'local-convenience',
        'buttonID':     'load-local-convenience',
        'openpassKey':  'shop',
        'openpassValue':'convenience',
        'fill':         'rgba(255, 255, 255, 1.0)',
        'stroke':       'rgba(0, 0, 0, 1.0)',
    })

    // Coffee
    listener_show_openpass({
        'layerID':      'local-coffee',
        'buttonID':     'load-local-coffee',
        'openpassKey':  'amenity',
        'openpassValue':'cafe',
        'fill':         'rgba(120, 53, 15, 1.0)',
        'stroke':       'rgba(245, 158, 11, 1.0)',
    })

    // Schools
    listener_show_openpass({
        'layerID':      'local-school',
        'buttonID':     'load-local-schools',
        'openpassKey':  'amenity',
        'openpassValue':'school',
        'fill':         'rgba(252, 211, 77, 1.0)',
        'stroke':       'rgba(245, 245, 245, 1.0)',
    })

    // Supermarkets
    listener_show_openpass({
        'layerID':      'local-supermarkets',
        'buttonID':     'load-local-supermarkets',
        'openpassKey':  'shop',
        'openpassValue':'supermarket',
        'fill':         'rgba(255, 255, 255, 1.0)',
        'stroke':       'rgba(0, 0, 0, 1.0)',
    })

    // Post-Office
    listener_show_openpass({
        'layerID':      'local-post-office',
        'buttonID':     'load-local-post-office',
        'openpassKey':  'amenity',
        'openpassValue':'post_office',
        'fill':         'rgba(255, 0, 0, 1.0)',
        'stroke':       'rgba(0, 0, 0, 1.0)',
    })

    // Train/Tube Station
    listener_show_openpass({
        'layerID':      'local-station',
        'buttonID':     'load-local-station',
        'openpassKey':  'public_transport',
        'openpassValue':'station',
        'fill':         'rgba(0, 0, 240, 1.0)',
        'stroke':       'rgba(255, 255, 255, 1.0)',
    })

    // Bus Stop
    listener_show_openpass({
        'layerID':      'local-bus-stop',
        'buttonID':     'load-local-bus-stop',
        'openpassKey':  'public_transport',
        'openpassValue':'platform',
        'fill':         'rgba(0, 240, 0, 1.0)',
        'stroke':       'rgba(255, 255, 255, 1.0)',
    })

    // Airport
    listener_show_openpass({
        'layerID':      'local-airport',
        'buttonID':     'load-local-airport',
        'openpassKey':  'aeroway',
        'openpassValue':'aerodrome',
        'fill':         'rgba(120, 120, 0, 1.0)',
        'stroke':       'rgba(5, 150, 255, 1.0)',
    })

    // Doctor
    listener_show_openpass({
        'layerID':      'local-doctor',
        'buttonID':     'load-local-doctor',
        'openpassKey':  'amenity',
        'openpassValue':'doctors',
        'fill':         'rgba(255, 255, 255, 1.0)',
        'stroke':       'rgba(230, 0, 0, 1.0)',
    })

    // Hospital
    listener_show_openpass({
        'layerID':      'local-hospital',
        'buttonID':     'load-local-hospital',
        'openpassKey':  'amenity',
        'openpassValue':'hospital',
        'fill':         'rgba(255, 200, 200, 1.0)',
        'stroke':       'rgba(230, 0, 0, 1.0)',
    })
}
