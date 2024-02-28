
// ╭───────────────────────────────────────────────────────────────────────────╮
// │  Runs the regex against the specific text field and returns true / false    │
// ╰───────────────────────────────────────────────────────────────────────────╯
export function filter_text_field(text_field, regex)
{
    if (regex == ""){ return false; }
    if (text_field == ""){ return false; }

    if (regex.test(text_field)){
        return true;
    }

    return false;
}