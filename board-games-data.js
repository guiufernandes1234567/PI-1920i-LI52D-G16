'use strict';

let request = require('request')
let gameObject = require('./aux modules/game-object') 

module.exports = {
    getPopularGames:getPopularGames,
    getGamesByName:getGamesByName,
    searchGamesByName:searchGamesByName
}

function processResponse(error, response, body) {
    if (error) this.executeOnError(502)
    let lightArrayOfGames = fromBodyToArrayOfGames(body)
    this.executeOnSuccess(lightArrayOfGames)
}

function getPopularGames(finishResponse){
    let boardAtlasUrl = "https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M"
    request(boardAtlasUrl, processResponse.bind(finishResponse))
}


function searchGamesByName(nameOfGame,finishResponse) {
    let boardAtlasUrl = `https://www.boardgameatlas.com/api/search?name=${nameOfGame}&client_id=SB1VGnDv7M`
    request(boardAtlasUrl, processResponse.bind(finishResponse))
}


function getGamesByName(gameName, cb) {
    let boardAtlasUrl = `https://www.boardgameatlas.com/api/search?name=${gameName}&exact=true&client_id=SB1VGnDv7M`
    request(boardAtlasUrl,(error,response,body)=>{
        cb(fromBodyToArrayOfGames(body)[0])
    })
}

function fromBodyToArrayOfGames(body){
    let lightArrayOfGames = []
    var index = 0
    JSON.parse(body).games.map(heavyGame => lightArrayOfGames[index++] =
        new gameObject(
            heavyGame.id,
            heavyGame.name,
            heavyGame.year_published,
            heavyGame.min_players,
            heavyGame.max_players,
            heavyGame.min_playtime,
            heavyGame.max_playtime,
            heavyGame.min_age,
            heavyGame.description
            ) 
            )
            return lightArrayOfGames
}






