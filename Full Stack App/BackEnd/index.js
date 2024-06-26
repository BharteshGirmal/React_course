const ConnectToMongo = require('./db');
const express = require('express');
const cors= require('cors');
ConnectToMongo();

const app = express();
const port = 4000;
app.use(cors());

app.use(express.json());
// used as a middelware to send the json as a body to the API 
// Use headers as 
// Content-type : Application-json

app.get('/',(req, res)=>{
    res.send("Node Js Server is running...");
})

app.listen(port,()=>{
    console.log(`Backend is litening at port number 'http://localhost:${port}'`);
})

// creating the routes here  

app.use('/api/auth', require('./Routes/auth'))
app.use('/api/user', require('./Routes/notes'))