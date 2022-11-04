
function open_popup() {
    const date = new Date();
    let ano = date.getFullYear();
    let day = date.getDate();
    let mes = date.getMonth() + 1;

    if(day <= 9){
        let dataAtual = `${ano}-${mes}-0${day}`
        document.querySelector('.dataEHora').value = dataAtual;
    } else {
        day = day;
    }

    if(mes <= 9){
        let dataAtual = `${ano}-0${mes}-${day}`
        document.querySelector('.dataEHora').value = dataAtual;
    } else {
        mes = mes;
    }

    if(mes <= 9 && day <= 9){
        let dataAtual = `${ano}-0${mes}-0${day}`
        document.querySelector('.dataEHora').value = dataAtual;
    } else {
        mes = mes;
    }
}
open_popup()
