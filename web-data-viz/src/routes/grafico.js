var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/avaliacao", function (req, res) {
    graficoController.avaliacao(req, res);
})

module.exports = router;