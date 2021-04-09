const Friends = require("../models/Friends");

exports.addFriend = async (req, res, next) => {
  try {
    const friend = await Friends.create(req.body);

    res.status(200).json({ message: "ok", data: friend });
  } catch (err) {
    console.log(err);
  }
};

exports.getFriends = async (req, res, next) => {
  try {
    const friends = await Friends.find();

    res
      .status(200)
      .json({ message: "ok", results: friends, count: friends.length });
  } catch (err) {
    console.log(err);
  }
};

exports.updateFriend = async (req, res, next) => {
  try {
    const friends = await Friends.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ message: "ok", results: friends });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteFriend = async (req, res, next) => {
  try {
    await Friends.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "ok", results: {} });
  } catch (err) {
    console.log(err);
  }
};
