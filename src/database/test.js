const Database = require("./db"); //esse db vem lá do db.js
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  //quando uma função é passada como argumento de outra função, ao invés de fazer, por exemplo, then(function(db){conteúdo_função}), dá para usar arrow function, aí fica: then((db) => {conteúdo_função}). Quando a função passada por parâmetro só possui um argumento, dá pra fazer mais compacto ainda: then(db => {conteúdo_função}) - conforme foi feito logo acima

  // Para evitar um monte de then() encadeados (deixa o código muito sujo), dá para usar a estratégia async - await (coloca async antes do nome da função passada por parâmetro e await dentro do conteúdo da função, assim o Javascript já entende que precisa esperar terminar o que tá no await para seguir adiante)

  //inserir dados na tabela
  /*await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6565874",
    name: "Lar de amor",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "14987654321",
    images: ["https://source.unsplash.com/random?id=3", "https://source.unsplash.com/random?id=4"].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 19h até 9h",
    open_on_weekends: "0"
  })*/

  //consultar dados da tabela (db.all pega todos os registros da query passada por parâmetro)
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente 1 orfanato, pelo id
  //const orphanage = await db.all('SELECT * FROM orphanages where id = "2"');
  //console.log(orphanage);

  //deletar dado da tabela
  //await db.run('DELETE FROM orphanages WHERE id ="1"')
});
