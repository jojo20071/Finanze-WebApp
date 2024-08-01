document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Here you would send a request to your server to authenticate the user
        console.log('Login:', email, password);
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        // Here you would send a request to your server to register the user
        console.log('Register:', email, password);
    });
});
