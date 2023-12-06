const router = require("express").Router();
const mongoose = require("mongoose");
let Student = require("../models/studentModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.route("/login").post(async (req, res) => {
  try {
    let usernew = await Student.find({ username: req.body.username });
    console.log(req.body.password);
    console.log(usernew);
    if (usernew.length > 0) {
      bcrypt
        .compare(req.body.password, usernew[0].passkey)
        .then(function (result) {
          console.log(result);

          if (result) {
            let profileid = usernew[0]._id;
            console.log(profileid);
            res.status(200).json(profileid);
          } else {
            res.status(400).json({ error: "password invalid..!" });
          }
        });

      // if(usernew[0].passkey ===  req.body.password){
      //     let profileid = usernew[0]._id
      //     console.log(profileid);
      //     res.status(200).json(profileid)
      // }else{
      //     res.status(400).json({error:"password invalid..!"})
      // }

      // if(usernew[0].passkey ===  req.body.password){
      //     let profileid = usernew[0]._id
      //     console.log(profileid);
      //     res.status(200).json(profileid)
      // }else{
      //     res.status(400).json({error:"password invalid..!"})
      // }
    } else {
      res.status(400).json({ error: "user name invalid..!" });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.route("/add").post((req, res) => {
  const id = Number(req.body.id);
  const name = req.body.name;
  const address = req.body.address;
  const contact = Number(req.body.contact);
  const nic = req.body.nic;
  const mail = req.body.mail;
  const username = req.body.username;
  const passkey = req.body.passkey;
  const course = req.body.course;
  const lesson = req.body.lesson;
  const paymentdetails = req.body.payment;

  bcrypt.hash(passkey, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash);

    var newStudent = new Student({
      id,
      name,
      address,
      contact,
      nic,
      mail,
      username,
      passkey: hash,
      course,
      lesson,
      paymentdetails,
    });

    newStudent
      .save()
      .then(() => {
        res.json("student added");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.route("/read").get((req, res) => {
  console.log("get route is running here");
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  console.log(req.params.id);
  let data = await Student.findByIdAndRemove(req.params.id);
  res.send(data);
});

router.route("/update/:id").put(async (req, res) => {
  const id = req.params.id;
  await Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User not found.`,
        });
      } else {
        res.send({ message: "User updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  await Student.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(userId),
      },
    },

    {
      $lookup: {
        from: "coursemodels",
        localField: "lesson",
        foreignField: "_id",
        as: "lessondetails",
      },
    },

    {
      $lookup: {
        from: "paymentmodels",
        localField: "paymentdetails",
        foreignField: "_id",
        as: "pay",
      },
    },
  ]).then((u) => {
    console.log(u);
    res.json(u);
  });
});

module.exports = router;
