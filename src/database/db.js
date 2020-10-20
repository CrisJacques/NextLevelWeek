const Database = require('sqlite-async');

function execute(db){//o uso de crase para strings é legal porque dá para colocar variáveis dentro e dá para quebrar as linhas para ficar melhor de ler. Mas para strings, dá para usar aspas simples ou aspas duplas também
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)//o Database.open pode demorar, por isso esse tipo de objeto (promise) tem um método then() que só será executado quando terminar a tarefa de abrir o banco de dados - assim evita que o Javascript siga executando os comandos sem o banco de dados estar aberto. Neste caso, será executada a função "execute" (definida abaixo) assim que terminar o carregamento do banco de dados.

// Dá para ter vários then() um após o outro, definindo uma sequência de passos que deve ser executada (sempre uma após a outra terminar)

// O module.exports permite que seja exportado para fora o resultado do que é executado (que no caso é o db)