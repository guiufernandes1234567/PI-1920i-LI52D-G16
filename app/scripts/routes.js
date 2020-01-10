'use strict';

const controller = require('./controller/controller')
const views = require('./view/view')

module.exports = {
  'home': {
    controller: controller.nop,
    view: views.homeView
  },
  'lists': {
    controller: controller.getAllLists,
    view: views.allListsView
  },
  'list': {
    controller: controller.getListById,
    view: views.listView,
  },
  'lists/:id/:min_value&:max_value': { 
    controller: controller.getGamesBoundByDuration,
    view: views.getGamesBoundByDuration,
  },
  'mostpopulargames': {
    controller: controller.getPopularGames,
    view: views.mostPopularGamesView,
  },
  'game':{
    controller: controller.getGame,
    view: views.gameView,
  },
  'deleteList':{
    controller: controller.deleteList,
    view: views.deleteList,
  },
  'createList':{
    controller: controller.nop,
    view: views.createList
  },
  'createNewList':{
    controller: controller.createList,
    view: views.createdListView
  },
  'editList':{
    controller: controller.editList,
    view: views.editedListView,
  },
  'editingList':{
    controller: controller.editingList,
    view: views.editingListView,
  },
  'gameByDuration':{
    controller:controller.gamesByDuration,
    view:views.gamesByDuration,
  },
  'login':{
    controller:controller.nop,
    view:views.loginView
  },
  'loging':{
    controller:controller.loging,
    view:views.logingView
  },
  'register':{
    controller:controller.nop,
    view:views.registerView
  },
  'registering':{
    controller:controller.registering,
    view:views.registered
  },
  'logout':{
    controller:controller.logout,
    view:views.logedout
  },
  'deleteGame':{
    controller:controller.deleteGame,
    view:views.deletedGame
  }
}