const express = require("express");
const cors = require("cors");
require("./db/connection.js");
const authRouter = require("./routers/auth.js");
const messageRouter = require("./routers/messages.js");

const app = express();

app.use(cors());
app.use(express.json({ limit: "500mb" }));

app.use("/auth", authRouter);
app.use("/messages", messageRouter);
app.get("/", (req, res) => {
  res.send("Malware bits is running!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

module.exports = app;
