const Users = require("./../../models/users");

const registerUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await Users.create(user);
    newUser.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in registering user", error);
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  registerUser,
};
