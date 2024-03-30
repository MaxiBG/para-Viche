let switchState = 'off'; // Estado inicial del interruptor

document.getElementById('switch').addEventListener('click', function() {
    var img = document.getElementById('switch-img');
    if (switchState === 'off') {
        img.src = 'interruptor-on.png';
        switchState = 'on'; // Cambiar el estado a 'on'
    } else {
        img.src = 'interruptor-off.png';
        switchState = 'off'; // Cambiar el estado a 'off'
    }

    // Llamada a la función toggleSwitch con el nuevo estado
    toggleSwitch(switchState);
});