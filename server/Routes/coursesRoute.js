const router = require("express").Router();
let Course = require("../models/courseModel");

router.route("/addcourse").post((req, res) => {
  console.log(req);
  const _id = Number(req.body.stdidc);
  const courseid = req.body.idc;
  const coursemonth = req.body.monthc;
  const courseweek = req.body.weekc;
  const link = req.body.linkc;

  var add = new Course({
    _id,
    courseid,
    coursemonth,
    courseweek,
    link,
  });
  console.log(add);
  add
    .save()
    .then(() => {
      // res.json("Course added")
      let sitrep = add.link;
      console.log(sitrep);
      res.json(sitrep);
      res.status(200).json(sitrep);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  let courseId = req.params.id;
  console.log("heloooo");
  console.log(courseId);
  await Course.findById(courseId).then((a) => {
    console.log(a);
    res.json(a);
  });
});

router.route("/update/:id").put(async (req, res) => {
  const lessonupt = req.params.stdidc;

  await Course.findByIdAndUpdate(lessonupt, req.body, {
    useFindAndModify: false,
  })
    // await Course.updateOne(lessonupt,req.body,{ useFindAndModify: false })
    .then((data) => {
      console.log(data);

      if (!data) {
        res.status(404).send({
          message: `Course not found.`,
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

module.exports = router;
