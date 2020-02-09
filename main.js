let loginInput = document.querySelector('.login');
let passwordInput = document.querySelector('.password');

passwordInput.addEventListener('focusout', passwordValidation);
loginInput.addEventListener('focusout', loginValidation);

function passwordValidation() {
    let regexp = /[\w-]{6,}/g;
    let passwordValue = passwordInput.value;

    if (passwordValue.match(regexp) == passwordValue) {
        passwordInput.classList.add('green');
        passwordInput.classList.remove('red');
    } else {
        passwordInput.classList.add('red');
        passwordInput.classList.remove('green');
    }
}

function loginValidation() {
    let regexp = /[^\d]{1}[\w]*@[\w]+\.[\w]+/;
    let loginValue = loginInput.value;

    if (loginValue.match(regexp) == loginValue) {
        loginInput.classList.add('green');
        loginInput.classList.remove('red');
    } else {
        loginInput.classList.add('red');
        loginInput.classList.remove('green');
    }
}