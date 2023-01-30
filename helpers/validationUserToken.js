const express = require('express')
const jwt = require('jsonwebtoken')


require('dotenv').config();

const authSecret = process.env.AUTHSECRET || "4UTH_s3CR3T_d3V_t1M3"

const validateToken = (req, res, next) => {

    const authHeader = req.headers.authorization || ''
    console.log(authHeader)
    const token = authHeader.split(" ")[1]
    console.log(token)


    try {
        const payload = jwt.verify(token, authSecret);
        console.log(payload)
        res.json({payload})
        next()
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

module.exports = validateToken
