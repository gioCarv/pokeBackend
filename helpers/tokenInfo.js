
const tokenInfo = async (req, res) => {
    
    const payload = req.user

    res.json(payload)
}

module.exports = tokenInfo