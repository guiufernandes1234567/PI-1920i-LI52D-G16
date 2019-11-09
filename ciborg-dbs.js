const elasticUrl = 'http://localhost:9200/'     //meter em ficheiro mais tarde
let request = require("request")

module.exports = {
    getAllLists:getAllLists,
    //getListByName:getListByName,
    getGamesBoundByDuration:getGamesBoundByDuration,
    createList:createList,
    editList:editList,
    addGameToList:addGameToList,
    getListById:getListById,
    removeGameFromList:removeGameFromList
}



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
    let options = getElasticOptions(elasticUrl + 'lists/_doc/', list)
    request.post(options, processResponse.bind(finishResponse))
}

function editList(list, listId, finishResponse) {
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId, list)
    request.get(options, (error, response, body) => {
        if(body.found){
            list.games = body._source.games
            request.put(getElasticOptions(elasticUrl + 'lists/_doc/' + listId, list), 
            processResponse.bind(finishResponse))
        
        }else{
            finishResponse.executeOnError(404)
        }
    })
}

function getAllLists(finishResponse) {
    let options = getElasticOptions(elasticUrl + 'lists/_search', {query: { match_all: {} }})
    request.get(options, processAllLists.bind(finishResponse))
}

function getGamesBoundByDuration (listId, min_value, max_value, finishResponse) {
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    request.get(options, (error, response, body)=>{
        if(error) finishResponse.executeOnError()
        else{
            let filteredArray = body._source.games.filter(item => ((min_value < item.max_playtime) && (max_value > item.max_playtime)))
            finishResponse.executeOnSuccess(filteredArray.sort((a,b)=>{return a.max_playtime-b.max_playtime}))
        }
    })
}

function processAllLists(error, response, body) {
    if (error) {
        this.executeOnError()
    }
    this.executeOnSuccess(body.hits.hits.map((value)=>{   
        value._source.id = value._id   //pra se ver facilmente os id's todos
        return value._source
    }))
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

function getListById(listId, finishResponse) {
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    request.get(options,  (error, response, body) => {
        if (error) {
            finishResponse.executeOnError()
        }
        finishResponse.executeOnSuccess(body._source)
    })
}

function addGameToList(listId, game, finishResponse){
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    request.get(options,(error, response,body)=>{
        let newList = body._source
        newList.games.push(game)
        let optionsWithList = getElasticOptions(elasticUrl + 'lists/_doc/' + listId, newList)
        request.put(optionsWithList, finishResponse)
    })
}
function removeGameFromList(listId, game, finishResponse){
    let options = getElasticOptions(elasticUrl + 'lists/_doc/' + listId)
    request.get(options,(error, response,body)=>{
        let newList = body._source
        newList.games = newList.games.filter(item => 
            item.id !== game.id)
        let optionsWithList = getElasticOptions(elasticUrl + 'lists/_doc/' + listId, newList)
        request.put(optionsWithList, finishResponse)
    })
}