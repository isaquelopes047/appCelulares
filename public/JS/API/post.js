
var form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    (async () => {

        try {
            e.preventDefault();

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
            /* let dataEHora = document.getElementById('dataEHora').value */

            const rawResponse = await fetch('http://localhost:3000/assistencias', {
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
                    /* dataEHora: dataEHora, */
                })
            });

            /* Alert mensagem sucess */
            /* adicionaMensagem(); */
            setTimeout(redirect, 1000)

            const content = await rawResponse.json();
            console.log(content)

        } catch (err) {
            console.log(err);
        }
    })();
})

/* function adicionaMensagem (){
    let container = document.querySelector('.alertMsg');
    container.style.display = 'block';
}
 */
function redirect (){
    window.location.href = "../pages/sucessPost.html"
}
