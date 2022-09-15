export function update_search_counts(source, count)
{

    let totalMarkerElement = document.getElementById('totalMarkerCount');
    totalMarkerCount += count
    totalMarkerElement.innerHTML = totalMarkerCount

    document.getElementById(source+'InputCount').innerHTML = count
}