const express= require('express')
const UserTypes = require('../models/userTypes.model')
const Roles = require('../models/roles.model')
const auth = require('../middleware/auth')
const router = new express.Router()
router.post('/add/adminType',async(req,res)=>{
    try{
        data = new UserTypes(req.body)
        await data.save()
        res.send('added')
    }
    catch(e){res.send(e.message)}
})

router.get('/all/adminType', async(req, res)=>{
    try{
        data = await UserTypes.find()
        res.send(data)
    }
    catch(e){res.send(e.message)}
})
router.post('/addRoute', auth, async(req,res)=>{
    try{
        data = new Roles(
            {
                routeLink: req.body.routeLink,
                userType:[req.user.role]
            }
        )
        await data.save()
        res.send(data)
    }
    catch(e){res.send('error')}
})
module.exports= router