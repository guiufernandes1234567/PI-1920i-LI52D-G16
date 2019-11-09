'use strict';


module.exports = (dataApi,database)=>{
    return{
    dataApi: dataApi,
    dataBase : database,
    getPopularGames:getPopularGames,
    getGamesByName:getGamesByName,
    getAllLists:getAllLists,
    //getListByName:getListByName,
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
    this.dataApi.searchGamesByName(nameOfGame,finishResponse)
}

function createList(list, finishResponse) {
    if(!('name' in list) || !('description' in list)) finishResponse.executeOnError(400, 'check the list submitted')
    this.dataBase.createList(list, finishResponse)
}

function getAllLists(finishResponse) {
    this.dataBase.getAllLists(finishResponse)
}

function getListById(listId, finishResponse) {
    this.dataBase.getListById(listId,finishResponse)
}

function editList(list, listId, finishResponse) {
    if(!(name in list) || !(description in list)) finishResponse.executeOnError(400, 'check the list submitted')
    this.dataBase.editList(list, listId, finishResponse)
}

function addGameToList(gameName, listId, finishResponse) {
    this.dataApi.getGamesByName(gameName, (game)=>{
        this.dataBase.addGameToList(listId, game, finishResponse)
    })
}

function removeGameFromList(gameName, listId, finishResponse) {
    this.dataApi.getGamesByName(gameName, (game)=>{
        if(game==undefined) finishResponse.executeOnError(400, 'game not found')
        this.dataBase.removeGameFromList(listId, game, finishResponse)
    })   
}

function getGamesBoundByDuration(listId, min_value, max_value, FinishResponse){
    //if(min_value>=max_value || min_value<0)finishResponse.executeOnError(400, 'parameters not accepted')
    this.dataBase.getGamesBoundByDuration(listId, min_value, max_value, FinishResponse)
}