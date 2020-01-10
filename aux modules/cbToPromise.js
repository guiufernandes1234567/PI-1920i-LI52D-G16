'use strict';

const request = require('request')


module.exports = {

getHttpPromise : setterOfMethod('get'),

putHttpPromise : setterOfMethod('put'),

deleteHttpPromise : setterOfMethod('delete'),

postHttpPromise : setterOfMethod('post'),

}
function setterOfMethod(defaultMethod) {
return function HttpPromise(options, method=defaultMethod) {
    return new Promise((onSuccess, onError)=>{
        getRequest(method)(options,(error, response, body)=>{
            if(error){
                return onError(error)
            } onSuccess(body)
        })
    })
}
}

function getRequest(method) {
    switch(method){
        case 'get': return request;
        case 'put': return request.put;
        case 'delete': return request.delete;
        case 'post': return request.post;
    }
}