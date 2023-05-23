#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const film = JSON.parse(body);
    const characters = film.characters;
    
    characters.forEach(function (characterURL) {
      request(characterURL, function (error, response, characterBody) {
        if (error) {
          console.log(error);
        } else {
          const character = JSON.parse(characterBody);
          console.log(character.name);
        }
      });
    });
  }
});
