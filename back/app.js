// APPEL DES DEPENDANCES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const db = require('./db/connexion')

//DOTENV
require('dotenv').config();

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// ROUTE
const userRoute = require('./routes/user');

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World Ben!');
});

app.use('/api', userRoute);

// PORT
const port = process.env.PORT;
app.listen(port, () => console.log(`Tourne sur http://localhost:${port}`));

