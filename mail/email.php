<?php

header('Content-Type: application/json');

/* SET VARIAVEIS */	
$name          = $_POST['Nome'];
$email_address = $_POST['Email'];
$message       = $_POST['mensagem'];

/* VALIDAÇÃO */
if ( !empty($_POST['Nome'])  || 
     !empty($_POST['Email']) || 
	 !empty($_POST['mensagem']) ) {
		 
	if ( !filter_var($_POST['Email'],FILTER_VALIDATE_EMAIL) ) {
		echo json_encode(array( 'result' => false, 'errors' => 'E-mail inválido'));
	}
	else{		
			
		/* PARÂMETROS DO EMAIL */
		$to            = ''; 
		$email_subject = "Site: $name";
		$email_body    = "Nome: $name\nEmail: $email_address\n\nMensagem:\n$message";
		$headers       = "From: $email_address"; 
		//$headers      .= "\nReply-To: $email_address";	

		/* ENVIAR EMAIL */
		$enviaremail = mail($to, $email_subject, $email_body, $headers);

		if ( !$enviaremail ){ 
			echo json_encode(array( 'result' => false, 'errors' => 'Erro ao enviar e-mail'));
		}
		else{	
			echo json_encode(array( 'result' => true));
		}								

	}

} else{
	echo json_encode(array( 'result' => false, 'errors' => "Dados inválidos!"));
}	

?>				