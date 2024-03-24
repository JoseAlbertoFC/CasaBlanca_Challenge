const { User } = require("../../db");
const jwt = require("jsonwebtoken");

const authUser = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user || user.password !== password) {
      throw new Error("Invalid Credentials");
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    const accessToken = jwt.sign(
      { userId: user.id, email: user.email, userName: user.name },
      JWT_SECRET,
      { expiresIn: "730h" }
    );

    return {
      userId: user.id,
      email: user.email,
      userName: user.fullName,
      accessToken,
      message: "Perfect! You are logged in.",
    };
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  authUser,
};
