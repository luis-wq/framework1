function validar(){

	var usuario = document.forms.formulario.usuario.value;
	var contra = document.forms.formulario.contrasena.value;
	var tipo;

	if(usuario=="administrador" && contra == "12345"){			
		sessionStorage.setItem("tipo", "admin");
		window.location.href = 'index.php';

	}else if(usuario=="comprador" && contra == "12345"){
		sessionStorage.setItem("tipo", "comprador");
		window.location.href = 'index.php';

	}else if(usuario== "" || contra == ""){
		alert("Llene todos los campos");
	}else{
		alert("usuario / contraseña incorrecto");
	}

}