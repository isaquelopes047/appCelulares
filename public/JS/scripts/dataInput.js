
function open_popup() {
    var data = new Date().toLocaleString().substr(0, 10)
    document.querySelector('.dataEHora').value = data;
}
open_popup()
