document.querySelector("#redirect_button4").addEventListener("click", () => {
  window.location.href = "index.html";
});
document.querySelector(".back_redirect").addEventListener("click", () => {
  window.location.href = "piradi.html";
});
document.querySelector(".next_redirect").addEventListener("click", () => {
  window.location.href = "ganatleba.html";
});
window.addEventListener("load", function () {
  let fname = localStorage.getItem("fname");
  let lname = localStorage.getItem("lname");
  let email = localStorage.getItem("email");
  let number = localStorage.getItem("number");
  let aboutMe = localStorage.getItem("aboutMe");
  let aboutMeInput = localStorage.getItem("aboutMeInput");
  let pic = localStorage.getItem("pic");
  let chemShesaxeb = document.querySelector(".chem_shesaxeb");

  document.querySelector(".saxeli").textContent = fname;
  document.querySelector(".gvari").textContent = lname;
  document.querySelector(".emaili").textContent = email;
  document.querySelector(".nomeri").textContent = number;
  document.querySelector(".chem_shesaxeb_teqsti").textContent = aboutMe;
  document.querySelector(".priv_pic").src = pic;
  if (localStorage.getItem("aboutMeInput")) {
    aboutMeInput.value = localStorage.getItem("aboutMeInput");
    chemShesaxeb.style.display = "block";
  } else {
    chemShesaxeb.style.display = "none";
  }
});

let invalid6 = document.querySelector(".invalid6");
let valid6 = document.querySelector(".valid6");
let invalid7 = document.querySelector(".invalid7");
let valid7 = document.querySelector(".valid7");
let tanamdeboba = document.querySelector(".tanamdeboba_input");
let damsaqmebeli = document.querySelector(".damsaqmebeli_input");
let dawyebisRicxvi = document.querySelector(".dawyebis_ricxvi");
let damtavrebisRicxvi = document.querySelector(".damtavrebis_ricxvi");
let agwera = document.querySelector(".agwera_input");
let tanamdebobaText = document.querySelector(".tanamdebobis_text");
let damsaqmebeliText = document.querySelector(".damsaqmeblis_text");
let dawyebisRicxviText = document.querySelector(".start_date");
let damtavrebisRicxviText = document.querySelector(".end_date");
let agweraText = document.querySelector(".agwera_text");
// form validation and pushing info to cv

tanamdeboba.addEventListener("input", function () {
  tanamdebobaText.textContent = tanamdeboba.value;
  if (tanamdeboba.value.length >= 2) {
    valid6.style.display = "block";
    tanamdeboba.style.borderColor = "green";
    invalid6.style.display = "none";
  } else {
    valid6.style.display = "none";
    tanamdeboba.style.borderColor = "red";
    invalid6.style.display = "block";
  }
  localStorage.setItem("valid6Display", valid6.style.display);
  localStorage.setItem("invalid6Display", invalid6.style.display);
  localStorage.setItem("tanamdebobaBorderColor", tanamdeboba.style.borderColor);
  localStorage.setItem("tanamdebobaValue", tanamdeboba.value);
});

damsaqmebeli.addEventListener("input", function () {
  damsaqmebeliText.textContent = ", " + damsaqmebeli.value;
  if (damsaqmebeli.value.length >= 2) {
    valid7.style.display = "block";
    damsaqmebeli.style.borderColor = "green";
    invalid7.style.display = "none";
  } else {
    valid7.style.display = "none";
    damsaqmebeli.style.borderColor = "red";
    invalid7.style.display = "block";
  }
  localStorage.setItem("damsaqmebeliValue", damsaqmebeli.value);
  localStorage.setItem("valid7Display", valid7.style.display);
  localStorage.setItem("invalid7Display", invalid7.style.display);
  localStorage.setItem(
    "damsaqmebeliBorderColor",
    damsaqmebeli.style.borderColor
  );
});

dawyebisRicxvi.addEventListener("input", function () {
  dawyebisRicxviText.textContent = dawyebisRicxvi.value + " -";
  if (dawyebisRicxvi.value.length > 0) {
    dawyebisRicxvi.style.borderColor = "green";
  } else {
    dawyebisRicxvi.style.borderColor = "red";
  }
  localStorage.setItem("dawyebisRicxviValue", dawyebisRicxvi.value);
  localStorage.setItem(
    "dawyebisRicxviBorderColor",
    dawyebisRicxvi.style.borderColor
  );
});

damtavrebisRicxvi.addEventListener("input", function () {
  damtavrebisRicxviText.textContent = damtavrebisRicxvi.value;
  if (damtavrebisRicxvi.value.length > 0) {
    if (new Date(dawyebisRicxvi.value) < new Date(damtavrebisRicxvi.value)) {
      dawyebisRicxvi.style.borderColor = "green";
      damtavrebisRicxvi.style.borderColor = "green";
    } else {
      damtavrebisRicxvi.style.borderColor = "red";
    }
  } else {
    damtavrebisRicxvi.style.borderColor = "red";
  }
  localStorage.setItem("damtavrebisRicxviValue", damtavrebisRicxvi.value);
  localStorage.setItem(
    "damtavrebisRicxviBorderColor",
    damtavrebisRicxvi.style.borderColor
  );
});

agwera.addEventListener("input", function () {
  agweraText.textContent = agwera.value;
  if (agwera.value.length > 0) {
    agwera.style.borderColor = "green";
  } else {
    agwera.style.borderColor = "red";
  }
  localStorage.setItem("agweraValue", agwera.value);
  localStorage.setItem("agweraText_Value", agweraText.value);
  localStorage.setItem("agweraBorderColor", agwera.style.borderColor);
});

window.addEventListener("load", function () {
  tanamdeboba.value = localStorage.getItem("tanamdebobaValue") || "";
  valid6.style.display = localStorage.getItem("valid6Display");
  invalid6.style.display = localStorage.getItem("invalid6Display");
  tanamdeboba.style.borderColor = localStorage.getItem(
    "tanamdebobaBorderColor"
  );

  damsaqmebeli.value = localStorage.getItem("damsaqmebeliValue") || "";
  valid7.style.display = localStorage.getItem("valid7Display");
  invalid7.style.display = localStorage.getItem("invalid7Display");
  damsaqmebeli.style.borderColor = localStorage.getItem(
    "damsaqmebeliBorderColor"
  );

  dawyebisRicxvi.value = localStorage.getItem("dawyebisRicxviValue") || "";
  dawyebisRicxvi.style.borderColor = localStorage.getItem(
    "dawyebisRicxviBorderColor"
  );

  damtavrebisRicxvi.value =
    localStorage.getItem("damtavrebisRicxviValue") || "";
  damtavrebisRicxvi.style.borderColor = localStorage.getItem(
    "damtavrebisRicxviBorderColor"
  );

  agwera.value = localStorage.getItem("agweraValue") || "";
  agwera.style.borderColor = localStorage.getItem("agweraBorderColor");

  tanamdebobaText.textContent = tanamdeboba.value;
  damsaqmebeliText.textContent = ", " + damsaqmebeli.value;
  dawyebisRicxviText.textContent = dawyebisRicxvi.value + " -";
  damtavrebisRicxviText.textContent = damtavrebisRicxvi.value;
  agweraText.textContent = agwera.value;
});

// clone on button press and revalidate form

const button = document.querySelector(".meti_gamocdileba_button");
const originalForm = document.querySelector(".scroll_div");

button.addEventListener("click", cloneAndValidateForm);

function cloneAndValidateForm() {
  let newForm = originalForm.cloneNode(true);
  originalForm.appendChild(newForm);

  //   let newTanamdeboba = newForm.querySelector("#tanamdeboba");
  //   let newDamsaqmebeli = newForm.querySelector("#damsaqmebeli");
  //   let newDawyebisRicxvi = newForm.querySelector("#dawyebisRicxvi");
  //   let newDamtavrebisRicxvi = newForm.querySelector("#damtavrebisRicxvi");
  //   let newAgwera = newForm.querySelector("#agwera");
  //   newTanamdeboba.addEventListener("input", function () {
  //     if (newTanamdeboba.value.length >= 2) {
  //       newTanamdeboba.style.borderColor = "green";
  //     } else {
  //       newTanamdeboba.style.borderColor = "red";
  //     }
  //   });

  //   newDamsaqmebeli.addEventListener("input", function () {
  //     if (newDamsaqmebeli.value.length >= 2) {
  //       newDamsaqmebeli.style.borderColor = "green";
  //     } else {
  //       newDamsaqmebeli.style.borderColor = "red";
  //     }
  //   });

  //   newDawyebisRicxvi.addEventListener("input", function () {
  //     if (newDawyebisRicxvi.value.length > 0) {
  //       newDawyebisRicxvi.style.borderColor = "green";
  //     } else {
  //       newDawyebisRicxvi.style.borderColor = "red";
  //     }
  //   });

  //   newDamtavrebisRicxvi.addEventListener("input", function () {
  //     if (newDamtavrebisRicxvi.value.length > 0) {
  //       if (
  //         new Date(newDawyebisRicxvi.value) < new Date(newDamtavrebisRicxvi.value)
  //       ) {
  //         newDawyebisRicxvi.style.borderColor = "green";
  //         newDamtavrebisRicxvi.style.borderColor = "green";
  //       } else {
  //         newDamtavrebisRicxvi.style.borderColor = "red";
  //       }
  //     } else {
  //       newDamtavrebisRicxvi.style.borderColor = "red";
  //     }
  //   });

  //   newAgwera.addEventListener("input", function () {
  //     if (newAgwera.value.length > 0) {
  //       newAgwera.style.borderColor = "green";
  //     } else {
  //       newAgwera.style.borderColor = "red";
  //     }
  //   });
}
