const express = require("express");
const user_model = require("./user-module");
const port = 8080;
const User = user_model.User;

const app = express();
app.use(express.json());

app.get("/", async (req, res) =>{
    let data = await User.find();
    console.log(data);
    res.send(data);
});

app.listen(port, () =>{
    console.log(`listening on ${port}`)
});