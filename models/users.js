const conn = require('../db/conn')
const { ObjectId } = require('mongodb')


class user {

    constructor(email, name, password, adm, pic){
        
        this.name = name
        this.email = email
        this.password = password
        this.adm = adm
        this.pic = pic

    }

    static save({name, email, password, adm, pic}) {
        const user = conn.db().collection('userspoke').insertOne({
          name,
          email,
          password,
          adm,
          pic
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
      const User = await conn.db().collection('userspoke').findOne({ _id: new ObjectId(value)} )
      return User
  }

    
}

module.exports = user