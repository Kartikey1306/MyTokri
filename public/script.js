async function fetchData() {
    try {
        const response = await fetch('https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        const errorMessage = 'Error fetching data: ' + error.message;
        displayError(errorMessage);
        console.error(error);
    }
}
function displayData(data) {
    const apiDataDiv = document.getElementById('api-data');
    apiDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}
function displayError(errorMessage) {
    const apiDataDiv = document.getElementById('api-data');
    apiDataDiv.innerText = errorMessage;
}
fetchData();
