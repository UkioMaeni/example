const QueryCatalog = require("../db/queryCatalog");

class LocationController{
    async getLocation(req,res){
        const {title}=req.query
        console.log(title)
        const result = await QueryCatalog.getLocation(title)
        res.status(200).json(result)
    }
    async getPoint(req,res){
        const {title}=req.query
        const result = await QueryCatalog.getPoint(title)
        res.status(200).json(result)
    }


}

module.exports = new LocationController