$('body').on('click', function(e){
  e.preventDefault();
  $('#projectPicker').hide();
});


$('#project').on('click', function(e){
  e.preventDefault();
  $('#projectPicker').fadeIn();
});