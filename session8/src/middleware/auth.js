const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const authMe = async(req, res, next)=>{
    try{
       const token = req.header('Authorization').replace('Bearer ','')
       const decodedToken = jwt.verify(token, 'secret')
       const user = await userModel.findOne({_id:decodedToken._id, 'tokens.token':token})
       if(!user) throw new Error()
       req.user = user
       req.token = token
       next()
    }
    catch(e){
        res.status(400).send({error:'unauthorized', e:e.message})
    }
}

module.exports = authMe