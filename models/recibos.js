var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recibosSchema = new Schema({
  cliente: {
    nombreCliente: { type:String },
    correoCliente: { type: String },
    telefonoCliente: { type: Number }
  },
  recibo: {
    folio: { type: Number, unique: true},
    fecha: { type: String },
    totalPagar: {type: String},
  }
});

module.exports = mongoose.model('Recibos', recibosSchema);
