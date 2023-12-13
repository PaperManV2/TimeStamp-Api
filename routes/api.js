const express = require("express");
const TimestampModel = require("../models/timestamp");
const router = express.Router();

router.post("/data/:date", async (req, res) => {
  try {
    const data = req.params;
    const timestamp = await TimestampModel.create(data);
    console.log(timestamp);
    return res.status(200).json({ message: "Date Time", date: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// router.get("/data", async (req, res) => {
//   try {
//     const data = await TimestampModel.find();
//     console.log(data);
//     return res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.get("/data", async (req, res) => {
  try {
    const data = await TimestampModel.findOne({}, {}, { sort: { _id: -1 } });
    console.log(data);
    return res.status(200).json(data.date);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
