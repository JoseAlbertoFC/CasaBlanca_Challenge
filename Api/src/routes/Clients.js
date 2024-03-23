const { Router } = require ("express");
const { postClient } = require("../handlers/Clients/postClient")

const clientsRoutes = Router();

clientsRoutes.post("/createClient", postClient);


module.exports = clientsRoutes;