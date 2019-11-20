/*'use strict';

const request = require('request')

const elasticOptions = {
    json : true,
    headers: {'Content-Type': 'application/json'},
    url : 'http://localhost:9200/lists',
}

module.exports = ()=>{
    request.head(elasticOptions,(error, response, body)=>{
        if(error) return console.log('check elastic server')
        if(response.statusCode == 404){
            request.put(url)
        }
    } )
}*/