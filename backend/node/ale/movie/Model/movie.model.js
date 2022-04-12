import { Sequelize } from "sequelize";
import db from "../Config/db.config.js";

const { DataTypes } = Sequelize;

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING,
  },

  description: {
    type: Sequelize.STRING,
  },

  published: {
    type: Sequelize.BOOLEAN,
  },
});

export default Movie;
