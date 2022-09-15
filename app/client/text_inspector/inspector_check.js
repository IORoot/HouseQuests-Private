// ┌─────────────────────────────────────┐
// │                                     │
// │    Check for 'inspector words       │
// │                                     │
// └─────────────────────────────────────┘
import { check_words } from './check_words.js'

export function inspector_check(sentance)
{
    sentance = check_words(sentance, 'positive', 'emerald-500')
    sentance = check_words(sentance, 'negative', 'red-500')
    return sentance
}