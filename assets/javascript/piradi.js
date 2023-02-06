document.querySelector('#redirect_button2')
.addEventListener('click', () => {
localStorage.removeItem("fname");
localStorage.removeItem("lname");
localStorage.removeItem("email");
localStorage.removeItem("number");
localStorage.removeItem("aboutMe");
localStorage.removeItem("pic");
window.location.href = 'index.html'
});


let form = document.querySelector("#myform_left");
let fnameInput = document.querySelector(".fname");
let form2 = document.querySelector("#myform_right");
let lnameInput = document.querySelector(".lname");
let emailInput = document.querySelector(".email_input");
let numberInput = document.querySelector(".number_input");
let aboutMeInput= document.querySelector(".about_me_input")
let picUpload = document.querySelector("#pic_upload")
let invalid1 = document.querySelector(".invalid1");
let valid1 = document.querySelector(".valid1");
let invalid2 = document.querySelector('.invalid2');
let valid2 = document.querySelector('.valid2');
let invalid3 = document.querySelector('.invalid3');
let valid3 = document.querySelector('.valid3');
let invalid4 = document.querySelector('.invalid4');
let valid4 = document.querySelector('.valid4');
let redirectButton = document.querySelector("#redirect_button3");

fnameInput.addEventListener("input", validateForm1);
lnameInput.addEventListener("input", validateForm2);
emailInput.addEventListener("input", validateForm3);
numberInput.addEventListener("input", validateForm4);


// form validator
function validateForm1() {
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
}
function validateForm2() {
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
}

function validateForm3() {
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
}

function validateForm4() {
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
// validates info on input, stores to local storage and pushes to cv
fnameInput.addEventListener("input", function() {
    localStorage.setItem("fname", fnameInput.value);
    validateForm1();
    let fname = fnameInput.value;
    document.querySelector(".saxeli").textContent = fname;
    localStorage.setItem("fname", fname);
  });
  
  lnameInput.addEventListener("input", function() {
    localStorage.setItem("lname", lnameInput.value);
    validateForm2();
    let lname = lnameInput.value;
    document.querySelector(".gvari").textContent = lname;
    localStorage.setItem("lname", lname);
  });
  
  emailInput.addEventListener("input", function() {
    localStorage.setItem("email", emailInput.value);
    validateForm3();
    let email = emailInput.value;
    document.querySelector(".emaili").textContent = email;
    localStorage.setItem("email", email);
  });
  numberInput.addEventListener("input", function() {
    localStorage.setItem("number", numberInput.value);
    validateForm4();
    let number = numberInput.value;
    document.querySelector(".nomeri").textContent = number;
    localStorage.setItem("number", number);
  });
  aboutMeInput.addEventListener("input", function() {
    let aboutMe = aboutMeInput.value;
    document.querySelector(".chem_shesaxeb_teqsti").textContent = aboutMe;
    localStorage.setItem("aboutMe", aboutMe);
  });
  picUpload.addEventListener("change", function () {
    const privPic = document.querySelector(".priv_pic");
    privPic.src = URL.createObjectURL(picUpload.files[0]);
    localStorage.setItem("pic", privPic.src);
  });

//   reloads and re validates inputed info
  window.addEventListener("load", function() {
    fnameInput.value = localStorage.getItem("fname") || "";
    lnameInput.value = localStorage.getItem("lname") || "";
    emailInput.value = localStorage.getItem("email") || "";
    numberInput.value = localStorage.getItem("number") || "";
    if (fnameInput.value) {
        validateForm1();
      }
    
      if (lnameInput.value) {
        validateForm2();
      }
    
      if (emailInput.value) {
        validateForm3();
      }
    
      if (numberInput.value) {
        validateForm4();
      }
  });

//   cv info save on reload
  window.addEventListener("load", function () {
    let fname = localStorage.getItem("fname");
    let lname = localStorage.getItem("lname");
    let email = localStorage.getItem("email");
    let number = localStorage.getItem("number");
    let aboutMe = localStorage.getItem("aboutMe");
    let pic = localStorage.getItem("pic");

    fnameInput.value = fname;
    lnameInput.value = lname;
    emailInput.value = email;
    numberInput.value = number;
    aboutMeInput.value = aboutMe;
    document.querySelector(".priv_pic").src = pic;

    document.querySelector(".saxeli").textContent = fname;
    document.querySelector(".gvari").textContent = lname;
    document.querySelector(".emaili").textContent = email;
    document.querySelector(".nomeri").textContent = number;
    document.querySelector(".chem_shesaxeb_teqsti").textContent = aboutMe;
});