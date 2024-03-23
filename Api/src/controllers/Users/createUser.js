const { User } = require("../../db");

const createUser = async (fullName, email, password) => {
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error(`A user with the email ${email} already exists.`);
    }

    const newUser = await User.create({
      fullName,
      email,
      password,
    });
    return newUser;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
};
