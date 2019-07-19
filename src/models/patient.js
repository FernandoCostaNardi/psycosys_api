const db = require("../config/dbConfig");

module.exports = class Product {
  constructor(id, nome, telefone, status, valor) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.status = status;
    this.valor = valor;
  }
};

module.exports.fetchAll = () => {
  return db.execute("SELECT * FROM Patients");
};
