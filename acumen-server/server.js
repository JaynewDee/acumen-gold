import express from "express";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
console.log(__dirname);
const PORT = process.env.PORT || 3001;

async function launchServer() {
  const server = express();

  server.use(express.json());

  server.use(
    express.urlencoded({
      extended: true
    })
  );
  if (process.env.NODE_ENV === "production") {
    server.use(express.static(path.join(__dirname, "../acumen-client/build")));
  } else {
    server.use(
      express.static(path.join(__dirname, "../acumen-client/index.html"))
    );
  }
  server.use("*", (req, res) => {
    console.log(req.url);
  });
  server.listen(PORT, () => console.log(`Listening @ ${PORT}`));
}

await launchServer();
