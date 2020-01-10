'use strict';

let gameObject = require('./aux modules/game-object')
let requestPromise = require('./aux modules/cbToPromise')



module.exports = {
    getPopularGames:getPopularGames,
    getGamesByName:getGamesByName,
    searchGamesByName:searchGamesByName
}


function getPopularGames(){
    return requestPromise.getHttpPromise("https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M")
}


function searchGamesByName(nameOfGame) {
    return requestPromise.getHttpPromise(`https://www.boardgameatlas.com/api/search?name=${nameOfGame}&client_id=SB1VGnDv7M`)
    .then((body)=>{
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
                return Promise.resolve(lightArrayOfGames[0])
})}


function getGamesByName(gameName) {
    return requestPromise.getHttpPromise(`https://www.boardgameatlas.com/api/search?name=${gameName}&exact=true&client_id=SB1VGnDv7M`)
    .then((body)=>{
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
                    return Promise.resolve(lightArrayOfGames[0])
    })
}





