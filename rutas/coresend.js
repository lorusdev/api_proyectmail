const express = require('express')
const routa = express.Router()
const coresit = require('../conf/coresetting')

routa.post('/send1',coresit.sendx1)
routa.get('/getdata',coresit.getInfo)
module.exports = routa
