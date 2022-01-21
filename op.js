{
const formatToCurrency = amount => {
  return "£" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
let num1 = parseInt($('#rev1').text())
let num2 = parseInt($('#rev2').text())
if(num1>num2) {
$('#rev1').css("color", "#75c19d")
} else  if(num1===num2)
$('#rev1').css("color", "#75c19d")
else {
$('#rev1').css("color", "#F47056")
}
$('#rev1').text(formatToCurrency(num1))
$('#rev2').text(formatToCurrency(num2))
}
{
var rat1 = document.getElementById('rat1').textContent
var rat2 = document.getElementById('rat2').textContent
if( (Number(rat1))>(Number(rat2))) {
$('#rat1').css("color", "#75c19d")
} else if( (Number(rat1))===(Number(rat2))) {
$('#rat1').css("color", "#75c19d") }
 else {
$('#rat1').css("color", "#F47056")
}}
{
let pp1 = $('#prep1').text().slice(3,6)
let pp11 = $('#prep1').text().slice(0,2)
let ptime1 = pp11 + 'm ' + pp1 + 's'
$('#prep1').text(ptime1)
let pp2 = $('#prep2').text().slice(3,6)
let pp22 = $('#prep2').text().slice(0,2)
let ptime2 = pp22 + 'm ' + pp2 + 's'
$('#prep2').text(ptime2)
var ppt1 = document.getElementById('prep1').textContent
var ppt2 = document.getElementById('prep2').textContent
if( (Number(ppt1))<(Number(ppt2)) ) {
$('#prep1').css("color", "#F47056")
} else if( (Number(ppt1))===(Number(ppt2))) {
$('#prep1').css("color", "#F47056")
} else { 
$('#prep1').css("color", "#75c19d")
}
}
{
var upt1 = document.getElementById('upt1').textContent
var upt2 = document.getElementById('upt2').textContent
$('#upt1').text(upt1 + '%')
$('#upt2').text(upt2 + '%')
if( (Number(upt1))>(Number(upt2)) ) {
$('#upt1').css("color", "#75c19d")
} else if ( (Number(upt1))<(Number(upt2)) ) {
$('#upt1').css("color", "#F47056")
}
else {
$('#upt1').css("color", "#75c19d")
}}
document.querySelector("#ac1").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai1').css("background-color", "#ffffff")
$('#ai11').css("background-color", "#ffffff")
$('#ai111').css("background-color", "#ffffff")
$('#ab1').css('display', 'flex');
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').hide()
})
document.querySelector("#ac2").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai2').css("background-color", "#ffffff")
$('#ai22').css("background-color", "#ffffff")
$('#ai222').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').css('display', 'flex');
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').hide()
})
{
document.querySelector("#ac3").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai3').css("background-color", "#ffffff")
$('#ai33').css("background-color", "#ffffff")
$('#ai333').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').css('display', 'flex');
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').hide()
})
document.querySelector("#ac4").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai4').css("background-color", "#ffffff")
$('#ai44').css("background-color", "#ffffff")
$('#ai444').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').css('display', 'flex');
$('#ab5').hide()
$('#ab6').hide()
})
document.querySelector("#ac5").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai5').css("background-color", "#ffffff")
$('#ai55').css("background-color", "#ffffff")
$('#ai555').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').css('display', 'flex');
$('#ab6').hide()
})
document.querySelector("#ac6").addEventListener("click", function() {
$('.al-button-text').css("background-color", "transparent")
$('.fwiconops').css("background-color", "transparent")
$('#ai6').css("background-color", "#ffffff")
$('#ai66').css("background-color", "#ffffff")
$('#ai666').css("background-color", "#ffffff")
$('#ab1').hide()
$('#ab2').hide()
$('#ab3').hide()
$('#ab4').hide()
$('#ab5').hide()
$('#ab6').css('display', 'flex');
})
}
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
