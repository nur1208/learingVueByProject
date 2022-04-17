const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 8182;
const { sequelize } = require("./models");
const config = require("./config/config");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

require("./routes")(app);

sequelize.sync({ force: false }).then(() => {
  app.listen(config.port);
  console.log(`app listening at http://localhost:${port}`);
});
