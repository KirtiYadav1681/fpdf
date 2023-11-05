// requiring express for making express server
const express= require('express');

// using express as an app
const app = express();

// defining the port number
const port=2000;

// importing the database(mongodb)
const db=require('./config/mongoose')

// Add the JSON parsing middleware
app.use(express.json());
app.use(express.urlencoded())
app.use('/files',express.static('files'));


const cors = require('cors');
// const allowedOrigin = 'http://localhost:3000'; // Update with your React app's URL
app.use(cors()); 

//use express router
app.use('/',require('./routes'));


app.listen(port, function(err){
    if(err){
        console.log('Error in running express server on port',port);
    }
    console.log('Express server is running on port',port);
});