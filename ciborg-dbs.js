const elasticUrl = 'http://localhost:9200/'     //meter em ficheiro mais tarde
let request = require("request")
let requestPromise = require('./aux modules/cbToPromise')


function initElastic(){
    console.log('in DB')
    request.head({
        json : true,
        headers: {'Content-Type': 'application/json'},
        url : 'http://localhost:9200/lists',
    },(error, response, body)=>{
        if(error) return console.log('check elastic server')
        if(response.statusCode == 404){
            request.put('http://localhost:9200/lists')
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



function getElasticOptions(urlParam, bodyParam) {
    return {
        json : true,
        headers: {'Content-Type': 'application/json'},
        url : urlParam,
        body : bodyParam 
    }
}

function processResponse(error, response, body) {
    if (error) {
        this.executeOnError(502)
    }  //TODO lidar com erros de bad request etc...
    this.executeOnSuccess(body._id, body.result)
}

function createList(list, finishResponse){
    let options = getElasticOptions(elasticUrl + 'lists/_doc/', list) //TODO usar promises
    request.post(options, processResponse.bind(finishResponse))
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
    let options = getElasticOptions(elasticUrl + 'lists/_search', {query: { match_all: {} }})
    return requestPromise.getHttpPromise(options)
}

function getGamesBoundByDuration (listId) {
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    return requestPromise.getHttpPromise(options)
}


/*function getListByName(listName, finishResponse) {
    let options = getElasticOptions(elasticUrl + 'lists/_search', {query: { match: { name: listName } }})
    request.get(options, (error, response, body) => {
        if (error) {
            finishResponse.executeOnError()
        }
        finishResponse.executeOnSuccess(body._source)
    })
}*/

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


module.exports = initElastic