import { Sequelize } from "sequelize";
import configDb from "../config/config_db.js";

const sequelize = new Sequelize(
  configDb.database, //ten DATABASE
  configDb.user, //ten user
  configDb.pass, //password cuar user
  {
    host: configDb.host,
    port: configDb.port,
    dialect: "mysql", //type sql nao (postGre,sqlServer,mysql,...)
  }
);

export default sequelize;
