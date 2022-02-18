document.querySelector("#ops4").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db4').show()
$('.generic-heading-ops').removeClass("cur");
$('#ops4').addClass("cur");
})



document.querySelector("#myan").addEventListener("click", function() {
$('.main-section-ops').hide()
$('#db4').show()

$('.sub-nav').hide()
$('#sb3').css("display", "flex");

$('.generic-heading-ops').removeClass("cur");
$('#ops4').addClass("cur")

$('.nav-selection').removeClass("selected");
$('#myan').addClass("selected");
})
