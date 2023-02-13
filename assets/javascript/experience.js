document.querySelector("#redirect_button4").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});
document.querySelector(".back_redirect").addEventListener("click", () => {
  window.location.href = "piradi.html";
});
document.querySelector(".next_redirect").addEventListener("click", () => {
  if (
    valid6.style.display === "block" &&
    valid7.style.display === "block" &&
    dawyebisRicxvi.style.borderColor === "green" &&
    damtavrebisRicxvi.style.borderColor === "green" &&
    agwera.style.borderColor === "green"
  ) {
    window.location.href = "ganatleba.html";
  } else {
    alert("must validly complete form ");
  }
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

let invalid5 = document.querySelector(".invalid6");
let valid5 = document.querySelector(".valid6");
let invalid6 = document.querySelector(".invalid6");
let valid6 = document.querySelector(".valid6");
let invalid7 = document.querySelector(".invalid7");
let valid7 = document.querySelector(".valid7");
let invalid8 = document.querySelector(".invalid7");
let valid8 = document.querySelector(".valid7");

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
    damtavrebisRicxvi.style.borderColor = "green";
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

const button = document.querySelector(".meti_gamocdileba_button");
const resumeMid = document.querySelector(".mid_single_resume");
const scrollDiv = document.querySelector(".scroll_div");

button.addEventListener("click", function () {
  const clonedResumeMid = resumeMid.cloneNode(true);

  const clonedScrollDiv = scrollDiv.cloneNode(true);

  resumeMid.parentNode.appendChild(clonedResumeMid);
  scrollDiv.parentNode.appendChild(clonedScrollDiv);
  localStorage.setItem("clonedResumeMid", clonedResumeMid.outerHTML);
  localStorage.setItem("clonedScrollDiv", clonedScrollDiv.outerHTML);
  let clonedTanamdeboba = clonedScrollDiv.querySelector(".tanamdeboba_input");
  let clonedDamsaqmebeli = clonedScrollDiv.querySelector(".damsaqmebeli_input");
  let clonedDawyebisRicxvi = clonedScrollDiv.querySelector(".dawyebis_ricxvi");
  let clonedDamtavrebisRicxvi = clonedScrollDiv.querySelector(
    ".damtavrebis_ricxvi"
  );
  let clonedAgwera = clonedScrollDiv.querySelector(".agwera_input");

  let clonedTanamdebobaText =
    clonedResumeMid.querySelector(".tanamdebobis_text");
  let clonedDamsaqmebeliText =
    clonedResumeMid.querySelector(".damsaqmeblis_text");
  let clonedDawyebisRicxviText = clonedResumeMid.querySelector(".start_date");
  let clonedDamtavrebisRicxviText = clonedResumeMid.querySelector(".end_date");
  let clonedAgweraText = clonedResumeMid.querySelector(".agwera_text");

  clonedResumeMid.querySelector(".gamocdileba_text").style.display = "none";
  clonedTanamdebobaText.textContent = "";
  clonedDamsaqmebeliText.textContent = "";
  clonedDawyebisRicxviText.textContent = "";
  clonedDamtavrebisRicxviText.textContent = "";
  clonedAgweraText.textContent = "";
  let clonedInvalid6 = clonedScrollDiv.querySelector(".invalid6");
  let clonedValid6 = clonedScrollDiv.querySelector(".valid6");
  let clonedInvalid7 = clonedScrollDiv.querySelector(".invalid7");
  let clonedValid7 = clonedScrollDiv.querySelector(".valid7");

  clonedScrollDiv.querySelectorAll("input").forEach((input) => {
    input.value = "";
    input.style.borderColor = "#BCBCBC";
  });
  clonedScrollDiv.querySelectorAll("textarea").forEach((textarea) => {
    textarea.value = "";
    textarea.style.borderColor = "#BCBCBC";
  });

  clonedScrollDiv.querySelectorAll(".valid6").forEach((validIcon) => {
    validIcon.style.display = "none";
  });

  clonedScrollDiv.querySelectorAll(".invalid6").forEach((invalidIcon) => {
    invalidIcon.style.display = "none";
  });

  clonedScrollDiv.querySelectorAll(".valid7").forEach((validIcon) => {
    validIcon.style.display = "none";
  });

  clonedScrollDiv.querySelectorAll(".invalid7").forEach((invalidIcon) => {
    invalidIcon.style.display = "none";
  });

  clonedTanamdeboba.addEventListener("input", function () {
    clonedTanamdebobaText.textContent = clonedTanamdeboba.value;
    if (clonedTanamdeboba.value.length >= 2) {
      clonedValid6.style.display = "block";
      clonedTanamdeboba.style.borderColor = "green";
      clonedInvalid6.style.display = "none";
    } else {
      clonedValid6.style.display = "none";
      clonedTanamdeboba.style.borderColor = "red";
      clonedInvalid6.style.display = "block";
    }
    localStorage.setItem("clonedValid6Display", clonedValid6.style.display);
    localStorage.setItem("clonedInvalid6Display", clonedInvalid6.style.display);
    localStorage.setItem(
      "clonedTanamdebobaBorderColor",
      clonedTanamdeboba.style.borderColor
    );
    localStorage.setItem("clonedTanamdebobaValue", clonedTanamdeboba.value);
  });

  clonedDamsaqmebeli.addEventListener("input", function () {
    clonedDamsaqmebeliText.textContent = ", " + clonedDamsaqmebeli.value;
    if (clonedDamsaqmebeli.value.length >= 2) {
      clonedValid7.style.display = "block";
      clonedDamsaqmebeli.style.borderColor = "green";
      clonedInvalid7.style.display = "none";
    } else {
      clonedValid7.style.display = "none";
      clonedDamsaqmebeli.style.borderColor = "red";
      clonedInvalid7.style.display = "block";
    }
    localStorage.setItem("clonedDamsaqmebeliValue", clonedDamsaqmebeli.value);
    localStorage.setItem("clonedValid7Display", clonedValid7.style.display);
    localStorage.setItem("clonedInvalid7Display", clonedInvalid7.style.display);
    localStorage.setItem(
      "clonedDamsaqmebeliBorderColor",
      clonedDamsaqmebeli.style.borderColor
    );
  });

  clonedDawyebisRicxvi.addEventListener("input", function () {
    clonedDawyebisRicxviText.textContent = clonedDawyebisRicxvi.value + " -";
    if (clonedDawyebisRicxvi.value.length > 0) {
      clonedDawyebisRicxvi.style.borderColor = "green";
    } else {
      clonedDawyebisRicxvi.style.borderColor = "red";
    }
    localStorage.setItem(
      "clonedDawyebisRicxviValue",
      clonedDawyebisRicxvi.value
    );
    localStorage.setItem(
      "clonedDawyebisRicxviBorderColor",
      clonedDawyebisRicxvi.style.borderColor
    );
  });

  clonedDamtavrebisRicxvi.addEventListener("input", function () {
    clonedDamtavrebisRicxviText.textContent = clonedDamtavrebisRicxvi.value;
    if (clonedDamtavrebisRicxvi.value.length > 0) {
      clonedDamtavrebisRicxvi.style.borderColor = "green";
    } else {
      clonedDamtavrebisRicxvi.style.borderColor = "red";
    }
    localStorage.setItem(
      "clonedDamtavrebisRicxviValue",
      clonedDamtavrebisRicxvi.value
    );
    localStorage.setItem(
      "clonedDamtavrebisRicxviBorderColor",
      clonedDamtavrebisRicxvi.style.borderColor
    );
  });

  clonedAgwera.addEventListener("input", function () {
    clonedAgweraText.textContent = clonedAgwera.value;
    if (clonedAgwera.value.length > 0) {
      clonedAgwera.style.borderColor = "green";
    } else {
      clonedAgwera.style.borderColor = "red";
    }
    localStorage.setItem("clonedAgweraValue", clonedAgwera.value);
    localStorage.setItem("clonedAgweraText_Value", clonedAgweraText.value);
    localStorage.setItem(
      "clonedAgweraBorderColor",
      clonedAgwera.style.borderColor
    );
  });
});
