const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.set("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
