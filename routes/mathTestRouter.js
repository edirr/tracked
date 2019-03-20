const express = require("express");
const { Student, MathTest } = require("../models");

const mathTestRouter = express.Router();

mathTestRouter.get("/", async (req, res) => {
  try {
    const mathTests = await MathTest.findAll({
      rejectOnEmpty: true
    });
    res.send(mathTests);
  } catch (e) {
    console.log(e);
  }
});

mathTestRouter.get("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const mathTest = await MathTest.findOne({
      where: { id },
      rejectOnEmpty: true
    });
    res.send(student);
  } catch (e) {
    console.log(e);
  }
});

mathTestRouter.put("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    // receiving from the body
    const { name, grade, date } = req.body;
    const updatedMathTest = await MathTest.update(
      { name, grade, date },
      {
        where: { id },
        limit: 1,
        rejectOnEmpty: true,
        returning: true
      }
    );

    res.send(updatedMathTest);
  } catch (e) {
    console.log(e);
  }
});
mathTestRouter.post("/", async (req, res) => {
  try {
    // receiving from the body
    const { name, grade, date, studentId } = req.body;

    const newMathTest = await MathTest.create({ name, grade, date, studentId });
    res.send(newMathTest);
  } catch (e) {
    console.log(e);
  }
});

mathTestRouter.delete("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    await MathTest.destroy({
      where: { id },
      limit: 1
    });
  } catch (e) {
    console.log(e);
  }
  res.send({});
});

//All math tests for one student
mathTestRouter.get("/student/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const mathTests = await MathTest.findAll({
      where: { student_id: id },
      // rejectOnEmpty: true
    });
    res.send(mathTests);
  } catch (e) {
    console.log(e);
  }
});

module.exports = mathTestRouter;