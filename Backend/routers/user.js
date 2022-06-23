const express=require('express')
const router=express.Router()

const userController=require('../controllers/userController')



router.get('/',userController.index)
router.put('/update/:id',userController.update)
router.get('/show/:id',userController.show)
router.delete('/delete/:id',userController.destroy)
// router.post('/add',userController.add)
module.exports=router