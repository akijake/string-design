$('#btn-send').addClass('disabled');
$('form').smkValidate();

$('input , textarea').change(function(){
  if( $('form').smkValidate() ){
    $('#btn-send').attr('type','submit');
    $('#btn-send').removeClass('disabled');
    $('#btn-send').click(function(){
      window.location.href = "thanks.html";
    });
  }else {
    $('#btn-send').attr('type','');
    $('#btn-send').addClass('disabled');
  }
});
