'use strict';
const fs = require('fs');

const USERS_FILE_NAME = 'users.json'

module.exports = {
    verifyAuthenticated:verifyAuthenticated,
    login : login,
    logout : logout,
    getUser : getUser,
    register:register,
}

function verifyAuthenticated(req, rsp, next) {
    if(req.isAuthenticated()){  
        return next()
    }
    rsp.status(403).send({error:'error',message:"not authenticaded"})
}

function login(req, rsp) {
        validateUser(req.body).then((validation)=>{
            if(validation){
                req.logIn(req.body,(err)=>{
                    if(!err) return rsp.status(200).end()
                    else rsp.status(401).end()
                });
            } else rsp.status(401).end()
    })  
        
    function validateUser(user){ 
        try{
            let userFromFile = getUser(user.username)
            if (userFromFile) return Promise.resolve(userFromFile.password == user.password);
            return Promise.resolve(false);
        } catch{
            return Promise.resolve(false);
        }
    }
}



function logout(req, rsp) {  //req.login e req.logout -> criadas pelo passport
    req.logOut()
    rsp.end()
}



function getUser(name) {
    try{
        let string = fs.readFileSync(USERS_FILE_NAME,"utf8")
        let obj = JSON.parse(string)
        for(let i = 0; i<obj.length;i++){
            if(obj[i].username == name) return obj[i]
        }
        return undefined
} catch(err){
        if(err.code=="ENOENT") return fs.openSync(USERS_FILE_NAME,'w')   
        else return undefined
    }
}

function register(req,resp) {
    if(getUser(req.body.username)) return resp.status(409).send({error:'error',message:"user already registered"})
    let fileString = fs.readFileSync(USERS_FILE_NAME,"utf8")
    let newString
    if(fileString=="") newString = JSON.stringify([req.body])
    else {
        let arrayOfUsers = JSON.parse(fileString)
        arrayOfUsers.push(req.body)
        newString = JSON.stringify(arrayOfUsers)
    }
    return fs.writeFile(USERS_FILE_NAME, newString,()=>{
        req.logIn(req.body, (err) => {
            resp.status(200)
         resp.end()
          });
    })
    
}