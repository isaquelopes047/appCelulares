
function open_popup() {
    const date = new Date();

    let day = date.getDate();

    let mes = date.getMonth() + 1;
    if(mes <= 9){
        mes = `0${mes}`;
    } else {
        mes = mes;
    }

    let ano = date.getFullYear();

    let dataAtual = `${ano}-${mes}-${day}`
    document.querySelector('.dataEHora').value = dataAtual;
}
open_popup()
