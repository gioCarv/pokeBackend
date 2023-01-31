const express = require('express')
const cors = require('cors')

//Preencher o cache
const cache = require('./cache/cache')

cache.fillCache()


require('dotenv').config()

const port = process.env.PORT || 3002


const app = express ()

app.use( express.json() )

app.use( cors() )


//Routes
const UserRoutes = require('./routes/UserRoutes')
const PokemonsRoutes = require('./routes/pokemonsRoutes')


app.use('/pokemons', PokemonsRoutes)
app.use('/users', UserRoutes)


app.listen( port, ()=>{

    console.log('Aplicação Ligada')

})