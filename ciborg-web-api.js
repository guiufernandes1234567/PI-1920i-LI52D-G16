'use strict';

let ciborgGamesData = require('./board-games-data')
let ciborgDataBase = require('./ciborg-dbs')
let ciborgServices = require('./ciborg-services')(ciborgGamesData, ciborgDataBase)



function FinishResponse(resp) {
    this.executeOnSuccess = (gamesArray)=>{
    resp.statusCode = 200
    resp.setHeader('content-type', 'application/json')
    resp.end(JSON.stringify(gamesArray)) 
},
this.executeOnError = (statusCode,errorMessage) =>{
        resp.statusCode = statusCode
        if(errorMessage) {
            resp.setHeader('content-type', 'application/json')
            resp.end({message: errorMessage})
        }
        resp.end()
}
}

function PostOrPutResponse(resp, req){
    this.executeOnSuccess = (id, staus) => {
        resp.statusCode = 201
        resp.setHeader('location', 'lists/' + id)
        resp.setHeader('content-type', 'application/json')
        resp.end(JSON.stringify({
            status : "list " + staus,
            uri: 'lists/' + id
        }))
    }
    this.executeOnError = (statusCode,errorMessage) =>{
        resp.statusCode = statusCode
        if(errorMessage) resp.end(errorMessage)
        resp.end()
}
}

function getPopularGames(req,resp){
    ciborgServices.getPopularGames(new FinishResponse(resp));
}

function getGamesByName(req,resp){
    let nameOfGame = req.url.split('/')[2]
    ciborgServices.getGamesByName(nameOfGame,new FinishResponse(resp))
}

function getAllLists(req,resp){
    ciborgServices.getAllLists(new FinishResponse(resp))
}

function getListByName(req,resp){
    let listName = req.url.split('/').pop()
    ciborgServices.getListByName(listName,new FinishResponse(resp))
}

function getListById(req,resp){
    let listId = req.url.split('/').pop()
    ciborgServices.getListById(listId,new FinishResponse(resp))
}

// /lists/:id/min_value=?&max_value=?
function getGamesBoundByDuration(req,resp){
    let arrayOfPath = req.url.split('/')
    let listId = arrayOfPath[2]
    let parametersArray = arrayOfPath[3].split('&')
    let min_value = parametersArray[0].split('min_value=')[1]
    let max_value = parametersArray[1].split('max_value=')[1]
    ciborgServices.getGamesBoundByDuration(listId, min_value, max_value, new FinishResponse(resp))
}



function createList(req,resp){
    let list = JSON.parse(req.body)
    //list.games = []
    ciborgServices.createList(list, new PostOrPutResponse(resp, req))
}



function editList(req,resp){
    let list = JSON.parse(req.body)
    ciborgServices.editList(list, req.url.split('/').pop(), new PostOrPutResponse(resp, req))
}

function addGameToList(req,resp){
    let pathArray = req.url.split('/')
    let gameName = pathArray.pop()
    let listId = pathArray.pop()
    ciborgServices.addGameToList(gameName, listId, ()=>{
        resp.statusCode = 201
        resp.setHeader('content-type', 'application/json')
        resp.end(JSON.stringify({
            status : "game added successfully",
            uri: `lists/${listId}/${gameName}`
    }))})
}

function removeGameFromList(req,resp){
    let pathArray = req.url.split('/')
    let gameName = pathArray.pop()
    let listId = pathArray.pop()
    ciborgServices.removeGameFromList(gameName, listId, ()=>{
        resp.statusCode = 200
        resp.setHeader('content-type', 'application/json')
        resp.end(JSON.stringify({
            status : "game removed successfully",
            uri: `lists/${listId}/${gameName}`
    }))})
}

module.exports = {
    getPopularGames:getPopularGames,
    getGamesByName:getGamesByName,
    getAllLists:getAllLists,
    //getListByName:getListByName,//adicionar ao router
    getGamesBoundByDuration:getGamesBoundByDuration,
    createList:createList,
    editList:editList,
    addGameToList:addGameToList,
    removeGameFromList:removeGameFromList,
    getListById : getListById 
}





/*[
            {
                id: "kPDxpJZ8PD",
                name: "Spirit Island",
                year_published: 2016,
                min_players: 1,
                max_players: 4,
                min_playtime: 90,
                max_playtime: 120,
                min_age: 13,
                description:"ola"
            },
            {
                id: "RLlDWHh7hR",
                name: "Gloomhaven",
                year_published: 2017,
                min_players: 1,
                max_players: 4,
                min_playtime: 60,
                max_playtime: 150,
                min_age: 12,
                description:"tudo"
            },
            {
                id: "i5Oqu5VZgP",
                name: "Azul",
                year_published: 2017,
                min_players: 2,
                max_players: 4,
                min_playtime: 30,
                max_playtime: 60,
                min_age: 8,
                description:"fixe"
            }     
    ]*/