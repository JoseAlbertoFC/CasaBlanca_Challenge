const { Router } = require("express");
const clientsRoutes = require("./Clients");
const usersRoutes = require("./Users");

const router = Router();

router.use("/clients", clientsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
