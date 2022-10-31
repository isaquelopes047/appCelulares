async function BateriaViciada() {
    return await fetch(`https://apichamados.herokuapp.com/assistencias/listarProblema?problemaIdentificado=Bateria viciada`, {
        Method: 'GET',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        Cache: 'default'
    });
}

async function Telaquebrada() {
    return await fetch(`https://apichamados.herokuapp.com/assistencias/listarProblema?problemaIdentificado=Tela quebrada`, {
        Method: 'GET',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        Cache: 'default'
    });
}

async function getBateriaEstufada() {
    return await fetch(`https://apichamados.herokuapp.com/assistencias/listarProblema?problemaIdentificado=Bateria estufada`, {
        Method: 'GET',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        Cache: 'default'
    });
}

async function TrocaDeChip() {
    return await fetch(`https://apichamados.herokuapp.com/assistencias/listarProblema?problemaIdentificado=Troca de Chip`, {
        Method: 'GET',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        Cache: 'default'
    });
}

async function Naoliga() {
    return await fetch(`https://apichamados.herokuapp.com/assistencias/listarProblema?problemaIdentificado=Não liga`, {
        Method: 'GET',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        Cache: 'default'
    });
}

export const conexoes = { 
    getBateriaEstufada,
    Telaquebrada,
    BateriaViciada,
    TrocaDeChip,
    Naoliga
}