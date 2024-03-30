function toggleSwitch() {
    var img = document.getElementById('switch-img');
    var status = img.src.includes('interruptor-off') ? 'off' : 'on'; // Cambiado a 'off' y 'on'
    
    fetch('http://localhost:5000/switch', {
        method: 'POST',
        body: JSON.stringify({ status: status }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Respuesta recibida del servidor:', response);
        // Manejar la respuesta del servidor si es necesario
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
}
