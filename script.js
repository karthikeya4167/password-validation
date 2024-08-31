const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const errorSpan = document.getElementById('error');

{
form.addEventListener('submit',function(event) {
    event.preventDefault();
    const password = passwordInput.value;
    if(password.length < 8) {
        errorSpan.textContent = 'Password must be at least 8 characters long.';
        return;
    }
    if (!/[A-Z]/.test(password)) {
        errorSpan.textContent = 'Password must contain at least one uppercase letter.';
        return;
    }
    if (!/[a-z]/.test(password)) {
        errorSpan.textContent = 'Password must contain at least one lowercase letter.';
        return;
    }
    if (!/\d/.test(password)) {
        errorSpan.textContent = 'Password must contain at least one digit.';
        return;
    }
    errorSpan.textContent = '';
    form.onsubmit();
})
}