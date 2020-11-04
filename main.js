const express = require('express')
const handlebars = require('express-handlebars')

const rollDice = require('./roll')

const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

const app = express()

app.engine('hbs', handlebars({defaultLayout: 'default.hbs'}))
app.set('view engine', 'hbs')

app.get('/roll',
    (req, resp) => {
        resp.status(200)
        resp.type('text/html')
        resp.render('roll', {
            dice: [
                {roll: rollDice()},
                {roll: rollDice()}
            ]           
        })
    }
)

app.get(
    '/toss', (req, resp) => {
        resp.status(200)
        resp.type('image/png')
        resp.sendFile(__dirname + '/images/dice-images/' + rollDice())
    }
)

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/images'))

app.use(
    (req, resp) => {
        resp.status(404)
        resp.type('text/html')
        resp.sendFile(__dirname + '/public/')
    }
)

app.listen(
    PORT, () => {
        console.info(`Application started on port ${PORT} at ${new Date()}`)
    }
)