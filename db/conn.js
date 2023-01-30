const { MongoClient } = require('mongodb')
require('dotenv').config();

const uri = process.env.DB_URI || "mongodb://localhost:27017/pokedb"

const client = new MongoClient(uri)

const run = async () => {
    try{

        console.log('Conectado ao mongodb')

    }catch(err){

        console.log(err)

    }
}

run()

module.exports = client