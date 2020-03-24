const express = require('express'); // importing express framework

const app = express(); // initialize the app with express

app.get("/", (request, response) => {
    return response.send('Application is up!');
    }
)

app.listen(3333); // set the default node application door as 3333 -> localhost:3333