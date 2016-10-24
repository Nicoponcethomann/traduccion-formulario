function traduccion(){
	var signIn = document.getElementById("form-signin-heading");
	var newSignIn = "Por favor inicia sesión";
	signIn.innerHTML = newSignIn;

	var inputEmail = document.getElementById("inputEmail");
	inputEmail.placeholder= "Correo Electrónico";

	var inputPassword = document.getElementById("inputPassword");
	inputPassword.placeholder = "Contraseña";

	var recordarDatos = document.getElementsByTagName("span")[0];
	recordarDatos.innerHTML = "Recordad datos";

	var boton = document.getElementsByClassName("btn")[0];
	boton.innerHTML= "Iniciar Sesión";

}

