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

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') { //trim remove blanckspace
            showError(input, `Votre ${input.placeholder} est requis`); // E6 template string > ${} insert value placeholder before string
        } else {
            showSuccess(input);
        }
    });
}

//Event listeners 
form.addEventListener('submit', function(e) {
    e.preventDefault(); // intercept submit
    
    checkRequired([username, email, password, password2]);
});