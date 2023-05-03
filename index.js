
const express = require("express");
const app = express();
const cors=require("cors")
const port = 3000;
app.use(cors())

app.get("/", (req, res) => {
  res.send("Chefsmate server running...");
});

app.listen(port, () => {
  console.log( `Chefsmate server running on port ${port}!`);
});