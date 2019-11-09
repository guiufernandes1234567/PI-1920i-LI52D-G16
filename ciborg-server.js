'use strict';

    
const PORT = 8000
const ciborgWebApi = require('./ciborg-web-api')
const http = require('http')

const router = require('./aux modules/router');

router.get('/game/mostpopular=true', ciborgWebApi.getPopularGames)
router.get('/game/:name', ciborgWebApi.getGamesByName)
router.get('/lists', ciborgWebApi.getAllLists)
router.get('/lists/:id', ciborgWebApi.getListById)
router.get('/lists/:id/:min_value&:max_value',ciborgWebApi.getGamesBoundByDuration)

router.post('/lists', ciborgWebApi.createList)

router.put('/lists/:id', ciborgWebApi.editList)
router.put('/lists/:id/:name',ciborgWebApi.addGameToList)

router.delet('/lists/:id/:name',ciborgWebApi.removeGameFromList)

let server = http.createServer(router)
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
