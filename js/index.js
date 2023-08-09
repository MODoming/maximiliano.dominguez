document.addEventListener("DOMContentLoaded", function () {
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
    });
});
