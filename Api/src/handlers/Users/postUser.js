const { createUser } = require ("../../controllers/Users/createUser")

const postUser = async (req, res) => {
    const { fullName, email, password } = req.body;

  try {
    const result = await createUser(fullName, email, password);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
}

module.exports = {
    postUser
}