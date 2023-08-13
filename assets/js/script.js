const API_kEY = 'cfOdOnf7Hnn2KB7JJI9A8zRhQQg';
const API_URL = 'https://ci-jshint.herokuapp.com/api';
const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));

document.getElementById('status').addEventListener('click', e => getStatus(e));

async function getStatus (e) {
    const queryString = `${API_URL}?api_key=${API_kEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response) {
        console.log(data.expiry);
    }
}