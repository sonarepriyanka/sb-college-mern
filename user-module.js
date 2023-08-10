const mongoose = require("mongoose");

//ste 1: db connection
const conn_str = "mongodb+srv://root:root@cluster0.2o4uywm.mongodb.net/college?retryWrites=true&w=majority";

mongoose.connect(conn_str, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("connected successfully"))
    .catch((error)=> console.log(error));

//step 2: schema of collection
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
})

//step 3 : creating and mapping collection object
const userObject = new mongoose.model("users", userSchema);

// console.log(userObject);

exports.User = userObject;