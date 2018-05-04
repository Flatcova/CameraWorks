$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.datepicker').datepicker();
  
  M.textareaAutoResize($('#textarea1'));

  $('.print-button').on('click', function() {
    window.print();
    return false; // why false?
  });
});
