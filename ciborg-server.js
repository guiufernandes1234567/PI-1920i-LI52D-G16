'use strict';

var express = require('./node_modules/express')
var app = express()

const PORT = require('./setup').PORT

const ciborgWebApi = require('./ciborg-web-api')
const authentication = require("./authentication")
const morgan = require('morgan') 
const cookieParser = require('cookie-parser') 
const passport = require('passport') 
const expressSession = require('express-session')


app.use(morgan('dev'))  

var FileStore = require('session-file-store')(expressSession)

app.use(expressSession(
    {
           resave: false,
           saveUninitialized: true,
           store: new FileStore(),
           secret: "ultra safe key"
    }
))

app.use(passport.initialize())
app.use(passport.session())

app.use(cookieParser())

app.use('/lists', authentication.verifyAuthenticated)

app.use('/', express.static(__dirname + '/public'))

app.use(express.json())

passport.serializeUser((user, done)=> {
    console.log('serialize user called')
    user.id=user['username']
    done(null, user.id);  
  });
  
  passport.deserializeUser((id, done) =>{
    console.log('serialize user called')
    let user = authentication.getUser(id)
      done(null,user);
   } );

  app.use((request, response, next)=>{
    let start = Date.now()
    response.on('finish', ()=>console.log((Date.now()) - start))
    next()
})

app.get('/game/mostpopular', ciborgWebApi.getPopularGames)
app.get('/game/:name', ciborgWebApi.getGamesByName)
app.get('/lists', ciborgWebApi.getAllLists)
app.get('/lists/:id', ciborgWebApi.getListById)
app.get('/lists/:id/:min_value&:max_value',ciborgWebApi.getGamesBoundByDuration)

app.post('/lists', ciborgWebApi.createList)

app.put('/logout', authentication.logout)
app.put('/lists/:id', ciborgWebApi.editList)
app.put('/lists/:id/:name',ciborgWebApi.addGameToList)

app.delete('/lists/:id/:name',ciborgWebApi.removeGameFromList)
app.delete('/lists/:id', ciborgWebApi.removeList)

app.post('/login', authentication.login)
app.post('/register', authentication.register)


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

