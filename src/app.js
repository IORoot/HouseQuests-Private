/**
 * Main entrypoint into Javascript application
 * 
 */
import { onload_searches } from '../app/client/searches/onload_searches.js'
import { load_inspector } from '../app/client/text_inspector/inspector_load.js'
import { list_blacklist } from '../app/client/blacklist/list_blacklist.js'
import { list_saved_searches } from '../app/client/saved_searches/list_saved_searches.js'
import { load_event_listeners } from '../app/client/event_listeners/event_listeners.js'
import { intro_modal } from "../app/client/intro/intro_modal.js";
import { intro_tutorial } from "../app/client/intro/intro_tutorial.js";
import { mixpanel_analytics } from "../app/client/analytics/mixpanel_analytics.js";

show_spinner()

if (banned) {
    // send the 'close-me' command to main.js
    const { ipcRenderer } = require('electron');
    ipcRenderer.send('close-me')
}

intro_modal()
intro_tutorial()
mixpanel_analytics()

// ┌─────────────────────────────────────┐
// │                                     │
// │             Run Functions           │
// │                                     │
// └─────────────────────────────────────┘
onload_searches()
load_inspector('positive')
load_inspector('negative')
list_blacklist()
list_saved_searches()
load_event_listeners()

hide_spinner()