const jwt = require('jsonwebtoken')

module.exports.isJWTLogin = (req,res,next) =>{
    let token = req.headers['authorization']

    if(token){
        token = token.replace('Bearer ', '')
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) =>{
            if (err){
                res.status(401).json({ message: 'Token incorrecto' })
            }else{
                res.status(200)
                next()
            }
        })
    }else{
        res.status(401).json({ message: 'Es necesario el Token de validacion' })
    }
}