// name, bithday, email, phone, area, password, image, discount level, username, status, role
const mongoose = require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({})
const User = mongoose.model('User',userSchema)
module.exports = User