const express = require('express'); // importing express framework
const routes = require('./routes') // importing the routes

const app = express(); // initialize the app with express

app.use(express.json()); // Express now are waiting requests with JSON format
app.use(routes);

app.listen(3333); // set the default node application door as 3333 -> localhost:3333