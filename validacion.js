window.onload = iniciar;

function iniciar() {
	var enviar = document.getElementById('boton');
	enviar.addEventListener('click', validar, false);
}

function validaNombre() {
	var elemento = document.getElementById('nombre');
	var nombreElemento = 'nombre'
	if (!elemento.checkValidity()){
		error (elemento, nombreElemento);
		return false;
	}
	else {return true;}
}

function validaApellido() {
	var elemento = document.getElementById('apellido');
	var nombreElemento = 'apellido'
	if (!elemento.checkValidity()){
		error (elemento, nombreElemento);
		return false;
	}
	else {return true;}
}

function validaEdad() {
	var elemento = document.getElementById('edad');
	var nombreElemento = 'edad'
	if (!elemento.checkValidity()){
		error (elemento, nombreElemento);
		return false;
	}
	else {return true;}
}

function validaEmail() {
	var elemento = document.getElementById('email');
	var nombreElemento = 'email'
	if (!elemento.checkValidity()){
		error (elemento, nombreElemento);
		return false;
	}
	else {return true;}
}
function validaMensaje() {
	var elemento = document.getElementById('mensaje');
	var nombreElemento = 'mensaje';
	if (!elemento.checkValidity()){
		error (elemento, nombreElemento);
		return false;
	}
	else {return true;}
}
function validar(e) {
	if (validaNombre() && validaApellido() && validaEdad() && validaEmail() && validaMensaje()){
		return true;
	}
	else {
		e.preventDefault();
		return false;
	}
}

function error(elemento, nombreElemento){
	var idmensaje = "mensaje_error_" + nombreElemento;
	document.getElementById(idmensaje).innerHTML = elemento.title;
	elemento.className = "error";
	elemento.focus();
}

function borrarError(){
	var formulario = document.getElementsByTagName('form')[0];
	for (var i = 0; i<formulario.elements.length; i++){
		formulario.elements[i].className = "";
	}
}