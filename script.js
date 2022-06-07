let password = document.querySelector('input[name=password]');
let password2 = document.querySelector('input[name=confirm');
let messageDiv = document.querySelector('.confirm');
const message = document.createElement('p');

messageDiv.appendChild(message);

function doNothing(){
    message.textContent = '';
    message.classList.remove();
}

function borderConfirm(){
    password.style.border = '2px solid green';
    password2.style.border = '2px solid green';
    message.classList.toggle('approved');
    message.textContent = 'All set!';
};

function borderDeny(){
    password.style.border = '2px solid red';
    password2.style.border = '2px solid red';
    message.classList.toggle('denied');
    message.textContent = 'Passwords do not match';
};

function onInput(){
    if (password2.value === password.value){
        borderConfirm();
    } else {
        borderDeny();
    };
};