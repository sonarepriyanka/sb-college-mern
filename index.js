const express = require("express");
const user_model = require("./user-module");
const port = 8080;
const User = user_model.User;

const app = express();
app.use(express.json());

app.get("/:id", async (req, res) => {
    console.log(req.params.id);
    let data = await User.find({_id: req.params.id});
    console.log(data);
    res.send(data);
});

app.get("/", async (req, res) => {
  let data = await User.find();
  console.log(data);
  res.send(data);
});

app.delete("/", async (req, res) => {
  console.log(req.body._id);
  let data = await User.deleteOne({ _id: req.body._id });
  console.log(data);
  res.send(data);
});

app.post("/", async (req, res) => {
  // console.log(req.body);
  data = req.body;
  let u = await User(data);
  let result = u.save();
  res.send(req.body);
});

app.put("/", async (req, res) => {
//   console.log(req.body._id);
//   console.log(req.body.name);
//   console.log(req.body.age);
//   console.log(req.body.city);
  let u = await User.updateOne(
    { _id: req.body._id }, 
    {
        $set:{
            name : req.body.name,
            age : req.body.age,
            city : req.body.city
        }
    }
    );
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
