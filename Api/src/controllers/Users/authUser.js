const { User } = require("../../db");
const jwt = require("jsonwebtoken");

const authUser = async (email, password) => {
    const user = await User.findOne({ where: { email: email } });
    
    if (!user || user.password !== password) {
        throw new Error('Invalid credentials');
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    const accessToken = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '730h' }
    );

    return {
        email: user.email,
        name: user.name,
        accessToken,
        message: 'Perfect! You are logged in.'
    };
};


module.exports = {
  authUser,
};
