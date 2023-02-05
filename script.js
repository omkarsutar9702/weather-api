const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3ce915c330mshb6db8c25db91d96p15ec10jsna23b89435413',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
let result = document.getElementById('reasult');
let city = document.getElementById('city');

const getweather = () => {
    let cityname = city.value;
    if (cityname.length == 0) {
        reasult.innerHTML = `<h3>Please Enter the City </h3>`;
    }
    else {
        city.value = '';
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityname, options)
            .then(response => response.json())
            .then((response) => {
                reasult.innerHTML = `
            <h3>${cityname}</h3>
            <div class = 'temp-container'>
            <h1>${response.temp}&#176;</h1>
            <div class = 'temp-max'>
            <div>
            <h5>Max: ${response.max_temp}&#176</h5>
                        </div>
                        <div>
                        <h5>Min: ${response.min_temp}&#176</h5>
                        </div>
                        </div>
                        
                        </div>
                        <div class = 'wind-humidity'>
                        <div>
                        <h5>Wind: ${response.wind_speed}km/h</h5>
                        </div>
                        <div>
                        <h5>Humidity: ${response.humidity}%</h5>
                        </div>
                        </div>`
            })
            .catch(err => console.error(err));
    }
}
submit.addEventListener('click', (e) => {
    e.preventDefault()
    getweather(city.value)
})
window.addEventListener('load', getweather)