const { Router } = require ("express");
const { postUser } = require ("../handlers/Users/postUser")
const { getUsers } = require ("../handlers/Users/getUsers")

const usersRoutes = Router();

usersRoutes.post("/createUser", postUser);
usersRoutes.get("/showUsers", getUsers);

module.exports = usersRoutes;