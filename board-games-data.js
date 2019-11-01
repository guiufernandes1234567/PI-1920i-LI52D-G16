'use strict';

let request = require('request')
let gameObject = require('./aux modules/game-object') //pra usar com um metodo que leia Json

module.exports = {
    getPopularGames:getPopularGames,
    getGamesByName:getGamesByName,
    /*getAllLists:getAllLists,
    getListByName:getListByName,
    getGamesBoundByDuration:getGamesBoundByDuration,
    createList:createList,
    editList:editList,
    addGameToList:addGameToList,
    removeGameFromList:removeGameFromList*/
}

function processResponse(error, response, body) {
    if (error) this.executeOnError()
    let heavyArrayOfGames = JSON.parse(body).games
    let lightArrayOfGames = []
   
    heavyArrayOfGames.forEach(heavyGame => {
        lightArrayOfGames.push(new gameObject(
            heavyGame.id,
            heavyGame.name,
            heavyGame.year_published,
            heavyGame.min_players,
            heavyGame.max_players,
            heavyGame.min_playtime,
            heavyGame.max_playtime,
            heavyGame.min_age,
            heavyGame.description
        ))
    });
    this.executeOnSuccess(lightArrayOfGames)
}

function getPopularGames(finishResponse){
    let boardAtlasUrl = "https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M"
    request(boardAtlasUrl, processResponse.bind(finishResponse))
}


function getGamesByName(nameOfGame,finishResponse) {
    let boardAtlasUrl = `https://www.boardgameatlas.com/api/search?name=${nameOfGame}&client_id=SB1VGnDv7M`
    request(boardAtlasUrl, processResponse.bind(finishResponse))
}















