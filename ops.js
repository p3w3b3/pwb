{
document.querySelector("#sn1").addEventListener("click", function() {
$('#db1').show()
$('#db2').hide()
$('#sn11').addClass("cur");
$('#sn22').removeClass("cur");
})
document.querySelector("#sn2").addEventListener("click", function() {
$('#db1').hide()
$('#db2').show()
$('#sn22').addClass("cur");
$('#sn11').removeClass("cur");
})
}
{
let csv = Number($('#csv').text())
if(csv>7 && csv<13) {
$('#currtarget').text(12)
$('#cs3').show()
$('#cs2').hide()
$('#cs1').hide()
$('#tsk3').css("background-color", "#e9fff4");
}
if(csv>3 && csv<9) {
$('#currtarget').text(4)
$('#cs3').hide()
$('#cs2').show()
$('#cs1').hide()
$('#tsk2').css("background-color", "#e9fff4");
}
if(csv === -1) {
$('#cs3').hide()
$('#cs2').hide()
$('#cs1').hide()
$('#cs0').show()
$('#tsk0').css("background-color", "#ffd7cd");
$('#promo1').css("background-color", "#f16d4d");
$('#promo2').css("background-color", "#f16d4d");
}
if(csv === -2) {
$('#cs3').hide()
$('#cs2').hide()
$('#cs1').hide()
$('#cs0').show()
$('#tsk0').css("background-color", "#ffd7cd");
$('#promo1').css("background-color", "#f16d4d");
$('#promo2').css("background-color", "#f16d4d");
$('#promo3').css("background-color", "#f16d4d");
}
if(csv === -3) {
$('#cs3').hide()
$('#cs2').hide()
$('#cs1').hide()
$('#cs0').show()
$('#tsk0').css("background-color", "#ffd7cd");
$('#promo1').css("background-color", "#f16d4d");
$('#promo2').css("background-color", "#f16d4d");
$('#promo3').css("background-color", "#f16d4d");
$('#promo4').css("background-color", "#f16d4d");
}
if(csv === -4) {
$('#cs3').hide()
$('#cs2').hide()
$('#cs1').hide()
$('#cs0').show()
$('#tsk0').css("background-color", "#ffd7cd");
$('#promo1').css("background-color", "#f16d4d");
$('#promo2').css("background-color", "#f16d4d");
$('#promo3').css("background-color", "#f16d4d");
$('#promo4').css("background-color", "#f16d4d");
$('#promo5').css("background-color", "#f16d4d");
$('#promo6').css("background-color", "#f16d4d");
}
if(csv === 0 || csv>0 && csv<5) {
$('#cs3').hide()
$('#cs2').hide()
$('#cs1').show()
$('#tsk1').css("background-color", "#e9fff4");
}
if(csv == 1 || csv ==  5 || csv == 9) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
}
if(csv == 2 || csv == 4 || csv == 6 || csv == 10) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
}
if(csv == 3 ||csv == 7 || csv == 11) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
$('#promo4').css("background-color", "#b6e8d0");
}
if(csv == 4 || csv == 8 || csv == 12 ) {
$('#promo1').css("background-color", "#b6e8d0");
$('#promo2').css("background-color", "#b6e8d0");
$('#promo3').css("background-color", "#b6e8d0");
$('#promo4').css("background-color", "#b6e8d0");
$('#promo5').css("background-color", "#b6e8d0");
$('#promo6').css("background-color", "#b6e8d0");
}
}
