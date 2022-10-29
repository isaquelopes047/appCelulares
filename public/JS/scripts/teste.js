

function getValor(){
    
    document.getElementById("imageoption").src = "https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg";
}

let pegarValor = document.querySelector('.pegarValor')
pegarValor.addEventListener('click', () => getValor())
