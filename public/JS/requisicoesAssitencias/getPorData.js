import { conectaApi } from "../models/conectApi.js";
import { functionsDefault } from "../scripts/defautFunctions.js"

let botaoBrirModal = document.querySelector('.data')
async function getSetor() {
    
        try {
            const urlConvertida = await conectaApi.filtrarDadoPorData();

            if(urlConvertida.length >= 1){
                for (var i = 0; i < urlConvertida.length; i++) {

                    console.log(urlConvertida.length)
                    let ultimos = urlConvertida.slice(urlConvertida).reverse();
                    var corpoTabela = document.querySelector('tbody');
                    getDados(ultimos);
                    functionsDefault.estiloMotivoDaAssistencia();
    
                }
            } else {
                functionsDefault.dadosInexistentes();
            }

            functionsDefault.limpaTelaData();

        } catch (err) {
            console.log(err);
        }

        function getDados(ultimos) {
            var tr = document.createElement('tr');
            var tdId = document.createElement('td');
            var nomeTecnico = document.createElement('td');
            var nomeFuncionario = document.createElement('td');
            var modeloCelularAntigo = document.createElement('td');
            var numeroPatrimonioAntigo = document.createElement('td');
            var numeroDeCelularAntigo = document.createElement('td');
            var problemaIdentificado = document.createElement('td');
            var buttonDelete = document.createElement('a');

            tdId.textContent = ultimos[i].order;
            nomeTecnico.textContent = ultimos[i].nomeTecnico;
            nomeFuncionario.textContent = ultimos[i].nomeFuncionario;
            modeloCelularAntigo.textContent = ultimos[i].modeloCelularAntigo;
            numeroPatrimonioAntigo.textContent = ultimos[i].numeroPatrimonioAntigo;
            numeroDeCelularAntigo.textContent = ultimos[i].numeroDeCelularAntigo;
            problemaIdentificado.textContent = ultimos[i].problemaIdentificado;
            buttonDelete.innerHTML = `<img src="../icons/info.png" alt="">`
            buttonDelete.setAttribute("href", `./infoPage.html?order=${ultimos[i].order}`);

            tr.appendChild(tdId);
            tr.appendChild(nomeTecnico);
            tr.appendChild(nomeFuncionario);
            tr.appendChild(modeloCelularAntigo);
            tr.appendChild(numeroPatrimonioAntigo);
            tr.appendChild(numeroDeCelularAntigo);
            tr.appendChild(problemaIdentificado);
            tr.appendChild(buttonDelete);

            corpoTabela.appendChild(tr);
        }
}
botaoBrirModal.addEventListener('focusout', () => getSetor());