'use strict';

const templates = require('./template')

module.exports = {
  homeView : homeView,
  allListsView : allListsView,
  listView:listView,
  mostPopularGamesView : mostPopularGamesView, 
  gameView : gameView,
  deleteList:deleteList,
  createList:createList,
  createdListView:createdListView,
  editingListView:editingListView,
  editedListView:editedListView,
  gamesByDuration:gamesByDuration,
  registerView:registerView,
  registered:registered,
  logingView:logingView,
  loginView:loginView,
  logedout:logedout,
  deletedGame:deletedGame,
  nop:nop,
}
function nop() {}

function homeView(data,routeManager) {
  routeManager.setBody(templates.homeTemplate());


  document.querySelector("#mostPopularButton").addEventListener("click", function(){
    routeManager.changeHash('mostpopulargames')
  })
  document.querySelector('#loginButton').addEventListener("click", function(event) {
    routeManager.changeHash('login')
  })
  document.querySelector('#registerButton').addEventListener("click", function(event) {
    routeManager.changeHash('register')
  })  
  document.querySelector('#logoutButton').addEventListener("click", function(event) {
    routeManager.changeHash('logout')
  })
}

function allListsView(lists, routeManager) {
  if(lists.error) {
    routeManager.changeHash('register') 
    routeManager.reload()
    return
  }
  routeManager.setBody(templates.allListsTemplate(lists))

  document.querySelectorAll("button.delete").forEach(function(button){button.addEventListener("click", function(){
    routeManager.changeHash('deleteList/' + this.id)
  })})
  document.querySelector('#logoutButton').addEventListener("click", function(event) {
    routeManager.changeHash('logout')
  })
  document.querySelectorAll("button.edit").forEach(function(button){button.addEventListener("click", function(){
    routeManager.changeHash('editingList/' + this.id)
  })})
  document.querySelector("#create").addEventListener("click", function(){
    routeManager.changeHash('createList')
  })
  
}

function listView(list, routeManager) {
    routeManager.setBody(templates.singleListTemplate(list))
    let listId = window.location.hash.split('/')[1]

    document.querySelector("#gamesByDurationForm").addEventListener('submit', function(event){
      event.preventDefault()
      setOneUseData([document.querySelector("#minTimeForm").value,document.querySelector("#maxTimeForm").value])
      routeManager.changeHash(`gameByDuration/${listId}`)
    });

    document.querySelectorAll('button.delete').forEach(button => {
      button.addEventListener('click',function (){
        console.log(this.dataset.name)
        routeManager.changeHash('deleteGame/' + listId +'/'+ this.dataset.name) 
        routeManager.reload()
      })
    })
}

function mostPopularGamesView(games, routeManager) {
  routeManager.setBody(templates.PopularGamesTemplate(games))
  document.querySelector('#homeButton').addEventListener("click", function(event) {
    routeManager.changeHash('home')
  })
}

function gameView(game, routeManager) {
  routeManager.setBody(templates.gameTemplate(game)) 
}

function deleteList(data,routeManager) {
  routeManager.changeHash('lists') 
  routeManager.reload()
}

function createList(data, routeManager) {
  routeManager.setBody(templates.createListTemplate())
  
  document.querySelector("#sendListData").addEventListener('submit', function(event){
    event.preventDefault()
    setOneUseData(document.querySelector("#listDescriptionForm").value)
    routeManager.changeHash('createNewList/'+ document.querySelector("#listNameForm").value) 
  });
}
function setOneUseData(data) {
  window.singleUseData = data
}

function createdListView(data, routeManager) {
  routeManager.changeHash('lists') 
  routeManager.reload()
}

function editedListView(listId, routeManager) {
  routeManager.changeHash('list/'+listId) 
  routeManager.reload()
}

function editingListView(listId, routeManager) {
  routeManager.setBody(templates.editListTemplate())

  document.querySelector("#editListForm").addEventListener('submit', function(event){
    event.preventDefault()
    setOneUseData([document.querySelector("#newlistNameForm").value,
    document.querySelector("#newlistDescriptionForm").value,
    document.querySelector("#listOfGamesForm").value])
    routeManager.changeHash('editList/'+ listId) 
  });
}

function gamesByDuration(games, routeManager) {
  routeManager.setBody(templates.GamesTemplate(games))
  if(games.length === 0) document.querySelector('#message').innerHTML = 'no games to show'
}

function loginView(data, routeManager) {
  routeManager.setBody(templates.loginTemplate())

  document.querySelector('#loginForm').addEventListener('submit',function(event) {
    event.preventDefault()
    setOneUseData([document.querySelector("#loginUsername").value, document.querySelector("#loginPassword").value])
    
    routeManager.changeHash('loging')
  })
}
function registerView(data, routeManager) {
  routeManager.setBody(templates.registerTemplate())

  document.querySelector('#registerForm').addEventListener('submit',function(event) {
    event.preventDefault()

    setOneUseData([document.querySelector("#registerUsername").value, document.querySelector("#registerPassword").value])
    
    routeManager.changeHash('registering')
  })
}

function registered(authoriseAndUsername, routeManager) {
  console.log(authoriseAndUsername)
  if(!(authoriseAndUsername.authorise)){ routeManager.setBody(templates.failedRegistry(authoriseAndUsername.username))
  document.querySelector("#tryAgain").addEventListener("click", function(){
    routeManager.changeHash('register')
  })
  document.querySelector('#homeButton').addEventListener("click", function(event) {
    routeManager.changeHash('home')
  })
}else {
  routeManager.changeHash('lists')
  routeManager.reload()
}
}

function logingView(authorise, routeManager) {
  let newHash = (authorise)? 'lists' : 'register'
  routeManager.changeHash(newHash)
  
  routeManager.reload()
}

function logedout(data, routeManager) {
  routeManager.changeHash('home')
  routeManager.reload()
}

function deletedGame(listId,routeManager) {
  routeManager.changeHash('list/'+listId)
  routeManager.reload()
}