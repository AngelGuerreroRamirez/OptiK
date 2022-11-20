const login = document.getElementById('login');
login.addEventListener('click', async function () {
	console.log('login', contrasenia);
	const datos = {
		datosUsuario: JSON.stringify({
			nombre: document.getElementById('nombre').value,
			contrasenia: document.getElementById('contrasenia').value
		})
	};

	console.log(datos);
	const response = await fetch(
		'http://localhost:8080/Optik/api/login/ingresar',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams(datos)
		}
	);
	const data = await response.json();
	if (data.result == 0) {
		mostrarAlerta('error', 'Usuario o contraseña incorrectos');
		return;
	}
	if (data.result == 1) {
		mostrarAlerta('success', 'Bienvenido');
		window.location.replace('modulos/');
		return;
	}
});

function mostrarAlerta(icon, mensaje) {
	const Toast = Swal.mixin({
		toast: true,
		position: 'center',
		showConfirmButton: false,
		timer: 500,
		timerProgressBar: true
	});

	Toast.fire({
		icon: icon,
		title: mensaje
	});
}
