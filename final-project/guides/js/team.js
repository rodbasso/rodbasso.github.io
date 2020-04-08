const requestURL = 'https://rodbasso.github.io/final-project/guides/rafting.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const team = jsonObject['team'];

    for (let i = 0; i < team.length; i++ ) {
      if (team[i].name == "Christine Laos" ||
          team[i].name == "JP Riverson" ||
          team[i].name == "Han Kooki")
      {     
        let card = document.createElement('section'); 
        let teamInfo = document.createElement('div');
        let teamImage = document.createElement('div');
        let name = document.createElement('h3');
        let level = document.createElement('p');
        let experience = document.createElement('p');
        let email = document.createElement('p');
        let biography = document.createElement('p');
        let photo = document.createElement('img');

        teamInfo.className = "team-info";
        teamImage.className = "team-image";
        name.textContent = team[i].name;
        level.textContent = team[i].level;
        level.className = "level";
        level.textContent = 'Level: ' + team[i].level;
        experience.textContent = 'Years Experience: ' + team[i].yearExperience;
        email.textContent = 'email: ' + team[i].currentemail;
        biography.textContent = 'Biography: ' + team[i].biography;
        photo.setAttribute('src', "images/" + team[i].photo);
        photo.setAttribute('alt', team[i].name + ' ' + team[i].lastname + ' - ' + (i + 1));

        teamInfo.appendChild(name);
        teamInfo.appendChild(level);
        teamInfo.appendChild(experience);
        teamInfo.appendChild(email);
        teamInfo.appendChild(biography);
        teamImage.appendChild(photo);
        card.appendChild(teamInfo);
        card.appendChild(teamImage);

        document.querySelector('div.team-data').appendChild(card);
      }
    }
  });