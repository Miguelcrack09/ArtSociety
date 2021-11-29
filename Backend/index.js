const APIRouters = require('./routes');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
//const axios = require('axios').default;

app.use(express.json());
app.use(cors())

APIRouters(app);

app.listen(port, () => {
    console.log('My port ' + port)
});