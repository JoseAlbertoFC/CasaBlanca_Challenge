const { Client, User } = require("../../db");

const createClient = async (fullName, email, age, phoneNum, status, userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error(`The user with the ID ${userId} was not found.`);
    }

    const existingClient = await Client.findOne({ where: { email, userId } });
    if (existingClient) {
      throw new Error(
        `A client with this email ${email} already exists for this user.`
      );
    }

    const existingPhoneClient = await Client.findOne({
      where: { phoneNum, userId },
    });
    if (existingPhoneClient) {
      throw new Error(
        `A client with this phone number ${phoneNum} already exists for this user.`
      );
    }

    const newClient = await Client.create({
      fullName,
      email,
      age,
      phoneNum,
      status,
      userId,
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
