const password = document.getElementById('password')
const newPassword = document.getElementById('newPassword');

password.addEventListener('change', checkPasswords);
newPassword.addEventListener('change', checkPasswords);

function checkPasswords(){
    let btn = document.querySelector('button');
    if(password.value !== newPassword.value){
        btn.disabled = true;
        if(!password.value || newPassword.value){
            window.alert("Passwords don't match.");
        }
        password.style.border = '2px solid rgb(255, 99, 71)';
        newPassword.style.border = '2px solid rgb(255, 99, 71)';
    }
    else{
        btn.disabled = false;
        password.style.border = '2px solid rgb(144, 238, 144)';
        newPassword.style.border = '2px solid rgb(144, 238, 144)';
    }
}