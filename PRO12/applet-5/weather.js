const search = document.querySelector('.search-box button');
search.addEventListener('click', () => {
    const apikey = '5ff93919613f6bf4102d53e26808d0a9';
    const city = document.querySelector('.search-box input').value;
    
    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod !== 200) { 
                console.error('Error fetching weather data:', json.message);
                return;
            }

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.temperature');
            const description = document.querySelector('.description');
            const humidity = document.querySelector('.humidity span');
            const wind = document.querySelector('.wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = './photo/clear.png';
                    break;
                case 'Rain':
                    image.src = './photo/rain.png';
                    break;
                case 'Snow':
                    image.src = './photo/snow.png';
                    break;
                case 'Mist':
                    image.src = './photo/mist.png';
                    break;
                case 'Haze':
                    image.src = './photo/mist.png';
                    break;
                default:
                    image.src = './photo/cloud.png';
                    break;
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} km/h`; 
        })
        .catch(error => console.error('Error fetching weather data:', error));
});