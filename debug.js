const fetch = require("node-fetch");
//setInterval(fetch("http://localhost:8080").then(response => response.json()).then(jsonData => console.log(jsonData)),100)
async function fetchData() {
    const response = await fetch('http://localhost:8080',{
        method: 'GET',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
}

fetchData().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
