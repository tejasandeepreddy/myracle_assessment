const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://tejasandeep:Phoenix030602@cluster0.ymm5l.mongodb.net/StaffManagementSystem",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Mongo Connection succeeded");
    } else {
      console.log("error occured in DB connection" + err);
    }
  }
);

require('./subjectmodel')