const express = require("express");
const { Student, ElaTest } = require("../models");

const elaTestRouter = express.Router();

elaTestRouter.get("/", async (req, res) => {
  try {
    const elaTests = await ElaTest.findAll({
      rejectOnEmpty: true
    });
    res.send(elaTests);
  } catch (e) {
    console.log(e);
  }
});

elaTestRouter.get("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const elaTest = await ElaTest.findOne({
      where: { id },
      rejectOnEmpty: true
    });
    res.send(elaTest);
  } catch (e) {
    console.log(e);
  }
});

elaTestRouter.put("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    // receiving from the body
    const { name, grade, date } = req.body;
    const updatedElaTest = await ElaTest.update(
      { name, grade, date },
      {
        where: { id },
        limit: 1,
        rejectOnEmpty: true,
        returning: true
      }
    );

    res.send(updatedElaTest);
  } catch (e) {
    console.log(e);
  }
});
elaTestRouter.post("/", async (req, res) => {
  try {
    // receiving from the body
    const { name, grade, date, studentId } = req.body;

    const newElaTest = await ElaTest.create({ name, grade, date, studentId });
    res.send(newElaTest);
  } catch (e) {
    console.log(e);
  }
});

elaTestRouter.delete("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    await ElaTest.destroy({
      where: { id },
      limit: 1
    });
  } catch (e) {
    console.log(e);
  }
  res.send({});
});

//All math tests for one student
elaTestRouter.get("/student/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const elaTests = await ElaTest.findAll({
      where: { student_id: id },
      // rejectOnEmpty: true
    });
    res.send(elaTests);
  } catch (e) {
    console.log(e);
  }
});

module.exports = elaTestRouter;