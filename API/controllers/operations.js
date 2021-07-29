const connection = require('../db')

module.exports.operations = (req, res)=>{
    connection.query('SELECT * FROM operations WHERE id_user = ? ORDER BY id_operation DESC', 
    [ req.params.id_user ], (err,results)=>{
        if(err) 
            return res.status(400).json({message: 'Error en la consulta.'})
        
        if(results.length == 0){
            res.json({message: 'Sin operaciones registradas.'})
        }else{
            res.status(200).json({data: results})
        }
    })
}

module.exports.show = (req, res)=>{
    connection.query('SELECT * FROM operations WHERE id_operation = ? AND id_user = ?', 
    [ req.params.id_operation, req.params.id_user ], (err,results)=>{
        if(err) 
            return res.status(400).json({message: 'Error en la consulta.'})
        
        if(results.length == 0){
            res.sendStatus(204)
        }else{
            res.status(200).json({data: results})
        }
    })
}

module.exports.store = (req, res)=>{
    connection.query('INSERT INTO operations SET ?', [{ id_user: req.body.id_user, 
    type_operation: req.body.type_operation, concept: req.body.concept, amount: req.body.amount, 
    date: req.body.date}], (err)=>{
        if(err) 
            return res.status(400).json({message: 'Error en la consulta.'})

        res.status(200).json({
            id_user: req.body.id_user,
            type_operation: req.body.type_operation,
            concept: req.body.concept,
            amount: req.body.amount,
            date: req.body.date
        })
    })
}

module.exports.delete = (req, res)=>{
    connection.query('DELETE FROM operations WHERE id_operation = ?', [ req.body.id_operation ], (err)=>{
        if(err) 
            return res.status(400).json({message: 'Error en la consulta.'})

        res.json({message: 'Operación eliminada correctamente.'})
    })
}

module.exports.edit = (req, res)=>{
    connection.query('UPDATE operations SET ? WHERE id_operation = ?', [{concept: req.body.concept, 
    amount: req.body.amount, date: req.body.date}, req.body.id_operation], (err)=>{
        if(err) 
            return res.status(400).json({message: 'Error en la consulta.'})

        res.status(200).json({message: 'Operación editada correctamente.'})
    })
}