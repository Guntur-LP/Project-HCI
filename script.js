const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// menghilangkan sidebar ketika klik di luar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});


function validateForm(event){
  event.preventDefault();
  contactForm = document.getElementById("contactForm");
  fullname = document.getElementById("fullname");
  email = document.getElementById("email");
  mobile = document.getElementById("mobile");
  contMobile = document.getElementById("contMobile")
  contEmail = document.getElementById("contEmail")
  message = document.getElementById("message")
  messageSub = document.getElementById("messageSub")
  error = document.getElementById("error");

  if(fullname.value.length < 5){
      error.innerHTML = "Fullname must be at least 5 characters";
  } else if(!email.value.endsWith("@gmail.com")){
      error.innerHTML = "Email must ends with '@gmail.com'";
  } else if(isNaN(mobile.value)) {
      error.innerHTML = "Mobile number must be a number";
  } else if(mobile.value == '') {
      error.innerHTML = "Mobile number must be fill in";
  } else if(messageSub.value == ''){
      error.innerHTML = "Subject Message must be fill in";
  } else if(message.value == ''){
      error.innerHTML = "Message must be fill in";
  } else if(!(contMobile.checked || contEmail.checked)){
      error.innerHTML = "Preferred contact method must be picked";
  } else {
      error.innerHTML = "Successful";
      contactForm.submit();
  }
}
