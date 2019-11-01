'use strict';

let request = require('request')
let gameObject = require('./aux modules/game-object') //pra usar com um metodo que leia Json automaticamente

module.exports = {
    getPopularGames:getPopularGames,
   /* getGamesByName:getGamesByName,
    getAllLists:getAllLists,
    getListByName:getListByName,
    getGamesBoundByDuration:getGamesBoundByDuration,
    createList:createList,
    editList:editList,
    addGameToList:addGameToList,
    removeGameFromList:removeGameFromList*/
}

function getPopularGames(executeOnSuccess,executeOnError){
    let boardAtlasUrl = "https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M"
    request(boardAtlasUrl, processResponse)

    function processResponse(error, response, body) {
        if (error) executeOnError()
        
        let lightArrayOfGames = []
        let heavyArrayOfGames = JSON.parse(body).games
        heavyArrayOfGames.forEach(heavyGame => {
            lightArrayOfGames.push(new GameObject(
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
        executeOnSuccess(lightArrayOfGames)
    }
}

function GameObject(...args) {
    this.id = args[0],
    this.name = args[1],
    this.year_published = args[2],
    this.min_players = args[3],
    this.max_players = args[4],
    this.min_playtime=  args[5],
    this.max_playtime = args[6],
    this.min_age = args[7],
    this.description = args[8]
}














