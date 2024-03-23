const { User, Client } = require("../../db");

const showUsers = async () => {
    try {
        return await User.findAll({
            attributes: { exclude: ['password'] }, 
            include: [
                {
                    model: Client,
                    as: "clients",
                },
            ],
        })
    } catch (error) {
        throw new Error(error.message); 
    }
}

module.exports = {
    showUsers,
}

