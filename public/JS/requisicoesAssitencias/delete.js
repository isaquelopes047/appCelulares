/* DELETE */
import { conectaApi } from "../models/conectApi.js";

const botaoDeletar = document.querySelector('.dellReg');

async function deletarRegistro(evento){
    evento.preventDefault();
    try {
        const urlConvertida = await conectaApi.deletaRegistro();
        location.href = "./paginaDeDados.html";

        return urlConvertida;

    } catch (err) {}
}
// Evento Click deletar
botaoDeletar.addEventListener('click', evento => deletarRegistro(evento));
