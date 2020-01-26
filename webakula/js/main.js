$(document).ready(function(){
	$("#phone").mask("+38(099)9999999");
	$("#email").inputmask("email");
});

$('#footer-form').on('submit', function(event) {
	if (validateForm()) {
		event.preventDefault();
	}
});


function validateForm() {
	var select_check = false;
	if ( $("#forms-select").val() == 1 ) {
		select_check = true;
		console.log('select: '+ select_check);
		$(".form-select").append("<label id='select-error' class='select-error' for='select'>Bыберите страну</label>");
	}else{
		$(".form-select label").remove()
	};
	$("#forms-select").toggleClass('error', select_check );

	return (select_check );
}

$("#footer-form").validate({
	rules: {
		name: {
			required: true,
			minlength: 2
		},
		email: {
			required: true,
			email: true
		},
		phone: {
			required: true,
			minlength: 12
		}
	},
	messages:{
		email:{
			required:"Поле обязательно для заполнения",
			email:"Введите верный email"
		},
		name:{
			required:"Поле обязательно для заполнения",
			minlength:"Не менее {0}-х символов"
		},
		phone:{
			required:"Поле обязательно для заполнения"
		}
	}
});