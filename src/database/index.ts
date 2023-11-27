import "dotenv/config";
import mongoose from "mongoose";
import chalk from "chalk";
import debugCreator from "debug";

const mongodbUrl = process.env.MONGODB_URL;
const debug = debugCreator("src:database:index");

export const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    debug(chalk.green("Connected to database"));
  } catch (error) {
    debug(chalk.red({ error: "Couldn't connect to database" }));
    process.exit(1);
  }
};
