import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('form')

const feedback = {email:'', message:''}


form.addEventListener('input', 
throttle((e) => {
        const formElement = e.target
        if(formElement.name === 'email'){
            feedback.email = formElement.value;
        }else{
            feedback.message = formElement.value
        }
        localStorage.setItem('feedback-form-state', JSON.stringify(feedback))
    }, 
500))


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('algo???')
    localStorage.clear();
})

document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('feedback-form-state')){
        const dataUser = JSON.parse(localStorage.getItem('feedback-form-state'));
        emailInput.value = dataUser.email
        messageInput.value = dataUser.message
    }
})
