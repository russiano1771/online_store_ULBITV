
const apiError = require('../../../tg-bot-new-3/online_store_014/server/error/apiError')
const {User, Basket} = require("../../../tg-bot-new-3/online_store_014/server/models/models");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (email, role, id) => {
    return jwt.sign(
        {email, role, id},
                process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}



class UserController{
    async registration (req, res, next){
        const {email, role, password} = req.body
        if (!email || !password){
            return next(apiError.badRequest('Не указан пароль или почта'))
        }
        const candidate = await User.findOne({where:{email}})
        if (candidate){
            return next(apiError.badRequest('Пользователь уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.email, user.role, user.id)
        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(apiError.badRequest('User undefined'))
        }
        const compareSync = await bcrypt.compareSync(password, user.password)
        if (!compareSync){
            return next(apiError.badRequest('Wrong Password'))
        }
        const token = generateJwt(user.email, user.role, user.id)
        return res.json({token})
    }
    async check(req, res){
        const token = generateJwt(req.user.email, req.user.role, req.user.id)
        return res.json({token})
    }
}

module.exports = new UserController()