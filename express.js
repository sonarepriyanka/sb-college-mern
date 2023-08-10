var express = require("express");

var app = express();
app.use(express.json());

//express routeing
app.get("/student", (req, res) => {
  // console.log(req.query);
  // console.log(req.query.num1);
  // console.log(typeof(req.query["num2"]));
  // console.log(req.query["num2"]);
  sum = parseInt(req.query.num1) + parseInt(req.query.num2);
  console.log(sum);
  data = { addition: sum };
  res.send(data);
});

app.post("/student", (req, res) => {
  data = req.body;
  // console.log(data["n1"]);
  // console.log(typeof(data["n1"]));
  sqr = data["n1"] * data["n1"];
  res.send({ square: sqr });
});

app.put("/student", (req, res) => {
  data = { result: "Student put Request" };
  res.send(data);
});

app.delete("/student", (req, res) => {
  data = { result: "Student delete Request" };
  res.send(data);
});

app.listen(8989, () => {
  console.log("Listening at port 8989");
});

/*
//modular routeing 
app.route("/teacher")
  .get((req, res) => {
    data = { result: "Teacher get Request" };
    res.send(data);
  })
  .post((req, res) => {
    data = { result: "Teacher post Request" };
    res.send(data);
  })
  .put((req, res) => {
    data = { result: "Teacher put Request" };
    res.send(data);
  })
  .delete((req, res) => {
    data = { result: "Teacher delete Request" };
    res.send(data);
  });

  app.route("/")
  .get((req, res) => {
    data = { result: "Home get Request" };
    res.send(data);
  })
  .post((req, res) => {
    data = { result: "Home post Request" };
    res.send(data);
  })
  .put((req, res) => {
    data = { result: "Home put Request" };
    res.send(data);
  })
  .delete((req, res) => {
    data = { result: "Home delete Request" };
    res.send(data);
  });

app.listen(8080, () => {
  console.log("Listening at port 8080");
});
*/
