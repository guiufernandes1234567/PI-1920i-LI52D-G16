'use strict';

var express = require('./node_modules/express')
var app = express()



const PORT = 8000
const ciborgWebApi = require('./ciborg-web-api')

app.use((request, response, next)=>{
    let start = Date.now()
    response.on('finish', ()=>console.log((Date.now()) - start))
    next()
})

app.use(express.json())

app.get('/game/mostpopular', ciborgWebApi.getPopularGames)
app.get('/game/:name', ciborgWebApi.getGamesByName)
app.get('/lists', ciborgWebApi.getAllLists)
app.get('/lists/:id', ciborgWebApi.getListById)
app.get('/lists/:id/:min_value&:max_value',ciborgWebApi.getGamesBoundByDuration)

app.post('/lists', ciborgWebApi.createList)

app.put('/lists/:id', ciborgWebApi.editList)
app.put('/lists/:id/:name',ciborgWebApi.addGameToList)

app.delete('/lists/:id/:name',ciborgWebApi.removeGameFromList)



//let server = http.createServer(router)
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
