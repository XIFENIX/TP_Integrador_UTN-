// Captura el formulario
const form = document.querySelector("#contact-form");

// Captura los campos del formulario
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const messageField = document.querySelector("#message");

// Agrega un evento para el envío del formulario
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío automático del formulario

    // Captura los valores de los campos del formulario
    const nameValue = nameField.value;
    const emailValue = emailField.value;
    const messageValue = messageField.value;
    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);

    // Aquí iría el código para enviar el formulario a tu dirección de correo electrónico o a una base de datos, por ejemplo.

    // Limpia los campos del formulario después del envío
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
});
