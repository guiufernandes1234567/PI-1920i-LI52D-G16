'use strict';

let ciborgServices = require('./ciborg-services')


//request('https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M',processResponse)

function getPopularGames(req,resp){
    try{
        ciborgServices.getPopularGames(executeOnSuccess,executeOnError);

        function executeOnSuccess(gamesArray) {
            resp.statusCode = 200
            resp.setHeader('content-type', 'application/json')
            resp.end(JSON.stringify(gamesArray)) 
        }

        function executeOnError() {
                resp.statusCode = 500
                resp.end()
        }
    } catch (exception){
        resp.statusCode = 500
        //TODO a olhar p/ que ta escrito na nossa documentacao
    }
}



function getGamesByName(req,resp){resp.end(`chegou a funcao ${getGamesByName.name}`)}
function getAllLists(req,resp){resp.end(`chegou a funcao ${getAllLists.name}`)}
function getListByName(req,resp){resp.end(`chegou a funcao ${getListByName.name}`)}
function getGamesBoundByDuration(req,resp){resp.end(`chegou a funcao ${getGamesBoundByDuration.name}`)}



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





