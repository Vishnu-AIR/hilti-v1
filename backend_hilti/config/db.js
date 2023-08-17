const mongoose = require('mongoose');

const connection = mongoose.createConnection("mongodb+srv://hiltin:bnX8SPEeDBzOZIXa@newbase.0vmyrjl.mongodb.net/hiltinew?retryWrites=true&w=majority")
.on('open',()=>{
    console.log("connected to db")
})
.on('error',(error)=>{
    console.log(error);
});

module.exports = connection;
