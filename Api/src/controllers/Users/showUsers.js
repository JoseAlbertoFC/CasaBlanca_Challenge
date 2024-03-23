const { User, Client } = require("../../db");

const showUsers = async () => {
    try {
        return await User.findAll({
            include: [
                {
                    model: Client,
                    as: "clients"
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

