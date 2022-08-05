// ┌─────────────────────────────────────┐
// │                                     │
// │    Check for 'inspector words       │
// │                                     │
// └─────────────────────────────────────┘

function inspector_check(sentance)
{
    sentance = check_words(sentance, 'positive', 'emerald-500')
    sentance = check_words(sentance, 'negative', 'red-500')
    return sentance
}