'use strict';

const routes = require('./routes')

console.log('script started')

let singleUseData = null


window.addEventListener("load", function(event) {
    console.log('page loaded')

    window.addEventListener('hashchange', processHashChange)
    let DEFAULT_STATE = 'home'

    let body = document.querySelector("#body") 
    let routeManager = {
        changeHash: function(hash) {
            window.location.hash = hash
        },
        setBody: function (html) {
            body.innerHTML = html
        },
        reload:function(){
            location.reload()
        },
    }

    processHashChange()

    function processHashChange() {
    

        const hash = window.location.hash.substring(1)
        let [state, ...args] = hash.split('/')


        let current = routes[state];
        if(!current){
            window.location.hash = DEFAULT_STATE
            return
        }
        current
        .controller.apply(null, args)
        .then(function (data) {
            current.view(data, routeManager)
        })
    }
})

