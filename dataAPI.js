export default function fetchData(url) {
    const result = fetch(url)
    .then(response => response.json())
    .then(data => data)
    
    return result
}