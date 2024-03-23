const { Client } = require("../../db");

const updateClient = async (id, { fullName, email, age, phoneNum, status }) => {
  try {
    const client = await Client.findByPk(id);
    if (!client) {
      throw new Error("client not found");
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
