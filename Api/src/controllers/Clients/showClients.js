const { User, Client } = require("../../db");

const showClients = async () => {
    try {
        return await Client.findAll({
            include: [
                {
                    model: User,
                    as: "user"
                },
            ],
        })
    } catch (error) {
        throw new Error(error.message); 
    }
}

module.exports = {
    showClients,
}