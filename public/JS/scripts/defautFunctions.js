function dadosInexistentes(){
    let containerImg = document.querySelector('.containerApresentaResultados')
    containerImg.style.backgroundImage = "url('/public/img/nadaAqui.png')";
    containerImg.style.backgroundRepeat = 'no-repeat';
    containerImg.style.backgroundPosition = 'center ';
}

function estiloMotivoDaAssistencia() {
    let myTable = document.querySelector("#table");
    let allTds = myTable.querySelectorAll("table td:nth-of-type(7)");

    let item = null;

    for (item of allTds.values()) {
        if (item.textContent === 'Tela quebrada') item.classList.add('telaQuebrada')
        else{
            item.classList.add('padrao')
        }
    }
}

function limpaTelaData(){
    const Limpa = document.querySelector('.data');
        Limpa.addEventListener('focusin', () => {
            location.reload(true);
        })
}

function limpaTelaFuncionario(){
    const LimpaFuncionario = document.querySelector('.funcionario');
    LimpaFuncionario.addEventListener('focusin', () => {
            location.reload(true);
        })
}

export const functionsDefault = { 
    dadosInexistentes,
    estiloMotivoDaAssistencia,
    limpaTelaData,
    limpaTelaFuncionario
}