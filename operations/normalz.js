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


{
let obdata = "{{wf {&quot;path&quot;:&quot;fom-data&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
var obdt = obdata.split('|');
let fomname = obdt[0]
let fomemail = obdt[1]
let fomnumber = obdt[2]
let fomphoto = obdt[3]

document.getElementById("obname").textContent = fomname
document.getElementById("obemail").textContent = fomemail
document.getElementById("obphoto").src=fomphoto
}
