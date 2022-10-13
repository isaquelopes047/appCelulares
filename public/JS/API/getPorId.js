
/* GET ID PELA URL */
/* TELA DE INFORMAÇÃO */
const urlSearch = new URLSearchParams(window.location.search);
const orderParam = urlSearch.get("order")

async function getOrder() {
    try {

        const response = await fetch(`http://localhost:3000/assistencias/lista?order=${orderParam}`, {
            Method: 'GET',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            Cache: 'default'
        });
        const urlConvertida = await response.json()
        const title = document.querySelector('.titleReg')
        title.textContent =  `INFORMAÇÕES DO REGISTRO ${orderParam}`

        urlConvertida.forEach(function (data) {
            dados(data);
        })

    } catch (err) {
        console.log(err);
    }

    function dados(data) {
        let nomeTecnico = document.querySelector('.nomeTecnico');
        let nomeFuncionario = document.querySelector('.nomeFuncionario');
        let modeloCelularAntigo = document.querySelector('.modeloCelularAntigo');
        let numeroPatrimonioAntigo = document.querySelector('.numeroPatrimonioAntigo');
        let numeroDeCelularAntigo = document.querySelector('.numeroDeCelularAntigo');
        let problemaIdentificado = document.querySelector('.problemaIdentificado');
        let modeloCelularNovo = document.querySelector('.modeloCelularNovo');
        let numeroPatrimonioNovo = document.querySelector('.numeroPatrimonioNovo');
        let numeroDeCelularNovo = document.querySelector('.numeroDeCelularNovo');
        let observacao = document.querySelector('.observacao');
        let dataEHora = document.querySelector('.dataEHora');

        nomeTecnico.innerHTML = `${data.nomeTecnico}`;
        nomeFuncionario.innerHTML = `${data.nomeFuncionario}`;
        modeloCelularAntigo.innerHTML = `${data.modeloCelularAntigo}`;
        numeroPatrimonioAntigo.innerHTML = `${data.numeroPatrimonioAntigo}`;
        numeroDeCelularAntigo.innerHTML = `${data.numeroDeCelularAntigo}`;
        problemaIdentificado.innerHTML = `${data.problemaIdentificado}`;
        modeloCelularNovo.innerHTML = `${data.modeloCelularNovo}`;
        numeroPatrimonioNovo.innerHTML = `${data.numeroPatrimonioNovo}`;
        numeroDeCelularNovo.innerHTML = `${data.numeroDeCelularNovo}`;
        observacao.innerHTML = `${data.observacao}`;
        dataEHora.innerHTML = `${data.dataEHora}`;
    }
}
getOrder();
