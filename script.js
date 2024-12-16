const searchbtn = document.getElementById('btn');
const results = document.getElementById('Results');
const searchResults = document.getElementById('Results');
let key = '73e40dbd9c6a48b3971114904241612';
btn.addEventListener('click', getWeather);

async function getWeather() {
    let city = document.getElementById('Cityin');
    console.log(city.value);
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=metric`, {
        });
        const data = await response.json();
        console.log(data);
        searchResults.innerHTML = `<h2>${data['name']}</h2>
        <p>Tempreture ${data['main']['temp']}°C</p>
        <p>Feels Like ${data['main']['feels_like']}°C</p>
        <p>High of ${data['main']['temp_max']}°C</p>
        <p>Low of ${data['main']['temp_min']}°C</p>
        <p>The Weather is ${data['weather'][0]['description']}</p > `;
    } catch (error) {
        console.error('Error:', error);
    }

}
