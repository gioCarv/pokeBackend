const jwt = require('jsonwebtoken')


const pokemons = require('../models/pokemons')

const createUserToken = require('../helpers/createUserToken')
const getToken = require('../helpers/getToken');

require('dotenv').config();

const authSecret = process.env.AUTHSECRET || "4UTH_s3CR3T_d3V_t1M3"


module.exports = class PokemonsController {

  static async getAll(req, res) {

    const data = await pokemons.getpokemons()

    await res.json(data)
  }

  static async register(req, res) {
    const { pokeNumber, level ,health, damage, speed, healthDifficulty, damageDifficulty, speedDifficulty } = req.body

    const token = getToken(req)

    const decoded = jwt.verify(token, authSecret);

    const _id = decoded.id

    const exist = await pokemons.getpokemonbyID(_id)

    if(!!exist){
      res.status(422).json({ message: 'Você já adotou um pokemon' })
      return
    }
    
    const pokemon = new pokemons(_id, pokeNumber, level ,health, damage, speed, healthDifficulty, damageDifficulty, speedDifficulty)
    
    console.log(pokemon)

    await pokemons.save(pokemon)

    await res.json(pokemon)

  }

  static async uptdatePoke(req, res) {

    const payload = req.user
    const id = payload.id
    const object = req.body.object
    
    try{
      const pokemon = await pokemons.uptdatePokemon(id, object)
      res.send({message: "Atualização realizada com sucesso", pokemon})
      
    }catch(e){
      console.log(e)
      res.send(e)
    }
    
  }

  static async topLvl(req, res) {

    const top3 = await pokemons.pokemonsSortedByLvl()
    console.log(top3)

    res.json(top3)
    
  }



}

