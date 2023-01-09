/**
 * Main entrypoint into Javascript application
 * 
 */
import { onload_searches } from '../app/client/searches/onload_searches.js'
import { load_inspector } from '../app/client/text_inspector/inspector_load.js'
import { list_blacklist } from '../app/client/blacklist/list_blacklist.js'
import { list_saved_searches } from '../app/client/saved_searches/list_saved_searches.js'
import { load_event_listeners } from '../app/client/event_listeners/event_listeners.js'
import { load_event_listeners_free } from '../app/client/event_listeners/event_listeners_free.js'
import { listener_authentication } from "../app/client/event_listeners/listener_authentication.js";
import { check_authentication } from "../app/client/authentication/check_authentication.js";
import { generate_uuid } from "../app/client/authentication/generate_uuid.js";
import { check_mac } from "../app/client/authentication/check_mac.js";
import { check_hostname } from "../app/client/authentication/check_hostname.js";
import { intro_modal } from "../app/client/intro/intro_modal.js";
import { intro_tutorial } from "../app/client/intro/intro_tutorial.js";
import { disable_premium_features } from "../app/client/disable/disable_premium_features.js";
import { enable_adverts } from "../app/client/adverts/enable_adverts.js";
import { stripe_manage_subscription_link } from "../app/client/stripe/manage_subscription_link.js";
import { mixpanel_analytics } from "../app/client/analytics/mixpanel_analytics.js";

show_spinner()
generate_uuid()
check_mac()
check_hostname()

await check_authentication()

if (banned){
    // send the 'close-me' command to main.js
    const {ipcRenderer} = require('electron');
    ipcRenderer.send('close-me')
}

listener_authentication()
intro_modal()
intro_tutorial()
mixpanel_analytics()

// ┌─────────────────────────────────────┐
// │                                     │
// │             Run Functions           │
// │                                     │
// └─────────────────────────────────────┘
if (authenticated)
{
    onload_searches()
    load_inspector('positive')
    load_inspector('negative')
    list_blacklist()
    list_saved_searches()
    load_event_listeners()
    stripe_manage_subscription_link()
}

if (!authenticated)
{
    onload_searches()
    load_event_listeners_free()
    disable_premium_features()
    enable_adverts()
}

hide_spinner()