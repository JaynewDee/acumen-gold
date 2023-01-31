import express from "express";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const urlEncoded = express.urlencoded({
  extended: true
});
const statics = () =>
  process.env.NODE_ENV === "production"
    ? express.static(path.join(__dirname, "../acumen-client/build"))
    : express.static(path.join(__dirname, "../acumen-client/index.html"));

const PORT = process.env.PORT || 3001;

async function launchServer() {
  const server = express();

  server.use(express.json());
  server.use(urlEncoded);
  server.use(statics());

  server.use("*", (req, res) => {
    console.log(req.url);
  });

  server.listen(PORT, () => console.log(`Listening @ ${PORT}`));
}

await launchServer();
