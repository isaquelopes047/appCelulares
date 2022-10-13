/* DELETE */
const buttonDell = document.querySelector('.dellReg');
buttonDell.addEventListener('click', () => {

    async function dellRegistro() {
        try {
            const response = await fetch(`http://localhost:3000/assistencias/listaDelete?order=${orderParam}`, {
                method: 'DELETE',
                Headers: {
                    Accept: 'application.json',
                    'Content-Type': 'application/json'
                },
            });
            location.href = "./paginaDeDados.html";

            return response;

        } catch (err) {
            console.log(err);
        }
    }
    dellRegistro();
})