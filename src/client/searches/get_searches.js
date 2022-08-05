function get_searches(source)
{

    if (!source){ return }

    const storageKey = source + 'Search';

    let searchArray = JSON.parse(window.localStorage.getItem(storageKey));

    if (!searchArray) { return }

    return searchArray.search
}