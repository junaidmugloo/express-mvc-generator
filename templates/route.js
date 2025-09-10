const express = require("express");
const router = express.Router();
const controller = require("../controllers/{{name}}Controller");

router.get("/", controller.get{{name}});

module.exports = router;
