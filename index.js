const express = require("express");
require("./src/db/conn");
require("dotenv").config();
const cors = require("cors");
const router = require("./src/router/nfts")

//creating the server
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use(router);

//listening the server
app.listen(process.env.PORT, () => {
  console.log("server is running on port " + process.env.PORT);
});
