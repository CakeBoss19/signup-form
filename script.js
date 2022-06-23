const check_button = document.querySelector('button[type=button]');
let password = document.querySelector('input[name=password]');
let password2 = document.querySelector('input[name=confirm');
let messageDiv = document.querySelector('.confirm');
const message = document.createElement('p');

function comparePassword(){
    if (password2.value === '' && password.value === ''){
        reset();
    } else if (password2.value === password.value){
        borderConfirm();
    } else {
        borderDeny();
    };
}

function borderConfirm(){
    password.style.border =  '1px solid green';
    password2.style.border = '1px solid green';
};

function borderDeny(){
    password.style.border =  '1px solid red';
    password2.style.border = '1px solid red';
};

function reset(){
    password.style.border = '1px solid rgba(134, 134, 134, 0.46)';
    password2.style.border = '1px solid rgba(134, 134, 134, 0.46)';
}

check_button.addEventListener('click', () => {
    comparePassword();
});