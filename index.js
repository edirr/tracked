const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const studentRouter = require("./routes/studentRouter");
const mathTestRouter = require("./routes/mathTestRouter");
const elaTestRouter = require("./routes/elaTestRouter");
const ssTestRouter = require("./routes/ssTestRouter");

// init a port
const PORT = process.env.PORT || 5000;

// set up express
const app = express();


// logger
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join('public')));

app.use('/students', studentRouter);
app.use('/tests/math', mathTestRouter);
app.use('/tests/ela', elaTestRouter);
app.use('/tests/ss', ssTestRouter);

app.get("/", (req, res) => {
    res.send("hello world");
  });





app.listen(PORT, () =>
  console.log(
    `Server up and listening on port ${PORT} in ${app.get("env")} mode`
  )
);

module.exports = app;
