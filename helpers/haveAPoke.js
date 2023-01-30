const pokemons = require('../models/pokemons')

const haveAPoke = async (_id) => {

    const pokemon = await pokemons.getpokemonbyID(_id)

    return pokemon

}

module.exports = haveAPoke