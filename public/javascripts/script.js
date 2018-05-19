$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.datepicker').datepicker({
    autoClose:true,
    setDefaultDate: true,
    defaultDate: new Date()
  });

  M.textareaAutoResize($('#textarea1'));

  $('.print-button').on('click', function() {
    window.print();
    return false; // why false?
  });
  //let span = document.querySelector("table.meta>tr>td>span")

  //creas variable span y vas al documento de la pagina y buscas el table clase meta con todos los tr y el primer hijo
  //y luego busca el td con el hijo span
  let span = document.querySelector("table.meta tr:first-child td>span")
  //creas variable folio
    var folio;
    //
  if (localStorage.getItem("Mantenimiento"))
  {
      folio = localStorage.Mantenimiento
      folio ++
      span.innerHTML = folio
  }
  else
  {
      localStorage.setItem("Mantenimiento", "1")
      folio = 1
      span.innerHTML = folio
  }

  //var button = document.getElementById("folio")
  var button = document.querySelector("#Imprimir")

  button.addEventListener("click", function(){
    localStorage.setItem("Mantenimiento", folio)
  });

  window.onafterprint = function(){
      window.location.reload(true);
 }
});
