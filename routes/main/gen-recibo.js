var express = require('express');
var router = express.Router();

var Recibos = require('../../models/recibos');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('main/forms/recibo');
});

module.exports = router;

router.post('/', (req, res) => {
    // var newRecibo = new Recibos(req.body);

    var newRecibo = new Recibos();

			// set the user's local credentials
			newRecibo.cliente.nombreCliente = req.body.nombreCliente;
			newRecibo.cliente.correoCliente    = req.body.correoCliente;
			newRecibo.cliente.telefonoCliente = req.body.telefonoCliente;

      newRecibo.recibo.folio = req.body.folio;
			newRecibo.recibo.fecha    = req.body.fecha;
			newRecibo.recibo.totalPagar = req.body.totalPagar;

    return newRecibo.save()
        .then((recibo) => {
		      return res.json({recibo})
        })
        .catch((err) => {
            if(err.code == '11000'){
		    	      return res.redirect('/admin/servicios/categorias');
            }
            return res.redirect('/admin/servicios/categorias');
        })
});
