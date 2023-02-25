
const jwt = require('jsonwebtoken')
const apiError = require("../error/apiError");
module.exports = function (req, res, next){
    if (req.method === "OPTIONS"){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'No authorized'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({message: 'No authorized'})
    }
}