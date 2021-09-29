//Clock

setInterval(displayClock, 500)


function displayClock() {
    var time = new Date();
    var hrs = time.getHours();
    var mns = time.getMinutes();
    var sec = time.getSeconds();



 if (hrs < 12) {
     hrs = hrs + 0;
 } 

 if (hrs == 0) {
     hrs = 12;
 }

 if ( hrs < 10) {
     hrs = '0' + hrs;
 }

 if ( mns < 10 ) {
     mns = '0' + mns;
 }


 if( sec < 10 ) {
     sec = '0' + sec;
 }

 document.getElementById('clock').innerHTML = hrs + ':' + mns + ':' + sec;

}

//Form validator 

const togle1 = document.getElementById('toggle');
const modal = document.getElementById('modal');
const closebtn = document.getElementById('btn-x');

togle1.addEventListener('click', ()=> {
    modal.classList.add('show-modal')
})


closebtn.addEventListener('click', ()=> {
    modal.classList.remove('show-modal')
})

window.addEventListener('click', (e)=> {
    e.target === modal ? modal.classList.remove('show-modal') : false
}
)




const form = document.getElementById('form');
const name1 = document.getElementById('name');
const surname1 = document.getElementById('surname');
const email1 = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// 1. Check required fields in form validator 

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
     
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        }

        else {
            showSuccess(input)
        }


    })
}

//1. Check required fields in form validator (Adding uppercase) 

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//1. Check required fields in form validator (Adding showError and showSuccess)


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


//2. Check length of name and password

function checkLength(input, min, max) {
    if(input.value.length < 5) {
        showError(input, `${getFieldName(input)} must have ${min} characters`)
    }
    else if(input.value.length > 15) {
        showError(input, `${getFieldName(input)} must have ${max} characters`)
    }

    else {
        showSuccess(input)
    }
}


//3. Check passwords match


function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match!')
    }
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

checkRequired([name1, surname1, email1, password, password2]);
checkLength(name1, 5, 15);
checkLength(password, 5, 15);
checkPasswordsMatch(password, password2)
})



//// Media query, opening nav with burger


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');


    burger.addEventListener('click', ()=> {
  nav.classList.toggle('nav-active');
    })
}


navSlide();



