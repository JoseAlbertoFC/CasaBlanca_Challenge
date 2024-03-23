const { Router } = require ("express");
const { postClient } = require("../handlers/Clients/postClient")
const { getClients } = require("../handlers/Clients/getClients")
const { deleteClient } = require("../handlers/Clients/deleteClient")

const clientsRoutes = Router();

clientsRoutes.post("/createClient", postClient);
clientsRoutes.get("/showClients", getClients);
clientsRoutes.delete("/deleteClient/:id", deleteClient);


module.exports = clientsRoutes;