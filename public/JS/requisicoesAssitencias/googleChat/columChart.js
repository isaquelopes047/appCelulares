google.charts.load('current', {packages: ['corechart'], 'language': 'pt'});

function desenharGrafico(){

    let tabela = new google.visualization.DataTable();

    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'valores');
    tabela.addColumn({type: 'number', role: 'annotation'}); //criamos uma coluna nova para apresentar o valor dentro da barra

    tabela.addRows([
        ['Educação', 2000, 2000],
        ['Transporte', 500, 500],
        ['Lazer', 230, 230,],
        ['Saúde', 50, 50],
        ['Cartão de credito', 900, 900],
        ['Alimentação', 260, 260],
    ]);

    tabela.sort([{ column: 1, desc: true }]); // estou ordenando as 

    let opcoes = {
        title: 'Entradas e saídas da conta',
        width: 800,
        height: 400,
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
            format: 'currency',
            textPosition: 'out'
        },
        annotations: {
            alwaysOutside: true //deixamos todos os numeros de anotação fora da barra
        }
    }

    let grafico = new google.visualization.BarChart(document.getElementById('graficoColuna'));
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharGrafico);