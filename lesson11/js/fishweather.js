const currentAPI = 'https://api.openweathermap.org/data/2.5/weather?id=5585000&APPID=d3a40e67414cc24f22bceef496697e3b&units=imperial';

fetch(currentAPI)
  .then((response) => response.json())
  .then((jsObject) => {

    let condition = jsObject.weather[0].main;
    document.getElementById('currentcondition').textContent = condition  
    let temp = Math.round(jsObject.main.temp);
    document.getElementById('currenttemp').textContent = temp;   
    let humidity = jsObject.main.humidity;
    document.getElementById('humidity').textContent = humidity;
    let windSpeed = Math.round(jsObject.wind.speed);
    document.getElementById('windspeed').textContent = windSpeed;  
    let speedFactor = Math.pow(windSpeed, 0.16);
    let windChill = Math.round(35.74 + (0.6215 * temp) - (35.75 * speedFactor) + (0.4275 * temp * speedFactor));

    if (temp <= 50 && windSpeed >= 3) {
      document.getElementById("windchill").innerHTML = windChill;
    } else {
      document.getElementById("windchilllabel").innerHTML = "N/A";
    }

  });


// Forecast weather
const forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5585000&APPID=d3a40e67414cc24f22bceef496697e3b&units=imperial';

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {

    var i = 0;
    var j = 0;

    
    while (i < 40 && j < 5) {
      var time = jsObject.list[i].dt_txt;
      if (time.includes('18:00:00')) {      
        let date = new Date(time);
        let weekdayOption = {
          weekday: 'short'
        };
        
        let weekday = date.toLocaleDateString('en-US', weekdayOption);
        let labelId = 'label' + j;
        document.getElementById(labelId).textContent = weekday;        
        let icon = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        let description = jsObject.list[i].weather[0].description;
        let imageId = 'image' + j;
        document.getElementById(imageId).setAttribute('src', icon);
        document.getElementById(imageId).setAttribute('alt', description);      
        let temp = Math.round(jsObject.list[i].main.temp);
        let tempId = 'temp' + j;
        document.getElementById(tempId).textContent = temp;

        j++;
      }

      i++;
    }

  });