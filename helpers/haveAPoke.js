const pokemons = require('../models/pokemons')

const haveAPoke = (_id) => {

    const pokemon = pokemons.getpokemonbyID(_id)

    return pokemon

}

module.exports = haveAPoke