
function open_popup() {
    const date = new Date();
    let ano = date.getFullYear();
    let day = date.getDate();
    let mes = date.getMonth() + 1;

    let apresentaDados = document.querySelector('.dataEHora').value = dataAtual;

    if(day <= 9){
        let dataAtual = `${ano}-${mes}-0${day}`
        apresentaDados = dataAtual
    } else day = day

    if(mes <= 9){
        let dataAtual = `${ano}-0${mes}-${day}`
        apresentaDados = dataAtual
    } mes = mes;

    if(mes <= 9 && day <= 9){
        let dataAtual = `${ano}-0${mes}-0${day}`
        apresentaDados = dataAtual
    } mes = mes;

    let dataAtual = `${ano}-${mes}-${day}`
    apresentaDados = dataAtual
}
open_popup();
