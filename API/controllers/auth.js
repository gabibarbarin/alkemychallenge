const connection = require('../db')
const jwt = require('jsonwebtoken')

module.exports.login = (req,res) =>{
    if(req.body.email && req.body.password){

        connection.query('SELECT * FROM users WHERE email = ?', [ req.body.email ], (err, results)=>{
            if(err)
                return res.status(400).json({message: 'Error en la consulta.'})

            if(results.length == 0)
                res.status(401).json({message: 'Usuario y/o contraseña incorrectos.'})
            else{
                if(req.body.password == results[0].password){
                    const payload = { user_id: results[0].id_user }
                    const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '1h'})
                    res.json({token, payload})
                }else
                    res.status(401).json({message: 'Usuario y/o contraseña incorrectos.'})
            }
        })
    }else{
        res.status(401).json({message: 'Falta usuario y/o contraseña.'})
    }
}

module.exports.register = (req,res) =>{
    connection.query('INSERT INTO users SET ?', [{ username: req.body.username, email: req.body.email, 
    password: req.body.password }], (err, results)=>{
        if(err){
            if(err.errno == 1062)
                return res.status(400).json({message: 'Email y/o username en uso.'})
            else
                return res.status(400).json({message: 'Error en la consulta.'})
        }

        res.sendStatus(200)
    })
}