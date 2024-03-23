const { Router } = require ("express");
const { postClient } = require("../handlers/Clients/postClient")
const { getClients } = require("../handlers/Clients/getClients")

const clientsRoutes = Router();

clientsRoutes.post("/createClient", postClient);
clientsRoutes.get("/showClients", getClients);

module.exports = clientsRoutes;