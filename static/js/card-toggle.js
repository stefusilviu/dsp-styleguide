function initCardToggle(element) {
    toggle(element,element.parentNode.parentNode);
}


function toggle(toggleBtn, card) {
  var content = card.getElementsByClassName("card-expandable-content")[0];
  if (!card.classList.contains('open')) {
    card.classList.add('open');
    content.style.height = "auto";
    var height = content.offsetHeight + "px";
    content.style.height = "0px";
    setTimeout(function () {
      content.style.height = height;
    }, 0);
  } else {
    content.style.height = "0px";
    content.addEventListener('transitionend', function () {
      card.classList.remove('open');
    }, { once: true });
  }
}

window.addEventListener('load', initCardToggle);
