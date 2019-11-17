'use strict';

const request = require('request')


module.exports = {

getHttpPromise : function getHttpPromise(url) {
    return new Promise((onSuccess, onError)=>{
        request(url,(error, response, body)=>{
            if(error){
                return onError(error)
            } onSuccess(body)
        })
    })
},


putHttpPromise : function putHttpPromise(options) {
    return new Promise((onSuccess, onError)=>{
        request.put(options,(error, response, body)=>{
            if(error) return onError(error)
            onSuccess(response)
        })
    })
}

}