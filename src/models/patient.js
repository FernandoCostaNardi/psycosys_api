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

module.exports.findOne = (req, res) => {
  return db.execute(
    "SELECT * FROM Patients WHERE nome like'%" + req.params.nome + "%'"
  );
};

module.exports.delete = (req, res) => {
  return db.execute("DELETE FROM Patients WHERE id=" + req.params.id);
};
