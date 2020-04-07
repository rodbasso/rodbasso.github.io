const requestURL = 'https://github.com/rodbasso/rodbasso.github.io/tree/master/final-project/guides/team.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const team = jsonObject['team'];

    for (let i = 0; i < team.length; i++ ) {
      if (towns[i].name == "Fish Haven" ||
          towns[i].name == "Preston" ||
          towns[i].name == "Soda Springs")
      {     
        let card = document.createElement('section'); 
        let townInfo = document.createElement('div');
        let townImage = document.createElement('div');
        let name = document.createElement('h3');
        let motto = document.createElement('p');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let photo = document.createElement('img');

        townInfo.className = "town-info";
        townImage.className = "town-image";
        name.textContent = team[i].name;
        motto.textContent = team[i].motto;
        motto.className = "motto";
        founded.textContent = 'Year Founded: ' + team[i].yearFounded;
        population.textContent = 'Population: ' + team[i].currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + team[i].averageRainfall;
        photo.setAttribute('src', "images/" + team[i].photo);
        photo.setAttribute('alt', team[i].name + ' ' + team[i].lastname + ' - ' + (i + 1));

        townInfo.appendChild(name);
        townInfo.appendChild(motto);
        townInfo.appendChild(founded);
        townInfo.appendChild(population);
        townInfo.appendChild(rainfall);
        townImage.appendChild(photo);
        card.appendChild(townInfo);
        card.appendChild(townImage);

        document.querySelector('div.town-data').appendChild(card);
      }
    }
  });