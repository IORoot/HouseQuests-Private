export function set_searches(search, source)
{

    if (!search){ return }
    if (!source){ return }

    const storageKey = source + 'Search';

    const searchArray = {
        'search': search,
        'source': source,
    }

    window.localStorage.setItem(storageKey, JSON.stringify(searchArray));
}