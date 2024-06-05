var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/avaliacao", function (req, res) {
    graficoController.avaliacao(req, res);
})
router.get("/ultimas", function (req, res) {
    graficoController.grafico1(req, res);
});

module.exports = router;