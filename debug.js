setInterval(() => {
  fetch("http://localhost:8080")
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData));
}, 100);
