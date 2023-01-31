import { connect, connection } from "mongoose";
import {} from "dotenv/config";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/";

connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default connection;
