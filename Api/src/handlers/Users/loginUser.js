const { authUser } = require("../../controllers/Users/authUser");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
};
