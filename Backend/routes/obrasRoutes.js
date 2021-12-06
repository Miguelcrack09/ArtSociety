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
    console.log(req.params);
    dbE.addObra(Obra, function(status) {
        if (status === "Success") {
          res.status(201).json(status);
        } else {
          res.status(503).json(status);
        }
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

router.get("/searchs/:user", function (req, res){
    const User = req.params.user;
    dbE.searchObras(User, function(refDoc){
        res.json(refDoc);
    })
})

router.get("/buscar/:Id", function (req, res){
    const DNI = req.params.Id;
    dbE.searchObra(DNI, function(refDoc){
        res.json(refDoc);
    })
})

module.exports = router;