"use strict";

function GameObject(...args) {
    this.id = args[0],
    this.name = args[1],
    this.year_published = args[2],
    this.min_players = args[3],
    this.max_players = args[4],
    this.min_playtime=  args[5],
    this.max_playtime = args[6],
    this.min_age = args[7],
    this.description = args[8]
}


module.exports = GameObject