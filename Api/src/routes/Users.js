const { Router } = require("express");
const { postUser } = require("../handlers/Users/postUser");
const { getUsers } = require("../handlers/Users/getUsers");
const { loginUser } = require("../handlers/Users/loginUser");

const usersRoutes = Router();

usersRoutes.post("/createUser", postUser);
usersRoutes.post("/loginUser", loginUser);
usersRoutes.get("/showUsers", getUsers);

module.exports = usersRoutes;
