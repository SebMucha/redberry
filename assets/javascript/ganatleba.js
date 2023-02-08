document.querySelector("#redirect_button4").addEventListener("click", () => {
  window.location.href = "index.html";
});

document.querySelector(".back_redirect").addEventListener("click", () => {
  window.location.href = "experience.html";
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

  let tanamdebobaText = localStorage.getItem("tanamdebobaValue");
  let damsaqmebeliText = localStorage.getItem("damsaqmebeliValue");
  let dawyebisRicxviText = localStorage.getItem("dawyebisRicxviValue");
  let damtavrebisRicxviText = localStorage.getItem("damtavrebisRicxviValue");
  let agweraValue = localStorage.getItem("agweraValue");

  document.querySelector(".tanamdebobis_text").textContent = tanamdebobaText;
  document.querySelector(".damsaqmeblis_text").textContent =
    ", " + damsaqmebeliText;
  document.querySelector(".start_date").textContent = dawyebisRicxviText + " -";
  document.querySelector(".end_date").textContent = damtavrebisRicxviText;
  document.querySelector(".agwera_text").textContent = agweraValue;
});

//
//
//
let invalid8 = document.querySelector(".invalid8");
let valid8 = document.querySelector(".valid8");
let saswavlebeli = document.querySelector(".saswavlebeli_input");
let saswavlebeliText = document.querySelector(".saswavlebeli_text");
let xarisxi = document.querySelector("#xarisxi");
let xarisxiText = document.querySelector(".xarisxi_text");
let damtarebisRicxvi2 = document.querySelector(".damtavrebis_ricxvi2");
let damtavrebisRicxvi2Text = document.querySelector(".finish_date");
let agwera2 = document.querySelector(".agwera_input2");
let ganatlebisAgweraText = document.querySelector(".ganatlebis_agwera_text");

saswavlebeli.addEventListener("input", function () {
  saswavlebeliText.textContent = saswavlebeli.value;
  if (saswavlebeli.value.length >= 2) {
    valid8.style.display = "block";
    saswavlebeli.style.borderColor = "green";
    invalid8.style.display = "none";
  } else {
    valid8.style.display = "none";
    saswavlebeli.style.borderColor = "red";
    invalid8.style.display = "block";
  }
  localStorage.setItem("valid8Display", valid8.style.display);
  localStorage.setItem("invalid8Display", invalid8.style.display);
  localStorage.setItem(
    "saswavlebeliBorderColor",
    saswavlebeli.style.borderColor
  );
  localStorage.setItem("saswavlebeliValue", saswavlebeli.value);
});

xarisxi.addEventListener("input", function () {
  xarisxi.textContent = xarisxi.value;
  if (xarisxi.value.length > 0) {
    xarisxi.style.borderColor = "green";
  } else {
    xarisxi.style.borderColor = "red";
  }
  localStorage.setItem("xarisxiValue", xarisxi.value);
  localStorage.setItem("xarisxiBorderColor", xarisxi.style.borderColor);
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
