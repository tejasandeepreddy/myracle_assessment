const mongoose = require("mongoose");

var subjectSchema = new mongoose.Schema({
  subjectId: {
    type: String,
    unique: true,
    required:"Subject Id is required"
  },
  subjectName: {
    type: String,
    required:"Subject Name is required"

  },
  subjectCode: {
    type: String,
    unique: true,
    required:"Subject Code is required"

  },
  professor: {
    type: String,
    required:"Professor Name is required"

  },
});

mongoose.model('Subject',subjectSchema);
