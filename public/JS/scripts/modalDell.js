

const openModal = document.querySelector('.openModelDelete')

openModal.addEventListener('click', () => {
    const containerModal = document.querySelector('.modelDelete')
    containerModal.style.display = 'block';
})

const closeModal = document.querySelector('.CloseModal')

closeModal.addEventListener('click', () => {
    const containerModal = document.querySelector('.modelDelete')
    containerModal.style.display = 'none';
})