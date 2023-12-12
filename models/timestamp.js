const mongoose = require("mongoose");

const TimestampSchema = new mongoose.Schema({
  date: {
    type: String,
  },
});

const TimestampModel = mongoose.model("Timestamp", TimestampSchema);

module.exports = TimestampModel;
