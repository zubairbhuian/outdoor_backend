const mongoose = require('mongoose');
const { dbURL } = require('../utils/secret');


const dbConnect =async(options)=>{
  try{
     await mongoose.connect(dbURL,options);
     console.log("DB conneted");
     mongoose.connection.on('error',()=>{
        console.error("DB connection error :"+error);
     })
  }catch(error){
    console.error("Could not connected:",error.toString());
  }
}


module.exports = dbConnect;