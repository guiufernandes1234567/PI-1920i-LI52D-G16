'use strict';
const expect = require('chai').expect;
const request = require('request')
const fs = require('fs-extra')
const gameObject = require('../aux modules/game-object')




    describe('Tratamentos de dados Json', () => { 
        it('array of games', (done) => {
            fs.readFile('./games.json')
            .then(buffer => {
                let lightArrayOfGames = []
                let index = 0
                return JSON.parse(buffer.toString()).games.map(heavyGame => lightArrayOfGames[index++] =
                        new gameObject(
                            heavyGame.id,
                            heavyGame.name,
                            heavyGame.year_published,
                            heavyGame.min_players,
                            heavyGame.max_players,
                            heavyGame.min_playtime,
                            heavyGame.max_playtime,
                            heavyGame.min_age,
                            heavyGame.description
            ))
        }).then(json => {
            expect(json).to.deep.equal([
                {
                id: 'kPDxpJZ8PD',
                name: 'Spirit Island',
                year_published: 2016,
                min_players: 1,
                max_players: 4,
                min_playtime: 90,
                max_playtime: 120,
                min_age: 13,
                description:
                 'Powerful Spirits have existed on this isolated island for time immemorial. They are both part of the natural world and - at the same time - something beyond nature. Native Islanders, known as the Dahan, have learned how to co-exist with the spirits, but with a healthy dose of fear and reverence. However, now, the island has been &quot;discovered&quot; by invaders from a far-off land. These would-be colonists are taking over the land and upsetting the natural balance, destroying the presence of Spirits as they go. As Spirits, you must grow in power and work together to drive the invaders from your island... before it\'s too late!' },
              {
                id: 'RLlDWHh7hR',
                name: 'Gloomhaven',
                year_published: 2017,
                min_players: 1,
                max_players: 4,
                min_playtime: 60,
                max_playtime: 150,
                min_age: 12,
                description:
                 'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.<br />\r\n<br />\r\nPlayers must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.<br />\r\n<br />\r\nThis is a legacy game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a &quot;Choose Your Own Adventure&quot; book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn.' } ]);
            done()
        }).catch(err => {
            console.log('erro')
            done()
        })
        })
    });