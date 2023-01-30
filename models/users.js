const conn = require('../db/conn')
const { ObjectId } = require('mongodb')


class user {

    constructor(email, name, password){
        
        this.name = name
        this.email = email
        this.password = password

    }

    static save({name, email, password}) {
        const user = conn.db().collection('userspoke').insertOne({
          name,
          email,
          password,
        })
    
        return user
      }



    static async getUsers() {
        const users = await conn.db().collection('userspoke').find().toArray()
        return users
      }

    static async getUserbyName(value){
        const user = await conn.db().collection('userspoke').findOne({name: value} )
        return user
    }
    static async getUserbyEmail(value){
        const user = await conn.db().collection('userspoke').findOne({email: value} )
        return user
    }
    static async getUserbyID(value){
      const User = await conn.db().collection('userspoke').findOne({ _id: ObjectId(value)} )
      return User
  }

    
}

module.exports = user