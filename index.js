// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
// var navlink = document.getElementsByClassNam("nav-link");
// var navy = navlink.offsetTop;

// const d = document.getElementsByClassName(".nav-link");
// console.log(d.outerHTML);

// function myFunction() {
//   if (window.scrollY > sticky) {
//     navbar.classList.add("sticky");
//     d.style.color="black";
//     // morebtn.style.visibility="visible";

//   } else {
//     navbar.classList.toggle("sticky");
//     ele.style.color="#e09304";
//     // morebtn.style.visibility="hidden";
//   }
// }

function darkModee() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  document.getElementById("themee").innerHTML = "Light";
}

const constraints = {
  name: {
      presence: { allowEmpty: false }
  },
  email: {
      presence: { allowEmpty: false },
      email: true
  },
  message: {
      presence: { allowEmpty: false }
  }
};

const form = document.getElementById('feedback-form');

form.addEventListener('submit', function (event) {
const formValues = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value
};

const errors = validate(formValues, constraints);

if (errors) {
  event.preventDefault();
  const errorMessage = Object
      .values(errors)
      .map(function (fieldValues) { return fieldValues.join(', ')})
      .join("\n");

  alert(errorMessage);
}
}, false);