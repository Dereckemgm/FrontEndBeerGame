document.getElementById('mostrarContrasena').addEventListener('change', function() {
    const contrasena = document.getElementById('contrasena');
    const contrasenaConfirmar = document.getElementById('contrasenaConfirmar');
    if (this.checked) {
        contrasena.type = 'text';
        contrasenaConfirmar.type = 'text';
    } else {
        contrasena.type = 'password';
        contrasenaConfirmar.type = 'password';
    }
});

document.getElementById('registroForm').addEventListener('submit', function(event) {
    const contrasena = document.getElementById('contrasena').value;
    const contrasenaConfirmar = document.getElementById('contrasenaConfirmar').value;
    const mensajeError = document.getElementById('mensajeError');

    if (contrasena !== contrasenaConfirmar) {
        event.preventDefault(); 
        mensajeError.style.display = 'block'; 
    } else {
        mensajeError.style.display = 'none';
    }
});
