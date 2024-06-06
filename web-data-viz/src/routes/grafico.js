var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/avaliacao", function (req, res) {
    graficoController.avaliacao(req, res);
})
router.get("/grafico1", function (req, res) {
    graficoController.grafico1(req, res);
});
router.get("/grafico2", function (req, res) {
    graficoController.grafico2(req, res);
});

module.exports = router;