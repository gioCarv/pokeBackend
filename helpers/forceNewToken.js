const createUserToken = require('./createUserToken')
const users = require('../models/users')
const haveAPoke = require('./haveAPoke')

//verify => cria
//Aqui você força a criação de um novo token, para aplicar nas evoluções, apos escolha de pokemons, e renovação de token a principal diferença é q aqui vc não recebe parametros
const ForceNewToken = async (req, res) =>{

    const payload = req.user
    console.log(payload)
    const pokemon = await haveAPoke(payload.id)

    const user = await users.getUserbyID(payload.id) 

    createUserToken(user, pokemon, req, res)

}


module.exports = ForceNewToken
















