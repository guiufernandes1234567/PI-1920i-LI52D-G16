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
    removeGameFromList:removeGameFromList,
    removeList : removeList
    }
}

function getPopularGames(){
    return this.dataApi.getPopularGames()
}

function getGamesByName(nameOfGame) {
    return this.dataApi.getGamesByName(nameOfGame)
}

function createList(list) {
    if(!('name' in list) || !('description' in list)) return Promise.reject({message:'check the list submitted'}) 
    return this.dataBase.createList(list)
}

function getAllLists() {
    return this.dataBase.getAllLists()
}

function getListById(listId) {
    return this.dataBase.getListById(listId)
}

function editList(list, listId) {
    if(!('name' in list) || !('description' in list)) return Promise.reject({message:'check the list submitted'}) 
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

function removeList(listId) {
    return this.dataBase.removeList(listId)
}

function getGamesBoundByDuration(listId){
    //if(min_value>=max_value || min_value<0) return Promise.reject({message:'parameters not accepted'}) 
    return this.dataBase.getGamesBoundByDuration(listId)
}
