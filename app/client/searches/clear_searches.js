export function clear_searches()
{
    window.localStorage.setItem('zooplaSearch', null);
    window.localStorage.setItem('zooplaAllSearch', null);
    window.localStorage.setItem('rightmoveSearch', null);
    window.localStorage.setItem('onthemarketSearch', null);
}