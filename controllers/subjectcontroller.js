const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Subject = mongoose.model("Subject");

router.get("/", (req, res) => {
  res.render("subjects/addOrEdit", { viewTitle: "Insert Subject" });
});

router.post("/", (req, res) => {
  if (req.body._id == "") {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

function insertRecord(req, res) {
  var subject = new Subject();
  subject.subjectName = req.body.subjectName;
  subject.subjectId = req.body.subjectId;
  subject.subjectCode = req.body.subjectCode;
  subject.professor = req.body.professor;
  subject.save((err, doc) => {
    if (!err) {
      res.redirect("subject/list");
    } else {
      console.log("Error occured while subject insertion" + err);
    }
  });
}

function updateRecord(req, res) {
  Subject.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("subject/list");
      } else {
        console.log("Update error");
      }
    }
  );
}

router.get("/list", (req, res) => {
  // res.json("from list");
  Subject.find((err, docs) => {
    if (!err) {
      res.render("subjects/list", {
        list: docs,
      });
    } else {
      console.log("Error in retrieving Subjects list:" + err);
    }
  }).lean();
});

router.get("/:id", (req, res) => {
  Subject.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("subjects/addOrEdit", {
        viewTitle: "Update Subject Details",
        subject: doc,
      });
    }
    else{
      console.log("Error occured");
    }
  }).lean();
});
router.get("/delete/:id",(req,res)=>{
  Subject.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(!err){
      res.redirect('/subject/list');
    }
    else{
      console.log("Error in subject deletion");
    }
  })
});

module.exports = router;
