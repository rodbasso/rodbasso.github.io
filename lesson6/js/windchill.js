function WindChill() {
  var temp = document.getElementById("currtemp").innerHTML;
  var windSpeed = document.getElementById("windspeed").innerHTML;
  var speedFactor = Math.pow(windSpeed, 0.16);
  var windChill = Math.round(35.74 + (0.6215 * temp) - 
                  (35.75 * speedFactor) + 
                  (0.4275 * temp * speedFactor));

  if (temp <= 50 && windSpeed >= 3) {
    document.getElementById("windchill").innerHTML = windChill;
  }
  else {
    document.getElementById("windchilltag").innerHTML = "N/A";
  }
}