let loginInput = document.querySelector('.login');
let passwordInput = document.querySelector('.password');

passwordInput.addEventListener('focusout', passwordValidation);


function passwordValidation() {
    let regexp = /[0-9A-Z_]{6,}/gi;
    let someValue = passwordInput.value;
    console.log(someValue);
    if (someValue.match(regexp) != null) {
        console.log('im here');
        passwordInput.classList.add('green');
    } else {
        passwordInput.classList.add('red');
    }
}