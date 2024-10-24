const from = document.getElementById('form');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const error_mensage = document.getElementById('error-mensage');

from.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(email_input.value);
    error_mensage.innerText = password_input.value;
});
