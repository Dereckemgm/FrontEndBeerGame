const mostrarContrasenaCheckbox = document.getElementById('mostrarContrasena');
const contrasenaInput = document.getElementById('contrasena');

mostrarContrasenaCheckbox.addEventListener('change', function() {
    const tipo = this.checked ? 'text' : 'password';
    contrasenaInput.type = tipo;
});
