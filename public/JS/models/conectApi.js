async function listaDados(){
    const conexao = await fetch('http://localhost:3000/assistencias');

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaRegistro(){  
    const urlSearchOrder = new URLSearchParams(window.location.search);
    const orderParamAlt = urlSearchOrder.get("order")

    const conexao = await fetch(`http://localhost:3000/assistencias/listaDelete?order=${orderParamAlt}`, {
            method: 'DELETE',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
        });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function apresentaDadosDetalhes(){
    const urlSearchOrder = new URLSearchParams(window.location.search);
    const orderParam = urlSearchOrder.get("order")

    const conexao = await fetch(`http://localhost:3000/assistencias/lista?order=${orderParam}`, {
            Method: 'GET',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            Cache: 'default'
        });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function apresentaDados(){
    const searchOrder = new URLSearchParams(window.location.search);
    const parametroOrder = searchOrder.get("order")

    const conexao = await fetch(`http://localhost:3000/assistencias/lista?order=${parametroOrder}`, {
            Method: 'GET',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            Cache: 'default'
        });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function alteraDados(){
    const searchOrder = new URLSearchParams(window.location.search);
    const parametroOrder = searchOrder.get("order")

    let nomeTecnico = document.querySelector('#nomeTecnico').value;
    let nomeFuncionario = document.querySelector('#nomeFuncionario').value;
    let modeloCelularAntigo = document.querySelector('#modeloCelularAntigo').value;
    let numeroPatrimonioAntigo = document.querySelector('#numeroPatrimonioAntigo').value;
    let numeroDeCelularAntigo = document.querySelector('#numeroDeCelularAntigo').value;
    let problemaIdentificado = document.querySelector('#problemaIdentificado').value;
    let modeloCelularNovo = document.querySelector('#modeloCelularNovo').value;
    let numeroPatrimonioNovo = document.querySelector('#numeroPatrimonioNovo').value;
    let numeroDeCelularNovo = document.querySelector('#numeroDeCelularNovo').value;
    let observacao = document.querySelector('#observacao').value;

    const conexao = await fetch(`http://localhost:3000/assistencias/alterar?order=${parametroOrder}`, {
                method: 'PATCH',
                headers: {
                    Accept: 'application.json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nomeTecnico: nomeTecnico,
                    nomeFuncionario: nomeFuncionario,
                    modeloCelularAntigo: modeloCelularAntigo,
                    numeroPatrimonioAntigo: numeroPatrimonioAntigo,
                    numeroDeCelularAntigo: numeroDeCelularAntigo,
                    problemaIdentificado: problemaIdentificado,
                    modeloCelularNovo: modeloCelularNovo,
                    numeroPatrimonioNovo: numeroPatrimonioNovo,
                    numeroDeCelularNovo: numeroDeCelularNovo,
                    modeloCelularNovo: modeloCelularNovo,
                    observacao: observacao
                })
            });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function cadastrarNovaAssistencia(){
    let nomeTecnico = document.getElementById('nomeTecnico').value
    let nomeFuncionario = document.getElementById('nomeFuncionario').value
    let modeloCelularAntigo = document.getElementById('modeloCelularAntigo').value
    let numeroPatrimonioAntigo = document.getElementById('numeroPatrimonioAntigo').value
    let numeroDeCelularAntigo = document.querySelector('.numeroDeCelularAntigo').value
    let problemaIdentificado = document.getElementById('problemaIdentificado').value
    let modeloCelularNovo = document.getElementById('modeloCelularNovo').value
    let numeroPatrimonioNovo = document.getElementById('numeroPatrimonioNovo').value
    let numeroDeCelularNovo = document.querySelector('.numeroDeCelularNovo').value
    let observacao = document.getElementById('observacao').value
    let dataEHora = document.getElementById('dataEHora').value

    const conexao = await fetch('http://localhost:3000/assistencias', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeTecnico: nomeTecnico,
            nomeFuncionario: nomeFuncionario,
            modeloCelularAntigo: modeloCelularAntigo,
            numeroPatrimonioAntigo: numeroPatrimonioAntigo,
            numeroDeCelularAntigo: numeroDeCelularAntigo,
            problemaIdentificado: problemaIdentificado,
            modeloCelularNovo: modeloCelularNovo,
            numeroPatrimonioNovo: numeroPatrimonioNovo,
            numeroDeCelularNovo: numeroDeCelularNovo,
            modeloCelularNovo: modeloCelularNovo,
            observacao: observacao,
            dataEHora: dataEHora
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = { 
    listaDados,
    deletaRegistro,
    apresentaDadosDetalhes,
    apresentaDados,
    alteraDados,
    cadastrarNovaAssistencia
}