const createUserToken = require('./createUserToken')
const pokemons = require('../models/pokemons')
const users = require('../models/users')
// const validationUserToken = require('./validationUserToken')

//verify => cria
//Aqui você força a criação de um novo token, para aplicar nas evoluções, escolha de personagens, a principal diferença é q aqui vc não recebe parametros
const ForceNewToken = (req, res) =>{


    const pokemon = pokemons.getpokemonbyID(payload._id)

    

    if(pokemon){

    }
}





module.exports = createUserToken