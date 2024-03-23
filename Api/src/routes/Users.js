const { Router } = require ("express");
const { postUser } = require ("../handlers/Users/postUser")

const usersRoutes = Router();

usersRoutes.post("/createUser", postUser);

module.exports = usersRoutes;