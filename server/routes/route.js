const express = require("express");
const router = express.Router();
const { getUsers,signupuser } = require("../controllers/userController");

router.get("/", getUsers);

router.post('/signup',signupuser)

module.exports = router;
