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

