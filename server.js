const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.status(200).send("Hello Mr. Aris!");
});

app.listen(PORT, () => {
  console.log(`Server is running`);
});
