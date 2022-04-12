import db from "../Config/db.config.js";
import { Sequelize } from "sequelize";
import movie from "./movie.model.js";

db.Sequelize = Sequelize;

db.movie = movie;

export default db;
