
async function getUser() {
    try {
        const response = await fetch('http://localhost:3000/assistencias', {
            Method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        
        const urlConvertida = await response.json()

        for (var i = 0; i < urlConvertida.length; i++) {

            let ultimos = urlConvertida.slice(-40).reverse();

            var corpoTabela = document.querySelector('tbody');
            createDados(ultimos);

            styleSetores();
        }


    } catch (err) {
        console.log(err);
    }

    function createDados(ultimos) {
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
getUser();

function styleSetores() {
    let myTable = document.querySelector("#table");
    let allTds = myTable.querySelectorAll("table td:nth-of-type(7)");
    let allTrs = myTable.querySelectorAll("tr");

    for (item of allTds.values()) {
        if (item.textContent === 'Tela quebrada') item.classList.add('telaQuebrada')
        else{
            item.classList.add('padrao')
        }
    }
}