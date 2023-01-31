const NodeCache = require( "node-cache" );
const pokemons = require('../models/pokemons')


const stdtLL = 60*60*24
const checkperiod = 60*60*24 + 60
const cache = new NodeCache({ stdTTL: stdtLL, checkperiod: checkperiod });

const fillCache = async () =>{

    const topLvl = await pokemons.pokemonsSortedByLvl()
    cache.set("topLvl", topLvl)
    
  }
  

  const getCache = async (key) => {
    const value = await cache.get(key, (err, value) => {
      if (!err) {
        if (value == undefined) {
          console.log("Chave não encontrada no cache");
        }} else { console.log(err) }
    });

    return value
}


module.exports = {fillCache, getCache}