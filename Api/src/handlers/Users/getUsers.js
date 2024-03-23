const { showUsers } = require("../../controllers/Users/showUsers");

const getUsers = async (req, res) => {
  try {
    const result = await showUsers();
    res.status(200).json(result)
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  getUsers,
};
