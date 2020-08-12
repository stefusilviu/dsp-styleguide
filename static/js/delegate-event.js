document.addEventListener('click', function (event) {
    var element = event.target;
    //add show password event
    if(element.classList.contains('password-switch')){ initPasswordSwitch(element); return;}
    //add toggle show details
    if(element.matches('[data-card-toggle="true"]')){ initCardToggle(element); }
});
