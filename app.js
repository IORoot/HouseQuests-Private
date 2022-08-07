/**
 * Main entrypoint into Javascript application
 * 
 */
import { onload_searches } from './src/client/searches/onload_searches.js'
import { load_inspector } from './src/client/text_inspector/inspector_load.js'
import { list_blacklist } from './src/client/blacklist/list_blacklist.js'


// ┌─────────────────────────────────────┐
// │                                     │
// │             Run Functions           │
// │                                     │
// └─────────────────────────────────────┘
onload_searches()
load_inspector('positive')
load_inspector('negative')
list_blacklist()