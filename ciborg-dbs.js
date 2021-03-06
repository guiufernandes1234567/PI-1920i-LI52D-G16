const elasticUrl = 'http://localhost:9200/'    
let request = require("request")
let requestPromise = require('./aux modules/cbToPromise')
const startElastic = require('./setup').startElastic


startElastic()
function initElastic(attempts = 1){
    console.log('in DB')
    request.head({
        json : true,
        headers: {'Content-Type': 'application/json'},
        url : 'http://localhost:9200/lists',
    },(error, response, body)=>{
        if(error) {
            console.log('something wrong in elastic server. trying again...')
            if(attempts<5){
                setTimeout(()=>{
                    console.log('attempt nr '+ attempts++ + ' out of 4')
                    initElastic(attempts)
                },15000)
            }
        } else{ if(response.statusCode == 404)request.put('http://localhost:9200/lists')
             console.log(`elastic operational after ${attempts-1} attempts`)
    }
    } )
}

initElastic.getAllLists = getAllLists
//getListByName:getListByName,
initElastic.getGamesBoundByDuration = getGamesBoundByDuration
initElastic.createList = createList
initElastic.editList = editList
initElastic.addGameToList = addGameToList
initElastic.getListById = getListById
initElastic.removeGameFromList = removeGameFromList
initElastic.removeList = removeList



function getElasticOptions(urlParam, bodyParam) {
    return {
        json : true,
        headers: {'Content-Type': 'application/json'},
        url : urlParam,
        body : bodyParam 
    }
}


function createList(list){
    let options = getElasticOptions(elasticUrl + 'lists/_doc/', list) 
    return requestPromise.postHttpPromise(options)
}

function editList(list, listId) {
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId, list)
    return requestPromise.getHttpPromise(options).then((body)=>{
        if(body.found){
            list.games = body._source.games
            return requestPromise.putHttpPromise(getElasticOptions(elasticUrl + 'lists/_doc/' + listId, list))
        } else throw("this list doesnt exist")
    })
}

function getAllLists() {
    let options = getElasticOptions(elasticUrl + 'lists/_search', {from : 0, size : 1000,query: { match_all: {} }})
    return requestPromise.getHttpPromise(options)
}

function getGamesBoundByDuration (listId) {
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    return requestPromise.getHttpPromise(options)
}

function getListById(listId) {
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    return requestPromise.getHttpPromise(options)
}

function addGameToList(listId, game){
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    return requestPromise.getHttpPromise(options).then((body)=>{
        let newList = body._source
        if(newList.games.some(item =>{return item.id == game.id})){
            return Promise.resolve(body._source)
        }
        newList.games.push(game)
        let optionsWithList = getElasticOptions(elasticUrl + 'lists/_doc/' + listId, newList)
        return requestPromise.putHttpPromise(optionsWithList)
    })
}
function removeGameFromList(listId, game){
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    return requestPromise.getHttpPromise(options).then((body)=>{
        let newList = body._source
        newList.games = newList.games.filter(item => 
            item.id !== game.id)
        let optionsWithList = getElasticOptions(elasticUrl + 'lists/_doc/' + listId, newList)
        return requestPromise.putHttpPromise(optionsWithList)
    })
}
function removeList(listId){
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    let options2 = getElasticOptions(elasticUrl+ 'lists/_forcemerge')
    return requestPromise.deleteHttpPromise(options).then(requestPromise.postHttpPromise(options2))
}


module.exports = initElastic