(function($) {
	emailjs.init("2koN7107hx_o39nRM");
})(jQuery);


$( "#formContact" ).submit(function(e) {
	
	e.preventDefault();

	const name = $("#name");
	const email = $("#email");
	const phone = $("#phone");
	const message = $("#message");
	
	const data = {
		name: name.val(),
		email: email.val(),
		phone: phone.val(),
		message: message.val(),
	}

	sendEmail(data);

	$("#formContact").trigger("reset");

	SuccessMessage();
});

function sendEmail(data){
	emailjs.send("service_glovp9c","template_cg9v6hh", data);
}

function SuccessMessage(){
	Swal.fire({
		icon: 'success',
		title: 'Enviado',
		text: 'Correo enviado exitosamente.'
	  })
}