import { conectaApi } from "../../models/conectApi.js";

async function listaRegistros() {
    try {
        const urlConvertida = await conectaApi.listaDados();

        let total = document.querySelector('.TotalAssistencia');
        total.innerHTML = urlConvertida.length;
    } catch (err) {}
}
listaRegistros();

async function listaRegistrosDataAtual() {
    try {
        const urlConvertida = await conectaApi.apresentaData();

        let total = document.querySelector('.dataAssistencia');
        total.innerHTML = urlConvertida.length;
    } catch (err) {}
}
listaRegistrosDataAtual();