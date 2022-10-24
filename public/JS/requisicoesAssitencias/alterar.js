import { conectaApi } from "../models/conectApi.js";

const searchOrder = new URLSearchParams(window.location.search);
const parametroOrder = searchOrder.get("order")

const botaoBrirModal = document.querySelector('.openModalAlterar');
async function apresentaDados(evento) {
    evento.preventDefault();
    try {
        const urlConvertida = await conectaApi.apresentaDados();
        urlConvertida.forEach(function (data) {
            dados(data);
        })

    } catch (err) {}

    function dados(data) {
        document.querySelector('#nomeTecnico').value = `${data.nomeTecnico}`;
        document.querySelector('#nomeFuncionario').value = `${data.nomeFuncionario}`;
        document.querySelector('#modeloCelularAntigo').value = `${data.modeloCelularAntigo}`;
        document.querySelector('#numeroPatrimonioAntigo').value = `${data.numeroPatrimonioAntigo}`;
        document.querySelector('#numeroDeCelularAntigo').value = `${data.numeroDeCelularAntigo}`;
        document.querySelector('#problemaIdentificado').value = `${data.problemaIdentificado}`;
        document.querySelector('#modeloCelularNovo').value = `${data.modeloCelularNovo}`;
        document.querySelector('#numeroPatrimonioNovo').value = `${data.numeroPatrimonioNovo}`;
        document.querySelector('#numeroDeCelularNovo').value = `${data.numeroDeCelularNovo}`;
        document.querySelector('#observacao').value = `${data.observacao}`;
    }
}

const botaoAlterar = document.querySelector('.alterarContent');
async function alteraDados(evento) {
    evento.preventDefault();
    
    (async () => {
        try {
            const urlConvertida = await conectaApi.alteraDados();
            alertSucess()
            setTimeout(redirecionar, 1000);
            return urlConvertida;

        } catch (err) {
            alertError()
        }
    })();
}

function alertSucess() {
    let alertSucess = document.querySelector('.containerAlerta');
    alertSucess.style.display = 'block'
}

function alertError() {
    let alertError = document.querySelector('.containerAlertaError');
    alertError.style.display = 'block'
}

function redirecionar() {
    location.href = `./infoPage.html?order=${parametroOrder}`;
}

botaoBrirModal.addEventListener('click', evento => apresentaDados(evento));
botaoAlterar.addEventListener('click', evento => alteraDados(evento));

