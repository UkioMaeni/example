const Router=require('express')
const LocationController= require('../controller/locationController')

const locationRouter= new Router()



locationRouter.get('/location',LocationController.getLocation)
locationRouter.get('/location/point',LocationController.getPoint)

module.exports=locationRouter