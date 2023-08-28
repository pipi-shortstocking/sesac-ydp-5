const Visitor = require("../model/visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // [before]
  // res.render("visitor", { data: Visitor.getVisitors() });

  // [after]
  // console.log(Visitors.getVisitors());
  Visitor.getVisitors((result) => {
    console.log("controller >>", result);
    res.render("visitor", { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body); // {name: xx, comment: yy }
  const { name, comment } = req.body;

  Visitor.postVisitor(req.body, (insertId) => {
    console.log("controller >>", req.body);
    res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
  });
};
