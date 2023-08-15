document.getElementById('btn-login').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email == 'mostak@email.com' && password == 'password') {
        location.href = 'bank.html';
    }
    else {
        alert('Enter valid email or password');
    }

    passwordField.value = '';
    emailField.value = '';
})