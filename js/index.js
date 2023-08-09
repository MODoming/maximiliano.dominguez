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
            method: "POST",
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
        var scriptURL = 'https://script.google.com/macros/s/AKfycby-It0AyVUO6J8xlT0lmN9W9jxvWZY5mE2P4UWPYBDrUzVg_9qPou6lkmcx98GTdPz9pw/exec';
        fetch(scriptURL, {
            method: 'POST',
            body: formData,
        })
        .then(response => console.log('Formulario enviado a Google Apps Script:', response))
        .catch(error => console.error('Error al enviar el formulario a Google Apps Script:', error));
    });
});

