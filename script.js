document.getElementById('formulario-registro').addEventListener('submit', function (event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const imagen = document.getElementById('imagen').files[0];
    const acceptedImageTypes = ['image/jpeg', 'image/png'];

    if (!nombre || !email) {
        alert('Por favor completa todos los campos obligatorios.');
        event.preventDefault();
    }

    if (imagen && !acceptedImageTypes.includes(imagen.type)) {
        alert('Por favor sube una imagen válida (JPG o PNG).');
        event.preventDefault();
    }
});

function mostrarImagen(event) {
    const imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
    imagen.style.display = 'block';
}
