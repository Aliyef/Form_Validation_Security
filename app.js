const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const parol = document.getElementById('parol');
const parol2 = document.getElementById('parol2');

form.addEventListener('submit',function(e){
    e.preventDefault();

    inputValue();
})

const inputValue = () =>{

usernameValue = username.value.trim()
emailValue = email.value.trim()
parolValue = parol.value.trim()
parol2Value = parol2.value.trim()

if(usernameValue === ''){

    errorForm(username,'Oops Error!.Try again')

}
else{
    succesForm(username)
}


if(emailValue === ''){

    errorForm(email,'Oops Error!.Try again')

}

else if(!isEmail(emailValue)){
        errorForm(email,'Oops Error!.Try again')

}

else{
    succesForm(email)
}



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 


//parol

if(parolValue === ''){

    errorForm(parol,'Oops Error!.Try again')

}
else if(parolValue !== parol2Value){
    errorForm(parol,'Oops Error!.Try again')

}
else{
    succesForm(parol)
}


if(parol2Value === ''){

    errorForm(parol2,'Oops Error!.Try again')

}
else if(parolValue !== parol2Value){
    errorForm(parol2,'Oops Error!.Try again')

}
else{
    succesForm(parol2)
}



}


// ERROR FORM
const errorForm = (input,message)=>{
     
    formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'formControl error'
    small.innerText = message;

}
// SUCCES FORM
const succesForm = (input)=>{

    formControl = input.parentElement;
    formControl.className = 'formControl succes'
    

}