'use strict';
const expect = require('chai').expect;
const request = require('request')
const server = require('./ciborg-server')





describe('Get All Lists', () => { 
    it('should get an array with all lists', (done) => {
        request.get(`http://localhost:8000/lists`,
        (error, response, body)=>{
            expect(JSON.parse(body)).to.deep.equal([
                {
                    "name": "lista17",
                    "description": "lista 17 description",
                    "id": "fwl7UW4Ba9mCMx9dg1NS"
                },
                {
                    "name": "lista17",
                    "description": "lista 17 description",
                    "id": "gAl7UW4Ba9mCMx9drFOA"
                },
                {
                    "name": "lista17",
                    "description": "lista 17 description",
                    "id": "gQl8UW4Ba9mCMx9dKFNJ"
                },
                {
                    "name": "lista17",
                    "description": "lista 17 description",
                    "id": "ggl8UW4Ba9mCMx9dtFMB"
                },
                {
                    "name": "lista16",
                    "description": "lista 16 description",
                    "id": "gwniUW4Ba9mCMx9dB1Pl"
                },
                {
                    "name": "lista17",
                    "description": "lista 17 description",
                    "id": "hAnkUW4Ba9mCMx9dflPw"
                }
            ]);
            done()
        });
    });
});


describe('Get games by name', () => { 
    describe('name that doesnt exist', () => { 
        it('should get an empty array', (done) => {
            request.get(`http://localhost:8000/game/${'ekdhujkvkm'}`,
            (error, response, body)=>{
                expect(JSON.parse(body)).to.deep.equal([]);
                done()
            });
        });
    });
    describe('name that exist', () => { 
        it('should get an array with Spirit Island franchise games', (done) => {
            request.get(`http://localhost:8000/game/Spirit Island`,
            (error, response, body)=>{
                expect(JSON.parse(body)).to.deep.equal([
                    {
                        "id": "kPDxpJZ8PD",
                        "name": "Spirit Island",
                        "year_published": 2016,
                        "min_players": 1,
                        "max_players": 4,
                        "min_playtime": 90,
                        "max_playtime": 120,
                        "min_age": 13,
                        "description": "Powerful Spirits have existed on this isolated island for time immemorial. They are both part of the natural world and - at the same time - something beyond nature. Native Islanders, known as the Dahan, have learned how to co-exist with the spirits, but with a healthy dose of fear and reverence. However, now, the island has been &quot;discovered&quot; by invaders from a far-off land. These would-be colonists are taking over the land and upsetting the natural balance, destroying the presence of Spirits as they go. As Spirits, you must grow in power and work together to drive the invaders from your island... before it's too late!"
                    },
                    {
                        "id": "KafFvSJSaW",
                        "name": "Spirit Island: Jagged Earth",
                        "year_published": 2020,
                        "min_players": 1,
                        "max_players": 6,
                        "min_playtime": null,
                        "max_playtime": null,
                        "min_age": null,
                        "description": "<p>Peril racks <a href=\"https://store.greaterthangames.com/spirit-island.html\" target=\"_blank\">Spirit Island</a>. The invaders are more numerous and more capable than ever before. As hope begin to fade, defense of the island falls to those spirits more in tune with the danger and chaos of the natural world. Will you be able to harness their power to protect the island or will it fall to the persistence of the invaders? Whatever the outcome, Spirit Island will never be the same after the time of <em><strong>Jagged Earth</strong></em>! </p>"
                    },
                    {
                        "id": "otIQ3ZB83G",
                        "name": "Spirit Island Branch & Claw Expansion",
                        "year_published": null,
                        "min_players": 1,
                        "max_players": 4,
                        "min_playtime": 90,
                        "max_playtime": 120,
                        "min_age": 13,
                        "description": "The branch &amp; claw expansion for spirit Island, featuring two new spirits (sharp fangs behind the leaves and keeper of the forbidden wilds) and a new adversary (France) as well as adding events to the invader phase of the game! the event deck has events that happen each turn, adding further variation to the game play. In addition, the expansion has tokens that prevent the invaders from exploring, building, or ravaging or add wild beasts to the land, a new set of powers (31 minor and 21 major) that use the new tokens and expand the game play, 15 new fear cards, new blight cards, and new scenarios."
                    },
                    {
                        "id": "hsfGRegqe9",
                        "name": "Spirit Island: Expansion Playmat",
                        "year_published": 2017,
                        "min_players": 5,
                        "max_players": 6,
                        "min_playtime": 90,
                        "max_playtime": 120,
                        "min_age": 13,
                        "description": "<p>See the World of Spirit Island as imagined in the folklore from the game creator. This Map lays out the entire Island in stunning full color with realistic landscapes. It includes Iconography for each Spirit's home on the island as well as a new section not included on the tiles in the core game. This expansion allows 5 or 6 players to join in on the game.</p>\r\n\r\n<p>Note that for playing a 5-6 player game, you need both the playmat AND the Spirit Island: Champions of the Dahan Token Pack.</p>"
                    },
                    {
                        "id": "D0uJX7mYRt",
                        "name": "Spirit Island: Promo Pack 2",
                        "year_published": 2020,
                        "min_players": 1,
                        "max_players": 4,
                        "min_playtime": 90,
                        "max_playtime": 120,
                        "min_age": 13,
                        "description": "<p>This is a promo pack that includes:</p>\r\n\r\n<p>Spirit: Finder of Paths Unseen<br />\r\nSpirit: Downpour Drenches the World<br />\r\nAdversary: Kingdom of Scotland<br />\r\n5 New Aspect Cards<br />\r\n4 New Fear Cards<br />\r\n2 New Scenarios</p>"
                    },
                    {
                        "id": "CwDo4fbgpB",
                        "name": "Spirit Island: Heart of the Wildfire & Serpent Slumbering Beneath the Island Promo Spirits",
                        "year_published": 2017,
                        "min_players": 1,
                        "max_players": 4,
                        "min_playtime": 90,
                        "max_playtime": 120,
                        "min_age": 13,
                        "description": "<p>Two promo Spirits for Spirit Island, printed as part of the initial Kickstarter. Includes two Spirit Mats and eight Unique Power cards. Remaining supplies will be available from Greater Than Games at conventions (and perhaps other channels) for however long they last.</p>\r\n\r\n<p>Heart of the Wildfire is a joyous Spirit of fire, destruction, and (maybe eventually) renewal. Mechanically, it's high-complexity, extreme-offense, and blights the land as it spreads.</p>\r\n\r\n<p>Serpent Slumbering Beneath the Island is a slow-to-wake primal Spirit of the deep, deep earth. Mechanically, it's high-complexity and slow-developing with huge late-game payoffs.</p>"
                    },
                    {
                        "id": "y7B59BcZLt",
                        "name": "Spirit Island: Champions of the Dahan Token Pack",
                        "year_published": 2017,
                        "min_players": 5,
                        "max_players": 6,
                        "min_playtime": 90,
                        "max_playtime": 120,
                        "min_age": 13,
                        "description": "<p>The Champions of the Dahan Token Pack includes two new colors of presence tokens (orange and green) as well as additional Cities, Towns, and Explorers to add to your game of Spirit Island to allow up to two more players to join the team as you all work together to rid your island of the encroaching Invaders.</p>\r\n\r\n<p>These token packs can be used with the Spirit Island Playmat, which includes two more &quot;tiles&quot; in the island, giving all 6 players a starting position.<br />\r\n—description from the publisher's website</p>\r\n\r\n<p>Champions of the Dahan Token Pack includes the pieces needed to expand your Spirit Island experience up to 6 players.</p>\r\n\r\n<p>Currently the only way to get the map tiles for 5-6 players is owning the Spirit Island: Expansion Playmat</p>\r\n\r\n<p>Detailed contents list:<br />\r\n12 Cities<br />\r\n20 Towns<br />\r\n30 Explorers<br />\r\n18 Blight<br />\r\n20 Dahan<br />\r\n13 Orange player discs - no defend tokens<br />\r\n13 Green player discs - no defend tokens<br />\r\nNo extra fear or energy</p>"
                    },
                    {
                        "id": "oC7vkP3QeE",
                        "name": "Spirit Island: Promo Pack 1",
                        "year_published": 2017,
                        "min_players": 1,
                        "max_players": 4,
                        "min_playtime": 90,
                        "max_playtime": 120,
                        "min_age": 13,
                        "description": ""
                    }
                ]);
                done()
            });
        });
    });
});

describe('Get List by Id', () => { 
    describe('Id that doesnt exist', () => { 
        it('should get body with found = false', (done) => {
            request.get(`http://localhost:9200/lists/_doc/${'ekdhujkvkm'}`,
            (error, response, body)=>{
                expect(JSON.parse(body)).to.deep.equal({
                    "_index": "lists",
                    "_type": "_doc",
                    "_id": "ekdhujkvkm",
                    "found": false
                });
                done()
            });
        });
    });
    describe('Id that exists',() => {
        it('should get list17 with id = hAnkUW4Ba9mCMx9dflPw , change the id accordingly ', (done) => {
            request.get(`http://localhost:9200/lists/_doc/hAnkUW4Ba9mCMx9dflPw`,
            (error, response, body)=>{
                expect(JSON.parse(body)).to.deep.equal({
                    "_index": "lists",
                    "_type": "_doc",
                    "_id": "hAnkUW4Ba9mCMx9dflPw",
                    "_version": 1,
                    "_seq_no": 5,
                    "_primary_term": 1,
                    "found": true,
                    "_source": {
                        "name": "lista17",
                        "description": "lista 17 description"
                    }
                });
                done()
            });
        });
    });
});
describe('Most Popular Games', () => { 
    it('should get array with most popular games', (done) => {
        request.get(`http://localhost:8000/game/mostpopular=true`,
        (error, response, body)=>{
            expect(JSON.parse(body)).to.deep.equal([
                {
                    "id": "kPDxpJZ8PD",
                    "name": "Spirit Island",
                    "year_published": 2016,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 13,
                    "description": "Powerful Spirits have existed on this isolated island for time immemorial. They are both part of the natural world and - at the same time - something beyond nature. Native Islanders, known as the Dahan, have learned how to co-exist with the spirits, but with a healthy dose of fear and reverence. However, now, the island has been &quot;discovered&quot; by invaders from a far-off land. These would-be colonists are taking over the land and upsetting the natural balance, destroying the presence of Spirits as they go. As Spirits, you must grow in power and work together to drive the invaders from your island... before it's too late!"
                },
                {
                    "id": "RLlDWHh7hR",
                    "name": "Gloomhaven",
                    "year_published": 2017,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 150,
                    "min_age": 12,
                    "description": "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.<br />\r\n<br />\r\nPlayers must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.<br />\r\n<br />\r\nThis is a legacy game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a &quot;Choose Your Own Adventure&quot; book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn."
                },
                {
                    "id": "i5Oqu5VZgP",
                    "name": "Azul",
                    "year_published": 2017,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 30,
                    "max_playtime": 60,
                    "min_age": 8,
                    "description": "Azul was designed by the world famous, award winning game author Michael Riesling. Azul captures the beautiful aesthetics of Moorish art in a contemporary board game. Players compete as artisans decorating the walls of the royal Palace of Dvora. By carefully drafting the correct Quantity and style of tiles, the most clever of artisans plan ahead to maximize the beauty of their work (not to mention their scores!) while ensuring they wasted no supplies in the process. Introduced by the moors, &quot;azulejos&quot; (originally white and blue ceramic tiles) were fully embraced by the Portuguese, when their King Manuel I, on a visit to the Alhambra Palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The King, awestruck by the interior beauty of the Alhambra, immediately ordered that his own Palace in Portugal be decorated with similar wall tiles. As a tile-laying artist, you have been challenged to embellish the walls of the royal Palace of Dvora."
                },
                {
                    "id": "yqR4PtpO8X",
                    "name": "Scythe",
                    "year_published": 2016,
                    "min_players": 1,
                    "max_players": 5,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 14,
                    "description": "<i>Scythe</i> gives players almost complete control over their fate. Other than each player's individual hidden objective card, the only elements of luck or variability are &quot;Encounter&quot; cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness.<br />\r\n<br />\r\n<i>Scythe</i> uses a streamlined action-selection mechanism (no rounds or phases) to keep gameplay moving at a brisk pace and reduce downtime between turns. While there is plenty of direct conflict for players who seek it, there is no player elimination.<br />\r\n<br />\r\nEvery part of <i>Scythe</i> has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times."
                },
                {
                    "id": "6FmFeux5xH",
                    "name": "Pandemic",
                    "year_published": 2008,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 45,
                    "max_playtime": 60,
                    "min_age": 8,
                    "description": "After five years of Pandemic, hundreds of thousands of players have contracted the virus! To celebrate this milestone, Pandemic has been completely re-designed. With new artwork by Chris Quilliams (Clash of Cultures, Merchants &amp; Marauders), Pandemic will now have a more modern look, inside and outside the box. With two new characters (the Contingency Planner and the Quarantine Specialist) face the game in ways you never thought possible as brand-new, virulent challenges await you!"
                },
                {
                    "id": "oGVgRSAKwX",
                    "name": "Carcassonne",
                    "year_published": 2000,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 7,
                    "description": "Each game of <em>Carcassonne</em> reveals a unique environment as tiles form a landscape of cities, roads, fields, and monasteries. Claim these features with your followers to win the game.\r\n\r\n<p><em>Carcassonne</em> is a tile placement game where players collectively construct the area around the medieval French city of Carcassonne while competing to place followers on various features and score the most points. First published in 2000, the game's accessible yet deep design has attracted a wide fan base and led to the development of numerous expansions and standalone titles in the <em>Carcassonne</em> line.</p>"
                },
                {
                    "id": "fDn9rQjH9O",
                    "name": "Terraforming Mars",
                    "year_published": 2016,
                    "min_players": 1,
                    "max_players": 5,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 12,
                    "description": "In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level and the ocean coverage until the environment is habitable. In Terraforming Mars you play one of those corporations and work together in the terraforming process, but compete in doing the best work, with victory points awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar systems and other commendable achievements. The players acquire unique project cards, which represent anything from introducing plant life or animals, hurling asteroids at the surface, building cities, and establishing greenhouse gas industries to heat up the atmosphere. You compete for the best places for your city tiles, ocean tiles and greenery tiles. When the terraforming process is complete, the player corporation with the most victory points wins."
                },
                {
                    "id": "TAAifFP590",
                    "name": "Root",
                    "year_published": 2018,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 90,
                    "min_age": 10,
                    "description": "Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again."
                },
                {
                    "id": "FCuXPSfhDR",
                    "name": "Concordia",
                    "year_published": 2013,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 13,
                    "description": "2,000 years ago, the Roman Empire ruled the lands around the Mediterranean Sea. With peace at the borders, harmony inside the provinces, uniform law, and a common currency, the economy thrived and gave rise to mighty Roman dynasties as they expanded throughout the numerous cities. Guide one of these dynasties and send colonists to the remote realms of the Empire, develop your trade network, and appease the ancient gods to curry their favor - all to gain the chance to emerge victorious in Concordia."
                },
                {
                    "id": "6VQXkkC5ql",
                    "name": "Dominion: Second Edition",
                    "year_published": 2016,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 15,
                    "max_playtime": 60,
                    "min_age": 14,
                    "description": "You are a monarch, like your parents before you, a ruler of a small pleasant kingdom of rivers and evergreens. Unlike your parents, however, you have hopes and dreams! You want a bigger and more pleasant kingdom, with more rivers and a wider variety of trees. You want a Dominion! <br />\r\n<br />\r\nIn all directions lie fiefs, freeholds, and feodums. All are small bits of land, controlled by petty lords and verging on anarchy. You will bring civilization to these people, uniting them under your banner.<br />\r\n<br />\r\nRio Grande Games has updated Dominion in this Second Edition. New cover and replaced a few cards; cleaned up rules and card text. Artwork on the Base cards have been changed to be similar to that found previously in Base Cards."
                },
                {
                    "id": "M5treAlrHc",
                    "name": "Agricola Revised Edition",
                    "year_published": 2016,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 30,
                    "max_playtime": 120,
                    "min_age": 10,
                    "description": "In Agricola (Latin for &quot;farmer&quot;), you're a farmer in a wooden shack with your spouse and little else. On a turn, you get to take only two actions, one for you and one for the spouse, from all the possibilities you'll find on a farm: collecting clay, wood or stone; building fences; and so on. You might think about having kids in order to get more work accomplished, but first you need to expand your house. And what are you going to feed all the little rug rats? Agricola is a turn based game. There are 14 game turns plus 6 harvest phases (after turn 4, 7, 9, 11, 13, and 14). Each player starts with two playing tokens (farmer and wife) and thus can take two actions per turn. There are multiple options, and while the game progresses, you'll have more and more: first thing in a turn, a new action card is flipped over. Problem: Each action can be taken just once per turn, so it's important to do some things with high preference. Each player also starts with a hand of 7 Occupation cards (of more than 160 total) and 7 Minor Improvement cards (of more than 140 total) that he may use during the game if they fit in his/her strategy. This amounts to countless strategies, some depending on your card hand. Sometimes it's a good choice to stay on course, sometimes you better react on what your opponents do. Agricola can also be played without cards (family game) and can even be played solo. Designed by Uwe Rosenberg."
                },
                {
                    "id": "E4ELA8cG85",
                    "name": "Race for the Galaxy",
                    "year_published": 2007,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 30,
                    "max_playtime": 60,
                    "min_age": 14,
                    "description": "In Race for the Galaxy from Rio Grande Games, players build galactic civilizations using game cards that represent worlds or technical and social developments. Each round consists of one or more of five possible phases. In each round, each player secretly and simultaneously chooses one of seven different action cards and then reveals it. Only the selected phases occur. For these phases, every player performs the phasea€s action, while the selecting player(s) also get a bonus for that phase. For example, if at least one player chooses the Develop action, then the Develop phase will occur, otherwise it is skipped. In it, each player may simultaneously select a development from his hand of cards to build. After revealing the cards, each player adds his development to his tableau of cards on the table and then discards cards from his hand equal to its cost. Each player who chose Develop discards one card fewer as his bonus. Explore allows a player to draw cards and select which of them to add to his hand. Settle allows a player to place a world in his tableau. Some worlds produce goods, represented by face down cards, when Produce is selected. These goods can be discarded for victory points or sold to add cards to the player's hand by selecting Consume. With cards, players can settle new worlds and build more developments, gaining both victory points and card powers that provide advantages in certain phases. The player who best manages his cards, phase and bonus selections, and card powers to build the greatest space empire, wins. The winner is the player with the most victory points."
                },
                {
                    "id": "5H5JS0KLzK",
                    "name": "Wingspan",
                    "year_published": 2019,
                    "min_players": 1,
                    "max_players": 5,
                    "min_playtime": 40,
                    "max_playtime": 70,
                    "min_age": 10,
                    "description": "<p><em><strong>Wingspan</strong></em> is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games.</p>\r\n\r\n<p>You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your aviary. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats  focus on several key aspects of growth:</p>\r\n\r\n<ul><li>Gain food tokens via custom dice in a birdfeeder dice tower</li><li>Lay eggs using egg miniatures in a variety of colors</li><li>Draw from hundreds of unique bird cards and play them</li></ul>\r\n\r\n<p>The winner is the player with the most points after 4 rounds.</p>\r\n\r\n<p>If you enjoy Terraforming Mars and Gizmos, we think this game will take flight at your table. The official announcement and pre-orders will be available on January 2, 2019.</p>"
                },
                {
                    "id": "O0G8z5Wgz1",
                    "name": "Splendor",
                    "year_published": 2014,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 30,
                    "max_playtime": 60,
                    "min_age": 10,
                    "description": "As a wealthy Renaissance merchant, acquire mines and transportation, hire artisans and woo the nobility. Create the most fantastic jewelry to become the best-known merchant of them all! Acquire precious stones to trade them for development cards. Use development cards to acquire more gem stones. Use your gems and gold to create the most fantastic jewelry, and appeal to the nobles to gain the prestige you need to win.<br />\r\n<br />\r\nSplendor is a fast-paced and addictive game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops; all in order to acquire the most prestige points. If you're wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige.<br />\r\n <br />\r\nOn your turn, you may (1) collect chips (gems), or (2) buy and build a card, or (3) reserve one card. If you collect chips, you take either three different kinds of chips or two chips of the same kind. If you buy a card, you pay its price in chips and add it to your playing area. To reserve a card, you place it in front of you face down for later building; this costs you a round, but you also get gold in the form of a joker chip, which you can use as any gem.<br />\r\n <br />\r\nAll of the cards you buy increase your wealth as they give you a permanent gem bonus for later buys; some of the cards also give you prestige points. In order to win the game, you must reach 15 prestige points before your opponents do."
                },
                {
                    "id": "GP7Y2xOUzj",
                    "name": "Codenames",
                    "year_published": 2015,
                    "min_players": 2,
                    "max_players": 8,
                    "min_playtime": 15,
                    "max_playtime": 20,
                    "min_age": 14,
                    "description": "The two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES.<br />\r\n<br />\r\nThe teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.<br />\r\n<br />\r\nCodenames: win or lose, it's fun to figure out the clues."
                },
                {
                    "id": "AuBvbISHR6",
                    "name": "Ticket To Ride",
                    "year_published": 2004,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 45,
                    "max_playtime": 90,
                    "min_age": 8,
                    "description": "Ticket to Ride is a cross-country train adventure game. Players collect train cards that enable them to claim railway routes connecting cities throughout North America. The longer the routes, the more points they earn. Additional points come to those who can fulfill their Destination Tickets by connecting two distant cities, and to the player who builds the longest continuous railway. So climb aboard for some railroading fun and adventure. You've got a Ticket to Ride!<br />\r\n<br />\r\nOctober 2, 1900 -- it's 28 years to the day that noted London eccentric, Phileas Fogg accepted and then won a 20,000 bet that he could travel Around the World in 80 Days. Now at the dawn of the century some old friends have gathered to celebrate Fogg's impetuous and lucrative gamble -- and to propose a new wager of their own. The stakes: $1 million in a winner-takes-all competition. The objective: to see the most cities in North America -- in just 7 days. <br />\r\n<br />\r\n-Spiel Des Jahres 2004(German game of the year)<br />\r\n-As d'Or Cannes 2004 (French game of the year)<br />\r\n-Game of the year 2004 - Japan<br />\r\n-Game of the year 2004 - Sweden<br />\r\n-Game of the year 2004 - Finland<br />\r\n-Diana Jones Excellence in Gaming Award 2004<br />\r\n-Origins Award Winner - Best Board Game 2005<br />\r\n-Game of the year 2004 - Spain<br />\r\n-Parent's Choice Foundation Silver Medal 2004"
                },
                {
                    "id": "OIXt3DmJU0",
                    "name": "Catan",
                    "year_published": 1995,
                    "min_players": 3,
                    "max_players": 4,
                    "min_playtime": 45,
                    "max_playtime": 90,
                    "min_age": 10,
                    "description": "<p>The women and men of your expedition build the first two settlements. Fortunately, the land is rich in natural resources. You build roads and new settlements that eventually become cities. Will you succeed in gaining supremacy on Catan? Barter trade dominates the scene. Some resources you have in abundance, other resources are scarce. Ore for wool, brick for lumber - you trade according to what is needed for your current building projects. Proceed strategically! If you found your settlements in the right places and skillfully trade your resources, then the odds will be in your favor. But your opponents are smart too.</p>\r\n\r\n<p>To begin the game, we build the game board using hexagonal terrain tiles. Catan is born - a beautiful island with mountains, pastures, hills, fields, and forests, surrounded by the sea.</p>\r\n\r\n<p>Each of us places two small houses on spaces where three terrain hexes meet. They are our starting settlements.</p>\r\n\r\n<p>And so it begins. I roll two dice. An “11”! Each terrain hex is marked with a die roll number. Each player who owns a settlement adjacent to a terrain hex marked with the number rolled receives a resource produced by this hex. Hills produce brick, forests produce lumber, mountains produce ore, fields produce grain, and pastures produce wool.</p>\r\n\r\n<p>We use these resources to expand across Catan: we build roads and new settlements, or we upgrade our existing settlements to cities. For example, a road costs 1 brick and 1 lumber. If we do not have the necessary resources, we can acquire them by trading with our opponents.</p>\r\n\r\n<p>Each settlement is worth 1 victory point and each city is worth 2 victory points. If you expand cleverly, you may be the first player to reach 10 victory points and thus win the game!</p>"
                },
                {
                    "id": "7NYbgH2Z2I",
                    "name": "Viticulture: Essential Edition",
                    "year_published": 2015,
                    "min_players": 1,
                    "max_players": 6,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 13,
                    "description": "Viticulture is a worker-placement game set in the foothills of Tuscany. The Essential Edition includes the second edition of Viticulture along with several elements from the original Tuscany expansion pack, hand-picked by famed designer Uwe Rosenberg."
                },
                {
                    "id": "8YYQ8Q3dGv",
                    "name": "Arboretum",
                    "year_published": 2015,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 8,
                    "description": "Arboretum is a strategic card game that challenges players to create the most beautiful path through the garden. Choosing the correct cards and placing them in the most efficient orientation will score you the most points at the end of the game. With elegantly simple rules, Arboretum offers players surprisingly complex choices."
                },
                {
                    "id": "BBg2uXXdB8",
                    "name": "Kingdomino",
                    "year_published": 2016,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 15,
                    "max_playtime": 20,
                    "min_age": 8,
                    "description": "Kingdomino is a 2-4 player strategy game that plays like dominoes with a kingdom-building twist. Each turn you will connect a new domino to your existing kingdom, making sure that at least one of its sides connects to a matching element already in play.<br />\r\n<br />\r\nMake sure to include dominoes with crowns on them, because at the end of the game you will score points equal to the total number of  matching elements multiplied by the number of crowns."
                },
                {
                    "id": "vBBhuJjFVE",
                    "name": "Food Chain Magnate",
                    "year_published": 2015,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 120,
                    "max_playtime": 240,
                    "min_age": 14,
                    "description": "&quot;Lemonade? They want lemonade? What is the world coming to? I want commercials for burgers on all channels, every 15 minutes. We are the Home of the Original Burger, not a hippie health haven. And place a billboard next to that new house on the corner. I want them craving beer every second they sit in their posh new garden.&quot; <br />\r\n<br />\r\nThe new management trainee trembles in front of the CEO and tries to politely point out that... &quot;How do you mean, we don't have enough staff? The HR director reports to you. Hire more people! Train them! But whatever you do, don't pay them any real wages. I did not go into business to become poor. And fire that discount manager, she is only costing me money. From now on, we'll sell gourmet burgers. Same crap, double the price. Get my marketing director in here!&quot;<br />\r\n<br />\r\nFood Chain Magnate is a heavy strategy game about building a fast food chain. The focus is on building your company using a card-driven (human) resource management system. Players compete on a variable city map through purchasing, marketing and sales, and on a job market for key staff members."
                },
                {
                    "id": "9iBOPn3lES",
                    "name": "Patchwork",
                    "year_published": 2014,
                    "min_players": 2,
                    "max_players": 2,
                    "min_playtime": 15,
                    "max_playtime": 30,
                    "min_age": 8,
                    "description": "Patchwork is a form of needlework that involves sewing together pieces of fabric into a larger design. In the past, it was a way to make use of leftover pieces of cloth to create clothing and quilts. Today, patchwork is a form of art, in which the designers use precious fabrics to create beautiful textiles. The use of uneven pieces of fabric in particular can result in real masterpieces and is therefore being practiced by a large number of textile artists.<br />\r\n<br />\r\nTo create a beautiful quilt, however, requires effort and time, but the available patches just do not want to fit together. So choose your patches carefully and keep a healthy supply of buttons to not only finish your quilt, but to make it better and more beautiful than your opponent's."
                },
                {
                    "id": "pPZnlKC4G3",
                    "name": "Inis",
                    "year_published": 2016,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 90,
                    "min_age": 14,
                    "description": "<div><p>The game's elegant mechanics combine card drafting and area control to produce a system rich in strategic options and interpersonal interactions.<br />At the same time, brilliantly crafted tiles give every game a unique, gradually unfolding geography. The gorgeous original art brings Ireland's ancient epics and audacious heroes to life.<br /></p><p><br />There are three different types of cards in <i>Inis</i>:<br />Action Cards - These are drafted each round and provide the base actions to deploy troops, move troops, attack, and play new regions.<br />Advantage Cards - These are acquired as a result of controlling certain regions. Each region has its own Advantage Card you receive as a result of having the most troops in it.<br />Epic Tales Cards - These unique and powerful cards evoke the Celtic gods and heroes to inspire the clans to accomplish legendary feats.</p></div>"
                },
                {
                    "id": "OF145SrX44",
                    "name": "7 Wonders",
                    "year_published": 2010,
                    "min_players": 2,
                    "max_players": 7,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 10,
                    "description": "<i>Winner of the 2011 Kennerspiel des Jahres (Enthusiasts Game of the Year) Award.</i><br /><br />\r\nYou are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times!<br /><br />\r\n7 wonders is a simple and addictive game for the whole family. In 30 minutes you can raise a complete civilization and build the greatest Wonders of the World."
                },
                {
                    "id": "exdy1Z2bSC",
                    "name": "Mage Knight",
                    "year_published": 2011,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 240,
                    "min_age": 14,
                    "description": "Designed by one of world’s leading game designers, Vlaada Chvátil, WizKids is pleased to announce the Mage Knight Board Game: Ultimate Edition is arriving this fall! Current or new fans can find all of the released content plus a few new and exciting components all in one place!<br /><br />The critically acclaimed, award winning Mage Knight board game combines elements of RPGs, deckbuilding, and traditional board games while capturing the rich history of the Mage Knight universe. Now, after wowing solo game players and groups of up to 5, this Ultimate Edition brings it all together in a self-contained gaming experience.<br /><br />The Ultimate Edition includes the original base game plus all three expansions: The Lost Legion, Krang, and Shades of Tezla. It features comprehensive integrated rules text, 5 all-new cards, alternate paint jobs, and a great price that can’t be beat!<br /><br />This is the Ultimate Edition fans have waited for!"
                },
                {
                    "id": "Meszt3IFfX",
                    "name": "Power Grid",
                    "year_published": 2004,
                    "min_players": 2,
                    "max_players": 6,
                    "min_playtime": 120,
                    "max_playtime": 150,
                    "min_age": 12,
                    "description": "Power Grid is the updated release of the Friedemann Friese crayon game Funkenschlag. The latest cooperative publishing effort from Friedemann Friese and Rio Grande Games, removes the crayon aspect from network building in the original editionwhile retaining the fluctuating commodities market like McMulti and an auction round intensity reminiscent of The Princes of Florence.<br />\r\n<br />\r\nThe object of Power Grid is to supply the most cities with power when someone?s network gains a predetermined size. In this new edition, players mark pre-existing routes between cities for connection, and then vie against other players to purchase the powerplants that you use to supply the power. However, as plants are purchased, newer more efficient plants become available so you?re potentially allowing others to access to superior equipment merely by purchasing at all. <br />\r\n<br />\r\nAdditionally, players must acquire the raw materials, like coal, oil, garbage, or uranium, to power said plants (except for the highly valuable renewable energy wind/solar plants), making it a constant struggle to upgrade your plants for maximum efficiency while still retaining enough wealth to quickly expand your network to get the cheapest routes."
                },
                {
                    "id": "T5lx9elSDt",
                    "name": "Love Letter",
                    "year_published": 2012,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 20,
                    "max_playtime": 20,
                    "min_age": 10,
                    "description": "All of the eligible young men (and many of the not-so-young) seek to woo the princess of Tempest. Unfortunately, she has locked herself in the Palace, and you must rely on others to bring your romantic letters to her. Will yours reach her first? love letter is a game of risk, deduction, and luck for 2 to 4 players. Your goal is to get your love letter into princess Annette's hands while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire."
                },
                {
                    "id": "eh0GTvESIX",
                    "name": "Jaipur",
                    "year_published": 2009,
                    "min_players": 2,
                    "max_players": 2,
                    "min_playtime": 30,
                    "max_playtime": 42,
                    "min_age": 12,
                    "description": "Jaipur, capital of Rajasthan. You are one of the two most powerful traders in the city.<br />\r\n<br />\r\nBut that's not enough for you, because only the merchant with two Seals of Excellence will have the privilege of being invited to the Maharaja's court.<br />\r\n<br />\r\nYou are therefore going to have to do better than your direct competitor by buying, exchanging and selling at better prices, all while keeping an eye on both your camel herds.<br />\r\n<br />\r\nA card game for two seasoned traders!"
                },
                {
                    "id": "1dWE5BIcOm",
                    "name": "Star Realms",
                    "year_published": 2014,
                    "min_players": 2,
                    "max_players": 2,
                    "min_playtime": 15,
                    "max_playtime": 30,
                    "min_age": 12,
                    "description": "Star Realms is a spaceship combat deck building game designed by Magic Pro Tour Champions and Hall of Famers Darwin Kastle and Rob Dougherty (developer and cofounder of the Ascension Deck building Game). Star Realms offers all the thrills of traditional trading card game style combat, combined with the fun of a deck building game. Play powerful ships, destroy enemy bases or blast your opponent directly on your way to victory! CONTENTS 128 beautifully illustrated cards: 80 card main deck, 10 Explorer cards, Two 10 card personal decks, 18 double-sided score cards And two full-color rule sheet."
                },
                {
                    "id": "wkBw955xS3",
                    "name": "Great Western Trail",
                    "year_published": 2016,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 75,
                    "max_playtime": 150,
                    "min_age": 12,
                    "description": "<div><p>This ain't your average, everyday Euro game! Welcome to the Great Western Trail, where players take on the role of cattle drivers attempting to wrangle their herd to market. The trail will be tough, and countless hazards await you. Can you make it to the end of your journey and turn a tidy profit? Find out in Great Western Trail!<br /><br /><b>Simple Mechanics, Complex Decisions</b><br />Turns in Great Western Trail are broken into three simple phases that will carry you through the entire game. These simple phases belie a web of deep and complex decisions players will face as they make their way down the trail. The mechanics are simple, but mastering the trail is where the fun lies.<br /><br /><b>Make Your Move!</b><br />A turn starts by moving your cattleman down the trail. The number of spaces a player is allowed to move is dictated by their player board, and there are hazards a plenty all along the trail. Wherever you end up, the next phase is ...<br /><br /><b>Take Action!</b><br />When a player ends their movement, they perform the action listed on the space they ended on. Depending on where you land, you will have different options available to you. Neutral locations or buildings you own will allow you to perform a special action specific to that location or a single auxiliary action. On locations owned by other players, hazard tiles, or teepee tiles, your only option is to use an auxiliary action. Last, there's Kansas City!<br /><br /><b>Kansas City or Bust!</b><br />Landing on Kansas City sets off a series of subphases that must be resolved in order: Three Foresight phases, the Income Phase, and the Delivery Phase. The Foresight subphases give players a choice between two tiles to add to the board (hazard, teepee, or worker). These tiles will affect future trips down the trail, so choose wisely. Earn income from your journey down the trail by revealing and discarding your hand. Finally, choose a city to deliver your cattle to. This leg of your journey is over. Now it's time to do it all again!<br /><br /><b>Draw!</b><br />Draw up to your hand limit and your turn is over! Time to start planning your next move and figure out the choices you'll face in the coming turns.</p></div>"
                },
                {
                    "id": "19C9ka2hEx",
                    "name": "Coup",
                    "year_published": 2012,
                    "min_players": 2,
                    "max_players": 6,
                    "min_playtime": 15,
                    "max_playtime": 30,
                    "min_age": 10,
                    "description": "<p><div></div><div></div><div></div><div></div><div><div></div></div><div></div></p><div><div><div><div><p>In the not too distant future, the government is run for profit by a new &quot;royal class&quot; of multi-national CEOs. Their greed and absolute control of the economy has reduced all but a privileged few to lives of poverty and desperation. Out of the oppressed masses rose The Resistance, an underground organization focused on overthrowing these powerful rulers. The valiant efforts of The Resistance have created discord, intrigue and weakness in the political courts of the novena royal, bringing the government to brink of collapse. But for you, a powerful government official, this is your opportunity to manipulate, bribe and bluff your way into absolute power.</p></div></div></div></div>"
                },
                {
                    "id": "yPwGVk8lB2",
                    "name": "Gaia Project",
                    "year_published": 2017,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 150,
                    "min_age": 14,
                    "description": "&quot;Set your sights on distant stars and strive to colonize the galaxy in Gaia project, the follow-up to the smash hit Terra Mystica! true to the foundations that made Terra Mystica a massive success, this box invites one to four players to forge their own galactic empires. Explore the vast reaches of space and convert planets to meet your faction unique environmental needs as you seek to tighten your grasp on the galaxy. Fourteen unique factions stand ready to boldly take their first steps into the cosmos while building structures to generate resources, researching new technology, and uniting planets to form powerful federations. Chart your course and remake planets as you see fit in Gaia project. In the end, only the most advanced faction will win.&quot;"
                },
                {
                    "id": "I77I9HybTm",
                    "name": "Welcome to...",
                    "year_published": 2018,
                    "min_players": 1,
                    "max_players": 100,
                    "min_playtime": 25,
                    "max_playtime": 30,
                    "min_age": 10,
                    "description": "A roll and write without dice! Players will become architects in the American 50's as they use combinations of cards and actions to construct American dream real estate.<br />\r\n<br />\r\nAs an architect in Welcome to, you want to build the best new town in the United States during the 1950s. Players are developing estates, parks, pools, hiring employees, and more. Welcome to plays like a roll-and-write dice game in which you mark results on a scoresheet... but without dice."
                },
                {
                    "id": "axOr9uuOwN",
                    "name": "Lords of Waterdeep",
                    "year_published": 2012,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 60,
                    "max_playtime": 60,
                    "min_age": 12,
                    "description": "Waterdeep, the City of Splendors--the most resplendent jewel in the <b>Forgotten Realms</b>, and a den of political intrigue and shady back-alley dealings. In this game, the players are powerful lords vying for control of this great city. Its treasures and resources are ripe for the taking, and that which cannot be gained through trickery and negotiation must be taken by force!<br /><br /><i>Lords of Waterdeep</i> is a Euro-style board game for 2-5 players.<br /><br />Components:<br /> Game board<br /> Rulebook<br /> 5 card stock player mats<br /> 121 Intrigue, Quest, and Role cards<br /> 130 wooden cubes, pawns, and score pieces<br /> Wooden player markers<br /> Card stock tiles and tokens representing buildings, gold coins, and victory points"
                },
                {
                    "id": "61SwzHG7fB",
                    "name": "Sushi Go!",
                    "year_published": 2013,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 15,
                    "max_playtime": 30,
                    "min_age": 8,
                    "description": "Pass the sushi!<br />\r\n<br />\r\nIn this fast-playing card game, the goal is to grab the best combination of sushi dishes as they whiz by. Score points for making the most maki rolls or for collecting a full set of sashimi. Dip your favorite nigiri in wasabi to triple its value! But be sure to leave room for dessert or else you'll eat into your score! Gather the most points and consider yourself the sushi master!"
                },
                {
                    "id": "3IPVIROfvl",
                    "name": "Brass: Birmingham",
                    "year_published": 2018,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 120,
                    "max_playtime": 180,
                    "min_age": 14,
                    "description": "Brass: Birmingham is an economic strategy game sequel to Martin Wallace' 2007 masterpiece, Brass. Birmingham tells the story of competing entrepreneurs in Birmingham during the industrial revolution, between the years of 1770-1870. As in its predecessor, you must develop, build, and establish your industries and network, in an effort to exploit low or high market demands."
                },
                {
                    "id": "VibNUMwsqr",
                    "name": "Santorini",
                    "year_published": 2016,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 15,
                    "max_playtime": 30,
                    "min_age": 8,
                    "description": "<div><p>Welcome to the world of <i>Santorini</i>, a fantastic reimagining of the classic abstract game from 2004. Players are given a sandbox in which to play as gods, moving their workers around the board to build up a beautiful, multi-tiered city. Do you have what it takes to outsmart your opponents? Find out, in <i>Santorini</i>!<br /><br />Build it Up! <br /><br />Turns in <i>Santorini</i> are made up of two simple step: Move and Build. Move around the board and build a building in a spot adjacent to one of your workers. The first player to move their worker from a second level building to a third level building wins the game! Though, there are a few things that add a wrinkle to the basic formula.<br /><br />Invoke the Power of the gods!<br />Each player will have access to a god power which lets them do things a little differently than normal. Be it changing the rules for how you can build or move, changing how you interact with other players, or providing you with an alternate victory condition, the 30 different god powers are sure to make every game of <i>Santorini</i> different and exciting!</p>\r\n</div>"
                },
                {
                    "id": "FldbgzsTYH",
                    "name": "Blood Rage",
                    "year_published": 2015,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 60,
                    "min_age": 14,
                    "description": "In Blood Rage, each player controls their own Viking clan's warriors, leader, and ship. Ragnarok has come, and it's the end of the world! It's the Vikings' last chance to go down in a blaze of glory and secure their place in Valhalla at Odin's side! For a Viking there are many pathways to glory. You can invade and pillage the land for its rewards, crush your opponents in epic battles, fulfil quests, increase your clan's stats, or even die gloriously either in battle or from Ragnarok, the ultimate inescapable doom. Most player strategies are guided by the cards drafted at the beginning of each of the three game rounds (or Ages). These &quot;Gods' Gifts&quot; grant you numerous boons for your clan including: increased Viking strength and devious battle strategies, upgrades to your clan, or even the aid of legendary creatures from Norse mythology. They may also include various quests, from dominating specific provinces, to having lots of your Vikings sent to Valhalla. Most of these cards are aligned with one of the Norse gods, hinting at the kind of strategy they support. For example, Thor gives more glory for victory in battle, Heimdall grants you foresight and surprises, Tyr strengthens you in battle, while the trickster Loki actually rewards you for losing battles, or punishes the winner. Players must choose their strategies carefully during the draft phase, but also be ready to adapt and react to their opponents' strategies as the action phase unfolds. Battles are decided not only by the strength of the figures involved, but also by cards played in secret. By observing your opponents' actions and allegiances to specific gods, you may predict what card they are likely to play, and plan accordingly. Winning battles is not always the best course of action, as the right card can get you even more rewards by being crushed. The only losing strategy in Blood Rage is to shy away from battle and a glorious death!"
                },
                {
                    "id": "q4g2Y5eqyZ",
                    "name": "The Fox in the Forest",
                    "year_published": 2017,
                    "min_players": 2,
                    "max_players": 2,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 10,
                    "description": "<div><p>Enter the fairy tale world of <i>The Fox in the Forest</i>, a trick-taking game for two based on a story about a woodcutter's clever daughter who sets out on a journey to uncover the secrets of why monsters have begun to plague the kingdom. Players will play cards from their hands in a battle to take tricks and score points. <br /></p><p><br /><i>The Fox in the Forest</i> has a unique take on scoring that introduces tension into the trick-taking formula. If a player takes too many tricks, they are determined to be greedy and won't get any points at all. Do you want to win this trick and risk winning too many over the course of the round? What is your opponent trying to do?<br /></p><p><br />Each of the three suits has a set of special cards that have unique effects when played. The Swan allows you to lead the next trick even if you lose this one. The Fox lets you switch a card in your hand with the decree card setting the trump suit. The Woodcutter lets you swap a card in your hand with one of the extra cards. The Treasure will give the winner of a trick a free point for each 7 in the trick. The Witch will act as the trump suit if it's the only witch in the trick. Finally, the Monarch forces your opponent to play either the 1 of that suit, or their highest ranked card of that suit.</p>\r\n</div>"
                },
                {
                    "id": "nRGa6zZTQu",
                    "name": "Twilight Struggle",
                    "year_published": 2005,
                    "min_players": 1,
                    "max_players": 2,
                    "min_playtime": 150,
                    "max_playtime": 180,
                    "min_age": 13,
                    "description": "This Deluxe Edition of Twilight Struggle seeks to capture the feeling of that earlier era. Twilight Struggle is a two-player game simulating the forty-five year dance of intrigue, prestige, and occasional flares of warfare between the Soviet Union and the United States. Twilight Struggle recreates the conflict between the most powerful nation states the world has ever known. The scope of the game covers the entire world as it was found in 1945. Players move units and exert influence in attempts to gain allies and control for their superpower."
                },
                {
                    "id": "ilkKd5gDhg",
                    "name": "A Feast For Odin",
                    "year_published": 2016,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 30,
                    "max_playtime": 120,
                    "min_age": 12,
                    "description": "Delve into the world of Vikings and dabble in trading, hunting, raiding, pillaging, plundering, and raiding some more. Build houses, explore new worlds, and every round, have a feast in Odin's name. <br />\r\n<br />\r\nThe large variety of actions and occupations guarantees your Notherners long-lasting fun, with each game creating a new world on your player board!"
                },
                {
                    "id": "NYMPJIwU5Y",
                    "name": "Kemet",
                    "year_published": 2012,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 10,
                    "description": "<p>Conquer Territory! Defeat Your Enemies! Appease the Gods! </p><p>In Kemet, players lead a tribe of ancient Egyptians as they strategically maneuver their troops to control the most territories and battle against their rivals. Draw upon the powers of the Egyptian gods and recruit mythical creatures to reinforce your armies and vanquish those who oppose you and your ambitions!</p>"
                },
                {
                    "id": "D0OHY8b8Oc",
                    "name": "Hive",
                    "year_published": 2001,
                    "min_players": 2,
                    "max_players": 2,
                    "min_playtime": 15,
                    "max_playtime": 30,
                    "min_age": 8,
                    "description": "Hive is a boardless, strategic game for 2 players ages 8 and up. The object of the game is to surround your opponent's queen bee while trying to block your opponent from doing the same to your queen bee.<br />\r\n<br />\r\nEach player has 11 tiles, all in all, representing 5 different insects. The players take turns, either choosing to add a tile to the hive or moving a tile in the hive. <br />\r\n<br />\r\nEach tile has a unique way of moving (like in chess) and resembles the movement of the insect depicted on the tile. For instance, the grasshopper is the only tile which can jump.<br />\r\nHive is a fun game to play because of its simple rules, yet challenging for its depth. Hive enhances each player's skills of strategic planning, tactical thinking and spatial vision. To win, you must play both the offense (surround your opponent's bee) and the defense (to protect your queen bee).<br />\r\n<br />\r\nA nice decorative storage bag makes it easy to carry, store and play anywhere."
                },
                {
                    "id": "CT18FG3Yz5",
                    "name": "Aeon's End",
                    "year_published": 2016,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 75,
                    "min_age": 14,
                    "description": "The survivors of a long-ago invasion have taken refuge in the forgotten underground city of Gravehold. There, the desperate remnants of society have learned that the energy of the very breaches the beings use to attack them can be repurposed through various gems, transforming the malign energies within into beneficial spells and weapons to aid their last line of defense: the breach mages. \r\n\r\nAeon's End is a cooperative game that explores the deckbuilding genre with a number of innovative mechanisms, including a variable turn order system that simulates the chaos of an attack, and deck management rules that require careful planning with every discarded card. Players will struggle to defend Gravehold from The Nameless and their hordes using unique abilities, powerful spells, and, most importantly of all, their collective wits."
                },
                {
                    "id": "Rq3eREYb0e",
                    "name": "The Mind",
                    "year_published": 2018,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 20,
                    "max_playtime": 30,
                    "min_age": 10,
                    "description": "The addictive card game you play without talking."
                },
                {
                    "id": "j8LdPFmePE",
                    "name": "7 Wonders Duel",
                    "year_published": 2015,
                    "min_players": 2,
                    "max_players": 2,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 10,
                    "description": "Create the greatest civilization the Ancient World has ever known! In 7 Wonders, you lead an ancient civilization as it rises from its barbaric roots to become a world power. Build an architectural wonder that will fascinate for eons to come, and rule the most powerful civilization on Earth! 7 Wonders: Duel is a fast-paced, two-player edition of Antoine Bauza's award-winning civilization-building game."
                },
                {
                    "id": "Y2WacykMm5",
                    "name": "King of Tokyo",
                    "year_published": 2011,
                    "min_players": 2,
                    "max_players": 6,
                    "min_playtime": 30,
                    "max_playtime": 36,
                    "min_age": 8,
                    "description": "This new edition of the best-seller boasts new artwork, clearer rules, and revamped card abilities. Monsters have a new look, and the coveted space penguin character takes his place in Tokyo! King of Tokyo is a game for 2 to 6 players where you play as Mutant monsters, rampaging robots, or even abominable aliens battling in a fun, chaotic atmosphere.  Roll dice and choose your strategy: will you attack your enemies? Heal your wounds? improve your monster? Stomp your path to victory."
                },
                {
                    "id": "U9kz5EpqS2",
                    "name": "Innovation",
                    "year_published": 2010,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 45,
                    "max_playtime": 60,
                    "min_age": 12,
                    "description": "Innovation is a civilization-building card game by the designer of Glory to Rome, Carl Chudyk. It contains 105 cards organized into 10 progressing ages, each representing a different idea, technology, or innovation throughout history. Every card has a unique ability, leading to interesting combos, interactions, and diversified play experiences across multiple games. It is built on simple base mechanics, with the complexity deriving from the wide variety of game text on the cards. It won the 2010 Golden Geek Award for Best Card Game, awarded by Board Game Geek."
                },
                {
                    "id": "mJr3oebP6p",
                    "name": "Sagrada",
                    "year_published": 2017,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 20,
                    "max_playtime": 40,
                    "min_age": 14,
                    "description": "As a skilled artisan, use tools-of-the-trade and careful planning to construct a stained glass window masterpiece in the Sagrada Familia. Gain prestige by adapting to the preferences of your fickle admirers, and, of course, by adding your own artistic flair while completing your glass masterpiece in Sagrada, a game of dice-drafting and window-crafting."
                },
                {
                    "id": "nHJNyAWsoo",
                    "name": "Mysterium",
                    "year_published": 2015,
                    "min_players": 2,
                    "max_players": 7,
                    "min_playtime": 30,
                    "max_playtime": 60,
                    "min_age": 10,
                    "description": "A horrible crime has been committed on the grounds of Warwick Manor and it's up to the psychic investigators to get to the bottom of it.<br />\r\n<br />\r\nIn Mysterium, one player takes on the role of the ghost and over the course of a week, tries to lead the investigators to their culprit. Each night the team will be met with visions, but what is the ghost trying to tell you? Can the psychics determine the weapon, location and killer or will a violent criminal pull off the perfect murder?"
                },
                {
                    "id": "KpKepc41At",
                    "name": "Sushi Go Party!",
                    "year_published": 2016,
                    "min_players": 2,
                    "max_players": 8,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 8,
                    "description": "Sushi Go!, is a party platter of mega maki, super sashimi, and endless edamame. You still earn points by picking winning sushi combos, but now you can customize each game by choosing a la carte from a menu of more than twenty delectable dishes. What's more, up to eight players can join in on the sushi-feast. Let the good times roll!<br />\r\n<br />\r\nThis deluxe edition features lots of opportunities to customize your playing experience. You'll find that while the overall game is basically the same, the variety of cards offers many new opportunities. You'll also notice that the strategy changes from game to game."
                },
                {
                    "id": "K92cryrFW5",
                    "name": "Skull",
                    "year_published": 2011,
                    "min_players": 3,
                    "max_players": 6,
                    "min_playtime": 15,
                    "max_playtime": 45,
                    "min_age": 8,
                    "description": "An ancient game of ornate skulls and dangerous roses, Skull is simple to learn but dangerously difficult to win. You must bluff, lie and pierce through the deceptions to expose the roses. Be wary, though - if you happen across a skull, the consequences are dire! <br />\r\n<br />\r\nPlayers will hold three rose cards and one skull. Add a card to the pile in front of you, and when you feel lucky, announce your challenge and declare how many cards you will flip. Cards that show a rose are safe, but if you expose your opponent's hidden skull, you lose one of your own cards. Keep your cards to the bitter end to win this clever game of deception and perception!"
                },
                {
                    "id": "FVKaz7JhBO",
                    "name": "Cosmic Encounter",
                    "year_published": 2008,
                    "min_players": 3,
                    "max_players": 5,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 12,
                    "description": "Build a galactic empire...<br />\r\nIn the depths of space, the alien races of the Cosmos vie with each other for control of the universe. Alliances form and shift from moment to moment, while cataclysmic battles send starships screaming into the warp.<br />\r\n<br />\r\nPlayers choose from dozens of alien races, each with its own unique power to further its efforts to build an empire that spans the galaxy. Many classic aliens from earlier editions of this beloved game return, such as the Oracle, the Loser, and the Clone. Newly discovered aliens also join the fray, including Remora, Mite, and Tick-Tock.<br />\r\n<br />\r\nThis classic game of alien politics returns from the warp once more. It features 50 alien races, flare cards to boost their powers, 100 plastic ships, a host of premium components, and all-new tech cards that let players research and build extraordinary technological marvels!<br />\r\n<br />\r\nNo two games are the same!"
                },
                {
                    "id": "fGZawn3ipZ",
                    "name": "Hanabi",
                    "year_published": 2010,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 8,
                    "description": "<b> Winner of the prestigious Spiel des Jahres Award for 2013. </b> <br />\r\n<br />\r\nFrom 7 Wonders designer Antoine Bauza comes this innovative, cooperative card game where players race against the clock to build a dazzling fireworks finale. Trouble is, you can see the cards that everyone holds - except your own!<br />\r\n<br />\r\nWorking together, players exchange vital information in order to play their cards in the proper launch sequence. Build and light each firework correctly to win the game and avoid a fizzling fiasco!"
                },
                {
                    "id": "sxLwbJHu77",
                    "name": "Terra Mystica",
                    "year_published": 2012,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 60,
                    "max_playtime": 150,
                    "min_age": 12,
                    "description": "In Terra Mystica, players govern one of 14 factions seeking to terraform and colonize the landscape in their favor in order to build structures and preserve their race and culture. <br />\r\n<br />\r\nUpgrade structures to provide even more resources, like workers, priests, money, and power, erect temples to gain expanded influence in the four cults of Fire, Earth, Water, and Air, and fortify your stronghold to activate your group's special ability. Will your people prosper, persevere, and stand the test of time in Terra Mystica!"
                },
                {
                    "id": "E35EBpxuDX",
                    "name": "Century: Spice Road",
                    "year_published": 2017,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 8,
                    "description": "<div><p>Centuries ago, the spice trade was the most important market in the world. It established and destroyed empires, compelled men to explore the far corners of the earth, and led to the discovery of new worlds. At that time, the value of spices even rivaled that of gold! In the old days, they carried a sense of mystery and allure. Spice merchants would weave fantastic tales of danger to reach these spices in hopes of selling their wares at higher prices. In later centuries, the demand on spices became so great, that those who controlled the spices generated immense wealth and renown. It is at this time, you find yourself leading your caravan across the eastern lands to the Mediterranean Sea in search of wealth and fortune. As a caravan leader, your journey begins on the Spice Road. This is Century: Spice Road!<br /><br /><br /><b>The Spice Must Flow</b><br />In Century: Spice Road, players aim to collect and trade spices in order to acquire point cards and coins that are worth points at the end of the game. Players play cards from their hands to acquire spices for their caravan and trade those spices in for wealth and power (point cards and money), or to purchase new merchant cards to more efficiently acquire rare and valuable spices. Players take one action a turn until someone has acquired their fifth (or sixth in 2-3 player game) point card, players will finish out the current round of play and the person with the most points wins!<br /><br /><b>Play or Acquire Cards</b><br />\r\nAt the start of the game, each player is given two merchant cards to start with and some preliminary spices. On their turn, each player may choose, as their action for the turn, to play a card from their hand, or spend spices to acquire a new merchant card from the row and place it in their hand. Merchant cards allow players to acquire new spices, exchange spices they currently have for different ones, or upgrade a spice to one worth more. Building up a good spice trading engine of merchant cards is an important part of succeeding on the Spice Road, so look out for powerful play sequences when taking new cards!<br /><br /><b>Rest</b><br />\r\nOnce they've played all the cards from their hands, players must use their turn action to rest and return their cards to their hand. Now they'll be able to play their cards again on future turns, building up their caravan and further developing their hand of merchant cards to start acquiring point cards.<br /><br /><b>Claim Point Cards</b><br />\r\nThe way to win in Century: Spice Road is to have the most points at the end of the game. Players get points when they acquire Point Cards and Coins by trading in their spices. Each point card in the row will have a different cost and overall point value listed on it, and the spice cost must be paid to acquire that card. If the two leftmost cards in the row are acquired, whoever acquired one of those point cards can take a coin from the pile above it. Silver coins are worth 1 point at the end of the game and gold coins are worth 3 points! Once a player has bought their fifth point card, the round of play finishes and a winner is crowned!</p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"
                },
                {
                    "id": "4G32qGJZWs",
                    "name": "Arkham Horror: The Card Game",
                    "year_published": 2016,
                    "min_players": 1,
                    "max_players": 2,
                    "min_playtime": 60,
                    "max_playtime": 120,
                    "min_age": 14,
                    "description": "&quot;Something evil stirs in Arkham, and only you can stop it. Blurring the traditional lines between roleplaying and card game experiences, Arkham horror: the card game is the living card game of love craft I an mystery, monsters, and madness! you and your friend (or up to three friends with two core sets) become characters within the quiet new England town of Arkham. You have your talents, sure, but you also have your flaws. Perhaps you've dabbled a little too much in the writings of the Necronomicon, and its words continue to haunt you. Perhaps you feel compelled to cover up any signs of otherworldly evils, hampering your own investigations in order to protect the quiet confidence of the greater population. Perhaps you'll be scarred by your encounters with a ghoulish cult. No matter what compels you, no matter what haunts you, you'll find both your strengths and weaknesses reflected in your custom deck of cards, and these cards will be your resources as you work with your friends to unravel the world's most terrifying mysteries. Meanwhile, each of your adventures in Arkham horror LCG carries you deeper into mystery. You'll find cultists and foul rituals. You'll find haunted houses and strange creatures. And you may find signs of the ancient ones straining against the barriers to our world… the basic mode of play in Arkham LCG is not the adventure, but the campaign. You might be scarred by your adventures, your sanity may be strained, and you may alter Arkham's landscape, burning buildings to the ground. All your choices and actions have consequences that reach far beyond the immediate resolution of the scenario at hand. And your actions may earn you valuable experience with which you can better prepare yourself for the adventures that still lie before you&quot;."
                },
                {
                    "id": "fmSDkAqJbH",
                    "name": "Modern Art",
                    "year_published": 1992,
                    "min_players": 3,
                    "max_players": 5,
                    "min_playtime": 60,
                    "max_playtime": 90,
                    "min_age": 14,
                    "description": "Beauty is in the eye of the beholder, but in the high-stakes world of fine art auctions, there's nothing more beautiful than making a buck.<br /><br />\r\nIn Modern Art, players take on the role of curators, buying and selling paintings for their museum. Over the course of four rounds, they take part in a number of auctions, trying to get the best value for the pieces in their collection. Whoever makes the most money wins the game (and keeps their job)."
                },
                {
                    "id": "cb1DcPrnkz",
                    "name": "Secret Hitler",
                    "year_published": 2016,
                    "min_players": 5,
                    "max_players": 10,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 17,
                    "description": "Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930's Germany. Players are secretly divided into two teams - liberals and fascists. Known only to each other, the fascists coordinate to sow distrust and install their cold-blooded leader. The liberals must find and stop the Secret Hitler before it's too late. Secret Hitler introduces new mechanics to the hidden-identity game genre. The first is the element of randomness. When laws are passed, the President draws three policies, passes two to the Chancellor, and the Chancellor enacts one. Only the enacted policy is revealed, so players have to rely on the President and Chancellor's word to know what got discarded. The deck has a known initial composition (11 Fascist policies, 6 Liberal policies), and players can roughly track deck contents based on what the President and Chancellor report, though someone might have lied about what was discarded. That means players can form reasonable expectations and plan around probability, but they can also manipulate future probabilities and expectations in a way that benefits their team. The second new mechanic is the &quot;Hitler&quot; identity: If Hitler is elected as Chancellor after the third fascist policy has already been enacted, the game ends immediately and the fascists win. This means Hitler will spend most of the game playing as a liberal to gain players' trust. Once the third fascist policy is enacted, anyone who has helped the group becomes immediately suspect; if the liberals make a wrong move at this point, they lose immediately. This creates incredible moments of tension and relief in the game."
                },
                {
                    "id": "F1aw7kyGTA",
                    "name": "Bohnanza",
                    "year_published": 1997,
                    "min_players": 2,
                    "max_players": 7,
                    "min_playtime": 45,
                    "max_playtime": 60,
                    "min_age": 13,
                    "description": "This great card game is about planting, trading, and selling beans - 11 kinds of beans (this English version includes all the cards from the original game and the first expansion). <br />\r\n<br />\r\nPlayers try to collect large sets of beans to sell for gold. There is limited growing space and always new beans to plant. To avoid planting unwanted beans, players trade them to other players who want them for their bean fields."
                },
                {
                    "id": "H3yXWu5No0",
                    "name": "Dixit",
                    "year_published": 2008,
                    "min_players": 3,
                    "max_players": 6,
                    "min_playtime": 30,
                    "max_playtime": 42,
                    "min_age": 8,
                    "description": "<i>Winner of the 2010 &quot;Spiel des Jahres&quot; German Board Game of the Year Award.</i><br /><br />\r\nEach player at his turn plays the storyteller. <br /><br />\r\nHe is given a single picture, while the other players get a hand of six pictures. <br /><br />\r\nThe storyteller says a sentence or a word connected to his picture, then each player chooses one of his pictures to bet upon. <br /><br />\r\nAll pictures are showed face up, and every player have to bet upon what picture was the storyteller's.<br /><br />"
                },
                {
                    "id": "4rn2FX1Eon",
                    "name": "Forbidden Island",
                    "year_published": 2010,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 10,
                    "description": "<i>Nominated for the 2011 Spiel des Jahres (Game of the Year) Award.</i><br /><br />\r\nDare to discover Forbidden Island! Join a team of fearless adventurers on a do-or-die mission to capture four sacred treasures from the ruins of this perilous paradise. Your team will have to work together and make some pulse-pounding maneuvers, as the island will sink beneath every step! Race to collect the treasures and make a triumphant escape before you are swallowed into the watery abyss!"
                },
                {
                    "id": "y56td93iXw",
                    "name": "Dead of Winter: A Crossroads Game",
                    "year_published": 2014,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 45,
                    "max_playtime": 210,
                    "min_age": 14,
                    "description": "Dead of Winter puts 2-5 players together in a small, weakened colony of survivors in a world where most of humanity are either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.<br />\r\n<br />\r\nDead of Winter is a meta-cooperative psychological survival game. This means players are working together toward one common victory condition--but for each individual player to achieve victory, they must also complete their personal secret objective. This secret objective could relate to a psychological tick that's fairly harmless to most others in the colony, a dangerous obsession that could put the main objective at risk, a desire for sabotage of the main mission, or worst of all: vengeance against the colony! Certain games could end with all players winning, some winning and some losing, or all players losing. Work toward the group's goal but don't get walked all over by a loudmouth who's only looking out for their own interests!"
                },
                {
                    "id": "lDg8hjuvRb",
                    "name": "Keyflower",
                    "year_published": 2012,
                    "min_players": 2,
                    "max_players": 6,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 12,
                    "description": "Keyflower is a game for two to six players played over four rounds. Each round represents a season: spring, summer, autumn, and finally winter. Each player starts the game with a &quot;home&quot; tile and an initial team of eight workers, each of which is colored red, yellow, or blue. Workers of matching colors are used by the players to bid for tiles to add to their villages. Matching workers may alternatively be used to generate resources, skills and additional workers, not only from the player's own tiles, but also from the tiles in the other players' villages and from the new tiles being auctioned.<br />\r\n<br />\r\nIn spring, summer, and autumn, more workers will arrive on board the Keyflower and her sister boats, with some of these workers possessing skills in the working of the key resources of iron, stone, and wood. In each of these seasons, village tiles are set out at random for auction. In the winter, no new workers arrive, and the players select the village tiles for auction from those they received at the beginning of the game. Each winter village tile offers VPs for certain combinations of resources, skills, and workers. The player whose village and workers generate the most VPs wins the game.<br />\r\n<br />\r\nKeyflower presents players with many different challenges, and each game will be different due to the mix of village tiles that appear in that particular game. Throughout the game, players will need to be alert to the opportunities to best utilize their various resources, transport and upgrade capability, skills, and workers.<br />\r\n<br />\r\nKeyflower, a joint design between Richard Breese and Sebastian Bleasdale, is the seventh game in the &quot;Key&quot; series from R&amp;D Games set in the medieval &quot;Key&quot; land."
                },
                {
                    "id": "2eoe0273LD",
                    "name": "Rising Sun",
                    "year_published": 2018,
                    "min_players": 3,
                    "max_players": 5,
                    "min_playtime": 90,
                    "max_playtime": 120,
                    "min_age": 13,
                    "description": "Lead your clan to honor and victory!<br />\r\n<br />\r\nWarring clans struggle for control of provinces in Feudal Japan; however, a conflict is not only won on the battlefield. Diplomacy and alliances will play a large part in winning the war.<br />\r\n<br />\r\nIn Rising Sun, from the acclaimed team that brought fans Blood Rage, players enter a fantastical version of Feudal Japan and control different Clans with unique abilities. They will engage in combat, make offerings to the Gods, and form and break treaties. After three hard fought years have passed, only the player who earned the most victory points will win. <br />\r\n<br />\r\n<b>Components:</b><br />\r\n<br />\r\n* Main Board (Map of Japan) <br />\r\n* 7 God Tiles 30 Coins<br />\r\n* 5 Clan Screens <br />\r\n* 10 Colored Clan Tokens<br />\r\n* 5 Clan Alliance Tokens<br />\r\n* 30 Bushi (Samurai) Figures (6 Per Clan)<br />\r\n* 15 Shinto (Monk) Figures (3 Per Clan)<br />\r\n* 5 Daimyo (Warlord) Figures (1 Per Clan)<br />\r\n* 8 Monster Figures 20 Strongholds Tokens (4 Per Clan)<br />\r\n* 10 Ships Tokens (2 Per Clan) <br />\r\n* 9 Political Mandate Cards<br />\r\n* 24 War Tokens<br />\r\n* 8 Numbered War Tokens<br />\r\n* 5 Two-Sided Reference Tiles <br />\r\n* Rulebook"
                },
                {
                    "id": "E3BD2egiOX",
                    "name": "Decrypto",
                    "year_published": 2018,
                    "min_players": 3,
                    "max_players": 8,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 12,
                    "description": "New party game where teammates try to transmit secret codes without letting the opposing team intercept them.<br />\r\n<br />\r\nClever components use anaglyph effects to scramble the codes. Slide cards into the screen to decode your words!<br />\r\n<br />\r\nStrong interaction between players and no down time between turns! Everyone needs to focus while the other team plays."
                },
                {
                    "id": "vFMkVLRu8x",
                    "name": "Ethnos",
                    "year_published": 2017,
                    "min_players": 2,
                    "max_players": 6,
                    "min_playtime": 45,
                    "max_playtime": 60,
                    "min_age": 14,
                    "description": "<div><p></p><p>In the faraway land of Ethnos, a new Age Is dawning. The ashes of the old Age have left the Six Kingdoms empty and the twelve Tribes scattered to the winds. Now is the time for a clever leader to unite them into a powerful alliance, skillfully using the unique talents of each tribe to control the Kingdoms.</p>\r\nDo you have the wit and the wisdom to become the next Lord of <i>Ethnos</i> and usher in a Golden Age? Up to six players can evoke the assistance of the Tribes of <i>Ethnos</i> to earn themselves enough glory to be named the Lord of <i>Ethnos</i>. Find out if you're up to the task!<br /> <br /><b>The Tribes of <i>Ethnos</i></b><br /><br />There are twelve distinct tribes that inhabit the land of <i>Ethnos</i>, and each has their own unique ability that will help you take control of the Kingdoms and gain glory for yourself. Call on the Centaurs when swift and decisive actions must be taken! Overwhelm your opponents with sheer numbers by relying on the Halflings! The Dwarves, Elves, Giants, Merfolk, Minotaurs, Orcs, Skeletons, Trolls, Wingfolk, and Wizards are all at your disposal!<br />\r\nUse the special abilities of each tribe to your advantage to take control of territories and gain yourself some extra glory along the way. Work with what you're given to spread your influence and unite the tribes of <i>Ethnos</i> to be crowned the victor!<br /><br /><b>Beginning a New Age</b><br />A game of <i>Ethnos</i> is divided into three Ages in which players will try to gain as much glory as possible. On their turn, players will choose to Recruit an Ally (from either the deck or the face up options on the table) or Play a Band of Allies. Recruiting allies to your cause is necessary if you want to gain any influence in the Six Kingdoms, which you do by playing Bands.<br /><br /><b>Band Together<br /></b>\r\nWhen you play a Band of Allies from your hand (from 1 to 10 cards), each ally within the band must belong to the same Tribe or the same Kingdom (color). Each band has a leader which will determine the ability you get to resolve when playing the band. If the band is large enough, you may place one of your control markers in that kingdom that matches the color of your leader card. You then use your leader card's ability. Then you must discard the cards remaining in your hand face up for other players to recruit from. These bands will be important for scoring at the end of the round, so leave them in front of you.<br /><br /><b>Control the Kingdoms<br /></b>\r\nAs you gain more influence in a Kingdom, the bigger your bands must be to place your control markers there. Each Kingdom will reward players with an amount of glory at the end of an Age according to who has the most influence in each Kingdom. As Ages pass, the players with the second-most and third-most influence in each Kingdom will also gain glory.<br /><br /><b> A New Age Dawns<br /></b>\r\nThe game will play out over three Ages, and the heralding of a new Age is brought on by the arrival of three dragons. Once the third dragon has been drawn from the deck, the Age ends and scoring for that Age begins. Control markers persist between Ages, representing the influence gained in Ages past. Once this has happened three times, the game is over and final scores can be tallied!<p></p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"
                },
                {
                    "id": "0iNuJdgbmq",
                    "name": "One Deck Dungeon",
                    "year_published": 2016,
                    "min_players": 1,
                    "max_players": 2,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 14,
                    "description": "ALL THE EXCITEMENT OF A ROGUE-LIKE DUNGEON CRAWL IN ONE DECK OF CARDS!<br />\r\n<br />\r\nOne Deck Dungeon is a roguelike game in a small box. Choose a hero, and a dungeon to delve into, and setup is done! The game is very easy to learn, features intuitive dice mechanics and is attractive on a demo table. While the game only supports 1-2 players, you can combine two sets to have a four player dungeon delve.<br />\r\n<br />\r\nOne Deck Dungeon has generated much excitement over the all-female, realistically-clad cast of heroes, something that is quite unique in the tabletop realm!"
                },
                {
                    "id": "sMTDq4Zeif",
                    "name": "Five Tribes",
                    "year_published": 2014,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 90,
                    "min_age": 13,
                    "description": "Crossing into the Land of 1001 Nights, your caravan arrives at the fabled Sultanate of Naqala.<br />\r\n<br />\r\nThe old sultan just died and control of Naqala is up for grabs!<br />\r\n<br />\r\nThe oracles foretold of strangers who would maneuver the Five Tribes to gain influence over the legendary city-state.<br />\r\n<br />\r\nWill you fulfill the prophecy? Invoke the old Djinns, move the Tribes into position at the right time and the Sultanate may become yours!"
                },
                {
                    "id": "2e7YkCwYCY",
                    "name": "Railroad Ink: Deep Blue Edition",
                    "year_published": 2018,
                    "min_players": 1,
                    "max_players": 6,
                    "min_playtime": 20,
                    "max_playtime": 30,
                    "min_age": 8,
                    "description": "<p>New lands have opened up and the race is on to create the best network of rail and road lines through it. In Railroad Ink, players roll the Route dice and must then draw the subsequent results on their individual Route boards. Players score points for having long interconnected Routes, as well as connecting the entry points to their board, plus having Routes through the center of their boards. But beware, they’ll lose points for leaving unfinished lines. In the Deep Blue Edition, the Lake and River dice add in some cool, refreshing waterways to the maps. But in the Blazing Red Edition, Meteors fall from the sky and Volcanoes erupt from underground. It’s a challenge to keep their roads and rails from getting destroyed, and having to repair them when they are. Or, players can combine the two for epic, 12-player games!</p>"
                },
                {
                    "id": "DMR3bbyxu2",
                    "name": "For Sale",
                    "year_published": 1997,
                    "min_players": 3,
                    "max_players": 6,
                    "min_playtime": 15,
                    "max_playtime": 30,
                    "min_age": 8,
                    "description": "Going once! Going twice! Sold to the highest bidder! Bid and bluff your way to purchase the most valuable real estate for the lowest amount of money, then turn around and sell those houses (and shacks) for cold hard cash. Be the richest mogul at the end of the game to win this Stefan Dorra classic.<br />\r\n<br />\r\nConsidered one of the finest bidding games of all time, For Sale has a well-deserved following of fans. In this perfectly-crafted bidding game, players are forced to make a multitude of difficult decisions every minute - and that's just in the first phase of the game! GRYPHON BOOKSHELF SERIES #4"
                },
                {
                    "id": "1sQP1kNHja",
                    "name": "Roll For The Galaxy",
                    "year_published": 2014,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 45,
                    "max_playtime": 60,
                    "min_age": 13,
                    "description": "Roll for the Galaxy is a dice game of building space empires for 2-5 players. Your dice represent your populace, whom you direct to develop new technologies, settle worlds, and ship goods. The player who best manages his workers and builds the most prosperous empire wins!<br />\r\n<br />\r\nThis dice version of Race for the Galaxy takes players on a new journey through the Galaxy, but with the the feel of the original game."
                },
                {
                    "id": "LTnLSWIcbH",
                    "name": "Lost Cities",
                    "year_published": 1999,
                    "min_players": 2,
                    "max_players": 2,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 10,
                    "description": "Who will discover the ancient civilizations?<br />\r\n<br />\r\nTwo explorers embark on research journeys to remote corners of the world: the Himalayan mountains, the Central American rainforest, the Egyptian desert, a mysterious volcano, and the bottom of the sea. As the cards are played, the expedition routes take shape and the explorers earn points. The most daring adventurers make bets on the success of their expeditions. The explorer with the highest score after three rounds of expeditions wins. The rules of the game are simple, but beware: The lost cities hold many unseen mysteries!"
                },
                {
                    "id": "k7pnwdyDfC",
                    "name": "Puerto Rico",
                    "year_published": 2002,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 90,
                    "max_playtime": 150,
                    "min_age": 12,
                    "description": "Prospector, captain, mayor, trader, settler, craftsman, or builder? Which roles will you play in the new world? Will you own the most prosperous plantations? Will you build the most valuable buildings? You have but one goal: achieve the greatest prosperity and highest respect! This is shown by the player who earns the most victory points. He will win the game!"
                },
                {
                    "id": "ZwlnfX1J2z",
                    "name": "Eldritch Horror",
                    "year_published": 2013,
                    "min_players": 1,
                    "max_players": 8,
                    "min_playtime": 120,
                    "max_playtime": 240,
                    "min_age": 14,
                    "description": "Across the globe, ancient evil is stirring. Now, you and your trusted circle of colleagues must travel around the world, working against all odds to hold back the approaching horror. Foul monsters, brutal encounters, and obscure mysteries will take you to your limit and beyond. All the while, you and your fellow investigators must unravel the otherworldy mysteries scattered around the globe in order to push back the gathering mayhem that threatens to overwhelm humanity. The end draws near! Do you have the courage to prevent global destruction? <br />\r\n<br />\r\nEldritch Horror is a cooperative game of terror and adventure in which one to eight players take the roles of globetrotting investigators working to solve mysteries, gather clues, and protect the world from an Ancient One - an elder being intent on destroying our world. Each Ancient One comes with its own unique decks of Mystery and Research cards, which draw you deeper into the lore surrounding each loathsome creature.<br />\r\n<br />\r\nDiscover the true name of Azathoth or battle Cthulhu on the high seas. With twelve unique investigators, two hundred-fifty tokens, and over three hundred cards, Eldritch Horror presents an epic, world-spanning adventure with each and every game."
                },
                {
                    "id": "6bu6MAewdv",
                    "name": "KeyForge: Call of the Archons",
                    "year_published": 2018,
                    "min_players": 2,
                    "max_players": 2,
                    "min_playtime": 15,
                    "max_playtime": 45,
                    "min_age": 14,
                    "description": "Enter a world where anything is possible in KeyForge! Here in the world's first Unique Deck Game, two players become Archons racing to forge keys that unlock the hidden vaults of the Crucible, an artificial world built from pieces of countless planets. With an incredible array of creatures, artifacts, and abilities, no two decks are alike, and no two battles will ever be the same!<br />\r\n<br />\r\nThe Keyforge: Call of the Archons starter set is the perfect place to begin your adventures on the Crucible. As you race to gather AEmber and unlock the Crucible's hidden vaults, you need to all the help you can get, and in this set you will find all the implements you need to begin your journey. Providing you with two training decks: Miss &quot;Onyx&quot; Censorius and Radiant Argus the Supreme, as well as two unique Archon Decks and a collection of keys, tokens, chain trackers, and status cards, this set provides you with everything that you and your chosen opponent need to start playing!"
                },
                {
                    "id": "jgUiAHDCTK",
                    "name": "Captain Sonar",
                    "year_published": 2016,
                    "min_players": 2,
                    "max_players": 8,
                    "min_playtime": 30,
                    "max_playtime": 60,
                    "min_age": 14,
                    "description": "<div><p>Captain Sonar is packed with over three dozen high quality components!</p>\r\n<li>24 role sheets<br />\r\n</li><li>2 transparent radio operator sheets<br />\r\n</li><li>8 erasable marker pens<br />\r\n</li><li>2 screens<br />\r\n</li><li>Rulebook<br />\r\n<br />\r\n<p><b>Choose Your Role</b></p>Be organized and communicate because a captain is nothing without his crew: the First Mate, the Radio Operator, and the Engineer.<br />\r\n<br />\r\nAll the members of a team sit on one side of the table, and they each take a particular role on the submarine, with the division of labor for these roles being dependent on the number of players in the game: One player might be the captain, who is responsible for moving the submarine and announcing some details of this movement; another player is manning the sonar in order to listen to the opposing captain's orders and try to decipher where that sub might be in the water; a third player might be working in the munitions room to prepare torpedoes, mines and other devices that will allow for combat.<br />\r\n<br />\r\n<p><b>Five Maps Included</b></p>Multiple maps are included with varying levels of difficulty.<br />\r\n<br />\r\nUse the option best suited for your playgroup, or try more difficult maps to increase the challenge!<br />\r\n<br />\r\n<p><b>Two Modes of Play</b></p>Captain Sonar can be played in two modes: turn-by-turn or simultaneous. In the latter set-up, all the members of a team take their actions simultaneously while trying to track what the opponents are doing, too. When a captain is ready to launch an attack, the action pauses for a moment to see whether a hit has been recorded--then play resumes with the target having snuck away while the attacker paused or with bits of metal now scattered across the ocean floor.<br />\r\n<br />\r\n<p><b>Duty Calls!</b></p></li></div>"
                },
                {
                    "id": "3RVcHxhPEZ",
                    "name": "Betrayal at House on the Hill",
                    "year_published": 2004,
                    "min_players": 3,
                    "max_players": 6,
                    "min_playtime": 60,
                    "max_playtime": 72,
                    "min_age": 12,
                    "description": "<b>Second Edition</b><br />\r\nThe creak of footsteps on the stairs, the smell of something foul and dead, the feel of something crawling down your back - this and more can be found in the exciting refresh of the Avalon Hill favorite Betrayal at House on the Hill. This fun and suspenseful game is a new experience almost every time you play - you and your friends explore ''that creepy old place on the hill'' until enough mystic misadventures happen that one of the players turns on all of the others! Hours of fun for all your friends and family.<br />\r\n<br />\r\nDesigned for 3-6 players aged 12 and up, this boardgame features multiple scenarios, a different lay-out with every game, and enough chills to freeze the heart of any horror fan.<br />"
                },
                {
                    "id": "YfElAOb9o7",
                    "name": "Sidereal Confluence",
                    "year_published": 2017,
                    "min_players": 4,
                    "max_players": 9,
                    "min_playtime": 120,
                    "max_playtime": 150,
                    "min_age": 14,
                    "description": "Sidereal Confluence: Trading and Negotiation in the Elysian Quadrant is a singularly unique trading and negotiation game for 4 to 9 players. Over the course of the game, each race must trade and negotiate with the rest to acquire the resources necessary to fund their economy and allow it to produce goods for the next turn. While technically a competitive game, Sidereal Confluence: Trading and Negotiation in the Elysian Quadrant has a uniquely cooperative feel during the trading phase as no race has the ability to thrive on its own. Trade well, and you'll develop technologies and colonize planets to form a civilization that is the envy of the galaxy.<br />\r\n<br />\r\nEach player chooses one of the nine unique and asymmetrical alien races that have come together to form a trade federation in their quadrant. Each race has its own deck of cards representing all the existing and future technologies it might research. Some races also have other cards related to unique features of their culture. These cards represent portions of the culture's economy and require spending some number of resources to use, resulting in an output of more resources, ships, and possibly victory points. Since each culture's outputs rarely match their inputs, players need to trade goods with one another to run their converters to create the resources they truly need to run their society most efficiently and have an effective economy. Almost everything is negotiable, including colonies, ships, VP and all kinds of resources. <br />\r\n<br />\r\nEach game round contains an open trading phase in which all players can negotiate and execute deals for resources, ships, colonies, even the temporary use of technologies! Players with enough resources can also research technologies, upgrade colonies, and spend resources on their race's special cards during this phase. Once complete, all players simultaneously run their economies, spending resources to gain more resources. The Convocation follows, starting with players sharing newly researched technologies with all other races and following with bidding to acquire new colonies and research teams. Researching a new technology grants many victory points for the prestige of helping galactic society advance. When one race builds a new technology, it is shared with everyone else. Technologies can be upgraded when combined with other technologies.<br />\r\n<br />\r\nThe ultimate goal is victory points, which are acquired by researching technologies, using your economy to convert resources to goods, and converting your leftover goods into points at the end of the game.<br />\r\n<br />\r\nThe game is almost all simultaneous play, keeping the game play moving."
                },
                {
                    "id": "omFfdCNOD1",
                    "name": "Architects of the West Kingdom",
                    "year_published": 2018,
                    "min_players": 1,
                    "max_players": 5,
                    "min_playtime": 60,
                    "max_playtime": 80,
                    "min_age": 12,
                    "description": "Architects of the West Kingdom is set at the end of the Carolingian Empire, circa 850 AD. As royal architects, players compete to impress their King and maintain their noble status by constructing various landmarks throughout his newly appointed domain. Players will need to collect raw materials, hire apprentices and keep a watchful eye on their workforce. These are treacherous times. Rival architects will stop at nothing to slow your progress. Will you remain virtuous, or be found in the company of thieves and black marketeers?<br />\r\n<br />\r\nThe aim of Architects of the West Kingdom is to be the player with the most Victory Points (VP) at the game's end. Points are gained by constructing various Buildings and advancing work on the Archbishop's Cathedral. Throughout the game, players will need to make a lot of moral decisions. However, only at the game's end will their virtue be judged. A few underhanded deals here and there might not seem like much, but fall too far and you will be punished. The game ends once a set number of constructions have been completed."
                },
                {
                    "id": "VCoAcOrQX6",
                    "name": "Deception: Murder in Hong Kong",
                    "year_published": 2014,
                    "min_players": 4,
                    "max_players": 12,
                    "min_playtime": 15,
                    "max_playtime": 25,
                    "min_age": 14,
                    "description": "<div>A social game of deduction and deception. Who among you can see through the lies? Who is capable of getting away with murder?</div><div><p>In <em>Deception: Murder in Hong Kong</em>, players find themselves in a scenario of intrigue and murder, deduction and deception. One player is the Murderer, secretly choosing their weapon and the evidence they leave behind. Another is the Forensic Scientist who holds the key to convicting the criminal but is only able to express their knowledge through analysis of the scene. The rest are investigators, interpreting the clues to solve the crime – and the killer is among them. Investigators must collaborate and use their wits, their hunches, and their keen deductive insight to correctly identify the means of murder and the key evidence to convict the killer. The murderer must mislead and confuse the investigators to save themselves.</p><p>Do you have what it takes to see through the lies and catch the criminal in your ranks or will they muddy the waters long enough to get away with murder?</p></div>"
                },
                {
                    "id": "unMxq0jVdk",
                    "name": "Camel Up",
                    "year_published": 2014,
                    "min_players": 2,
                    "max_players": 8,
                    "min_playtime": 15,
                    "max_playtime": 30,
                    "min_age": 8,
                    "description": "As members of Egyptian high society, you gather in the desert with one simple goal: to gain the most money by backing the right camel to win a leg or even the entire race. <br /><br />\r\nHowever, in this race, its not just the lucky ones who can beat the odds. Reading the dynamics of the race and having a good sense of timing is just as important when it comes to backing the right camels and taking the victory. <br /><br />\r\nPlace your bids wisely and decide when it is time to strike, and maybe just maybe with a little bit of timing and a lot of luck, your bid will pay off!"
                },
                {
                    "id": "wa7tVs4Di1",
                    "name": "Chicago Express",
                    "year_published": 2007,
                    "min_players": 2,
                    "max_players": 6,
                    "min_playtime": 60,
                    "max_playtime": 60,
                    "min_age": 12,
                    "description": "A railroad game designed by Harry Wu. The industrial boom in the 19th century America continues, along with the struggle to become the most successful railroad in the country! Names such as Cornelius Vanderbilt and Charles Morgan bear witness to this period of money making. But financing the railroads was not the only thing they all had in mind…the most important goal of all was to make as much profit as possible. The players assume the role of an investor and attempt to achieve dividends that are as high as possible. But the more companies there are, the more difficult it gets. Which investor has the best skills…"
                },
                {
                    "id": "ZdHlXy4uxe",
                    "name": "Dominant Species",
                    "year_published": 2010,
                    "min_players": 2,
                    "max_players": 6,
                    "min_playtime": 120,
                    "max_playtime": 240,
                    "min_age": 12,
                    "description": "<br />\r\n<b>2nd Edition, 3rd Printing</b><br />\r\n<br />\r\n90,000 B.C. - A great Ice Age is fast approaching. Another titanic struggle for global supremacy has unwittingly commenced between the varying animal species.<br />\r\n<br />\r\nDominant Species is a game for 2 to 6 players that abstractly recreates a tiny portion of ancient history: the ponderous encroachment of an Ice Age and what that entails for the living creatures trying to adapt to the slowly-changing Earth.<br />\r\nEach player will assume the role of one of six major Animal groups-Mammal, Reptile, Bird, Amphibian, Arachnid or Insect. Each begins the game in a state of natural balance with regards to one another. But that won't last: It is indeed ''survival of the fittest.''<br />\r\n<br />\r\nThrough wily Action Pawn placement, players will strive to become Dominant on as many different Terrain tiles as possible in order to draw beneficial Dominance Cards. Players will also want to propagate their individual Species in order to earn Victory Points for his particular Animal. Players will be aided in these endeavors via Growth, Migration and Domination actions, among others.<br />\r\n<br />\r\nAll of this eventually leads to the end game - the final ascent of the Ice Age - where the player with the most Victory Points will have his Animal crowned the Dominant Species.<br />\r\n<br />\r\nBut somebody better become dominant quickly, because it's getting mighty cold...."
                },
                {
                    "id": "b1nBQaNdH6",
                    "name": "Istanbul",
                    "year_published": 2014,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 40,
                    "max_playtime": 60,
                    "min_age": 10,
                    "description": "Hustle and bustle in the bazaar district of Istanbul: merchants and their assistants are hurrying through the narrow alleys attempting to be more successful than their competitors. Good organization is key: wheelbarrows have to be filled with goods at the warehouses and then swiftly transported by the assistants to the various destinations. The goal of the merchants is to be the first to collect a certain amount of rubies.<br />\r\n<br />\r\nYou are leading a merchant and four assistants through the 16 Places of the bazaar. At each Place, you can carry out a specific action. The challenge is that, to carry out an action at any of those Places, your merchant needs the help of an assistant and has to leave him behind. To use that assistant again later, your merchant has to come back to that Place and pick him up. So plan ahead carefully to avoid being left with no assistants and thus unable to do anything..."
                },
                {
                    "id": "YIBcOZqGkI",
                    "name": "Battlestar Galactica",
                    "year_published": 2008,
                    "min_players": 3,
                    "max_players": 6,
                    "min_playtime": 120,
                    "max_playtime": 300,
                    "min_age": 10,
                    "description": "Battlestar Galactica: The Board Game is an exciting game of mistrust, intrigue, and the struggle for survival. Based on the epic and widely-acclaimed Sci Fi Channel series, Battlestar Galactica: The Board Game puts players in the role of one of ten of their favorite characters from the show. Each playable character has their own abilities and weaknesses, and must all work together in order for humanity to have any hope of survival. However, one or more players in every game secretly side with the Cylons. Players must attempt to expose the traitor while fuel shortages, food contaminations, and political unrest threatens to tear the fleet apart. \r\n<br /> \r\n<br /> After the Cylon attack on the Colonies, the battered remnants of the human race are on the run, constantly searching for the next signpost on the road to Earth. They face the threat of Cylon attack from without, and treachery and crisis from within. Humanity must work together if they are to have any hope of survival...but how can they, when any of them may, in fact, be a Cylon agent? \r\n<br /> \r\n<br /> Battlestar Galactica: The Board Game is a semi-cooperative game for 3-6 players ages 10 and up that can be played in 2-3 hours."
                },
                {
                    "id": "Sb1CIhPwOu",
                    "name": "The Estates",
                    "year_published": 2018,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 45,
                    "max_playtime": 60,
                    "min_age": 10,
                    "description": "The City Council recently approved the zoning map for a new urban development - The Estates - featuring high-end infrastructure and a modern atmosphere for its citizens. Soon after, the banks awarded millions of dollars in loans to six real estate investment firms to help develop this new area. The zoning map for The Estates calls for two rows of four buildings each, located between the River and Main Street. The meadows on the other side of the River are to remain a recreational area for the City.<br />\r\n<br />\r\nBut, with hopes of larger profits, investors and building tycoons entirely ignore the City Council's demands and begin developing three rows of buildings instead. The Mayor catches wind of the potential for profit and begins planning a new mansion in The Estates, which would double the value of one of the building rows! With some sketchy Building Permits, investors begin developing buildings on the other side of the River, beyond the designated building zone.<br />\r\n<br />\r\nHowever, the City Council takes rigorous steps to put an end to the racketeering with an ultimatum: as soon as the first two rows are completed, the buildings in the uncompleted row will be torn down, resulting in a huge loss for all who invested there. At the end of the day, the investor with the highest-valued buildings will come out on top! <br />\r\n<br />\r\n<b>Contents:</b><br />\r\n* 1 Game Board <br />\r\n* 36 Floor Cubes <br />\r\n* 12 Rooftops <br />\r\n* 6 Company Certificates <br />\r\n* 3 Building Permits <br />\r\n* 1 Cancel Cube <br />\r\n* 1 Mayor <br />\r\n* 2 Linen Bags <br />\r\n* 60 Checks <br />\r\n* 1 Rulebook"
                },
                {
                    "id": "J9W6vjCo0I",
                    "name": "Kingdom Death: Monster",
                    "year_published": 2015,
                    "min_players": 1,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 180,
                    "min_age": 17,
                    "description": "19 lbs of Nightmare Horror Gaming<div><br /></div><div>235 page hardcover rulebook, 18 hard plastic sprues of miniatures, 1000+ matte game cards, 400+ unique pieces of art, and 86 full page illustrations.</div><div><br /></div><div>Kingdom Death: Monster is a fully cooperative, tabletop, hobby game experience. Unite to survive by hunting monsters and collectively guiding the development of your settlement through a 30 year, self-running campaign.</div><div><br /></div><div>Every decision matters. A space moved during the showdown, every resource spent to craft a piece of gear, what principles your settlement upholds - all can have lasting impact on this highly replayable and challenging game. </div><h3><br />Campaign System</h3><div>Embark alone or with up to 4 friends (6 with game variant) on a 30 lantern year campaign. Each lantern year will cycle through a chaotic hunt, a showdown with a monster, and the development of your settlement. With so much emphasis on player choice, no two campaign runs will be alike.</div><div><br /></div><h3>Monster AI System</h3><div>You will fight 8 monsters, each controlled by their own pair of decks that scale to 3 levels of difficulty. (Except for the final encounter, it has only 1 level and it's HARD!) Every encounter, even with the same monster, is diverse and valuable. No two showdowns will resolve the same way. Players will have to plan their gear and keep their minds sharp to prevail.</div><div><br /></div><h3>Gear System</h3><div>In Monster, survivors will craft gear using resources earned from defeating monsters or found on their hunt. Each survivor has a gear grid, and can slot up to 9 pieces of gear at a time. What gear you will carry and how you arrange it can unlock advantages that may make the difference between life and death.</div><div><br /></div><h3>Story Event System</h3><div>You will encounter 40+ story events that will shape the story of your unique campaign. Your settlement's decisions and discoveries affect how the story events unfold. Story Events cover everything from setting up and fighting a monster to dramatic turning points in your settlements history. </div><div><br /></div><div><br /></div><h3>Kingdom Death: Monster Contents</h3><div><br /></div><div>1 x Hardcover Rule Book - 11&quot; x 8.5&quot; 235 Pages.</div><div>1 x Showdown Board - 2' x 3' ( Heavy 3mm Game Board Matte )</div><div>1 x Hunt / Settlement Board ( Heavy 3mm Game Board Matte )</div><div>2 x Token Sheet - 127 Tokens</div><div>1 x Terrain Token Sheet - 31 Terrain Tiles</div><div>1 x Monster Controller Panel</div><div>4 x Gear Grids</div><div>1 x Character Record Sheet Pad ( 50 Sheets, 6&quot;x6&quot;)</div><div>1 x Settlement Record Sheet Pad ( 50 Sheets, 8.5&quot; x 11&quot;)</div><div>5 x 10 sided black Kingdom Death dice</div><div>1 x 10 sided white Kingdom Death dice</div><div>4 x 6 sided Hit location dice</div><div>1 x 10 sided translucent orange Kingdom Death Death Die</div><div>Kingdom Death: Monster Contents - Miniatures</div><div><br /></div><div>4 x Starting Survivors</div><div>1 x White Lion</div><div>1 x Butcher</div><div>1 x Screaming Antelope</div><div>1 x Kings Man</div><div>1 x The Hand</div><div>1 x Phoenix</div><div>1 x Watcher</div><div>1 x Gold Smoke Knight</div><div>1 x Unarmored Armor Kit (Creates 4 Survivors.)</div><div>1 x Rawhide Armor Kit (Creates 4 Survivors.)</div><div>1 x Leather Armor Kit (Creates 4 Survivors.)</div><div>1 x White Lion Armor Kit (Creates 4 Survivors.)</div><div>1 x Screaming Fur Armor Kit (Creates 4 Survivors.)</div><div>1 x Phoenix Armor Kit (Creates 4 Survivors.)</div><div>1 x Lantern Armor Kit (Creates 4 Survivors.)</div><div>4 x Bonus Mystery Miniatures</div><div>4 x Starting Survivor Heads for Armor Kit customization</div><div>9 x Assorted Survivor Heads for Armor Kit customization</div><div>150+ Gear for Armor Kit customization (Every weapon in the game represented!)</div><div>10+ Masks</div><div>10 x Decorative Stone Face Base Inserts</div><div>36 x Kingdom Death 30mm Base + Insert</div><div>6 x Kingdom Death 50mm Base + Insert</div><div>1 x Kingdom Death 100mm Base + Insert </div>"
                },
                {
                    "id": "zBikUpC51l",
                    "name": "Champions of Midgard",
                    "year_published": 2015,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 90,
                    "min_age": 10,
                    "description": "Trolls attack your town. Draugr terrorize nearby villages. Monsters strike at travelers and merchants alike. The people are suffering - will you be their champion?<br />\r\n<br />\r\nGrey Fox Games is pleased to announce the release of Champions of Midgard - a Viking Era worker placement game with dice driven combat between players and mythical Norse beasts. The game has enjoyed much praise from playtesters and has received the Dice Tower Seal of Excellence!<br />\r\n<br />\r\nThis newest release is Grey Fox Games' largest game yet with an impressive list of components including a 20&quot; x 30&quot; board, 34 custom dice, wooden meeples, carboard tokens, and 121 monster, draugr, and troll cards. In Champions of Midgard players assume the role of a Viking Leader attempting to earn the title of Jarl in a besieged harbor town. They will collect the weapons, wood, and food needed to build ships, carve runes and send their warriors across the sea to defeat the most savage beasts and earn the glory befitting a champion.<br />\r\n<br />\r\n&quot;The combat is what sets this game apart from other games in the genre,&quot; says Joshua Lobkowicz, Head of Game Development at Grey Fox Games. &quot;It's as approachable as Lords of Waterdeep but with the added thrill of rolling handfuls of Viking Warrior Dice in an attempt to kill awesome monsters.&quot;"
                },
                {
                    "id": "YL5DYnG28Y",
                    "name": "The Resistance",
                    "year_published": 2009,
                    "min_players": 5,
                    "max_players": 10,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 13,
                    "description": "The Resistance is a very intense game of secret identities deductiona and deception for 5-10 players."
                },
                {
                    "id": "3tAwjRDw8q",
                    "name": "Raiders of the North Sea",
                    "year_published": 2015,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 120,
                    "min_age": 12,
                    "description": "<p>Do you have what it takes to be a Viking? There's only one way to find out in ... Raiders of the North Sea. Your rewards await you as you assemble a crew, grab a ship and set out to claim victory in this fun game for 2-4 players!</p><p>Your choices lie before you - work or raid? The key to any Vikings' successful attack on a harbor or fortress, is making sure you have enough provisions and crew. Place workers throughout the town to collect supplies and build your crew. And of course, what's more fun than raiding, pillaging and stealing plunder? Throughout the game, you'll be immersed in the Viking age with beautiful artwork and amazing quality components. Win the game through military strength, plunder and Valkyrie (victory points).</p><p>Will the Chieftain be impressed with your conquest? Grab your war ax and put on your helmet, the North Sea awaits!</p><p>Raiders of the North Sea uses hand management, set collection and worker placement mechanics in this great Garphill Games, 2-4 player game.</p><p>Players: 2-4<br />Recommended Age: 12+<br />Playtime in minutes: 60-80</p><p>Contents:</p><ul><li>1 Illustrated Rulebook</li><li>1 Game Board</li><li>122 Wooden Tokens</li><li>16 Offering Tiles</li><li>32 Silver Coins</li><li>32 Provisions</li><li>75 Cards</li><li>1 Cotton Bag</li><li>2 Dice</li></ul>"
                },
                {
                    "id": "Zspd2nNHfz",
                    "name": "Mansions of Madness: 2nd Edition",
                    "year_published": null,
                    "min_players": 1,
                    "max_players": 5,
                    "min_playtime": 120,
                    "max_playtime": 180,
                    "min_age": 13,
                    "description": "<div><p>The monster figures in <i>Mansions of Madness Second Edition</i> are set on the same bases as the Arkham Horror Premium Figures and those featured in the first edition of Mansions of Madness. These bases allow you to slide information tokens underneath them, so you have quick and easy access to the monsters' traits and abilities. Because of the consistency between editions, you can seamlessly incorporate your first edition and painted minis into your new game, expanding the possibilities of your game and further immersing you in the bone-chilling happenings that have befallen Arkham's residents.</p><p><br />In the <i>Mansions of Madness Second Edition</i> companion app, you will have the option to incorporate some or all of your old components. Whether you have the first edition and its expansions or just one of the products, you can still incorporate it into your game. Each product you add to your collection will allow you to play as that game's investigators, introduce the possibility for those monsters to spawn, include a few new people to encounter, and widen the pool of maps the app could generate for your chosen scenario. If you decide to play without certain expansions or add more to your collection, you can always go back and change your collection within the app, thereby altering the possible combinations of monsters, maps, and investigators.</p>\r\n\r\n\r\n</div>"
                },
                {
                    "id": "uVD7OzRUNZ",
                    "name": "Space Alert",
                    "year_published": 2008,
                    "min_players": 1,
                    "max_players": 5,
                    "min_playtime": 30,
                    "max_playtime": 45,
                    "min_age": 14,
                    "description": "Space Alert is a team survival game. Players take on the role of a crew of space explorers sent out through hyperspace to survey a dangerous sector of the Galaxy. The pace of the game is set by 10-minute soundtracks on included CDs (or by scenario cards, if you don't have a CD player). During these 10 minutes, the crew must defend the ship while it scans the enemy sector. If they succeed, the ship brings back valuable data. If they fail... it is time to train a new crew.<br /><br />\r\nPlayers do not compete against each other. Instead, they work together against the challenge presented by the game. The difficulty of this  challenge can be chosen by the players themselves. Completing the most difficult missions requires close teamwork."
                },
                {
                    "id": "A38ipJ48QE",
                    "name": "Galaxy Trucker",
                    "year_published": 2007,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 90,
                    "min_age": 14,
                    "description": "Corporation Incorporated is an interplanetary construction firm that builds sewer systems and low-income housing on the less-developed planets of the Galaxy. For years, Corp Inc. has tottered on the brink of bankruptcy: transporting building materials to the edge of the Galaxy, where the need for their services is greatest, is a risky business.<br />\r\n<br />\r\nThe company was saved by a few visionaries on the board of directors. Instead of shipping materials to the Periphery, they reasoned, why not build the materials into spacecraft and let them ship themselves? Furthermore, why hire pilots if there are nut-cases who will do it for free?<br />\r\n<br />\r\nThat's where you come in. Just sign the contract, and you gain unrestricted access to a Corp Inc. Warehouse. Build your own space ship from the available prefabricated components, and fly it to the Periphery. Of course, you may have to eat a loss, but any profits you make along the way are yours to keep, and Corporation Incorporated will pay you a bonus for quick delivery.<br />\r\n<br />\r\nIt's possible that you will end up with an insurmountable debt and finish your days panhandling on the streets of Deneb III, but if Lady Luck should smile upon you, you just might find yourself among the 10 billion richest people in the Galaxy!"
                },
                {
                    "id": "mce5HZPnF5",
                    "name": "Pandemic: Legacy Season 1 (Red Edition)",
                    "year_published": 2015,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 60,
                    "max_playtime": 75,
                    "min_age": 13,
                    "description": "The world is on the brink of disaster. In Pandemic Legacy, your disease-fighting team must keep four deadly diseases at bay for a whole year. Each month will bring new surprises, and your actions in each game will have repercussions on the next. Will you let cities fall to the diseases? Will your team be enough to keep the viruses at bay for a whole year? Craft your own unique Pandemic experience with Pandemic Legacy."
                },
                {
                    "id": "1LkeNOwWbB",
                    "name": "Hanamikoji",
                    "year_published": 2013,
                    "min_players": 2,
                    "max_players": 2,
                    "min_playtime": 15,
                    "max_playtime": 30,
                    "min_age": 10,
                    "description": "<div><p><b>Win the favor of the Geisha!</b><br />Hanamikoji is a simple, yet deep game of careful consideration for two players. Each player takes the role of a restaurateur, attempting to curry the favor of the beloved geisha. Can you sequence your plays in thoughtful reflection to outmaneuver your opponent.? Find out in <i>Hanamikoji</i>!<br /><br /><b>Play Your Cards Right</b><br />Gameplay is focused around the geisha, and the use of cards representing instruments of entertainment to sway them to your establishment. Playing the majority of a color's cards in a round will draw the matching geisha to your restaurant. However, each of your offerings must be planned in advance, as you can only present the geisha with gifts based on what offering tiles you have available.</p><p><br />\r\nAt the start of a player's turn, they draw a card from the deck and decide which of the four offerings to perform. Each player begins the round with the same four offering tiles available, and each tile must be used exactly once during the round to play or discard cards in certain patterns.</p><p><br />\r\nOnce each player has performed all four of their actions, the Victory Markers on each Geisha are moved toward whoever curried the most favor with the Geisha that round. If the two players tied on how much favor they curried, then the Victory Marker stays put. If at the end of a round a player has earned the favor of four Geisha or Geisha whose points total 11 or more, then that player wins the game!</p>\r\n\r\n\r\n\r\n\r\n</div>"
                },
                {
                    "id": "YixemhFia7",
                    "name": "No Thanks!",
                    "year_published": 2004,
                    "min_players": 3,
                    "max_players": 7,
                    "min_playtime": 20,
                    "max_playtime": 30,
                    "min_age": 8,
                    "description": "It sounds so simple, and it is: Take a card or pay one chip. If you take the card you get its points, but points are bad. But you also get the chips that others have played, and that's good (each chip nullifies one point). So say, &quot;No thanks!&quot; and play your chips, but watch out: When you're out of chips that card's all yours."
                },
                {
                    "id": "8t0Cstr6oX",
                    "name": "Forbidden Desert",
                    "year_published": 2013,
                    "min_players": 2,
                    "max_players": 5,
                    "min_playtime": 45,
                    "max_playtime": 60,
                    "min_age": 10,
                    "description": "Gear up for a thrilling adventure to recover a legendary flying machine buried deep in the ruins of an ancient desert city. You'll need to coordinate with your teammates and use every available resource if you hope to survive the scorching heat and relentless sandstorm. Find the flying machine and escape before you all become permanent artifacts of the Forbidden Desert! When we launched Forbidden Island in 2010, we had an inkling that we had created a hit game but never to the point that we'd be prompted to make a sequel. Well, here we are a few years later with just that in hand. Our challenge to designer Matt Leacock was to create a game that would contain familiar elements (cooperative play, modular board), while offering up a completely different in-game experience. In addition, we wanted it to be simultaneously approachable to new players while upping the ante for those who felt they had mastered Forbidden Island. All this resulted in a fresh new game with an innovative set of mechanics, such as an ever-shifting board, individual resource management, and unique method for locating the flying machine parts. Hopefully we've achieved our goals and quenched your thirst for adventure!"
                },
                {
                    "id": "usmFRWCFjI",
                    "name": "Chinatown",
                    "year_published": 1999,
                    "min_players": 3,
                    "max_players": 5,
                    "min_playtime": 60,
                    "max_playtime": 75,
                    "min_age": 12,
                    "description": "New York in the 1960s. A new wave of Chinese immigrants is moving into Chinatown. The adoption of the new immigration act has launched the district into a demographic boom! It now reaches Canal Street to the north and Bowery Street to the east. Arriving by the thousands, the immigrants seek to buy buildings, establish businesses, and fulfill the American Dream! Take a bite of the Big Apple and use your talents to acquire the most extraordinary fortune in America in Chinatown!"
                },
                {
                    "id": "VbH6pNiGCH",
                    "name": "War of the Ring (Second Edition)",
                    "year_published": 2012,
                    "min_players": 2,
                    "max_players": 4,
                    "min_playtime": 150,
                    "max_playtime": 180,
                    "min_age": 13,
                    "description": "The War of the Ring has begun!<br />\r\nThe War of the Ring is a grand strategy board game that allows its players to immerse themselves in the world of J.R.R Tolkien's The Lord of the Rings and experience its epic action, dramatic conflict, and memorable characters.<br />\r\n<br />\r\nAs the Free Peoples player you command the proud hosts of the most important kingdoms of the Third Age. From the horse-lords of Rohan to the soldiers of Gondor and the Elven lords of Rivendell, you lead the defense of the last free realms of Middle-earth.<br />\r\n<br />\r\nFace the evil minions of Sauron on the field of battle in a desperate attempt to delay their onslaught, while you lead the Fellowship of the Ring in the Quest for Mount Doom.<br />\r\n<br />\r\nAs the Shadow player you lead the hordes of the Dark Lord and his most powerful minions as they try to bring darkness to Middle-earth. Legions of Orcs, Trolls, Wolfriders, and the dreadful Ringwraiths await your command. Hunt the Ring-bearer and bring the precious Ring to his Master, or crush your enemies with your unstoppable armies.<br />\r\n<br />\r\nThis is your chance to forge the destiny of an age!"
                }
            ]);
            done()
        });
    });
});

