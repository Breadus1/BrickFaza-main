const Users = require("../../models/users");
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
  const user = req.body;
  try {
    const token = req.query.token;
    const decoded = jwt.verify(token, "secret-key");
    if (!decoded.admin) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const newUser = await Users.create(user);
    newUser.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in addUser:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  addUser,
};
