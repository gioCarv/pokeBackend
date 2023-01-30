const jwt = require('jsonwebtoken')


const pokemons = require('../models/pokemons')

const createUserToken = require('../helpers/createUserToken')
const getToken = require('../helpers/getToken');

require('dotenv').config();

const authSecret = process.env.AUTHSECRET || "4UTH_s3CR3T_d3V_t1M3"


module.exports = class PokemonsController {

  // static async getAll(req, res) {

  //   const data = await User.getUsers()
    
  //   data.forEach(user => {
  //     delete user.password
  //   })

  //   await res.json(data)
  // }

  static async register(req, res) {
    const { pokeNumber, level ,health, damage, speed, healthDifficulty, damageDifficulty, speedDifficulty } = req.body

    const token = getToken(req)

    const decoded = jwt.verify(token, authSecret);
    console.log(decoded)

    const _id = decoded.id

    console.log(_id)
    
    const pokemon = new pokemons(_id, pokeNumber, level ,health, damage, speed, healthDifficulty, damageDifficulty, speedDifficulty)
    
    console.log(pokemon)

    await pokemons.save(pokemon)

    await res.json(pokemon)

  }

  // static async login(req, res) {

  //   const email = req.body.email
  //   const password = req.body.password

  //   const user = await User.getUserbyEmail(email)
  //   if(!user){
  //     res.status(422).json({ message: 'Email invalido' })
  //     return
  //   }
  //   const Ismatch = await bcrypt.compare(password, user.password)
    
  //   if (!Ismatch){
  //     res.status(422).json({ message: 'Senha invalida' })
  //     return
  //   }

  //   await createUserToken(user, req, res)
    
  // }



}

