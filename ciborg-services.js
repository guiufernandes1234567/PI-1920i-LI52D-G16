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

function getPopularGames(){
    return this.dataApi.getPopularGames()
}

function getGamesByName(nameOfGame) {
    return this.dataApi.searchGamesByName(nameOfGame)
}

function createList(list, finishResponse) {
    if(!('name' in list) || !('description' in list)) finishResponse.executeOnError(400, 'check the list submitted')
    this.dataBase.createList(list, finishResponse)
}

function getAllLists() {
    return this.dataBase.getAllLists()
}

function getListById(listId) {
    return this.dataBase.getListById(listId)
}

function editList(list, listId) {
    if(!('name' in list) || !('description' in list)) return Promise.resolve('check the list submitted')
    return this.dataBase.editList(list, listId)
}

function addGameToList(gameName, listId) {
    return this.dataApi.getGamesByName(gameName).then((game)=>{
        if(!game) throw {error : "game not found"}
        return this.dataBase.addGameToList(listId, game)
    })
}

function removeGameFromList(gameName, listId) {
    return this.dataApi.getGamesByName(gameName).then((game)=>{
        if(!game) throw {error : "game not found"}
        return this.dataBase.removeGameFromList(listId, game)
    })
}

function getGamesBoundByDuration(listId){
    //if(min_value>=max_value || min_value<0)finishResponse.executeOnError(400, 'parameters not accepted')
    return this.dataBase.getGamesBoundByDuration(listId)
}