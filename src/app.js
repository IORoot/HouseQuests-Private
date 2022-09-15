/**
 * Main entrypoint into Javascript application
 * 
 */
import { onload_searches } from './client/searches/onload_searches.js'
import { load_inspector } from './client/text_inspector/inspector_load.js'
import { list_blacklist } from './client/blacklist/list_blacklist.js'
import { list_saved_searches } from './client/saved_searches/list_saved_searches.js'
import { load_event_listeners } from './client/event_listeners/event_listeners.js'
import { listener_authentication } from "./client/event_listeners/listener_authentication.js";
import { check_authentication } from "./client/authentication/check_authentication.js";

await check_authentication()
listener_authentication()

// ┌─────────────────────────────────────┐
// │                                     │
// │             Run Functions           │
// │                                     │
// └─────────────────────────────────────┘
console.log('what is authenticated: '+ authenticated)
if (authenticated)
{
    onload_searches()
    load_inspector('positive')
    load_inspector('negative')
    list_blacklist()
    list_saved_searches()
    load_event_listeners()
}