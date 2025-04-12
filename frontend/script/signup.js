const baseUrl='https://imperial-nerti-prabhakar-06383824.koyeb.app/api/v1/';

const form = document.getElementById('signup-form');
const agreement=document.getElementById('terms');
const submitButton=document.querySelector('button[type="submit"]');
submitButton.disabled=true;
console.log(form);

agreement.addEventListener('change', () => {
    submitButton.disabled = !agreement.checked;
});

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const formData=new FormData(form);
    formData.name=formData.get('fullname');
    formData.email=formData.get('email');
    formData.password=formData.get('password');
    formData.phone=formData.get('phone');
    console.log(formData);
    console.log(typeof formData);

    if(formData.password!==formData.get('confirm-password')){
        alert('Passwords do not match');
        return;
    }

    signup(formData);
});

async function signup(formData){
    submitButton.innerText='Signing Up...';
    console.log('Signing up...');
    try{
        const response=await fetch(`${baseUrl}user`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        });
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data=await response.json();
        console.log(data);
        if(data.failure){
            throw new Error(data.error.errorMessage);
        }
        alert('Signup successful');
        window.location.href='login.html';
    }catch(error){
        console.error('Error signing up:', error);
        const errorMessage=document.createElement('p');
        errorMessage.innerText=error;
        form.appendChild(errorMessage);
    }
}
    