const { User } = require("../../db");

const createUser = async (fullName, email, password) => {
  try {
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
