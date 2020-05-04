function initPasswordSwitch(element) {
  var parent;
  parent = element.parentNode;
  element.classList.toggle('visible');
  if (element.classList.contains('visible')) {
    parent.getElementsByTagName("input")[0].setAttribute("type", "text");
  } else {
    parent.getElementsByTagName("input")[0].setAttribute("type", "password");
  }
}
