const express = require("express");
const app = express();
const PORT = 8000;
const { sequelize } = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/user");
app.use("/user", userRouter);

// app.get("*", (req, res) => {
//   res.render("404");
// });

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection succeeded!");
      console.log(`http://localhost:${PORT}/user`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
