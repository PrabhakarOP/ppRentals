const baseUrl='https://imperial-nerti-prabhakar-06383824.koyeb.app/api/v1/';

const form = document.getElementById('login-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    formData.email = formData.get('email');
    formData.password = formData.get('password');
    console.log(formData);
    login(formData);
});


async function login(formData) {
    try {
        const response = await fetch(`${baseUrl}user/login?email=${formData.email}&password=${formData.password}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        if (data.failure) {
            throw new Error(data.error.errorMessage);
        }    
        alert('Login successful');
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('useremail', formData.email);
        window.location.href = '/index.html';
    } catch (error) {    
        console.error('Error logging in:', error);
        const errorMessage = document.createElement('p');
        errorMessage.innerText = error;
        form.appendChild(errorMessage);
    }
}