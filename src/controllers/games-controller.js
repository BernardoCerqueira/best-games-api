const games = [
    { id: 1, name: 'World of Warcraft', genres: ['mmorpg'], year: 2004 },
    { id: 2, name: 'Metal Gear Solid', genres: ['stealth', 'action-adventure'], year: 1998 },
    { id: 3, name: 'Sonic Adventure 2', genres: ['platformer'], year: 2001 },
    { id: 4, name: 'Age of Empires 2', genres: ['real-time-strategy'], year: 1999 },
    { id: 5, name: 'The Last of Us', genres: ['zombies', 'stealth'], year: 2013}
]

module.exports = {
    //GET /
    index: (req, res) => {
        res.render('index')
    },

    //GET /games
    games: (req, res) => {
        res.render('games', {games})
    },

    //GET /games/:id
    show: (req, res) => {
        const id = req.params.id
        const game = games.find(item => item.id === +id)

        if(!game){
            res.status(404)
            res.json({message: "Oh no... we couldn't find your game :("})
        } else {
            res.render('game', {game})
        }
    },

    //GET /games/new-game
    newGame: (req, res) => {
        res.render('new-game')
    },

    //POST /games
    save: (req, res) => {
        const {name, genres, year} = req.body

        const newGame = {
            id: Math.floor(Math.random() * 999999),
            name,
            genres: [],
            year
        }
        const genresArray = genres.split(',')
        genresArray.forEach(element => {
            newGame.genres.push(element)
        });
        games.push(newGame)

        res.status(201)
        res.redirect('/games')
    },

    //PUT /games/:id
    update: (req, res) => {
        const {id} = req.params
        const {name, year} = req.body

        const gameIndex = games.findIndex(item => item.id === +id)

        if(gameIndex === -1){
            return res.status(404).json({message: "Oh no... we couldn't find your game :("})          
        }

        if(typeof name === 'string'){
            games[gameIndex].name = name
            games[gameIndex].year = +year
        }

        res.redirect(`/games/${id}`)
    },

    //DELETE /games/:id
    delete: (req, res) => {
        const {id} = req.params
        const gameIndex = games.findIndex(item => item.id === +id)

        if(gameIndex === -1){
            return res.status(404).json({message: "Oh no... we couldn't find your game :("})          
        }

        games.splice(gameIndex, 1)

        res.redirect("/games")
    },

    //POST /games/:id/genres
    addGenre: (req, res) => {
        const {id} = req.params
        const {genre} = req.body
        
        const gameIndex = games.findIndex(game => game.id === +id)

        if(gameIndex === -1){
            return res.status(404).json({message: "Oh no... we couldn't find your game :("})
        }

        if(typeof genre !== "string" || games[gameIndex].genres.includes(genre)){
            return res.status(400).json({message: "Invalid genre!"})
        }

        games[gameIndex].genres.push(genre)

        res.redirect(`/games/${id}`)
    },

    //DELETE /games/:idGame/genres/:genreName
    deleteGenre: (req, res) => {
        const {idGame} = req.params
        const {genre} = req.body

        const gameIndex = games.findIndex(item => item.id === +idGame)

        if(gameIndex === -1){
            return res.status(404).json({message: "Oh no... we couldn't find your game :("})          
        }

        const genreIndex = games[gameIndex].genres.findIndex(item => item === genre)

        if(typeof genre === "string" && games[gameIndex].genres.includes(genre)){
            games[gameIndex].genres.splice(genreIndex, 1)
        }else{
            return res.status(404).json({message: "Invalid genre!"})   
        }

        res.redirect(`/games/${idGame}`)
    }
}