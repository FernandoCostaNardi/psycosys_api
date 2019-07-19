const db = require("./dbConfig");

const sql_criar_tabela_patients =
  "CREATE TABLE IF NOT EXISTS Patients (\n" +
  "id int NOT NULL, \n" +
  "nome VARCHAR(150) NOT NULL, \n" +
  "telefone VARCHAR(13) NOT NULL, \n" +
  "status VARCHAR(45) NOT NULL, \n" +
  "valor DECIMAL(2) NOT NULL, \n" +
  "PRIMARY KEY (`id`), \n" +
  "UNIQUE INDEX id_UNIQUE (id ASC) \n" +
  ");";

db.execute(sql_criar_tabela_patients)
  .then(result => {
    console.log("A tabela de Patients foi criada");
  })
  .catch(err => {
    console.log(err);
  });
