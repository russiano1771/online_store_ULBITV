const {Brand} = require("../../../tg-bot-new-3/online_store_014/server/models/models");


class BrandController{
    async create(req, res){
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async getAll(req, res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}
module.exports = new BrandController()