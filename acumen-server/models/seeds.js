import db from "../config/connection";
import User from "./User";

const users = [
  {
    username: "synthetic",
    email: "jdiehl2236@gmail.com",
    password: "bleepbloop"
  }
];

db.once("open", async () => {
  try {
    await User.bulkCreate(users);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  process.exit(0);
});
