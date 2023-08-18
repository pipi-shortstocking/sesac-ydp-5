const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
//app.set("/views", "views");
app.use(".views", express.static(__dirname + "/vies")); // 6번 코드와 동일!
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("dynamic");
});

app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
