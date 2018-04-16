$(function (){

	/* =======================================================================================
	   	VALIDAÇÃO
	   =====================================================================================*/	

	$.validateEmail = function (email) {

		er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
		if(er.exec(email))
			return true;
		else
			return false;

	};	

  function validar(){

  	var resultado = true;  	
  	$('.form-group .alert').hide().html(''); 

  	$('.form-control').each(function(){

  		/* Valor Vazio */  		
  		if( $(this).val() == "" ) {
  			$('.form-group .alert').show().append('Campos Obrigatórios ! <br/>');
  			resultado = false;	
  			return false;
  		}

  	}); 

  	if ( !$.validateEmail( $('#Email').val() ) ) {
  		$('.form-group .alert').show().append('E-mail inválido !');
  		resultado = false ;
  		return false;
  	}

  	return resultado ;

  }

  /* ======================================================================================================
     ENVIAR EMAIL 
    =======================================================================================================*/

  $("#enviar-email button[type=submit]").click(function (event){  	

    event.preventDefault();    
    var $form = $("#enviar-email");

    /* VALIDAÇÃO DOS CAMPOS */
    if ( !validar() ) {
  		return false;
  	}

  	/* AJAX */
    $.post($form.attr("action"), $form.serialize(), function(response) {

      if (response.result) { 
        $('.form-control').val('');
        swal("Email", "Enviado com sucesso", "success");    
      } else {
        sweetAlert("Atenção", "Não foi possível enviar o e-mail!\n" + response.errors, "error");
      }
      
    }).error(function (x, y, z){
      swal("Atenção!", "Não foi possível enviar seu e-mail\n" + z.message, "error");
    });

  });

});