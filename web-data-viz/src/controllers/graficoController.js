var graficoModel = require("../models/graficoModel");

function avaliacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var valor = req.body.valorServer;
    var idUsuario = req.body.idUsuarioServer;
    

    // Faça as validações dos valores
    if (valor == undefined) {
        res.status(400).send("Sua nota está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        graficoModel.avaliacao(valor, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da avaliação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    avaliacao
}