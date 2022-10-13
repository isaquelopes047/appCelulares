

const containerInfo = document.querySelector('.alertContainer')
const valorInput = document.querySelector('#problemaIdentificado');

valorInput.addEventListener('focusout', () => {

    const valorFinal = valorInput.value

    if(valorFinal == 'Tela quebrada'){
        containerInfo.style.display = 'block';
    } else {
        containerInfo.style.display = 'none';
    }
});
