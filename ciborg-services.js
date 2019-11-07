'use strict';


module.exports = (dataApi,database)=>{
    return{
    dataApi: dataApi,
    dataBase : database,
    getPopularGames:getPopularGames,
    getGamesByName:getGamesByName,
    getAllLists:getAllLists,
    getListByName:getListByName,
    getListById:getListById,
    getGamesBoundByDuration:getGamesBoundByDuration,
    createList:createList,
    editList:editList,
    addGameToList:addGameToList,
    removeGameFromList:removeGameFromList
    }
}

function getPopularGames(finishResponse){
    this.dataApi.getPopularGames(finishResponse)
}

function getGamesByName(nameOfGame,finishResponse) {
    this.dataApi.getGamesByName(nameOfGame,finishResponse)
}

function createList(list, finishResponse) {
    this.dataBase.createList(list, finishResponse)
}

function getAllLists(finishResponse) {
    this.dataBase.getAllLists(finishResponse)
}

function getListByName(listName, finishResponse) {
    this.dataBase.getListByName(listName,finishResponse)
}

function getListById(listId, finishResponse) {
    this.dataBase.getListById(listId,finishResponse)
}

function editList(list, listId, finishResponse) {
    this.dataBase.editList(list, listId, finishResponse)
}

function addGameToList(gameName, listId, finishResponse) {
    this.dataApi.getGameById(gameName, (game)=>{
        this.dataBase.addGameToList(listId, game, finishResponse)
    })   
}

function removeGameFromList(gameName, listId, finishResponse) {
    this.dataApi.getGameById(gameName, (game)=>{
        this.dataBase.removeGameFromList(listId, game, finishResponse)
    })   
}

function getGamesBoundByDuration(listId, min_value, max_value, FinishResponse){
    this.dataBase.getGamesBoundByDuration(listId, min_value, max_value, FinishResponse)
}