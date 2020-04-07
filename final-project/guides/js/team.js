const requestURL = 'C:\Users\rbasso\iCloudDrive\01. Rod Basso\01. BYUI\AAS BYUI\AAS\06. WINTER SEMESTER 2020\CIT230\Lab\rodbasso.github.io\final-project\guides';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven" ||
        towns[i].name == "Preston" ||
        towns[i].name == "Soda Springs") {
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
        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        motto.className = "motto";
        founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        photo.setAttribute('src', "images/" + towns[i].photo);
        photo.setAttribute('alt', towns[i].name + ' ' + towns[i].lastname + ' - ' + (i + 1));

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