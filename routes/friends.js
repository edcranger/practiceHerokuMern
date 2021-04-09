const router = require("express").Router();
const {
  addFriend,
  getFriends,
  updateFriend,
  deleteFriend,
} = require("../controllers/friends");

router.route("/").get(async (req, res, next) => {
  res.status(200).json({ message: "ok", data: "Hello" });
});
router.route("/addfriend").post(addFriend);

router.route("/getfriends").get(getFriends);

router.route("/updateFriend").put(updateFriend);

router.route("/deleteFriend/:id").delete(deleteFriend);

module.exports = router;
