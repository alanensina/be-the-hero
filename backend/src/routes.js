const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response)=>{
    const body = request.body;

    console.log(body);

    return response.json({
        "name": "Alan Ensina",
        "url": "github.com/alanensina"
    });
});

module.exports = routes;