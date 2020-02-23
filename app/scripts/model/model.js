'use strict';

const baseUrl = "http://localhost:8000/"

  module.exports = {
    editList : (id,name ,desc, games) =>{ //games separados por virgulas
      return Promise.resolve().then(function() {
        if(desc||name) fetch(`${baseUrl}lists/${id}`,{
          method:'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            name:name,
            description:desc
          })
        })}).then(function () {
          let promiseArray = []
          if(games) {
            games.forEach(element => {
              promiseArray.push(fetch(
                `${baseUrl}lists/${id}/${element}`,{
                method:'PUT',
                headers: {
                  'Content-Type': 'application/json'
                }
              }))
              let a = Date.now()+500
              while(Date.now()<a){}
            });
          }
          return Promise.all(promiseArray)  
        }).then(response => {
          console.log(response)
          return id
        }).catch(function(error) {
          console.log("erro: " + error)
        })
    },
    deleteList : (id) =>{
      return fetch(`${baseUrl}lists/${id}`,{method:'DELETE'}).then(response => {return response.json()})
    },
    gamesByDuration:(listId, minValue, maxValue)=>{
      console.log(listId + '**' + minValue +'**' + maxValue)
      return fetch(`${baseUrl}lists/${listId}/${minValue}&${maxValue}`).then(response => {return response.json()})
    },
    getPopularGames : ()=>{
      return fetch(`${baseUrl}game/mostpopular`).then(response => {console.log(response);return response.json()})
    },
    getGame:(gameName)=> {
      return fetch(`${baseUrl}game/${gameName}`).then(response => {return response.json()})
    },
    getAllLists:()=>{
        return fetch(baseUrl+'lists').then(response => {console.log(response);return response.json()})
    },
    getListById: (listId)=>{
      return fetch(`${baseUrl}lists/${listId}`).then(response => {return response.json()})
    },
    deleteGame: (listId, gameName)=> {
      return fetch(`/lists/${listId}/${gameName}`,{method:'DELETE'}).then(response=>{return listId})
    },  
    createList: (name,desc) =>{
      console.log(JSON.stringify({
        name:name,
        description:desc
      }))
      return fetch(`${baseUrl}lists`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          name:name,
          description:desc
        })
      }).then(response => {return response.json()})
    },
    loging:function (username, password) {
      return fetch(`${baseUrl}login`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          username:username,
          password:password
        })
      }).then((response)=>{console.log(response.status);return response.status===200})
    },
    registering:function(username, password){
      console.log('model: registering')
      return fetch(`${baseUrl}register`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          username:username,
          password:password
        })
      }).then((response)=>{return {'authorise':response.status===200, 'username':username}})
    },
    logout:function () {
      return fetch(`${baseUrl}logout`, {
        method:'PUT'
      })
    }
  }