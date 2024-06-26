var database = require("../database/config");

function avaliacao(valor, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function avaliacao()");
    var instrucaoSql = `
    insert into avaliacao (valor, fk_usuario) values
    ("${valor}",${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function grafico1() {

    var instrucaoSql = `SELECT
         a.valor,
    COUNT(*) AS avaliação
    FROM
        avaliacao a
    GROUP BY
        a.valor;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function grafico2() {

    var instrucaoSql = ` SELECT
        u.tipo,
        COUNT(*) AS 'usuário'
    FROM
        usuario u
    GROUP BY
    u.tipo;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    avaliacao,
    grafico1,
    grafico2
};