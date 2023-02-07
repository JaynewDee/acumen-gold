import express from "express";
import morgan from "morgan";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const urlEncoded = express.urlencoded({
  extended: true
});

const stat = (target) =>
  express.static(path.join(__dirname, `../acumen-client/${target}`));

const statics = () =>
  process.env.NODE_ENV === "production" ? stat("build") : stat("index.html");

const PORT = process.env.PORT || 3001;

async function launchServer() {
  const server = express();

  server.use(express.json());
  server.use(urlEncoded);
  server.use(statics());
  server.use(morgan("dev"));

  ///////////////////////
  /// Base Tester Routes
  ///////////////////////
  server.get("*", (req, res) => res.json({ message: "GET Wildcard hit!" }));
  server.post("*", (req, res) => res.json({ message: "POST Wildcard hit!" }));
  server.put("*", (req, res) => res.json({ message: "PUT Wildcard hit!" }));
  server.delete("*", (req, res) =>
    res.json({ message: "DELETE Wildcard hit!" })
  );

  server.listen(PORT, () => console.log(`Listening @ ${PORT}`));
}

await launchServer();
