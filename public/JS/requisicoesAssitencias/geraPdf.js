import { conectaApi } from "../models/conectApi.js";
import { img } from '../scripts/imgBase64.js';

let button = document.querySelector('.gerar')

async function listaRegistros() {
    try {

        const urlConvertida = await conectaApi.apresentaDadosDetalhes();

        urlConvertida.forEach(function (data) {
            gerarPdf(data);
        })

        } catch (err) {
        console.log(err)
    }
}

function gerarPdf(data) {
    var doc = new jsPDF()

    var imgData = img;

    doc.addImage(imgData, 'JPEG', 60, 10, 100, 24)

    doc.setFontSize(20)
    doc.setFontType("italic")
    var width = doc.internal.pageSize.getWidth()
    doc.text('FICHA PARA TROCA DE CELULAR  ', width/2, 50, { align: 'center' })

    doc.setFontSize(12)
    doc.text(10, 70, `Funcionario: ${data.nomeFuncionario}`)
    doc.text(10, 78, `Data: ${data.dataEHora}`)

    doc.setFontType('bold');
    doc.text(10, 82, ``)
    doc.text(10, 87, `_____________________________________________________________________`)
    doc.text(10, 92, ``)

    doc.setFontSize(12)
    doc.text(10, 100, `MODELO DANIFICADO: ${data.modeloCelularAntigo}`)
    doc.text(10, 109, `PATRIMONIO: ${data.numeroPatrimonioAntigo}`)
    doc.text(10, 118, `NÚMERO DO CELULAR: ${data.numeroDeCelularAntigo}`)
    doc.text(10, 138, `PROBLEMA IDENTIFICADO: ${data.problemaIdentificado}`)

    doc.text(10, 146, `_____________________________________________________________________`)

    doc.setFontType('bold');
    doc.setFontSize(12)
    doc.text(10, 159, `MODELO CELULAR TROCADO: ${data.modeloCelularNovo}`)
    doc.text(10, 169, `PATRIMÔNIO: ${data.numeroPatrimonioNovo}`)
    doc.text(10, 179, `NÚMERO DO CELULAR: ${data.numeroDeCelularNovo}`)

    doc.text(10, 199, `Tecnico responsavel: ${data.nomeTecnico}`)

    doc.setFontType('normal');
    doc.text(70, 239, `x _________________________`)
    doc.text(93, 247, `Assinatura`)

    doc.save('Test.pdf');
}

button.addEventListener('click', () => listaRegistros())