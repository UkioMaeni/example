const Router=require('express')
const UserController= require('../controller/userController')

const router= new Router()

router.post('/user',UserController.createUser)
router.get('/user',UserController.getUser)
router.put('/user',UserController.updateUser)

module.exports=router