const express = require('express')
const app  = express()
const cors = require('cors');
app.use(cors());

//const bodyparsex = require('body-parser')
const coresetting = require('./rutas/coresend')
app.use(express.urlencoded({extended:false}))


app.use('/auth',coresetting)

app.listen(91,()=>{
    console.log('se conecto en el puerto 91')
})



