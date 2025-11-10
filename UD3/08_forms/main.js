window.onload = function() {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue

    // El botón enviar sólo debe estar habilitado si se han marcado los 2 checks
    const submitButton = document.getElementById('submit')
    submitButton.disabled = true

    document.getElementById('condiciones').onchange = checkSubmit
    document.getElementById('privacidad').onchange = checkSubmit

    checkSubmit();
    checkCombo();
    
    // El combo de opciones sólo estará habilitado si se pulsa “si” en el primer check
    // Nombre y apellidos son obligatorios. Si no se han rellenado al pulsar el botón, informar al usuario
    // El tamaño máximo de la descripción es de 80 carácteres
    // Implementar algún mecanismo para prevenir el doble submit

    function checkSubmit(e) {
        if (document.getElementById('condiciones').checked && document.getElementById('privacidad').checked) {
            submitButton.disabled = false
        } else {
            submitButton.disabled = true
        }
    }
    
    function changeValue(e) {
         console.log('changed' + e.target.value)
    }
    
    function checkCombo(e) {
        const combo = document.getElementById('opciones')
        combo.disabled = true
    }
}

