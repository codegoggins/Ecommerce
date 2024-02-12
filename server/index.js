const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db');

dotenv.config();

const app = express();
db();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"Hello World"
    });
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});