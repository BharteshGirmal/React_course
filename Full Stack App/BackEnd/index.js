const ConnectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

ConnectToMongo();

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Node Js Server is running...");
});

app.listen(port, () => {
    console.log(`Backend is listening at port number 'http://localhost:${port}'`);
});

// Creating the routes here
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/user', require('./Routes/notes'));
