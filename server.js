const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "This is the main page" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
