const express        = require('express');
const MongoClient    = require('mongodb').MongoClient, assert = require('assert');
const bodyParser     = require('body-parser');
const app            = express();
const port = 8000;
var url = 'mongodb://localhost:27017/local';

app.use(bodyParser.urlencoded({extened:true}));

MongoClient.connect(url,(err,database) =>{


    if (err) return console.log(err)
    //require('./app/routes')(app,{});
    //check below line changed
     require('./app/routes')(app, database);
    app.listen(port,() => {
        console.log("We are live on" + port);
    });

})
