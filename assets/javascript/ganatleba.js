document.querySelector(".back_redirect").addEventListener("click", () => {
  window.location.href = "experience.html";
});
document.querySelector("#redirect_button4").addEventListener("click", () => {
  localStorage.removeItem("fname");
  localStorage.removeItem("lname");
  localStorage.removeItem("email");
  localStorage.removeItem("number");
  localStorage.removeItem("aboutMe");
  localStorage.removeItem("pic");
  localStorage.removeItem("aboutMeInput");
  localStorage.removeItem("tanamdebobaValue");
  localStorage.removeItem("tanamdebobaBorderColor");
  localStorage.removeItem("damsaqmebeliBorderColor");
  localStorage.removeItem("damsaqmebeliValue");
  localStorage.removeItem("dawyebisRicxviValue");
  localStorage.removeItem("dawyebisRicxviBorderColor");
  localStorage.removeItem("damtavrebisRicxviValue");
  localStorage.removeItem("damtavrebisRicxviBorderColor");
  localStorage.removeItem("agweraValue");
  localStorage.removeItem("agweraBorderColor");
  localStorage.removeItem("validationResult");
  localStorage.removeItem("saswavlebeliValue");
  localStorage.removeItem("saswavlebeliBorderColor");
  localStorage.removeItem("damtavrebisRicxvi2BorderColor");
  localStorage.removeItem("damtavrebusRicxvi2Value");
  localStorage.removeItem("xarisxiValue");
  localStorage.removeItem("agwera2Value");
  localStorage.removeItem("xarisxiBorderColor");
  localStorage.removeItem("agwera2BorderColor");
  localStorage.removeItem("valid5Display");
  localStorage.removeItem("invalid5Display");
  localStorage.removeItem("invalid6Display");
  localStorage.removeItem("valid6Display");
  localStorage.removeItem("invalid7Display");
  localStorage.removeItem("valid7Display");
  localStorage.removeItem("invalid8Display");
  localStorage.removeItem("valid8Display");

  window.location.href = "index.html";
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

let invalid8 = document.querySelector(".invalid8");
let valid8 = document.querySelector(".valid8");
let saswavlebeli = document.querySelector(".saswavlebeli_input");
let saswavlebeliText = document.querySelector(".saswavlebeli_text");
let xarisxi = document.querySelector("#xarisxi");
let xarisxiText = document.querySelector(".xarisxi_text");
let damtavrebisRicxvi2 = document.querySelector(".damtavrebis_ricxvi2");
let damtavrebisRicxvi2Text = document.querySelector(".finish_date");
let agwera2 = document.querySelector(".agwera_input2");
let ganatlebisAgweraText = document.querySelector(".ganatlebis_agwera_text");

fetch("https://resume.redberryinternship.ge/api/degrees")
  .then((response) => response.json())
  .then((data) => {
    const select = document.querySelector("#xarisxi");
    data.forEach((degree) => {
      const option = document.createElement("option");
      option.value = degree.id;
      option.textContent = degree.title;
      select.appendChild(option);
    });
  });

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
  if (xarisxi.value == 1) {
    xarisxiText.textContent = ", " + "საშუალო სკოლის დიპლომი";
  } else if (xarisxi.value == 2) {
    xarisxiText.textContent = ", " + "ზოგადსაგანმანათლებლო დიპლომი";
  } else if (xarisxi.value == 3) {
    xarisxiText.textContent = ", " + "ბაკალავრი";
  } else if (xarisxi.value == 4) {
    xarisxiText.textContent = ", " + "მაგისტრი";
  } else if (xarisxi.value == 5) {
    xarisxiText.textContent = ", " + "დოქტორი";
  } else if (xarisxi.value == 6) {
    xarisxiText.textContent = ", " + "ასოცირებული ხარისხი";
  } else if (xarisxi.value == 7) {
    xarisxiText.textContent = ", " + "სტუდენტი";
  } else if (xarisxi.value == 8) {
    xarisxiText.textContent = ", " + "კოლეჯი(ხარისიხს გარეშე)";
  } else if (xarisxi.value == 9) {
    xarisxiText.textContent = ", " + "სხვა";
  }

  if (xarisxi.value) {
    xarisxi.style.borderColor = "green";
  } else {
    xarisxi.style.borderColor = "red";
  }
  localStorage.setItem("xarisxiValue", xarisxi.value);
  localStorage.setItem("xarisxiBorderColor", xarisxi.style.borderColor);
});

damtavrebisRicxvi2.addEventListener("input", function () {
  damtavrebisRicxvi2Text.textContent = damtavrebisRicxvi2.value;
  if (damtavrebisRicxvi2.value.length > 0) {
    damtavrebisRicxvi2.style.borderColor = "green";
  } else {
    damtavrebisRicxvi2.style.borderColor = "red";
  }
  localStorage.setItem("damtavrebisRicxvi2Value", damtavrebisRicxvi2.value);
  localStorage.setItem(
    "damtavrebisRicxvi2BorderColor",
    damtavrebisRicxvi2.style.borderColor
  );
});

agwera2.addEventListener("input", function () {
  ganatlebisAgweraText.textContent = agwera2.value;
  if (agwera2.value.length > 0) {
    agwera2.style.borderColor = "green";
  } else {
    agwera2.style.borderColor = "red";
  }
  localStorage.setItem("agwera2Value", agwera2.value);
  localStorage.setItem(
    "ganatlebisAgweraText_Value",
    ganatlebisAgweraText.value
  );
  localStorage.setItem("agwera2BorderColor", agwera2.style.borderColor);
});

window.addEventListener("load", function () {
  saswavlebeli.value = localStorage.getItem("saswavlebeliValue") || "";
  valid8.style.display = localStorage.getItem("valid8Display");
  invalid8.style.display = localStorage.getItem("invalid8Display");
  saswavlebeli.style.borderColor = localStorage.getItem(
    "saswavlebeliBorderColor"
  );

  damtavrebisRicxvi2.value =
    localStorage.getItem("damtavrebisRicxvi2Value") || "";
  damtavrebisRicxvi2.style.borderColor = localStorage.getItem(
    "damtavrebisRicxvi2BorderColor"
  );

  xarisxi.value = localStorage.getItem("xarisxiValue") || "";
  xarisxi.style.borderColor = localStorage.getItem("xarisxiBorderColor");

  agwera2.value = localStorage.getItem("agwera2Value") || "";
  agwera2.style.borderColor = localStorage.getItem("agwera2BorderColor");

  if (xarisxi.value == 1) {
    xarisxiText.textContent = ", " + "საშუალო სკოლის დიპლომი";
  } else if (xarisxi.value == 2) {
    xarisxiText.textContent = ", " + "ზოგადსაგანმანათლებლო დიპლომი";
  } else if (xarisxi.value == 3) {
    xarisxiText.textContent = ", " + "ბაკალავრი";
  } else if (xarisxi.value == 4) {
    xarisxiText.textContent = ", " + "მაგისტრი";
  } else if (xarisxi.value == 5) {
    xarisxiText.textContent = ", " + "დოქტორი";
  } else if (xarisxi.value == 6) {
    xarisxiText.textContent = ", " + "ასოცირებული ხარისხი";
  } else if (xarisxi.value == 7) {
    xarisxiText.textContent = ", " + "სტუდენტი";
  } else if (xarisxi.value == 8) {
    xarisxiText.textContent = ", " + "კოლეჯი(ხარისიხს გარეშე)";
  } else if (xarisxi.value == 9) {
    xarisxiText.textContent = ", " + "სხვა";
  }

  saswavlebeliText.textContent = saswavlebeli.value;

  damtavrebisRicxvi2Text.textContent = damtavrebisRicxvi2.value;

  ganatlebisAgweraText.textContent = agwera2.value;
});

// const button = document.querySelector(".meti_gamocdileba_button");
// const resumeBottom = document.querySelector(".bottom_single_resume");
// const scrollDiv2 = document.querySelector(".scroll_div2");

// button.addEventListener("click", function () {
//   const clonedResumeBottom = resumeBottom.cloneNode(true);

//   const clonedScrollDiv2 = scrollDiv2.cloneNode(true);

//   resumeBottom.parentNode.appendChild(clonedResumeBottom);
//   scrollDiv2.parentNode.appendChild(clonedScrollDiv2);
//   localStorage.setItem("clonedResumeBottom", clonedResumeBottom.outerHTML);
//   localStorage.setItem("clonedScrollDiv2", clonedScrollDiv2.outerHTML);
//   let clonedSaswavlebeli = clonedScrollDiv.querySelector(".saswavlebeli_input");
//   let clonedXarisxi = clonedScrollDiv.querySelector("#xarisxi");
//   let clonedAgwera2 = clonedScrollDiv.querySelector(".agwera_input2");
//   let clonedDamtavrebisRicxvi2 = clonedScrollDiv.querySelector(
//     ".damtavrebis_ricxvi2"
//   );

//   let clonedTanamdebobaText =
//     clonedResumeMid.querySelector(".tanamdebobis_text");
//   let clonedDamsaqmebeliText =
//     clonedResumeMid.querySelector(".damsaqmeblis_text");
//   let clonedDawyebisRicxviText = clonedResumeMid.querySelector(".start_date");
//   let clonedDamtavrebisRicxviText = clonedResumeMid.querySelector(".end_date");
//   let clonedAgweraText = clonedResumeMid.querySelector(".agwera_text");

//   clonedResumeMid.querySelector(".gamocdileba_text").style.display = "none";
//   clonedTanamdebobaText.textContent = "";
//   clonedDamsaqmebeliText.textContent = "";
//   clonedDawyebisRicxviText.textContent = "";
//   clonedDamtavrebisRicxviText.textContent = "";
//   clonedAgweraText.textContent = "";
//   let clonedInvalid6 = clonedScrollDiv.querySelector(".invalid6");
//   let clonedValid6 = clonedScrollDiv.querySelector(".valid6");
//   let clonedInvalid7 = clonedScrollDiv.querySelector(".invalid7");
//   let clonedValid7 = clonedScrollDiv.querySelector(".valid7");

//   clonedScrollDiv.querySelectorAll("input").forEach((input) => {
//     input.value = "";
//     input.style.borderColor = "#BCBCBC";
//   });
//   clonedScrollDiv.querySelectorAll("textarea").forEach((textarea) => {
//     textarea.value = "";
//     textarea.style.borderColor = "#BCBCBC";
//   });

//   clonedScrollDiv.querySelectorAll(".valid6").forEach((validIcon) => {
//     validIcon.style.display = "none";
//   });

//   clonedScrollDiv.querySelectorAll(".invalid6").forEach((invalidIcon) => {
//     invalidIcon.style.display = "none";
//   });

//   clonedScrollDiv.querySelectorAll(".valid7").forEach((validIcon) => {
//     validIcon.style.display = "none";
//   });

//   clonedScrollDiv.querySelectorAll(".invalid7").forEach((invalidIcon) => {
//     invalidIcon.style.display = "none";
//   });

//   clonedTanamdeboba.addEventListener("input", function () {
//     clonedTanamdebobaText.textContent = clonedTanamdeboba.value;
//     if (clonedTanamdeboba.value.length >= 2) {
//       clonedValid6.style.display = "block";
//       clonedTanamdeboba.style.borderColor = "green";
//       clonedInvalid6.style.display = "none";
//     } else {
//       clonedValid6.style.display = "none";
//       clonedTanamdeboba.style.borderColor = "red";
//       clonedInvalid6.style.display = "block";
//     }
//     localStorage.setItem("clonedValid6Display", clonedValid6.style.display);
//     localStorage.setItem("clonedInvalid6Display", clonedInvalid6.style.display);
//     localStorage.setItem(
//       "clonedTanamdebobaBorderColor",
//       clonedTanamdeboba.style.borderColor
//     );
//     localStorage.setItem("clonedTanamdebobaValue", clonedTanamdeboba.value);
//   });

//   clonedDamsaqmebeli.addEventListener("input", function () {
//     clonedDamsaqmebeliText.textContent = ", " + clonedDamsaqmebeli.value;
//     if (clonedDamsaqmebeli.value.length >= 2) {
//       clonedValid7.style.display = "block";
//       clonedDamsaqmebeli.style.borderColor = "green";
//       clonedInvalid7.style.display = "none";
//     } else {
//       clonedValid7.style.display = "none";
//       clonedDamsaqmebeli.style.borderColor = "red";
//       clonedInvalid7.style.display = "block";
//     }
//     localStorage.setItem("clonedDamsaqmebeliValue", clonedDamsaqmebeli.value);
//     localStorage.setItem("clonedValid7Display", clonedValid7.style.display);
//     localStorage.setItem("clonedInvalid7Display", clonedInvalid7.style.display);
//     localStorage.setItem(
//       "clonedDamsaqmebeliBorderColor",
//       clonedDamsaqmebeli.style.borderColor
//     );
//   });

//   clonedDawyebisRicxvi.addEventListener("input", function () {
//     clonedDawyebisRicxviText.textContent = clonedDawyebisRicxvi.value + " -";
//     if (clonedDawyebisRicxvi.value.length > 0) {
//       clonedDawyebisRicxvi.style.borderColor = "green";
//     } else {
//       clonedDawyebisRicxvi.style.borderColor = "red";
//     }
//     localStorage.setItem(
//       "clonedDawyebisRicxviValue",
//       clonedDawyebisRicxvi.value
//     );
//     localStorage.setItem(
//       "clonedDawyebisRicxviBorderColor",
//       clonedDawyebisRicxvi.style.borderColor
//     );
//   });

//   clonedDamtavrebisRicxvi.addEventListener("input", function () {
//     clonedDamtavrebisRicxviText.textContent = clonedDamtavrebisRicxvi.value;
//     if (clonedDamtavrebisRicxvi.value.length > 0) {
//       clonedDamtavrebisRicxvi.style.borderColor = "green";
//     } else {
//       clonedDamtavrebisRicxvi.style.borderColor = "red";
//     }
//     localStorage.setItem(
//       "clonedDamtavrebisRicxviValue",
//       clonedDamtavrebisRicxvi.value
//     );
//     localStorage.setItem(
//       "clonedDamtavrebisRicxviBorderColor",
//       clonedDamtavrebisRicxvi.style.borderColor
//     );
//   });

//   clonedAgwera.addEventListener("input", function () {
//     clonedAgweraText.textContent = clonedAgwera.value;
//     if (clonedAgwera.value.length > 0) {
//       clonedAgwera.style.borderColor = "green";
//     } else {
//       clonedAgwera.style.borderColor = "red";
//     }
//     localStorage.setItem("clonedAgweraValue", clonedAgwera.value);
//     localStorage.setItem("clonedAgweraText_Value", clonedAgweraText.value);
//     localStorage.setItem(
//       "clonedAgweraBorderColor",
//       clonedAgwera.style.borderColor
//     );
//   });
// });
