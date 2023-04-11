const QueryCatalog = require("../db/queryCatalog");

class UserController{
    async createUser(req,res){
        const {login,nickname,pass}=req.body
        console.log(login,nickname,pass)
        const result = await QueryCatalog.createUser(login,pass,nickname)
        res.status(result.status).json({code:result.code,message:result.message})
    }
    async getUser(req,res){
        const {id}=req.query
        const person = await QueryCatalog.getUser(id)
        res.json(person)
    }
    async updateUser(req,res){

    }
}

module.exports = new UserController()