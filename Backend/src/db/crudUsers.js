const db = require('./firebase.js');


function getUser(uid, callback) {
    return db.collection('Users').doc(uid).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error to get Users ${err}`);
        })
}

function addUsers(User, callback) {
    return db.collection('Users').add(User)
        .then(() => {
            callback("Save")
        })
        .catch((err) => {
            callback(`Error to add Users ${err}`);
        })
}

function addUsersWithID(uid, artist, callback) {
    return db
      .collection("Users")
      .doc(uid)
      .set(artist)
      .then(() => {
        callback("Success");
      })
      .catch((error) => {
        callback(`Error to get users ${error}`);
      });
  }

function updateUsersTotally(uid, User, callback) {
    return db.collection('Users').doc(uid).set(User)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Users ${err}`);
        })
}

function updateUsersPartial(uid, User, callback) {
    return db.collection('Users').doc(uid).update(User)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Users ${err}`);
        })
}

function deleteUsers(uid, callback) {
    return db.collection('Users').doc(uid).delete()
        .then(() => {
            callback("delete");
        })
        .catch((err) => {
            callback(`Error to delete Users ${err}`);
        })
}

module.exports = {
    getUser,
    addUsers,
    updateUsersPartial,
    updateUsersTotally,
    deleteUsers,
    addUsersWithID
}