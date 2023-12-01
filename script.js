function validatePassword() {
    const userPassword = document.getElementById('user_password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    if (userPassword === '') {
        document.querySelector('.error-message').innerHTML = "";
        document.getElementById('user_password').classList.remove('valid');
        document.getElementById('user_password').classList.add('invalid');
    }
    if (confirmPassword !== userPassword) {
        document.querySelector('.error-message').style.color = 'red';
        document.querySelector('.error-message').style.fontSize = '12px';
        document.querySelector('.error-message').innerHTML = "*Password do not match";
        document.getElementById('user_password').classList.remove('valid');
        document.getElementById('confirm_password').classList.remove('valid');
        document.getElementById('user_password').classList.add('invalid');
        document.getElementById('confirm_password').classList.add('invalid');
    } else if (userPassword !== ''){
        document.querySelector('.error-message').innerHTML = "";
        document.getElementById('user_password').classList.remove('invalid');
        document.getElementById('confirm_password').classList.remove('invalid');
        document.getElementById('user_password').classList.add('valid');
        document.getElementById('confirm_password').classList.add('valid');
    }
}