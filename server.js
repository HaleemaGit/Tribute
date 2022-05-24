import express from 'express';
// var app = express();


// app.set('port', (process.env.PORT || 5000))
// app.use(express.static('public'))

// Load Node modules
// var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(8080);


