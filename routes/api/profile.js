const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const passport = require('passport')

const profile = require('../../models/Profile')
const User = require('../../models/User')

router.get('/test', (req, res) => {
  res.json({msg: 'Profile works'})
})



module.exports = router