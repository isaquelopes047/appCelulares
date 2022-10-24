/* GET ID PELA URL */
/* TELA DE INFORMAÇÃO */

import { conectaApi } from "../models/conectApi.js";

const urlSearch = new URLSearchParams(window.location.search);
const orderParam = urlSearch.get("order")

async function apresentaDadosDetalhes() {
    try {
        const urlConvertida = await conectaApi.apresentaDadosDetalhes();
        const title = document.querySelector('.titleReg');
        title.textContent =  `INFORMAÇÕES DO REGISTRO ${orderParam}`;

        urlConvertida.forEach(function (data) {
            dados(data);
        })

    } catch (err) {
        console.log(err);
    }

    function dados(data) {
        document.querySelector('.nomeTecnico').innerHTML = `${data.nomeTecnico}`;
        document.querySelector('.nomeFuncionario').innerHTML = `${data.nomeFuncionario}`;
        document.querySelector('.modeloCelularAntigo').innerHTML = `${data.modeloCelularAntigo}`;;
        document.querySelector('.numeroPatrimonioAntigo').innerHTML = `${data.numeroPatrimonioAntigo}`;;
        document.querySelector('.numeroDeCelularAntigo').innerHTML = `${data.numeroDeCelularAntigo}`;;
        document.querySelector('.problemaIdentificado').innerHTML = `${data.problemaIdentificado}`;;
        document.querySelector('.modeloCelularNovo').innerHTML = `${data.modeloCelularNovo}`;;
        document.querySelector('.numeroPatrimonioNovo').innerHTML = `${data.numeroPatrimonioNovo}`;;
        document.querySelector('.numeroDeCelularNovo').innerHTML = `${data.numeroDeCelularNovo}`;;
        document.querySelector('.observacao').innerHTML = `${data.observacao}`;;
        document.querySelector('.dataEHora').innerHTML = `${data.dataEHora}`;;
    }
}
apresentaDadosDetalhes();
