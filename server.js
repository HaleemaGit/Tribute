import express, { static } from 'express';
var app = express();


app.set('port', (process.env.PORT || 5000))
app.use(express.static('public'))



