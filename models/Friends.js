const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please ented a name."],
  },
  age: {
    type: Number,
    required: [true, "Please enter friend's age."],
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Friend", FriendSchema);
