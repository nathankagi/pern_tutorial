const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());

// get data from client side, allows access to body
app.use(express.json());

app.listen(5000, () => {
  console.log("Server has started on port 5000.");
});
