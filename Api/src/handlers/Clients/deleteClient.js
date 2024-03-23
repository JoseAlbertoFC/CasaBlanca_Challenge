const { destroyClient } = require("../../controllers/Clients/destroyClient");

const deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedClient = await destroyClient(id);
    if (!deletedClient) {
      return res.status(404).json("Client not found");
    }

    res.status(200).json({
      message: "This Client was successfully removed",
      deletedClient: deletedClient,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  deleteClient,
};
