const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/test", (req, res) => {
  res.send("Tudo OK!");
});

// Add job via post
router.post("/add", (req, res) => {
  //destructuring
  let { title, salary, company, description, email, new_job } = req.body;

  //Insert data
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
