const { Client } = require("../../db");
const { Sequelize } = require("sequelize")

const updateClient = async (id, { fullName, email, age, phoneNum, status }) => {
  try {
    const client = await Client.findByPk(id);
    if (!client) {
      throw new Error(`The client with ID ${id} was not found.`);
    }

    const existingEmailClient = await Client.findOne({
      where: { email, id: { [Sequelize.Op.ne]: id } },
    });
    if (existingEmailClient) {
      throw new Error(
        `The email ${email} is already in use by another client.`
      );
    }

    const existingPhoneClient = await Client.findOne({
      where: { phoneNum, id: { [Sequelize.Op.ne]: id } },
    });
    if (existingPhoneClient) {
      throw new Error(
        `Phone number ${phoneNum} is already in use by another client.`
      );
    }

    client.fullName = fullName;
    client.email = email;
    client.age = age;
    client.phoneNum = phoneNum;
    client.status = status;

    await client.save();

    return client;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  updateClient,
};
