const conn = require('../db/conn')
const { ObjectId } = require('mongodb')


class pokemons {

    constructor(_id, pokeNumber, level ,health, damage, speed, healthDifficulty, damageDifficulty, speedDifficulty){
        
        this._id = _id
        this.pokeNumber = pokeNumber
        this.level = level
        this.health = health
        this.damage = damage
        this.speed = speed
        this.healthDifficulty = healthDifficulty
        this.damageDifficulty = damageDifficulty
        this.speedDifficulty = speedDifficulty

    }

    static save({_id, pokeNumber, level ,health, damage, speed, healthDifficulty, damageDifficulty, speedDifficulty}) {
        const pokemon = conn.db().collection('adoptedPoke').insertOne({
          _id,
          pokeNumber,
          level,
          health,
          damage,
          speed,
          healthDifficulty,
          damageDifficulty,
          speedDifficulty,
        })
    
        return pokemon
      }



    static async getpokemons() {
        const pokemons = await conn.db().collection('adoptedPoke').find().toArray()
        return pokemons
      }

    static async getpokemonbyName(value){
        const pokemon = await conn.db().collection('adoptedPoke').findOne({name: value} )
        return pokemon
    }
    static async getpokemonbyID(value){
        const pokemon = await conn.db().collection('adoptedPoke').findOne({ _id: new ObjectId(value)} )
        return pokemon
    }
    static async getpokemonbyEmail(value){
        const pokemon = await conn.db().collection('adoptedPoke').findOne({email: value} )
        return pokemon
    }
    // static async getpokemonbyLogin(email, password){
    //   const pokemon = await conn.db().collection('adoptedPoke').findOne({ email: email, password: password });
    //   return pokemon
    // }
    
}

module.exports = pokemons