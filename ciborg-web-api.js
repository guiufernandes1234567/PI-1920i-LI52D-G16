'use strict';

let ciborgGamesData = require('./board-games-data')
let ciborgDataBase = require('./ciborg-dbs')
ciborgDataBase()
let ciborgServices = require('./ciborg-services')(ciborgGamesData, ciborgDataBase)
let gameObject = require('./aux modules/game-object') 


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
    ciborgServices.getPopularGames().then((requestBody)=>{
        resp.status(200).json(fromBodyToArrayOfGames(requestBody.body))
    }).catch((error)=>{
        resp.status(400).json({message: error.toString()}) //TODO: ver se as mensagens de erro fazem sentido passarem ao cliente
    })
}

function getGamesByName(req,resp){
    ciborgServices.getGamesByName(req.params.name).then((requestBody)=>{
        resp.status(200).json(fromBodyToArrayOfGames(requestBody))
    }).catch((error)=>{
        resp.status(400).json({message: error.toString()}) //TODO: ver se as mensagens de erro fazem sentido passarem pro cliente
    })
}

function getAllLists(req,resp){
    ciborgServices.getAllLists().then((requestBody)=>{
        let arrayOfLists = requestBody.hits.hits.map((value)=>{   
            value._source.id = value._id   //pra se ver facilmente os id's todos
            return value._source})
        resp.status(200).json(arrayOfLists)}).catch(()=>{resp.status(400)})
}

/*function getListByName(req,resp){
    let listName = req.url.split('/').pop()
    ciborgServices.getListByName(listName,new FinishResponse(resp))
}*/

function getListById(req,resp){
//    let listId = req.url.split('/').pop()
    ciborgServices.getListById(req.params.id).then((requestBody)=>{
        resp.status(200).json(requestBody._source)
    }).catch(()=>{resp.status(400)})
}

// /lists/:id/min_value=?&max_value=?
function getGamesBoundByDuration(req,resp){
    ciborgServices.getGamesBoundByDuration(req.params.id).then((requestBody)=>{
        let filteredArray = requestBody._source.games.filter
        (item => ((req.params.min_value.split('=')[1] < item.max_playtime) && 
        (req.params.max_value.split('=')[1] > item.max_playtime)))
        resp.status(200).json(filteredArray.sort((a,b)=>{return a.max_playtime-b.max_playtime}))
    }).catch((error)=>{
        resp.status(400).json({message: error.toString()}) //TODO: ver se as mensagens de erro fazem sentido passarem pro cliente
    })
}

function createList(req,resp){
    let list = JSON.parse(req.body)
    //list.games = []
    ciborgServices.createList(list, new PostOrPutResponse(resp, req))
}

function editList(req,resp){
    ciborgServices.editList(req.body, req.params.id).then(
        (requestResp) => {
            resp.setHeader('location', 'lists/' + req.params.id)
            resp.status(201).json({
                status : "list " + requestResp.body.result,
                uri: 'lists/' + req.params.id
            })
        }
    ).catch((error) =>{
        resp.status(400)
    //    if(error) resp.json(error)
        resp.json(error)
})
   // ciborgServices.editList(list, req.url.split('/').pop(), new PostOrPutResponse(resp, req))
}

function addGameToList(req,resp){
    ciborgServices.addGameToList(req.params.name, req.params.id).then(()=>{
        resp.status(201).json({
            status : "game added successfully",
            uri: `lists/${req.params.id}/${req.params.name}`
    })}).catch(
        (error)=>{
            let status = ("erro" in error)? 404 : 400 
            resp.status(status).json(error)
        }
    )
}

function removeGameFromList(req,resp){
    ciborgServices.removeGameFromList(req.params.name, req.params.id).then(()=>{
        resp.status(201).json({
            status : "game removed successfully",
            uri: `lists/${req.params.id}/${req.params.name}`
    })}).catch(
        (error)=>{
            let status = ("erro" in error)? 404 : 400 
            resp.status(status).json(error)
        }
    )
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