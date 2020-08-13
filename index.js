

// contact form validation''''''''''''''''''''''''''''''''''''''''
let namevalid=false;
let numbervalid=false;
let emailvalid=false;

let name = document.getElementById('name');
name.addEventListener('blur', namef);
function namef() {
    
    //validate name
    let regularexpression = /^[a-zA-Z ]{5,20}$/;
    let str = name.value;
    if (regularexpression.test(str)) {

        name.classList.remove('is-invalid');
        namevalid=true;


    }
    else {
        

        name.classList.add('is-invalid');

    }

}

let number = document.getElementById('number');
number.addEventListener('blur', numberf);
function numberf() {

    //validate name

    let regularexpression = /^[0-9]{10}$/;
    let str = number.value;

    if (regularexpression.test(str)) {
        number.classList.remove('is-invalid');
        numbervalid=true;
    }


    else {

        number.classList.add('is-invalid');
    }

}

let email = document.getElementById('email');
email.addEventListener('blur', emailf);
function emailf() {

    //validate name
    let regularexpression = /^([0-9a-zA-Z_./-]+)@([0-9a-zA-Z_./-]+)\.([a-zA-Z]){1,7}$/;
    let str = email.value;
    if (regularexpression.test(str)) {
        
        email.classList.remove('is-invalid');
        emailvalid=true;
    }


    else {

        email.classList.add('is-invalid');


    }
}

// validate on submit button
 let contactformbutton = document.getElementById('contactformbutton');
 let success = document.getElementById('success');
 let fail = document.getElementById('fail');

 contactformbutton.addEventListener('click',button)
 function button()
 {
     if((namevalid)&&(numbervalid)&&(emailvalid))
     {
         success.classList.add('show');
         fail.classList.remove('show');
     }
     else
     {
        fail.classList.add('show');
        success.classList.remove('show');
     }
 }