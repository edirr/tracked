const express = require("express");
const { Student, MathTest } = require("../models");

const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
  try {
    const students = await Student.findAll({
      rejectOnEmpty: true
    });
    res.send(students);
  } catch (e) {
    console.log(e);
  }
});

studentRouter.get("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const student = await Student.findOne({
      where: { id },
      rejectOnEmpty: true
    });
    res.send(student);
  } catch (e) {
    console.log(e);
  }
});

studentRouter.put("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    // receiving from the body
    const { fname, lname, age } = req.body;
    const updatedStudent = await Student.update(
      { fname, lname, age },
      {
        where: { id },
        limit: 1,
        rejectOnEmpty: true,
        returning: true
      }
    );

    res.send(updatedStudent);
  } catch (e) {
    console.log(e);
  }
});
studentRouter.post("/", async (req, res) => {
  try {
    // receiving from the body
    const { fname, lname, age } = req.body;

    const newStudent = await Student.create({ fname, lname, age });
    res.send(newStudent);
  } catch (e) {
    console.log(e);
  }
});

studentRouter.delete("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    await Student.destroy({
      where: { id },
      limit: 1
    });
  } catch (e) {
    console.log(e);
  }
  res.send({});
});

//All math tests for one student
studentRouter.get("/:id/tests/math", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const mathTests = await MathTest.findAll({
      where: { student_id: id },
      rejectOnEmpty: true
    });
    res.send(mathTests);
  } catch (e) {
    console.log(e);
  }
});

module.exports = studentRouter;
