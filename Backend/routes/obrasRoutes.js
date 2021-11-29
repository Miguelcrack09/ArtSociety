const express = require('express');
const dbE = require('../src/db/crudObra.js');
const router = express.Router();


router.get('/', function(req, res) {
    dbE.getObras(function(arrayObras) {
        res.send(arrayObras);
    })
})

router.get('/:id', function(req, res) {
    const eid = req.params.id;
    dbE.getObra(eid, function(Obra) {
        res.json(Obra);
    })
})

router.post('/', (req, res) => {
    const Obra = req.body;
    dbE.addObra(Obra, function(response) {
        res.send(response);
    })
})

router.put('/:id', (req, res) => {
    const eid = req.params.id;
    const obra = req.body;
    dbE.updateObraTotally(eid, obra, function(response) {
        res.send(response)
    })
})

router.patch('/:id', (req, res) => {
    const eid = req.params.id;
    const obra = req.body;
    dbE.updateObraPartial(eid, obra, function(response) {
        res.send(response)
    })
})

router.delete('/:id', (req, res) => {
    const eid = req.params.id;
    dbE.deleteObra(eid, function(response) {
        res.send(response);
    })
})

router.get("/search/:genero", function (req, res){
    const genero = req.params.genero;
    dbE.searchGenero(genero, function(refDoc){
        res.json(refDoc);
    })
})

module.exports = router;