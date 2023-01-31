const haveAPoke = require('./haveAPoke')
const user = require('../models/users')

const userInfo = async (req, res) => {
    
    const payload = req.user
    
    const infoUser = await user.getUserbyID(payload.id)

    delete infoUser.password
    
    const infoPoke = await haveAPoke(payload.id)
    
    if(!!infoPoke){
        delete infoPoke._id
    }
    const Allinfo = {
        infoUser,
        infoPoke
    }

    res.json(Allinfo)
}

module.exports = userInfo