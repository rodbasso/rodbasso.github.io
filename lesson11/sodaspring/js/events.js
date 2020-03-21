const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Soda Springs") {
                let div = document.createElement('div');
                let card = document.createElement('section');
                card.appendChild(div);
                let data1 = document.createElement('p');
                data1.textContent = towns[i].events["0"];
                div.appendChild(data1);
                let data2 = document.createElement('p');
                data2.textContent = towns[i].events["1"];
                div.appendChild(data2);
                let data3 = document.createElement('p');
                data3.textContent = towns[i].events["2"];
                div.appendChild(data3);
                document.querySelector('div.town-data').appendChild(card);
            }




        }

    });