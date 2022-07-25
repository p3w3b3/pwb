(function(w, d, s){
var j = document.createElement(s); j.async = 1; j.type = 'text/javascript'; j.src = 'https://widget.eu.karehq.com/latest.js';
w.GLR = w.GLR || {};
d.getElementsByTagName("head")[0].appendChild(j);
})(window, document, "script");

setTimeout(() => {
kare.onEscalate(function(callbackEvent, messageBody) {
Intercom('show');
kare.close()
});
}, "1000")
