import { conexoes } from './conexoes.js'

async function filtrarDadoPorData(){
    google.charts.load('current', {packages: ['corechart'], 'language': 'pt'});

    const conexao = await conexoes.Telaquebrada();
    const conexao2 = await conexoes.BateriaViciada();
    const conexao3 = await conexoes.getBateriaEstufada();
    const conexao4 = await conexoes.TrocaDeChip();
    const conexao5 = await conexoes.Naoliga();

        try {
            let { dados, dados2, dados3, dados4, dados5 } = await functionConexoes();
            let tabela = new google.visualization.DataTable();
            
            tabela.addColumn('string', 'Categorias');
            tabela.addColumn('number', 'valores');
            tabela.addColumn({type: 'number', role: 'annotation'}); //criamos uma coluna nova para apresentar o valor dentro da barra
            
            tabela.addRows([
                ['Tela quebrada', dados, dados],
                ['Bateria viciada', dados2, dados2,],
                ['Não liga', dados5, dados5,],
                ['Bateria estufada', dados3, dados3,],
                ['Troca de chip', dados4, dados4,],
            ]);
            
            tabela.sort([{ column: 1, desc: true }]); // estou ordenando as 
            let opcoes = {
                title: 'Resumo de assistencias prestadas',
                width: 800,
                height: 600,
                vAxis: {
                        gridlines: {
                        count: 0,
                        color: 'transparent',
                    },
                },
                legend: 'none',
                hAxis: {
                    gridlines: {
                        color: 'grey',
                        },
                    format: '',
                    textPosition: 'out'
                },
                annotations: {
                    alwaysOutside: true //deixamos todos os numeros de anotação fora da barra
            }
        }
            
            let grafico = new google.visualization.BarChart(document.getElementById('graficoColuna'));
            grafico.draw(tabela, opcoes);
            google.charts.setOnLoadCallback(desenharGrafico);

        } catch (err) {}

    async function functionConexoes() {
        const conexaoConvertida = await conexao.json();
        let dados = conexaoConvertida.length;

        const conexaoConvertida2 = await conexao2.json();
        let dados2 = conexaoConvertida2.length;

        const conexaoConvertida3 = await conexao3.json();
        let dados3 = conexaoConvertida3.length;

        const conexaoConvertida4 = await conexao4.json();
        let dados4 = conexaoConvertida4.length;

        const conexaoConvertida5 = await conexao5.json();
        let dados5 = conexaoConvertida5.length;

        return { dados, dados2, dados3, dados4, dados5 };
    }
}
filtrarDadoPorData();
