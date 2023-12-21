jQuery('document').ready(function($){
    var menuBtn = $('.navegar'),
        menu = $('.menu ul'),
        menuDeplegado = $('.menu');

    menuBtn.click(function(){
        if (menu.hasClass('show')){
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        };        
    });
    menuDeplegado.click(function(){
        if (menu.hasClass('show')){
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        };
    });

    var formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        var formData = new FormData(formulario);

        fetch(formulario.action, {
            method: "post",
            body: formData
        })
        .then(function (response) {
            return response.text();
        })
        .then(function (result) {
            console.log(result); // Mostrar resultado en la consola
            if (result.includes("enviado correctamente")) {
                // Restablecer los valores de los campos del formulario
                formulario.reset();
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
        });

        // Enviar los datos del formulario a Google Apps Script
        
        var scriptURL = 'https://script.google.com/macros/s/AKfycbz2WzmxbZzvSwxo-x-iYyORa_O5vOWzBEfV7fIbpl55D0xwBU9aNSN9EcUw5E1sdvOr/exec';
        fetch(scriptURL, {
            method: 'POST',
            body: formData,
        })
        .then(response => console.log('Formulario enviado a Google Apps Script:', response))
        .catch(error => console.error('Error al enviar el formulario a Google Apps Script:', error));
    });
});
