const express = require("express");
const router = express.Router();

const Message = {
  text: "This was sent from our apps backend",
  sender: "Fullstack developer"
};

router.get("/", (req, res) => {
  console.log("Our server was hit");
  res.send(Message);
});

module.exports = router;
