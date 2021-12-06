const express = require('express');
const dbU = require('../src/db/crudUsers.js');
const router = express.Router();


router.get('/:id', function(req, res) {
    const uid = req.params.id;
    dbU.getUser(uid, function(User) {
        res.json(User);
    })
})

router.post('/', (req, res) => {
    const User = req.body;
    dbU.addUsers(User, function(response) {
        res.send(response);
    })
})

router.post("/UserID/:id", function (req, res) {
    const uid = req.params.id;
    const artist = req.body;
    artist.id = uid;
    dbU.addUsersWithID(uid, artist, function (status) {
      res.json(status);
    });
  });

router.put('/:id', (req, res) => {
    const uid = req.params.id;
    const User = req.body;
    dbU.updateUsersTotally(uid, User, function(response) {
        res.send(response)
    })
})

router.patch('/:id', (req, res) => {
    const uid = req.params.id;
    const User = req.body;
    User.id = uid;
    dbU.updateUsersPartial(uid, User, function(response) {
        res.send(response)
    })
})

router.delete('/:id', (req, res) => {
    const uid = req.params.id;
    dbU.deleteUsers(uid, function(response) {
        res.send(response);
    })
})

module.exports = router;