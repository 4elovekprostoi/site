$(document).ready(function(){
	$("#phone").mask("+38(099)9999999");
	$("#email").inputmask("email");
});
$(".main-menu .tours").click(function(e) {
	e.preventDefault();
	$(".main-menu .tours").removeClass('tour-active');
	$(this).addClass('tour-active');
});

$('#footer-form').on('submit', function(event) {
	if (validateForm()) {
		event.preventDefault();
	}
});




$('.drop-btn').click(function() {
	$('.top-menu').toggleClass('show');
});




$(".main-menu .tours").click(function(e) {
	e.preventDefault();
	$(".main-menu .tours").removeClass('tour-active');
	$(this).addClass('tour-active');
});


function validateForm() {
	var name_check = false;
	var email_check = false;
	var phone_check = false;
	var select_check = false;

	$(".error").removeClass( "error" );
	var el_l= $("#name");
	if ( el_l.val().length < 2 ) {
		name_check = true;
		console.log('name: '+ name_check);
	} 
	$("#name").toggleClass('error', name_check );

	var reg= /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
	var el_e= $("#email");
	if (el_e.val()) {
		if (reg.test( el_e.val() )) {
			email_check = false;
		} else {
			email_check = true;
		}
	} else {
		email_check = true;
	}
	$("#email").toggleClass('error', email_check );

	var el_l    = $("#phone");
	if ( el_l.val().length < 10 ) {
		phone_check = true;
		console.log('phone: '+ phone_check);
	} 
	$("#phone").toggleClass('error', phone_check );

	if ( $("#forms-select").val() == 1 ) {
		select_check = true;
		console.log('select: '+ select_check);
	}
	$("#forms-select").toggleClass('error', select_check );


	return ( name_check || email_check || phone_check || select_check );
}

