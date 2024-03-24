const { updateClient } = require("../../controllers/Clients/updateClient");

const putClient = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, age, phoneNum, status, userId } = req.body;

  try {
    const result = await updateClient(id, {
      fullName,
      email,
      age,
      phoneNum,
      status,
      userId,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  putClient,
};
