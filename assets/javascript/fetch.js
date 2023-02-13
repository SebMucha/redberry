let fname = localStorage.getItem("fname");
let lname = localStorage.getItem("lname");
let email = localStorage.getItem("email");
let number = localStorage.getItem("number");
let tanamdeboba = localStorage.getItem("tanamdebobaValue");
let damsaqmebeli = localStorage.getItem("damsaqmebeliValue");
let dawyebisRicxvi = localStorage.getItem("dawyebisRicxviValue");
let damtavrebisRicxvi = localStorage.getItem("damtavrebisRicxviValue");
let agwera = localStorage.getItem("agweraValue");
let saswavlebeli = localStorage.getItem("saswavlebeliValue");
let damtavrebisRicxvi2 = localStorage.getItem("damtavrebisRicxvi2Value");
let agwera2 = localStorage.getItem("agwera2Value");
let xarisxi = localStorage.getItem("xarisxiValue");
const privPic = document.querySelector(".priv_pic");
privPic.src = URL.createObjectURL(picUpload.files[0]);
localStorage.setItem("pic", privPic.src);
function imgBase64() {
  return new Promise(function (resolve, reject) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = privPic.src;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
  });
}
const data = {
  name: fname,
  surname: lname,
  email: email,
  phone_number: number,
  experiences: [
    {
      position: tanamdeboba,
      employer: damsaqmebeli,
      start_date: dawyebisRicxvi,
      due_date: damtavrebisRicxvi,
      description: agwera,
    },
  ],
  educations: [
    {
      institute: saswavlebeli,
      degree: xarisxi,
      due_date: damtavrebisRicxvi2,
      description: agwera2,
    },
  ],
  image: dataURL,
  about_me: "ეს არის აღწერა ჩემს შესახებ",
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

fetch("https://resume.redberryinternship.ge/api/cvs", options)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
