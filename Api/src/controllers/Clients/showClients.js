const { User, Client } = require("../../db");

const showClients = async (userId) => {
  try {
    return await Client.findAll({
      include: [
        {
          model: User,
          as: "user",
          where: { id: userId }
        },
      ],
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  showClients,
};
