const Handlebars = require('handlebars/dist/handlebars')

module.exports = {
  homeTemplate: 
    Handlebars.compile(require('./templates/home.hbs').default),
  allListsTemplate:
    Handlebars.compile(require('./templates/allLists.hbs').default),
  singleListTemplate:
    Handlebars.compile(require('./templates/singleList.hbs').default),
  gameTemplate: 
    Handlebars.compile(require('./templates/singleGame.hbs').default),
  createListTemplate:
    Handlebars.compile(require('./templates/createListTemplate.hbs').default),
  editListTemplate:    
   Handlebars.compile(require('./templates/editListTemplate.hbs').default),
  GamesTemplate:
   Handlebars.compile(require('./templates/GamesTemplate.hbs').default),
  loginTemplate:
   Handlebars.compile(require('./templates/login.hbs').default),
  registerTemplate:
    Handlebars.compile(require("./templates/register.hbs").default),
  failedRegistry:
    Handlebars.compile(require("./templates/failedRegistry.hbs").default),
  PopularGamesTemplate:
    Handlebars.compile(require("./templates/popularGames.hbs").default)
}