const requestURL = 'https://rodbasso.github.io/final-project/guides/towndata.json ';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const team = jsonObject['team'];

    for (let i = 0; i < team.length; i++ ) {
      if (team[i].name == "Anto" ||
          team[i].name == "Rod" ||
          team[i].name == "Ale")
      {     
        let card = document.createElement('section'); 
        let teamInfo = document.createElement('div');
        let teamImage = document.createElement('div');
        let name = document.createElement('h3');
        let level = document.createElement('p');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let photo = document.createElement('img');

        teamInfo.className = "team-info";
        teamImage.className = "team-image";
        name.textContent = team[i].name;
        level.textContent = team[i].level;
        level.className = "level";
        level.textContent = 'Level: ' + team[i].level;
        founded.textContent = 'Years Experience: ' + team[i].yearExperience;
        population.textContent = 'Population: ' + team[i].currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + team[i].averageRainfall;
        photo.setAttribute('src', "images/" + team[i].photo);
        photo.setAttribute('alt', team[i].name + ' ' + team[i].lastname + ' - ' + (i + 1));

        teamInfo.appendChild(name);
        teamInfo.appendChild(level);
        teamInfo.appendChild(founded);
        teamInfo.appendChild(population);
        teamInfo.appendChild(rainfall);
        teamImage.appendChild(photo);
        card.appendChild(teamInfo);
        card.appendChild(teamImage);

        document.querySelector('div.team-data').appendChild(card);
      }
    }
  });