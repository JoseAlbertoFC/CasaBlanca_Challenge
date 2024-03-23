const { Client } = require("../../db");

const createClient = async (fullName, email, age, phoneNum, status) => {
  try {
    const newUser = await Client.create({
      fullName,
      email,
      age,
      phoneNum,
      status,
    });
    return newUser;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  createClient,
};
