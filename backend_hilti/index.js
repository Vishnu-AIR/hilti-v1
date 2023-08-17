const app = require('./app');
const db = require("./config/db")
const userModel = require("./models/users.model")



const port = 3030;







app. listen(port, ()=>{
console.log ("Server Listening on Port Ittp://localhost: "+port);});