const path = require('path');
const router = require('express').Router();

console.log('header html.js')

/**Redireccionar raiz a index */
router.get('/', (request,response) => {
    response.sendFile(path.join(__dirname,'../public/index.html'));
    console.log('redireccion a test.html');
});

/**Redireccionar boton/Notas a notas */
router.get('/notes', (request,response) => {
    response.sendFile(path.join(__dirname,'../public/notes.html'));
    console.log('redireccion a notas.html');
});


module.exports = router;