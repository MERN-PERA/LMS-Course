const router=require("express").Router()
const userAdminModel = require("../models/userAdminModel");

router.post("/", (req, res) => {
    const { username, password } = req.body;
    userAdminModel.findOne({ username: username }).then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Login Successfully");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    });
  });

  module.exports = router