const { showClients } = require("../../controllers/Clients/showClients");

const getClients = async (req, res) => {
  try {
    const result = await showClients();
    res.status(200).json(result)
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  getClients,
};