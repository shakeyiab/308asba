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

const API_URL = 'https://api.thecatapi.com/v1/images/search'; // Replace with your API URL
let currentPage = 1;
let totalPages = 2;

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    fetchImages(query, currentPage);
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        const query = document.getElementById('searchInput').value;
        fetchImages(query, currentPage);
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        const query = document.getElementById('searchInput').value;
        fetchImages(query, currentPage);
    }
});

async function fetchImages(query, page) {
    const response = await fetch(`${API_URL}?search=${query}&page=${page}`);
    const data = await response.json();
    
    totalPages = data.totalPages; // Assuming your API returns total pages info
    displayImages(data.images); // Assuming your API returns images array

    document.getElementById('pageInfo').innerText = `Page ${page} of ${totalPages}`;
    document.getElementById('prevButton').disabled = (page === 1);
    document.getElementById('nextButton').disabled = (page === totalPages);
}

function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous images
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url; // Adjust according to your API response
        imgElement.alt = image.description; // Adjust according to your API response
        gallery.appendChild(imgElement);
    });
}