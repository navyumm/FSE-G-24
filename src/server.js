require("dotenv").config();
const app = require("./app");
const db = require("./models");

const PORT = process.env.PORT || 8000

db.sequelize.sync({force: true}).then(() => {
  console.log("Database connect successfully");

  app.listen( PORT, () => {
    console.log(`server is rinning at port :  ${PORT}`);
  });
});
