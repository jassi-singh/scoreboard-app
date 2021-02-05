const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.port;
app.listen(port, (err) =>{
    if(err)
    {
        console.log(err.message);
    }else
        console.log(`Server is running on port : ${port}`);
});