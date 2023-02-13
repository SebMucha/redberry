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

  xarisxi.value = localStorage.getItem("xarisxiValue");
  console.log(localStorage.getItem("xarisxiValue"), xarisxi.value);
  xarisxi.style.borderColor = localStorage.getItem("xarisxiBorderColor");

  agwera2.value = localStorage.getItem("agwera2Value") || "";
  agwera2.style.borderColor = localStorage.getItem("agwera2BorderColor");

  if (xarisxi.value == 1) {
    xarisxiText.textContent = ",საშუალო სკოლის დიპლომი";
  } else if (xarisxi.value == 2) {
    xarisxiText.textContent = ",ზოგადსაგანმანათლებლო დიპლომი";
  } else if (xarisxi.value == 3) {
    xarisxiText.textContent = ",ბაკალავრი";
  } else if (xarisxi.value == 4) {
    xarisxiText.textContent = ",მაგისტრი";
  } else if (xarisxi.value == 5) {
    xarisxiText.textContent = ",დოქტორი";
  } else if (xarisxi.value == 6) {
    xarisxiText.textContent = ",ასოცირებული ხარისხი";
  } else if (xarisxi.value == 7) {
    xarisxiText.textContent = ",სტუდენტი";
  } else if (xarisxi.value == 8) {
    xarisxiText.textContent = ",კოლეჯი(ხარისიხს გარეშე)";
  } else if (xarisxi.value == 9) {
    xarisxiText.textContent = ",სხვა";
  }

  saswavlebeliText.textContent = saswavlebeli.value;

  damtavrebisRicxvi2Text.textContent = damtavrebisRicxvi2.value;

  ganatlebisAgweraText.textContent = agwera2.value;
});

const button2 = document.querySelector(".meti_ganatleba_button");
const resumeBottom = document.querySelector(".bottom_single_resume");
const scrollDiv2 = document.querySelector(".scroll_div2");

button2.addEventListener("click", function () {
  const clonedResumeBottom = resumeBottom.cloneNode(true);
  const clonedResumeBottomHTML = clonedResumeBottom.outerHTML;

  const clonedScrollDiv2 = scrollDiv2.cloneNode(true);
  const clonedScrollDiv2HTML = clonedScrollDiv2.outerHTML;

  resumeBottom.parentNode.appendChild(clonedResumeBottom);
  scrollDiv2.parentNode.appendChild(clonedScrollDiv2);

  localStorage.setItem("clonedResumeBottomHTML", clonedResumeBottomHTML);
  localStorage.setItem("clonedScrollDiv2HTML", clonedScrollDiv2HTML);
  let clonedSaswavlebeli = clonedScrollDiv2.querySelector(
    ".saswavlebeli_input"
  );
  let clonedXarisxi = clonedScrollDiv2.querySelector("#xarisxi");
  let clonedAgwera2 = clonedScrollDiv2.querySelector(".agwera_input2");
  let clonedDamtavrebisRicxvi2 = clonedScrollDiv2.querySelector(
    ".damtavrebis_ricxvi2"
  );

  let clonedSaswavlebeliText =
    clonedResumeBottom.querySelector(".saswavlebeli_text");
  let clonedXarisxiText = clonedResumeBottom.querySelector(".xarisxi_text");
  let clonedDamtavrebisRicxvi2Text =
    clonedResumeBottom.querySelector(".finish_date");
  let clonedAgwera2Text = clonedResumeBottom.querySelector(
    ".ganatlebis_agwera_text"
  );

  let ganatlebaText = (clonedResumeBottom.querySelector(
    ".ganatleba_text"
  ).style.display = "none");

  ganatlebaText.textContent = "";
  clonedSaswavlebeliText.textContent = "";
  clonedXarisxiText.textContent = "";
  clonedDamtavrebisRicxvi2Text.textContent = "";
  clonedAgwera2Text.textContent = "";
  let clonedInvalid8 = clonedScrollDiv2.querySelector(".invalid8");
  let clonedValid8 = clonedScrollDiv2.querySelector(".valid8");

  clonedScrollDiv2.querySelectorAll("input").forEach((input) => {
    input.value = "";
    input.style.borderColor = "#BCBCBC";
  });
  clonedScrollDiv2.querySelectorAll("textarea").forEach((textarea) => {
    textarea.value = "";
    textarea.style.borderColor = "#BCBCBC";
  });
  clonedScrollDiv2.querySelectorAll("select").forEach((textarea) => {
    textarea.value = "";
    textarea.style.borderColor = "#BCBCBC";
  });
  clonedScrollDiv2.querySelectorAll(".valid8").forEach((validIcon) => {
    validIcon.style.display = "none";
  });
  clonedScrollDiv2.querySelectorAll(".invalid8").forEach((invalidIcon) => {
    invalidIcon.style.display = "none";
  });

  clonedSaswavlebeli.addEventListener("input", function () {
    clonedSaswavlebeliText.textContent = clonedSaswavlebeli.value;
    if (clonedSaswavlebeli.value.length >= 2) {
      clonedValid8.style.display = "block";
      clonedSaswavlebeli.style.borderColor = "green";
      clonedInvalid8.style.display = "none";
    } else {
      clonedValid8.style.display = "none";
      clonedSaswavlebeli.style.borderColor = "red";
      clonedInvalid8.style.display = "block";
    }
    localStorage.setItem("clonedValid8Display", clonedValid8.style.display);
    localStorage.setItem("clonedInvalid8Display", clonedInvalid8.style.display);
    localStorage.setItem(
      "clonedSaswavlebeliBorderColor",
      clonedSaswavlebeli.style.borderColor
    );
    localStorage.setItem("clonedSaswavlebeliValue", clonedSaswavlebeli.value);
  });

  clonedXarisxi.addEventListener("input", function () {
    clonedXarisxiText.textContent = ", " + clonedXarisxi.value;
    if (clonedXarisxi.value.length) {
      clonedXarisxi.style.borderColor = "green";
    } else {
      clonedXarisxi.style.borderColor = "red";
    }
    localStorage.setItem("clonedXarisxiValue", clonedXarisxi.value);
    localStorage.setItem(
      "clonedXarisxiBorderColor",
      clonedXarisxi.style.borderColor
    );
  });

  clonedDamtavrebisRicxvi2.addEventListener("input", function () {
    clonedDamtavrebisRicxvi2Text.textContent = clonedDamtavrebisRicxvi2.value;
    if (clonedDamtavrebisRicxvi2.value.length) {
      clonedDamtavrebisRicxvi2.style.borderColor = "green";
    } else {
      clonedDamtavrebisRicxvi2.style.borderColor = "red";
    }
    localStorage.setItem(
      "clonedDamtavrebisRicxvi2Value",
      clonedDamtavrebisRicxvi2.value
    );
    localStorage.setItem(
      "clonedDamtavrebisRicxvi2BorderColor",
      clonedDamtavrebisRicxvi2.style.borderColor
    );
  });

  clonedAgwera2.addEventListener("input", function () {
    clonedAgwera2Text.textContent = clonedAgwera2.value;
    if (clonedAgwera2.value.length > 0) {
      clonedAgwera2.style.borderColor = "green";
    } else {
      clonedAgwera2.style.borderColor = "red";
    }
    localStorage.setItem("clonedAgwera2Value", clonedAgwera2.value);
    localStorage.setItem("clonedAgwera2Text_Value", clonedAgwera2Text.value);
    localStorage.setItem(
      "clonedAgwera2BorderColor",
      clonedAgwera2.style.borderColor
    );
  });
});
// window.addEventListener("load", function () {
//   const clonedResumeBottom = localStorage.getItem("clonedResumeBottom");
//   const clonedScrollDiv2 = localStorage.getItem("clonedScrollDiv2");

//   if (clonedResumeBottom && clonedScrollDiv2) {
//     resumeBottom.insertAdjacentHTML("afterend", clonedResumeBottom);
//     scrollDiv2.insertAdjacentHTML("afterend", clonedScrollDiv2);
//   }

// clonedSaswavlebeli.value =
//   localStorage.getItem("clonedSaswavlebeliValue") || "";
// clonedValid8.style.display = localStorage.getItem("clonedValid8Display");
// clonedInvalid8.style.display = localStorage.getItem("clonedInvalid8Display");
// clonedSaswavlebeli.style.borderColor = localStorage.getItem(
//   "clonedSaswavlebeliBorderColor"
// );

// clonedDamtavrebisRicxvi2.value =
//   localStorage.getItem("clonedDamtavrebisRicxvi2Value") || "";
// clonedDamtavrebisRicxvi2.style.borderColor = localStorage.getItem(
//   "clonedDamtavrebisRicxvi2BorderColor"
// );

// clonedXarisxi.value = localStorage.getItem("clonedXarisxiValue") || "";
// clonedXarisxi.style.borderColor = localStorage.getItem(
//   "clonedXarisxiBorderColor"
// );

// clonedAgwera2.value = localStorage.getItem("clonedAgwera2Value") || "";
// clonedAgwera2.style.borderColor = localStorage.getItem(
//   "clonedAgwera2BorderColor"
// );

// if (clonedXarisxi.value == 1) {
//   clonedXarisxiText.textContent = ",საშუალო სკოლის დიპლომი";
// } else if (clonedXarisxi.value == 2) {
//   clonedXarisxiText.textContent = ",ზოგადსაგანმანათლებლო დიპლომი";
// } else if (clonedXarisxi.value == 3) {
//   clonedXarisxiText.textContent = ",ბაკალავრი";
// } else if (clonedXarisxi.value == 4) {
//   clonedXarisxiText.textContent = ",მაგისტრი";
// } else if (clonedXarisxi.value == 5) {
//   clonedXarisxiText.textContent = ",დოქტორი";
// } else if (clonedXarisxi.value == 6) {
//   clonedXarisxiText.textContent = ",ასოცირებული ხარისხი";
// } else if (clonedXarisxi.value == 7) {
//   clonedXarisxiText.textContent = ",სტუდენტი";
// } else if (clonedXarisxi.value == 8) {
//   clonedXarisxiText.textContent = ",კოლეჯი(ხარისიხს გარეშე)";
// } else if (clonedXarisxi.value == 9) {
//   clonedXarisxiText.textContent = ",სხვა";
// }

// clonedSaswavlebeliText.textContent = clonedSaswavlebeli.value;

// clonedDamtavrebisRicxvi2Text.textContent = clonedDamtavrebisRicxvi2.value;

// clonedGanatlebisAgweraText.textContent = clonedAgwera2.value;
// });
// window.onload = function () {
//   const clonedResumeBottom = localStorage.getItem("clonedResumeBottom");
//   const clonedScrollDiv2 = localStorage.getItem("clonedScrollDiv2");

//   if (clonedResumeBottom && clonedScrollDiv2) {
//     resumeBottom.insertAdjacentHTML("afterend", clonedResumeBottom);
//     scrollDiv2.insertAdjacentHTML("afterend", clonedScrollDiv2);
//   }
// };
// window.addEventListener("load", function () {
//   const clonedResumeBottomHTML = localStorage.getItem("clonedResumeBottomHTML");
//   const clonedScrollDiv2HTML = localStorage.getItem("clonedScrollDiv2HTML");

//   if (clonedResumeBottomHTML) {
//     resumeBottom.insertAdjacentHTML("beforeend", clonedResumeBottomHTML);
//   }

//   if (clonedScrollDiv2HTML) {
//     scrollDiv2.insertAdjacentHTML("beforeend", clonedScrollDiv2HTML);
//   }
//   // const clonedValid8 = clonedScrollDiv2.querySelector(".valid8");
//   // const clonedInvalid8 = clonedScrollDiv2.querySelector(".invalid8");
//   // const clonedSaswavlebeli = clonedScrollDiv2.querySelector(".saswavlebeli");

//   // const clonedValid8Display = localStorage.getItem("clonedValid8Display");
//   // const clonedInvalid8Display = localStorage.getItem("clonedInvalid8Display");
//   // const clonedSaswavlebeliBorderColor = localStorage.getItem(
//   //   "clonedSaswavlebeliBorderColor"
//   // );
//   // const clonedSaswavlebeliValue = localStorage.getItem(
//   //   "clonedSaswavlebeliValue"
//   // );

//   // const clonedXarisxiValue = localStorage.getItem("clonedXarisxiValue");
//   // const clonedXarisxiBorderColor = localStorage.getItem(
//   //   "clonedXarisxiBorderColor"
//   // );

//   // const clonedDamtavrebisRicxvi2Value = localStorage.getItem(
//   //   "clonedDamtavrebisRicxvi2Value"
//   // );
//   // const clonedDamtavrebisRicxvi2BorderColor = localStorage.getItem(
//   //   "clonedDamtavrebisRicxvi2BorderColor"
//   // );

//   // const clonedAgwera2Value = localStorage.getItem("clonedAgwera2Value");
//   // const clonedAgwera2TextValue = localStorage.getItem(
//   //   "clonedAgwera2Text_Value"
//   // );
//   // const clonedAgwera2BorderColor = localStorage.getItem(
//   //   "clonedAgwera2BorderColor"
//   // );

//   // if (
//   //   clonedValid8Display &&
//   //   clonedInvalid8Display &&
//   //   clonedSaswavlebeliBorderColor &&
//   //   clonedSaswavlebeliValue
//   // ) {
//   //   clonedValid8.style.display = clonedValid8Display;
//   //   clonedInvalid8.style.display = clonedInvalid8Display;
//   //   clonedSaswavlebeli.style.borderColor = clonedSaswavlebeliBorderColor;
//   //   clonedSaswavlebeli.value = clonedSaswavlebeliValue;
//   // }

//   // if (clonedXarisxiValue && clonedXarisxiBorderColor) {
//   //   clonedXarisxi.value = clonedXarisxiValue;
//   //   clonedXarisxi.style.borderColor = clonedXarisxiBorderColor;
//   // }

//   // if (clonedDamtavrebisRicxvi2Value && clonedDamtavrebisRicxvi2BorderColor) {
//   //   clonedDamtavrebisRicxvi2.value = clonedDamtavrebisRicxvi2Value;
//   //   clonedDamtavrebisRicxvi2.style.borderColor =
//   //     clonedDamtavrebisRicxvi2BorderColor;
//   // }

//   // if (
//   //   clonedAgwera2Value &&
//   //   clonedAgwera2TextValue &&
//   //   clonedAgwera2BorderColor
//   // ) {
//   //   clonedAgwera2.value = clonedAgwera2Value;
//   //   clonedAgwera2Text.value = clonedAgwera2TextValue;
//   //   clonedAgwera2.style.borderColor = clonedAgwera2BorderColor;
//   // }

//   clonedSaswavlebeli.value =
//     localStorage.getItem("clonedSaswavlebeliValue") || "";
//   clonedValid8.style.display = localStorage.getItem("clonedValid8Display");
//   clonedInvalid8.style.display = localStorage.getItem("clonedInvalid8Display");
//   clonedSaswavlebeli.style.borderColor = localStorage.getItem(
//     "clonedSaswavlebeliBorderColor"
//   );

//   clonedDamtavrebisRicxvi2.value =
//     localStorage.getItem("clonedDamtavrebisRicxvi2Value") || "";
//   clonedDamtavrebisRicxvi2.style.borderColor = localStorage.getItem(
//     "clonedDamtavrebisRicxvi2BorderColor"
//   );

//   clonedXarisxi.value = localStorage.getItem("clonedXarisxiValue") || "";
//   clonedXarisxi.style.borderColor = localStorage.getItem(
//     "clonedXarisxiBorderColor"
//   );

//   clonedAgwera2.value = localStorage.getItem("clonedAgwera2Value") || "";
//   clonedAgwera2.style.borderColor = localStorage.getItem(
//     "clonedAgwera2BorderColor"
//   );

//   if (clonedXarisxi.value == 1) {
//     clonedXarisxiText.textContent = ",საშუალო სკოლის დიპლომი";
//   } else if (clonedXarisxi.value == 2) {
//     clonedXarisxiText.textContent = ",ზოგადსაგანმანათლებლო დიპლომი";
//   } else if (clonedXarisxi.value == 3) {
//     clonedXarisxiText.textContent = ",ბაკალავრი";
//   } else if (clonedXarisxi.value == 4) {
//     clonedXarisxiText.textContent = ",მაგისტრი";
//   } else if (clonedXarisxi.value == 5) {
//     clonedXarisxiText.textContent = ",დოქტორი";
//   } else if (clonedXarisxi.value == 6) {
//     clonedXarisxiText.textContent = ",ასოცირებული ხარისხი";
//   } else if (clonedXarisxi.value == 7) {
//     clonedXarisxiText.textContent = ",სტუდენტი";
//   } else if (clonedXarisxi.value == 8) {
//     clonedXarisxiText.textContent = ",კოლეჯი(ხარისიხს გარეშე)";
//   } else if (clonedXarisxi.value == 9) {
//     clonedXarisxiText.textContent = ",სხვა";
//   }

//   clonedSaswavlebeliText.textContent = clonedSaswavlebeli.value;

//   clonedDamtavrebisRicxvi2Text.textContent = clonedDamtavrebisRicxvi2.value;

//   clonedGanatlebisAgweraText.textContent = clonedAgwera2.value;
// });
