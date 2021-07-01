const mongoose = require('mongoose');
const keys = require('./keys');

async function dbConnect(){
    try{
        await mongoose.connect(keys.MONGO_URI,{
            useCreateIndex: true,
            useFindAndModify:true,
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log("DB connected");
    }
    catch(err){
        console.log("DB Failed to Connect");
        console.log(err);
        process.exit(1);
    }
}
module.exports = dbConnect;