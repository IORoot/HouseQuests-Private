/**
 * ┌─────────────────────────────────────┐
 * │                                     │
 * │     Event Listener Initialiser      │
 * │                                     │
 * └─────────────────────────────────────┘
 */
import { listener_paste } from "./listener_paste.js";
import { listener_search } from "./listener_search.js";
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
import { listener_change_property_icon } from "./listener_change_property_icon.js";
import { listener_export } from "./listener_export.js";
import { listener_export_palette } from "./listener_export_palette.js";
import { listener_import } from "./listener_import.js";
import { listener_import_colour_palette } from "./listener_import_colour_palette.js";
import { listener_searches_load } from "./listener_searches_load.js";
import { listener_searches_save } from "./listener_searches_save.js";
import { listener_searches_overwrite } from "./listener_searches_overwrite.js";
import { listener_ratings_crimes } from "./listener_ratings_crimes.js";
import { listener_ratings_renters } from "./listener_ratings_renters.js";
import { listener_toggle_intro_modal } from "./listener_toggle_intro_modal.js";
import { listener_toggle_tutorial_modal } from "./listener_toggle_tutorial_modal.js";
import { listener_streetview } from "./listener_streetview.js";
import { listener_website_link } from "./listener_website_link.js";
import { listener_refresh_page } from "./listener_refresh_page.js";
import { listener_goto_search_url } from "./listener_goto_search_url.js";
import { listener_blacklist_truncate } from "./listener_blacklist_truncate.js";
import { listener_external_links } from "./listener_external_links.js";
import { listener_palette_add } from "./listener_palette_add.js";
import { listener_palette_item_remove } from "./listener_palette_item_remove.js";
import { listener_clear_palette } from "./listener_clear_palette.js";
import { listener_filter_exclude_property } from "./listener_filter_exclude_property.js";
import { listener_filter_highlight_property } from "./listener_filter_highlight_property.js";

import { filter_monochrome } from "./listener_filter_monochrome.js";
import { filter_invert } from "./listener_filter_invert.js";
import { filter_dark } from "./listener_filter_dark.js";
import { filter_sepia } from "./listener_filter_sepia.js";


export function load_event_listeners(){
    listener_paste()
    listener_search()
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
    listener_change_property_icon()
    listener_export()
    listener_export_palette()
    listener_import()
    listener_import_colour_palette()
    listener_searches_save()
    listener_searches_load()
    listener_searches_overwrite()
    listener_ratings_crimes()
    listener_ratings_renters()
    listener_toggle_intro_modal()
    listener_toggle_tutorial_modal()
    listener_streetview()
    listener_website_link()
    listener_refresh_page()
    listener_goto_search_url()
    listener_blacklist_truncate()
    listener_external_links()
    listener_palette_add()
    listener_palette_item_remove()
    listener_clear_palette()
    listener_filter_exclude_property()
    listener_filter_highlight_property()
    
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
        'fill':         '1e1e1e',
        'stroke':       '780000',
        'iconStyle':    icon_local_gym
    })

    // Convenience stores
    listener_show_openpass({
        'layerID':      'local-convenience',
        'buttonID':     'load-local-convenience',
        'openpassKey':  'shop',
        'openpassValue':'convenience',
        'fill':         'ffffff',
        'stroke':       '000000',
        'iconStyle':    icon_local_convenience
    })

    // Coffee
    listener_show_openpass({
        'layerID':      'local-coffee',
        'buttonID':     'load-local-coffee',
        'openpassKey':  'amenity',
        'openpassValue':'cafe',
        'fill':         '78350f',
        'stroke':       'f59e0b',
        'iconStyle':    icon_local_cafe
    })

    // Schools
    listener_show_openpass({
        'layerID':      'local-school',
        'buttonID':     'load-local-schools',
        'openpassKey':  'amenity',
        'openpassValue':'school',
        'fill':         'fcd34d',
        'stroke':       'f5f5f5',
        'iconStyle':    icon_local_school
    })

    // Supermarkets
    listener_show_openpass({
        'layerID':      'local-supermarkets',
        'buttonID':     'load-local-supermarkets',
        'openpassKey':  'shop',
        'openpassValue':'supermarket',
        'fill':         'ffffff',
        'stroke':       '000000',
        'iconStyle':    icon_local_supermarket
    })

    // Post-Office
    listener_show_openpass({
        'layerID':      'local-post-office',
        'buttonID':     'load-local-post-office',
        'openpassKey':  'amenity',
        'openpassValue':'post_office',
        'fill':         'ff0000',
        'stroke':       '000000',
        'iconStyle':    icon_local_post
    })

    // Train/Tube Station
    listener_show_openpass({
        'layerID':      'local-station',
        'buttonID':     'load-local-station',
        'openpassKey':  'public_transport',
        'openpassValue':'station',
        'fill':         '0000f0',
        'stroke':       'ffffff',
        'iconStyle':    icon_local_station
    })

    // Bus Stop
    listener_show_openpass({
        'layerID':      'local-bus-stop',
        'buttonID':     'load-local-bus-stop',
        'openpassKey':  'public_transport',
        'openpassValue':'platform',
        'fill':         '00f000',
        'stroke':       'ffffff',
        'iconStyle':    icon_local_bus
    })

    // Airport
    listener_show_openpass({
        'layerID':      'local-airport',
        'buttonID':     'load-local-airport',
        'openpassKey':  'aeroway',
        'openpassValue':'aerodrome',
        'fill':         '787800',
        'stroke':       '0596ff',
        'iconStyle':    icon_local_airport
    })

    // Doctor
    listener_show_openpass({
        'layerID':      'local-doctor',
        'buttonID':     'load-local-doctor',
        'openpassKey':  'amenity',
        'openpassValue':'doctors',
        'fill':         'ffffff',
        'stroke':       'e60000',
        'iconStyle':    icon_local_doctor
    })

    // Hospital
    listener_show_openpass({
        'layerID':      'local-hospital',
        'buttonID':     'load-local-hospital',
        'openpassKey':  'amenity',
        'openpassValue':'hospital',
        'fill':         'ffc8c8',
        'stroke':       'e60000',
        'iconStyle':    icon_local_hospital
    })
}
