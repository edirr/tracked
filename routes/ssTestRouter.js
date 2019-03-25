const express = require("express");
const { Student, SSTest } = require("../models");

const ssTestRouter = express.Router();

ssTestRouter.get("/", async (req, res) => {
  try {
    const ssTests = await SSTest.findAll({
      // rejectOnEmpty: true
    });
    res.send(ssTests);
  } catch (e) {
    console.log(e);
  }
});

ssTestRouter.get("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const ssTest = await SSTest.findOne({
      where: { id }
      // rejectOnEmpty: true
    });
    res.send(ssTest);
  } catch (e) {
    console.log(e);
  }
});

ssTestRouter.put("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    // receiving from the body
    const { name, grade, date } = req.body;
    const updatedSSTest = await SSTest.update(
      { name, grade, date },
      {
        where: { id },
        limit: 1,
        version: false,
        isNewRecord: false

        // rejectOnEmpty: true,
        // returning: true
      }
    );

    res.send(updatedSSTest);
  } catch (e) {
    console.log(e);
  }
});
ssTestRouter.post("/", async (req, res) => {
  try {
    // receiving from the body
    const { name, grade, date, studentId } = req.body;

    const newSSTest = await SSTest.create({ name, grade, date, studentId });
    res.send(newSSTest);
  } catch (e) {
    console.log(e);
  }
});

ssTestRouter.delete("/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    await SSTest.destroy({
      where: { id },
      limit: 1
    });
  } catch (e) {
    console.log(e);
  }
  res.send({});
});

//All math tests for one student
ssTestRouter.get("/student/:id", async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const ssTests = await SSTest.findAll({
      where: { student_id: id }
      // rejectOnEmpty: true
    });
    res.send(ssTests);
  } catch (e) {
    console.log(e);
  }
});

module.exports = ssTestRouter;