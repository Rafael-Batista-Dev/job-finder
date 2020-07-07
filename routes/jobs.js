const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

//Rota cadastrar vaga
router.get("/add", (req, res) => {
  res.render("add");
});

//Rota visualizar vaga
router.get("/view/:id", (req, res) =>
  Job.findOne({
    where: { id: req.params.id },
  })
    .then((job) => {
      res.render("view", {
        job,
      });
    })
    .catch((err) => console.log(err))
);

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
