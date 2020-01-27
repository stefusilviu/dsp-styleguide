function initCardToggle() {
  var cards, parent;

  cards = document.getElementsByClassName("card-toggle-button");

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function (e) {
      parent = this.parentNode.parentNode;
      toggle(cards[i], parent)
    });
  }
}

function toggle(toggleBtn, card) {
  var content = card.getElementsByClassName("card-expandable-content")[0];
  if (!card.classList.contains('open')) {
    // card.classList.add('open');
    // content.style.height = "auto";
    // var height = content.offsetHeight + "px";
    // content.style.height = "0px";
    // setTimeout(function() {
    //   content.style.height = height;
    // }, 0);
  } else {
    content.style.height = "0px";
    content.addEventListener('transitionend', function() {
      card.classList.remove('open');
    }, { once: true });
  }
}

window.addEventListener('load', initCardToggle);