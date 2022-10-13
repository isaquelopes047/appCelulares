const urlSearchOrder = new URLSearchParams(window.location.search);
const orderParamAlt = urlSearchOrder.get("order")

const buttonAlterar = document.querySelector('.alterarContent');
buttonAlterar.addEventListener('click', () => {

    (async () => {

        try {
            const response = await fetch(`http://localhost:3000/assistencias/alterar?order=${orderParamAlt}`, {

                method: 'PATCH',
                Headers: {
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

            const urlConvertida = await response.json()
            console.log(urlConvertida)

            location.href = "./paginaDeDados.html";

            return response;

        } catch (err) {
            console.log(err);
        }
    })();
})

/* const urlSearchOrder = new URLSearchParams(window.location.search);
const orderParamAlt = urlSearchOrder.get("order")

function alterar(){

    fetch(`http://localhost:3000/assistencias/alterar?order=${orderParamAlt}`,{
        method: 'PATCH',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeTecnico: 'nomeTecnico',
            nomeFuncionario: 'nomeFuncionario',
            modeloCelularAntigo: 'modeloCelularAntigo',
        })
    })
}

alterar(); */
