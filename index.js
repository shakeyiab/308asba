//async function logJSONData() {
    //const response = await fetch("https://api.thecatapi.com/v1/images/search");
    //const jsonData = await response.json();
   /// console.log(jsonData);
//}
//logJSONData()

//fetch("https://api.thecatapi.com/v1/images/search")
//.then(res => res.json())
//.then(data => console.log(data))
fetch("https://api.thecatapi.com/v1/images/search")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


const API = 'https://api.thecatapi.com/v1/images/search'; 

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    fetchImages(query);
});



async function fetchImages(query) {
    try {
        const response = await fetch(`${API}?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('results').innerHTML = 'Error fetching data.';
    }
}




