const form = document.querySelector("#contact-form");

const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const messageField = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const nameValue = nameField.value;
    const emailValue = emailField.value;
    const messageValue = messageField.value;
    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);

    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
});
