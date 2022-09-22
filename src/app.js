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
import { listener_authentication_intro } from "../app/client/event_listeners/listener_authentication_intro.js";
import { check_authentication } from "../app/client/authentication/check_authentication.js";
import { intro_modal } from "../app/client/intro/intro_modal.js";
import { disable_premium_features } from "../app/client/disable/disable_premium_features.js";

await check_authentication()
listener_authentication()
listener_authentication_intro()
intro_modal()

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
}

if (!authenticated)
{
    onload_searches()
    load_event_listeners_free()
    disable_premium_features()
}