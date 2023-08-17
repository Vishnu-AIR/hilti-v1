const mongoose = require('mongoose');

const connection = mongoose.createConnection("mongodb+srv://hilti:TpQUezV5jeGSFJtD@newbase.0vmyrjl.mongodb.net/hilti?retryWrites=true&w=majority")
.on('open',()=>{
    console.log("connected to db")
})
.on('error',(error)=>{
    console.log(error);
});

module.exports = connection;
