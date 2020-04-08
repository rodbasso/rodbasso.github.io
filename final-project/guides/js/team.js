const requestURL = 'https://rodbasso.github.io/final-project/guides/towndata.json ';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Anto" ||
          towns[i].name == "Rod" ||
          towns[i].name == "Ale")
      {     
        let card = document.createElement('section'); 
        let townInfo = document.createElement('div');
        let townImage = document.createElement('div');
        let name = document.createElement('h3');
        let level = document.createElement('p');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let photo = document.createElement('img');

        townInfo.className = "town-info";
        townImage.className = "town-image";
        name.textContent = towns[i].name;
        level.textContent = towns[i].level;
        level.className = "level";
        founded.textContent = 'Years Experience: ' + towns[i].yearExperience;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        photo.setAttribute('src', "images/" + towns[i].photo);
        photo.setAttribute('alt', towns[i].name + ' ' + towns[i].lastname + ' - ' + (i + 1));

        townInfo.appendChild(name);
        townInfo.appendChild(level);
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