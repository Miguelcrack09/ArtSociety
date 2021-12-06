const db = require('./firebase.js');

function getObras(callback) {
    return db.collection('Obra').get()
        .then((refDoc) => {
            var arrayObras = [];
            refDoc.forEach((obras) => {
                const obj = obras.data();
                obj.uid = obras.id;
                arrayObras.push(obj);
                //console.log(doc.id, '=>', doc.data());
            })
            callback(arrayObras);
        })
        .catch(err => {
            //console.error(`Error to get Obra ${err}`);
            callback(`Error to get Obras ${err}`);

        })
}

function getObra(eid, callback) {
    return db.collection('Obra').doc(eid).get()
        .then((refDoc) => {
            callback(refDoc.data());
        })
        .catch((err) => {
            callback(`Error to get obra ${err}`);
        })
}

function addObra(Obra, callback) {
    return db.collection('Obra').add(Obra)
        .then(() => {
            callback("Success")
        })
        .catch((err) => {
            callback(`Error to add obra ${err}`);
        })
}

function updateObraTotally(eid, obra, callback) {
    return db.collection('Obra').doc(eid).set(obra)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Obra ${err}`);
        })
}

function updateObraPartial(eid, Obra, callback) {
    return db.collection('Obra').doc(eid).update(Obra)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Obra ${err}`);
        })
}

function deleteObra(eid, callback) {
    return db.collection('Obra').doc(eid).delete()
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to delete Obra ${err}`);
        })
}

function searchGenero(genero, callback) {
    return db.collection('Obra').where("genero", "==", genero).get()
        .then((refDoc) => {
            var arrayObras = [];
            refDoc.forEach(doc => {
                arrayObras.push(doc.data());
            })
            callback(arrayObras);
        })
        .catch((err) => {
            callback("Error to search genero", err)
        })
}

function searchObras(User, callback) {
    return db.collection('Obra').where("User", "==", User).get()
    .then((refDoc) => {
        var arrayObras = [];
        refDoc.forEach((obras) => {
            const obj = obras.data();
            obj.uid = obras.id;
            arrayObras.push(obj);
            //console.log(doc.id, '=>', doc.data());
        })
            callback(arrayObras);
        })
        .catch((err) => {
            callback("Error to search User", err)
        })
}



module.exports = {
    getObras,
    getObra,
    addObra,
    updateObraPartial,
    updateObraTotally,
    deleteObra,
    searchGenero,
    searchObras
}