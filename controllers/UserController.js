const bcrypt = require('bcrypt');

const User = require('../models/users')

const createUserToken = require('../helpers/createUserToken')
const haveAPoke = require('../helpers/haveAPoke')

require('dotenv').config();

const authSecret = process.env.AUTHSECRET || "4UTH_s3CR3T_d3V_t1M3"
if(authSecret == "4UTH_s3CR3T_d3V_t1M3"){
  console.log('Estamos no modo desenvolvedor, cuidado com as senhas')
}


module.exports = class UserController {

  static async getAll(req, res) {

    const data = await User.getUsers()
    
    data.forEach(user => {
      delete user.password
    })

    await res.json(data)
  }

  static async getOne(req, res) {

    const id = req.params.id

    const data = await User.getUserbyID(id)

    console.log(data)
    res.json( data )
  }

  static async register(req, res) {
    const { name, email, password, confirmPassword } = req.body

    // if (!email) {
    //   res.status(422).json({ message: "O campo email é obrigatorio " })
    // }
    // if (!name) {
    //   res.status(422).json({ message: "O campo nome é obrigartorio " })
    // }

    // if (!password) {
    //   res.status(422).json({ message: "O campo senha é obrigatorio " })
    // }

    // if (password !== confirmPassword) {
    //   res.status(422).json({ message: " Senhas não conferem " })
    // }

    const existName = await User.getUserbyName(name)
    const existEmail = await User.getUserbyEmail(email)
    let error = ""

    if (!!existName) {
      error = "Nome já cadastrado"
    }
    
    if (!!existEmail) {
      if (error) {
        error = "Email e Nome já cadastrados"
      } else {
        error = "Email já cadastrado"
      }
    }

    if(error.length > 1){
      res.status(422).json({ message: error })
      return
    }

    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);

    const user = new User(email, name, encryptedPassword)

    await User.save(user)

    await res.json(user)

  }

  static async login(req, res) {

    const email = req.body.email
    const password = req.body.password

    const user = await User.getUserbyEmail(email)
    if(!user){
      res.status(422).json({ message: 'Email invalido' })
      return
    }
    const Ismatch = await bcrypt.compare(password, user.password)
    
    if (!Ismatch){
      res.status(422).json({ message: 'Senha invalida' })
      return
    }

    const PokeInfo = await haveAPoke(user._id)

    console.log(PokeInfo)

    await createUserToken(user, PokeInfo, req, res)
    
  }

  // static async verify(req, res){
    
    

  // }



}

