'use strict';

let boardGamesData = require('./board-games-data')

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

function getPopularGames(finishResponse){
    boardGamesData.getPopularGames(finishResponse)
}

function getGamesByName(nameOfGame,finishResponse) {
    boardGamesData.getGamesByName(nameOfGame,finishResponse)
}

