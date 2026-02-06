require("dotenv").config();
const app = require("./app");
const db = require("./models");

db.sequelize.sync({alter: true}).then(() => {
  console.log("Database connect successfully");

  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is rinning at port :  ${PORT}`);
  });
});
