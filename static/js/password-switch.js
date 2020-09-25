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

(function () {
    //'[data-toggle="password-or-text"]'
    //this._triggerArray = [].slice.call(document.querySelectorAll("input[data-toggle=\"password-or-text\"]"));
    var toggleList = document.querySelectorAll('input[data-toggle="password-or-text"]');

    for (var i = 0; i < toggleList.length; i++) {
        (function () {
            var passChangeElement = document.createElement("p");
            var targetElement = toggleList[i];
            passChangeElement.className = "password-or-text";
            passChangeElement.addEventListener('click', function (event) {
                if (targetElement.getAttribute("type") === "password") {
                    targetElement.setAttribute("type", "text");
                    targetElement.classList.add("visible");
                } else {
                    targetElement.setAttribute("type", "password");
                    targetElement.classList.remove("visible");
                }
            });
            targetElement.parentNode.append(passChangeElement);
        })();
    }
})();
