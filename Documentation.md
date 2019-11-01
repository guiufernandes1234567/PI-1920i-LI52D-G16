# Search the most popular games

GET /game/:mostpopular=true
- Request:
    - Body: none
- Response:
    - Success:
        - Status code: 200
        - Content- Type: application/json
        - Body example:
        {
            "games:": [
                {
                    "id": "exampleid1",
                    "name": "first game",
                    "average_user_rating": 3.9,
                    "max_plpaytime":50
                }
                {
                    "id": "exampleid2",
                    "name": "second game",
                    "average_user_rating": 4.1,
                    "max_plpaytime":130
                }
                ...
            ]
        }

    -  Errors:
        -  400, 404 (erros da classe 500? se houver erros a buscar dados provenientes das api's externas)

# Search game by Name
GET /game/:name
-  Request:
    -  Path parameters:
        -  name: name of the game to search for
    -  Body: none
-  Response
    - Success:
        -  Status code: 200
        -  Content- Type: application/jason
        -  Body example:
        {
            "games:": [
                {
                    "id": "exampleid10",
                    "name": "game with path parameter on the name 1",
                    "average_user_rating": 3.9,
                    "max_plpaytime":50
                }
                {
                    "id": "exampleid20",
                    "name": "game with path parameter on the name 2",
                    "average_user_rating": 4.1,
                    "max_plpaytime":130
                }
                ...
            ]
        }
    - Errors:
        -  400, 404 (500's?)

# Create a list of favourite games
POST /lists
- Request:
    - Body: 
    {
        "name": "list1",
        "description": "description of the first list"
    }
- Response:
    - Success:
        - Status code: 201
        - Headers:
            - Location: /lists/list1
        - Content type: application/json
        - Body example:
        {
            "status": "list created"
            "uri": /lists/list1
        }
    - Error:
        -  400, 404 (500's?)


# Edit existing list of games
PUT /lists/:name
- Request:
    - Path parameters:
        - name: Name of the list to updated
    - Content type: application/json
    - Body example:
    {
        "name": "new list name",
        "description": "new description of list"
    }
- Response:
    - Success
        - Status Code: 200
        - Content type: application/json
        - Body example: 
        {
            "status": "list updated",
            "uri": "/lists/new list name"
        }
    - Error 
        - 400, 404 (500's?)

# List every list
 GET /lists
- Request:
    - Body: none
- Response:
    - Success:
        - Status code: 200
        - Content type: application/json
        - Body Example:
        {
            [
               {
                   "name":"new list name"
                    "description": "new description of list"
               },
               {
                    "name":"some other list"
                    "description": "description of list"
               }
               ...
            ]
        }
    - Error 
        - 400, 404 (500's?)

# Show every detail of a specific list
GET /lists/:name
- Request
    - Body: none
- Response:
    - Status code: 200
    - Content type: application/json
    - Body example:
    {
        "name": "new list name"
        "description": "new description of list"
        "games":[
            {
                "id":"exampleid10"
                "name": "game with path parameter on the name 1",
                "average_user_rating": 3.9
                "max_plpaytime":50
            },
            {
                "id": "exampleid20",
                "name": "game with path parameter on the name 2",
                "average_user_rating": 4.1,
                "max_plpaytime":130
            },
            ...
        ]
    }
    - Error:
        - 400, 404, (500's?)

# Add a game to a list
PUT /lists/:name/:id    //ou: /lists/:name/game/:id   ??
- Request:
    - Path parameters:
        - name -  Name of the list that will have the game added to
        - id -  targeted game's id
    - Body: none
- Response:
    - Success:
        - Status code: 200
        - Content type: application/json
        - Body example:
        {
            "status": "game successfully associated with list"
            "uri": "/lists/new list name/exampleid10"
        }
    - Error:
        - 400, 404, (500's?)

# Remove a game from a list
- DELETE /lists/:name/:id        //ou: /lists/:name/game/:id   ??
- Request: 
    - Path parameters:
        - name: name of the list containing the game to be removed
        - id: id of the game 
    - Content type: application/json
    - Body: none
- Response:
    - Success:
        Status code 200
        - Content type: application/json
        - Body example:
        {
            "status": "list removed successfully"
            "uri": "/lists/new list name/exampleid10"
        }
    - Error:
        - 400,404, (500's?)

# Search games (bound by maximum duration)
- GET /lists/:name/:id&min_value=?&max_value=?
- Request:
    Body: none
- Response:
    - Success:
        - Status code: 200
        - Content type: application/json
        - Body example:
        {
           {
        "name": "list"
        "description": "description of list"
        "games":[
            {
                "id":"321"
                "name": "best game",
                "average_user_rating": 4.5
                "max_plpaytime":50
            },
            {
                "id":"111"
                "name": "good game",
                "average_user_rating": 4.1
                "max_plpaytime":60
            },
            ... (always ordered by max_playtime)
            ] 
            }
        }
    - Error:
    400, 404, (500's)