const { createClient } = require("../../controllers/Clients/createClient");

const postClient = async (req, res) => {
  const { fullName, email, age, phoneNum, status, userId } = req.body;

  try {
    const result = await createClient(
      fullName,
      email,
      age,
      phoneNum,
      status,
      userId
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  postClient,
};
