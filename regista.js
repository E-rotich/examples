const form=document.getElementById("registration-form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");

form.addEventListener("submit",function(e){
    e.preventDefault();
    const isRequiredValid=checkRequired([username,email,password,confirmPassword]);
    let isFormValid = isRequiredValid;

    if(isRequiredValid){
        const isUsernameValid = checkLength(username,3,15);
        const isEmailValid=checkEmail(email);
        const isPasswordValid=checkLength(password,6,25);
        const isPasswordsMatchValid=checkPasswordsMatch(password,confirmPassword);

        isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isPasswordsMatchValid;
    }
   if(isFormValid){
        alert("registration successful");
        form.reset();

        document.querySelectorAll(".form-group").forEach((group) => {
            group.className ="form-group"
        })
    }
})
 function checkPasswordsMatch(input1,input2){
 }

 function checkEmail(email){
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email.value.trim())){
        showSuccess(email);
        return true;
    }
    else {
        showError(email,"Email is not valid");
        return false;
    }
 }
 function checkLength(input,min,max){

 }


function checkRequired(inputArray){
    let isValid=true;
    inputArray.forEach((input) => {
        if(input.value.trim() === ""){
            showError(input,`${formatFieldName(input)} is required`)
            isValid=false
        }
        else{
            showSuccess(input)
        }
    });

    return isValid;
}

function formatFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function showError(input,message){
    const formGroup=input.parentElement;
    formGroup.className="form-group error";
    const small=formGroup.querySelector("small");
    small.innerText=message;
}
function showSuccess(input){
     const formGroup=input.parentElement;
    formGroup.className="form-group success";
}