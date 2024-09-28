const express = require("express")
const path = require("node:path")
const gamesController = require("./controllers/games-controller")

const app = express()

//EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//CONFIGS
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

//ROUTES
app.get("/", gamesController.index)
app.get("/games", gamesController.games)
app.get("/games/new-game", gamesController.newGame)
app.get("/games/:id", gamesController.show)

app.post("/games", gamesController.save)
app.post("/games/:id/genres", gamesController.addGenre)
app.post("/games/put/:id", gamesController.update)
app.post("/games/delete/:id", gamesController.delete)
app.post("/games/:idGame/genres/delete", gamesController.deleteGenre)

//PORT
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}/`)
})