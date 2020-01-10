'use strict';

const data = require('../model/model');

module.exports = {
    nop:async function(){
        return await null
    },
    createList : async function(name){
        return await data.createList(name,useAndEraseSingleUseData())
    },
    editList : async function(id){
        let newListData = useAndEraseSingleUseData()
        console.log(newListData)
        return await data.editList(id,newListData[0],newListData[1],newListData[2].split(','))
    },
    deleteList : async function(id){
      return await data.deleteList(id)
    },
    getPopularGames: async function () {
        return await data.getPopularGames()
    },
    getGame: async function (gameName) {
       return await data.getGame(gameName)
    },
    getAllLists: async function () {
        return await data.getAllLists()
    },
    getListById: async function (listId) {
        return await data.getListById(listId)
    },
    addGameToList: async function (listId,gameName) {
        return await data.addGameToList(listId,gameName)
    },
    deleteGame: async function (listId,gameName) {
        return await data.deleteGame(listId,gameName)
    },
    editingList: function giveListId(listId) {
        return Promise.resolve(listId)
    },
    gamesByDuration: async function (listId) {
        let minAndMaxValues = useAndEraseSingleUseData()
        return await data.gamesByDuration(listId,minAndMaxValues[0],minAndMaxValues[1])
    },
    registering: async function() {
        return await data.registering.apply(null, useAndEraseSingleUseData())
    },
    loging:async function() {
        return await data.loging.apply(null, useAndEraseSingleUseData())
    },
    logout : async function() {
        return await data.logout()
    }
}

function useAndEraseSingleUseData() {
    let temp = window.singleUseData;
    window.singleUseData = null;
    return temp
}