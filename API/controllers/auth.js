const connection = require('../db')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

module.exports.login = (req,res) =>{

    const error = validationResult(req)
    if(!error.isEmpty())
            res.json({message: error})
    else{
        connection.query('SELECT * FROM users WHERE email = ?', [ req.body.email ], async(err, results)=>{
            if(err)
                return res.json({message: 'Error en la consulta.'})

            if(results.length == 0){
                res.send('Usuario y/o clave incorrectos')
            }else{
                const valid = await bcryptjs.compare(req.body.password, results[0].password)
                if(valid == true){
                    const payload = { user_id: results[0].id_user }
                    const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '1h'})
                    res.json({token, payload})
                }else
                    res.json({message: 'Usuario y/o contraseña incorrectos.'})
            }
        })
    }
}

module.exports.register = async(req,res) =>{
    const error = validationResult(req)
    if(!error.isEmpty()) 
        res.json({message: error})
    else{
        const hash = await bcryptjs.hash(req.body.password, 9)
        connection.query('INSERT INTO users SET ?', [{ username: req.body.username, email: req.body.email, 
        password: hash}], (err)=>{
            if(err){
                if(err.errno == 1062)
                    return res.json({message: 'Email y/o usuario en uso.'})
                else
                    return res.json({message: 'Error en la consulta.'})
            }
    
            res.sendStatus(200)
        })
    } 
}