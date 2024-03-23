const { Client } = require("../../db");

const destroyClient = async (id) => {
  try {
    const client = await Client.findByPk(id);
    if (!client) {
      throw new Error(`No se encontró el cliente con el ID: ${id}`);
    }

    const clientData = client.toJSON();

    await client.destroy();

    return clientData;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  destroyClient,
};
