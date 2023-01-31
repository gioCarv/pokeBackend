const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
require('dotenv').config();

const authSecret = process.env.AUTHSECRET || "4UTH_s3CR3T_d3V_t1M3"

const createUserToken = async (user, pokemon, req, res) => {

    let pokeNumber
    if(pokemon){
        pokeNumber = pokemon.pokeNumber
    }else{
        pokeNumber = ''
        
    }
    
    
    const payload = {
        name: user.name,
        id: user._id,
        pokeNumber: pokeNumber,
        adm: user.adm,
        pic: user.pic
    }
    const options = { expiresIn: '1d'}
    
    const token = jwt.sign( payload, authSecret, options )
    
    res.status(200).json({
        message: "Você está autenticado!",
        token: token,
        userId: user._id,
    });
}

module.exports = createUserToken