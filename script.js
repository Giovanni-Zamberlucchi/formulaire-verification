const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// input error message
function showError(input, message) {
    const formControl = input.parentElement; // div parent of current input
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// input success message
function showSuccess(input) {
    const formControl = input.parentElement; 
    formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Event listeners 
form.addEventListener('submit', function(e) {
    e.preventDefault(); // intercept submit
    
    if(username.value === '') {
        showError(username, 'Votre nom est requis')
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        showError(email, 'Un email est requis')
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Veuillez entrer une adresse e-mail valide')
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'Un mot de passe est requis')
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'La confirmation de votre mot de passe est requise')
    } else {
        showSuccess(password2);
    }
});

