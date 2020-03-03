(function () {
    window.addEventListener('load', function () {
        var ccInputs = document.getElementsByClassName('cc-input');
        if (ccInputs.length) {
            var cleave = new Cleave('.cc-input', {
                creditCard: true,
                onCreditCardTypeChanged: function (type) {
                    var typeEl = this.element.parentNode.getElementsByClassName('cc-type')[0];
                    if (type !== 'unknown') {
                        typeEl.className = 'cc-type ' + type;
                    } else {
                        typeEl.className = 'cc-type';
                    }
                }
            });
        }
    });
})();