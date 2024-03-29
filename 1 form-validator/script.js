const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input error message
function showError(input,message){
    const formContol = input.parentElement;
    formContol.className = 'form-control error';
    const small = formContol.querySelector('small');
    small.innerText = message;
}


//Show input success message
function showSuccess(input){
     const formContol = input.parentElement;
     formContol.className = "form-control success";
}

//Check email is valid

function checkEmail(input){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(re.test(input.value.trim())){
           showSuccess(input);
       } else{
           showError(input, 'Email is not valid');

       }
}

// Check required fields
function checkRequired(inputArr){
inputArr.forEach(function(input){
if(input.value.trim()===''){
    showError(input,`${getFieldName(input)} is required`)
} else {
    showSuccess(input)
}
});

}
// Check input lenght

function checkLength(input, min, max) {
    
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`);

    } else if  (input.value > max){

         showError(input, `${getFieldName(input)} must be less than ${max}`);

    } else{
        showSuccess(input);

    }
}

// Check password match

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords dont match');

    }

}

// Get field Name

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners

form.addEventListener('submit', function(e){

    e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  

});
