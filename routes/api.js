const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { response } = require('express');

console.log('api routes');

/**
 * Lista de notas
 */
router.get('/api/notes',(request, response)=>{
    fs.readFile('db/db.json','utf8',(error,data) => {
        if (error) throw error;
        response.json(JSON.parse(data));
        console.log('lista de notas',data);
    })

})

/**
 * Nueva nota
 */
router.post('/api/notes', (request,response) => {
   console.log('Nueva Nota del request:',request.body);
   
   const nuevo = {
    title: request.body.title,
    text: request.body.text,
    id: uuidv4(),
   }

   console.log(nuevo);

   return fs.readFile('db/db.json','utf8',(error,data) => {
        if (error) throw error;
        const lista = JSON.parse(data);
        lista.push(nuevo);

        fs.writeFile('db/db.json',JSON.stringify(lista), () => {
            response.json(true);
        })    

   })

})

/**
 * Eliminar nota
 */

router.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id;

    return fs.readFile('db/db.json','utf8',(error, data) => {
        if (error) 
        {
            console.log(error);
            throw error;
        }
            
        const lista  = JSON.parse(data);
        const nvaLista = lista.filter( row => id !== row.id);

        fs.writeFile('db/db.json',JSON.stringify(nvaLista), ()=> {
            response.json(true);
        })

    })

})

module.exports = router;