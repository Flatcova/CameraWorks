$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.datepicker').datepicker({
    autoClose:true,
    setDefaultDate: true,
    defaultDate: new Date()
  });

  M.textareaAutoResize($('#textarea1'));

  // $('.print-button').on('click', function() {
  //   window.print();
  //   return false; // why false?
  // });

  window.onafterprint = function(){
      window.location.reload(true);
 }
});
