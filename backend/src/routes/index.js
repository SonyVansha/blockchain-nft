const express = require("express");
const nftRoutes = require("./nftRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use("/", nftRoutes);
router.use("/", userRoutes);

module.exports = router;
