"use strict";

let methods = {
    "GET":[],
    "POST":[],
    "PUT":[],
    "DELETE":[]
}

function Pair(path, funToCall){
    this.path= path
    this.funToCall = funToCall
}

let toReturn = function (req, resp){
    let data = ''
    req.on('data', chunk => data += chunk.toString())
    req.on('end', route)
    function route() {
        req.body = data
        let pairArray = methods[req.method.toUpperCase()]
        let splitedUrl = req.url.split('/')
        let wrongUrl = false
        let index = 0
        var j
        for(j = 0; j < pairArray.length; j++) {
            index = 0, wrongUrl =  false
            let splitedTemplate = pairArray[j]["path"].split('/')
            var i
            if(splitedTemplate.length != splitedUrl.length){wrongUrl = true}
            else {  
                for(i = 0; i< splitedTemplate.length;i++){
                    if(splitedTemplate[i].charAt(0) != ':' && splitedUrl[index++] != splitedTemplate[i]) {
                        wrongUrl = true;
                        break;
                    } 
                }
            }
            if(wrongUrl == false) { 
                pairArray[j]["funToCall"](req,resp)
                return
            }
        }   
    }
}

toReturn.get = (path,funToCall) => methods["GET"].push(new Pair(path,funToCall))
toReturn.post = (path,funToCall) => methods["POST"].push(new Pair(path,funToCall))
toReturn.put = (path,funToCall) => methods["PUT"].push(new Pair(path,funToCall))
toReturn.delet = (path,funToCall) => methods["DELETE"].push(new Pair(path,funToCall))


module.exports = toReturn
