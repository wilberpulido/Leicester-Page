const path = require("path");
const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//connectting to db
require("./config/db/connection");

//importing router
const router = require('./config/routers/routers');

//settings
app.set('port', process.env.PORT || 5000);
const PORT = app.get('port');

app.use(express.static(path.join(__dirname,"../../client/public")));

//midlewares
// to view request
app.use(morgan('dev'));
// to read body for request
app.use(express.urlencoded({extended: false}));
// To read JSON objects that send
app.use(bodyParser.json());

//routers
app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});