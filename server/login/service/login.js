const Users = require("../../models/users");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email, password });

    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          admin: user.admin,
          username: user.username,
        },
        "secret-key"
      );

      return res.status(200).json({ success: true, token });
    }

    return res.status(401).json({ success: false, message: "Invalid credentials" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  Login,
};
