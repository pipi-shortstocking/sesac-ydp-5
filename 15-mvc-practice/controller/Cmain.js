const axiosPost = require("../model/Login");

exports.main = (req, res) => {
  res.render("dynamic");
};

exports.axios = (req, res) => {
  //   console.log(req.body);
  //   res.send(req.body);

  for (let user of axiosPost) {
    if (req.body.id === user.id && req.body.pw === user.pw) {
      return res.send({
        permission: true,
        userid: req.body.id,
      });
    }
  }
  res.send({ permission: false });
};
