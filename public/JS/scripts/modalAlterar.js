const openModalAlterar = document.querySelector('.openModalAlterar')

openModalAlterar.addEventListener('click', () => {
    const containerModalAlterar = document.querySelector('.containerAlteral')
    containerModalAlterar.style.display = 'block';
})

const closeModalAlterar = document.querySelector('.voltarAlterar')

closeModalAlterar.addEventListener('click', (evt) => {
    evt.preventDefault();
    const containerModalAlterar = document.querySelector('.containerAlteral')
    containerModalAlterar.style.display = 'none';
})