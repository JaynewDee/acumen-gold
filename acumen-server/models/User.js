import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: "string", required: true, unique: true },
  email: {
    type: "string",
    required: true,
    unique: true,
    validate: {
      validator: (v) =>
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(v)
    },
    message: (props) => `${props.value} is not a valid email address.`
  },
  password: { type: "string", required: true },
  updated: { type: Date, default: Date.now }
});

const User = model("User", userSchema);
