const mongoose = require("mongoose")
const db_url = process.env.DB_URL 

const dbconfig = ()=>{
  mongoose.connect(db_url).then(()=>{
    console.log("Db connet");
    
  }).catch((error)=>{
    console.log(`db isn't conneted + ${error}` );
    
  })
}

module.exports = dbconfig