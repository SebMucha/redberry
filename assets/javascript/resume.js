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
