const config = require("config");
const { Sequelize } = require("sequelize");

let filbase = config.get('filarmonia_db');
module.exports = new Sequelize(
  filbase.database,
  filbase.user,
  filbase.password,
  {
    host: filbase.host,
    port: filbase.port,
    dialect: filbase.dialect,
  }
);
