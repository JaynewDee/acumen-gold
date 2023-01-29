import express from "express";

const PORT = process.env.PORT || 3001;
const server = express();

server.get("/", (req, res, next) => {
  res.send("Hello, home!");
});

server.listen(PORT, () => console.log(`Listening @ ${PORT}`));
