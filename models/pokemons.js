const conn = require('../db/conn')


class pokemons {

    constructor(_id, pokeNumber, level ,health, damage, speed, healthDifficulty, damageDifficulty, speedDifficulty, pokeName){
        
        this._id = _id
        this.pokeNumber = pokeNumber
        this.level = level
        this.health = health
        this.damage = damage
        this.speed = speed
        this.healthDifficulty = healthDifficulty
        this.damageDifficulty = damageDifficulty
        this.speedDifficulty = speedDifficulty
        this.pokeName = pokeName

    }

    static save({_id, pokeNumber, level ,health, damage, speed, healthDifficulty, damageDifficulty, speedDifficulty, pokeName}) {
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
          pokeName,
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
        const pokemon = await conn.db().collection('adoptedPoke').findOne({ _id: value} )
        return pokemon
    }
    static async getpokemonbyEmail(value){
        const pokemon = await conn.db().collection('adoptedPoke').findOne({email: value} )
        return pokemon
    }
    static async uptdatePokemon(id, updatedData){
      const pokemon = await conn.db().collection('adoptedPoke').updateOne({_id: id}, { $set: updatedData })
      return pokemon
    }
    static async pokemonsSortedByLvl(){
      const pokemons = await conn.db().collection('adoptedPoke').find().limit(3).sort({"level": -1}).toArray()
      return pokemons
    }
    
}

module.exports = pokemons