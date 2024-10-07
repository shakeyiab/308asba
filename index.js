//Use the fetch API or Axios to communicate with an external web API. 
//Use the data provided by this API to populate your application’s content and features.
fetch("https://api.thecatapi.com/v1/images/search")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

//Create user interaction with the API through a search feature, 
//paginated gallery, or similar. This feature should use GET requests to retrieve associated data.
const API = 'https://api.thecatapi.com/v1/images/search'; 

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    fetchImages(query);
});
async function fetchImages(query) {
    try {
        const response = await fetch(`${API}?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error("error");

        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('results').innerHTML = 'Error';
    }
}

// Function that fetches a random dog image 
//from the APMake use of Promises and async/await syntax as appropriate.
function fetchRandomDogImage() {
    return new Promise((resolve, reject) => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('error');
                }
                return response.json();
            })
            .then(data => {
                resolve(data.message);
            })
            .catch(error => {
                reject('error trying to fetch dog ' + error.message);
            });
    });
}

// Button event listener
document.getElementById("fetchDogButton").addEventListener("click", () => {
    // Show loading message
    const messageElement = document.getElementById("message");
    messageElement.textContent = "getting a dog image...";

    // Call the function that fetches the dog image
    fetchRandomDogImage()
        .then(imageUrl => {
            // Set the image source and clear the message
            document.getElementById("dogImage").src = imageUrl;
            messageElement.textContent = "";
        })
        .catch(error => {
            // Handle the error
            messageElement.textContent = error;
            document.getElementById("dogImage").src = ""; // Clear the image on error
        });
});
