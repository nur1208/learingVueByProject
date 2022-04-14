const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 8182;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "working" });
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
