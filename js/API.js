// let CLE_API = '9d14fab5293af26cf8dc10b7ff26e891';

// const city = document.querySelector("#city");


// function getValue() {

//     const URL = 'https://api.openweathermap.org/data/2.5/weather?id=city&appid=9d14fab5293af26cf8dc10b7ff26e891&units=metric';

//     fetch(URL)

//     // Sélectionner l'élément input et récupérer sa valeur
//     var input = document.getElementById("city").value;

//     // Afficher la valeur
//     alert(input);
// }

// console.log(URL);


// document.addEventListener('DOMContentLoaded', () => {
//     const API_KEY = '9d14fab5293af26cf8dc10b7ff26e891';

//     document.getElementById('form').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const city = document.getElementById('city').value;
//         if (city) {
//             getWeather(city, API_KEY);
//         }
//     });

//     async function getWeather(city, apiKey) {
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error('City not found');
//             }
//             const data = await response.json();
//             updateUI(data);
//         } catch (error) {
//             showError(error.message);
//         } finally {
//             showLoading(false);
//         }
//     }

//     function updateUI(data) {
//         document.getElementById('temp').textContent = `${data.main.temp}°C`;
//         document.getElementById('feels').textContent = `${data.main.feels_like}°C`;
//         document.getElementById('humidity').textContent = `${data.main.humidity}%`;
//         document.getElementById('wind').textContent = `${data.wind.speed} m/s`;
//     }
//     function showLoading(isLoading) {
//         document.getElementById('loading').style.display = isLoading ? 'block' : 'none';
//     }

//     function showError(message) {
//         document.getElementById('error').textContent = message;
//     }

//     function clearError() {
//         document.getElementById('error').textContent = '';
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = '9d14fab5293af26cf8dc10b7ff26e891';
    const form = document.getElementById('form');
    const cityInput = document.getElementById('city');
    const tempDiv = document.getElementById('temp');
    const feelsDiv = document.getElementById('feels');
    const humidityDiv = document.getElementById('humidity');
    const windDiv = document.getElementById('wind');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const city = cityInput.value;
        fetchWeatherData(city);
    });

    function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeatherData(data);
                } else {
                    alert('Ville non trouvée');
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    }

    function displayWeatherData(data) {
        tempDiv.textContent = `${data.main.temp} °C`;
        feelsDiv.textContent = `${data.main.feels_like} °C`;
        humidityDiv.textContent = `${data.main.humidity} %`;
        windDiv.textContent = `${data.wind.speed} m/s`;
    }
});