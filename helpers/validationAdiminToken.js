const jwt = require('jsonwebtoken')

require('dotenv').config();

const authSecret = process.env.AUTHSECRET || "4UTH_s3CR3T_d3V_t1M3"

const validateAdiminToken = (req, res, next) => {

    const authHeader = req.headers.authorization || ''

    const token = authHeader.split(" ")[1]

    try {
        const payload = jwt.verify(token, authSecret);
        if(payload.adm == true){
            next()
        }else{
            res.json({ message: "Somente administradores podem acessar essa pagina"})
            return
        }
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            // the token has expired
            res.json({ message: "Token expirado"})
            return
        } else {
            // the token is invalid
            res.json({ message: "Token invalido"})
            return 'Invalid token';
        }
    }
}

module.exports = validateAdiminToken
