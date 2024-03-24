const { showClients } = require("../../controllers/Clients/showClients");

const getClients = async (req, res) => {
  try {
    const userId = req.headers.userid;
    if (!userId) {
      throw new Error("No userId provided");
    }
    const result = await showClients(userId);
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