const express = require('express');
const { verifyToken } = require('../middlewares/user');
const { userLogin, userRegister } = require('../controllers/userController');

const app = express.Router();

app.post("/auth/login", userLogin ,verifyToken)
app.post("/auth/register", userRegister,verifyToken)