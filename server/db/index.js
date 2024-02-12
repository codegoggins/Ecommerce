const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connect = async () => {
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO);
        console.log("Connected To Database")
    }catch(error){
        console.error("Failed To Connect To the database",error);
        process.exit(1);
    }
};

module.exports = connect;