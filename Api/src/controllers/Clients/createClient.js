const { Client, User } = require("../../db");

const createClient = async (fullName, email, age, phoneNum, status, userId) => {
  
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error(`No se encontró el usuario con el ID: ${userId}`);
    }

    const newClient = await Client.create({
      fullName,
      email,
      age,
      phoneNum,
      status,
      userId 
    });

    return newClient;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  createClient,
};
