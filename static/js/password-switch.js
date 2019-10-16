function initPasswordSwitch() {
  var passwordInputs, parent, pwdSwitch;

  passwordInputs = document.getElementsByClassName("password-switch");

  for (var i = 0; i < passwordInputs.length; i++) {
    passwordInputs[i].addEventListener("click", function (e) {
      parent = this.parentNode
      pwdSwitch = parent.getElementsByClassName("password-switch")[0];
      pwdSwitch.classList.toggle("visible");

      if (pwdSwitch.classList.contains('visible')) {
        parent.getElementsByTagName("input")[0].setAttribute("type", "text");
      } else {
        parent.getElementsByTagName("input")[0].setAttribute("type", "password");
      }
    });
  }
}

window.addEventListener('load', initPasswordSwitch)