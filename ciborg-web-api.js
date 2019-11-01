'use strict';

let ciborgServices = require('./ciborg-services')

function FinishResponse(resp) {
    this.executeOnSuccess = (gamesArray)=>{
    resp.statusCode = 200
    resp.setHeader('content-type', 'application/json')
    resp.end(JSON.stringify(gamesArray)) 
},
this.executeOnError = () =>{
        resp.statusCode = 500
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


function getAllLists(req,resp){resp.end(`chegou a funcao ${getAllLists.name}`)}
function getListByName(req,resp){resp.end(`chegou a funcao ${getListByName.name}`)}

function getGamesBoundByDuration(req,resp){
}



function createList(req,resp){resp.end(`chegou a funcao ${createList.name}`)}



function editList(req,resp){resp.end(`chegou a funcao ${editList.name}`)}
function addGameToList(req,resp){resp.end(`chegou a funcao ${addGameToList.name}`)}



function removeGameFromList(req,resp){resp.end(`chegou a funcao ${removeGameFromList.name}`)}


module.exports = {
    getPopularGames:getPopularGames,
    getGamesByName:getGamesByName,
    getAllLists:getAllLists,
    getListByName:getListByName,
    getGamesBoundByDuration:getGamesBoundByDuration,
    createList:createList,
    editList:editList,
    addGameToList:addGameToList,
    removeGameFromList:removeGameFromList
}





