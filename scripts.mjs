// script.js using Axios
async function fetchPosts() {
  try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      displayPosts(response.data);
  } catch (error) {
      console.error('There has been a problem with your Axios operation:', error);
  }
}

// The rest of the code remains the same...
