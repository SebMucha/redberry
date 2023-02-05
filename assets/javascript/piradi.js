document.querySelector('#redirect_button2')
.addEventListener('click', () => {
    window.location.href = 'index.html'
});

// document.querySelector('#redirect_button3')
// .addEventListener('click', () => {
//     window.location.href = 'gamocdileba.html'
// });

const form = document.querySelector("#myform_left");
const fnameInput = document.querySelector(".fname");
const form2 = document.querySelector("#myform_right");
const lnameInput = document.querySelector(".lname");
const emailInput = document.querySelector(".email_input");
const numberInput = document.querySelector(".number_input");

const redirectButton = document.querySelector("#redirect_button3");
redirectButton.addEventListener("click", validateForm);


function validateForm(event) {
    event.preventDefault();
    const invalid1 = document.querySelector(".invalid1");
    const valid1 = document.querySelector(".valid1");
    const invalid2 = document.querySelector('.invalid2');
    const valid2 = document.querySelector('.valid2');
    const invalid3 = document.querySelector('.invalid3');
    const valid3 = document.querySelector('.valid3');
    const invalid4 = document.querySelector('.invalid4');
    const valid4 = document.querySelector('.valid4');

    if (fnameInput.value.length < 2 || !fnameInput.value.match(/^[ა-ჰ]+$/)) {
    invalid1.style.display = 'block';
    valid1.style.display = 'none';
    fnameInput.style.borderColor = "red";
    return;
    } else {
    valid1.style.display = 'block';
    invalid1.style.display = 'none';
    fnameInput.style.borderColor = "green";
    }
    
    if (lnameInput.value.length < 2 || !lnameInput.value.match(/^[ა-ჰ]+$/)) {
    invalid2.style.display = 'block';
    valid2.style.display = 'none';
    lnameInput.style.borderColor = "red";
    return;
    } else {
    valid2.style.display = 'block';
    invalid2.style.display = 'none';
    lnameInput.style.borderColor = "green";
    }
    
    if (!emailInput.value.endsWith("@redberry.ge")) {
    invalid3.style.display = 'block';
    valid3.style.display = 'none';
    emailInput.style.borderColor = "red";
    return;
    } else {
    valid3.style.display = 'block';
    invalid3.style.display = 'none';
    emailInput.style.borderColor = "green";
    }
    
    if (!numberInput.value.match(/^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/)){
    invalid4.style.display = 'block';
    valid4.style.display = 'none';
    numberInput.style.borderColor = "red";
    return;
    } else {
    valid4.style.display = 'block';
    invalid4.style.display = 'none';
    numberInput.style.borderColor = "green";
    }
    }
    
    