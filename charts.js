document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Simuliere eine erfolgreiche Anmeldung
        console.log('Login:', email, password);
        alert('Login successful!'); // Neu hinzugefügt
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        // Simuliere eine erfolgreiche Registrierung
        console.log('Register:', email, password);
        alert('Registration successful!'); // Neu hinzugefügt
    });
});