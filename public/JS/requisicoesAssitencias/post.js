
import { conectaApi } from '../models/conectApi.js';

let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    (async () => {

        try {
            e.preventDefault();
            const urlConvertida = await conectaApi.cadastrarNovaAssistencia();
            loadBlock();
            setTimeout(redirectSucess, 2000) 

            return urlConvertida;

        } catch (err) {
            loadBlock();
            setTimeout(redirectError, 2000) 
        }
    })();
})

function loadBlock(){
    let loader = document.querySelector('.waterfall');
    loader.style.display = 'block'
}

function loadNone(){
    let loader = document.querySelector('.waterfall');
    loader.style.display = 'none'
}
loadNone()

function redirectSucess (){
    window.location.href = "../pages/sucessPost.html";
}

function redirectError (){
    window.location.href = "../pages/erroPost.html";
}
