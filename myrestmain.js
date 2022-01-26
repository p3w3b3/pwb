{
var today= new Date(); 
var last = new Date(today.setDate(today.getDate() - 7))
var next = new Date(today.setDate(today.getDate() + 14))
{
$(function () {
  $("#daterange").daterangepicker({
    autoUpdateInput: false,
    autoApply: true,
    minDate: last,
    maxDate: next,

  });

  $("#daterange").on("apply.daterangepicker", function (ev, picker) {
    $(this).val(
      picker.startDate.format("MM/DD/YYYY") +
        " - " +
        picker.endDate.format("MM/DD/YYYY")
    );
    if (
      !!document.querySelector("#Type").value && document.querySelector("#Timeframe").value == "Temporary"
    ) {
      for (let i = 1; i < 6; i++)
        document.querySelector("#m" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#t" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#w" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#tt" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ff" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#s" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ss" + i).disabled = false;
    }
  });
});

$("#daterange").on("cancel.daterangepicker", function (ev, picker) {
  $(this).val("");
});
}





document.getElementById("Timeframe").addEventListener("change", () => {
if(document.querySelector("#Timeframe").value == "Permanent" && !!document.querySelector('#Type').value) {

for (let i = 1; i < 6; i++)
        document.querySelector("#m" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#t" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#w" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#tt" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ff" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#s" + i).disabled = false;

      for (let i = 1; i < 6; i++)
        document.querySelector("#ss" + i).disabled = false;


}})


  document.addEventListener("change", () => {
    if (document.querySelector("#Timeframe").value == "Temporary") {
      $("#tr").show();
    } else if (document.querySelector("#Timeframe").value == "Permanent") {
document.querySelector("#daterange").value = ''
      $("#tr").hide();
    }



    if(!!document.querySelector("#Type").value && !document.querySelector("#daterange").value &&  document.querySelector("#Timeframe").value == "Temporary"){

{
    for (let i = 1; i < 6; i++)
      document.querySelector("#m" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#t" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#w" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#tt" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#ff" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#s" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#ss" + i).disabled = true;
  }




}

  });

  document.getElementById("m5").addEventListener("change", () => {
    if (document.getElementById("m5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#m" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#m" + i).value = " ";
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#m" + i).disabled = false;
    }
  });

  document.getElementById("t5").addEventListener("change", () => {
    if (document.getElementById("t5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#t" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#t" + i).value = " ";
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#t" + i).disabled = false;
    }
  });

  document.getElementById("w5").addEventListener("change", () => {
    if (document.getElementById("w5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#w" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#w" + i).value = " ";
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#w" + i).disabled = false;
    }
  });

  document.getElementById("tt5").addEventListener("change", () => {
    if (document.getElementById("tt5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#tt" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#tt" + i).value = " ";
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#tt" + i).disabled = false;
    }
  });

  document.getElementById("ff5").addEventListener("change", () => {
    if (document.getElementById("ff5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#ff" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#ff" + i).value = " ";
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#ff" + i).disabled = false;
    }
  });

  document.getElementById("s5").addEventListener("change", () => {
    if (document.getElementById("s5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#s" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#s" + i).value = " ";
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#s" + i).disabled = false;
    }
  });

  document.getElementById("ss5").addEventListener("change", () => {
    if (document.getElementById("ss5").checked) {
      for (let i = 1; i < 5; i++)
        document.querySelector("#ss" + i).disabled = true;
      for (let i = 1; i < 5; i++) document.querySelector("#ss" + i).value = " ";
    } else {
      for (let i = 1; i < 5; i++)
        document.querySelector("#ss" + i).disabled = false;
    }
  });

  {
    let timeset = 0;
    $(".mainfieldopstime-r1").timepicker({
      timeFormat: "HH:mm",
      interval: 15,
      defaultTime: "09:00",
      startTime: "00:00",
      dynamic: true,
      dropdown: true,
      scrollbar: false,
      change: function () {
        timeset++;

        if (
          timeset > 1 &&
          !!document.querySelector("#Type").value &&
          !!document.querySelector("#Timeframe").value
        ) {
          $("#bt1").hide();
          $("#bt2").css("display", "block");
        }
      },
    });
  }

  {
    let timeset = 0;
    $(".mainfieldopstime-r2").timepicker({
      timeFormat: "HH:mm",
      interval: 15,
      defaultTime: "18:00",
      startTime: "00:00",
      dynamic: true,
      dropdown: true,
      scrollbar: false,
      change: function () {
        timeset++;

        if (
          timeset > 1 &&
          !!document.querySelector("#Type").value &&
          !!document.querySelector("#Timeframe").value
        ) {
          $("#bt1").hide();
          $("#bt2").css("display", "block");
        }
      },
    });
  }

  {
    for (let i = 1; i < 6; i++)
      document.querySelector("#m" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#t" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#w" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#tt" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#ff" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#s" + i).disabled = true;

    for (let i = 1; i < 6; i++)
      document.querySelector("#ss" + i).disabled = true;
  }

}



{
document.addEventListener("input", () => {
    if (document.querySelector("#cf4").value == "Other") {
    $('#cf8').show()
} else {
    $('#cf8').hide()
}


if(
!!document.querySelector("#cf1").value && 
!!document.querySelector("#cf2").value &&
!!document.querySelector("#cf3").value &&
(document.querySelector("#cf4").value != 'Other') &&
!!document.querySelector("#cf5").value &&
!!document.querySelector("#cf6").value &&
!!document.querySelector("#cf7").value &&
!!document.querySelector("#cf7").value &&
!!document.getElementById("Evidence").files.length

){
$("#btt1").hide()
$("#btt2").css("display", "block");
}

else if(
!!document.querySelector("#cf1").value && 
!!document.querySelector("#cf2").value &&
!!document.querySelector("#cf3").value &&
(document.querySelector("#cf4").value == 'Other') &&
!!document.querySelector("#cf5").value &&
!!document.querySelector("#cf6").value &&
!!document.querySelector("#cf7").value &&
!!document.querySelector("#cf7").value &&
!!document.querySelector("#cf8").value &&
!!document.getElementById("Evidence").files.length

){
$("#btt1").hide()
$("#btt2").css("display", "block");
}


else {
$("#btt1").css("display", "block");
$("#btt2").hide()
}


})
}


{
document.getElementById("Type").addEventListener("input", () => {
if (!!document.querySelector("#Type").value) { 
$("#tfbox").show();
} else {
$("#tfbox").hide();
}})
}
{
document.querySelector("#mydas").addEventListener("click", function() {
$('#db1').show()
$('#db2').hide()
$('#db3').hide()
$('#db4').hide()
$('#myres').removeClass("selected");
$('#mydas').addClass("selected");
$('#myan').removeClass("selected");
$('#sn11').addClass("cur");
$('#sn22').removeClass("cur");
$('#sb1').css("display", "flex");
$('#sb2').hide()
$('#sb3').hide()

})
document.querySelector("#myres").addEventListener("click", function() {
$('#db1').hide()
$('#db2').hide()
$('#db3').show()
$('#db4').hide()
$('#mydas').removeClass("selected");
$('#myan').removeClass("selected");
$('#myres').addClass("selected");
$('#sn11').addClass("cur");
$('#sn22').removeClass("cur");
$('#sb1').hide()
$('#sb2').css("display", "flex");
$('#sb3').hide()

})
document.querySelector("#myan").addEventListener("click", function() {
$('#db1').hide()
$('#db2').hide()
$('#db3').hide()
$('#db4').show()
$('#mydas').removeClass("selected");
$('#myres').removeClass("selected");
$('#myan').addClass("selected");
$('#sn11').addClass("cur");
$('#sn22').removeClass("cur");
$('#sb1').hide()
$('#sb2').hide()
$('#sb3').css("display", "flex");
})

}




{
const formatToCurrency = amount => {
  return "£" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
document.querySelector('#grosstot').textContent =(formatToCurrency( Number($('#grosstot').text())))
}
{
let rating = document.querySelectorAll('.leaderboard-rating')
let nl = (Number($('#numl').text()))
let nh = (Number($('#numh').text()))
rating.forEach((rating) => {
let ratingn = (Number(rating.textContent))
rating.closest(".leaderboard-bar").style.width = (100 - (ratingn-nl) / (nh - nl) * 100  + '%')
})
}
{
let rating = document.querySelectorAll('.ranking-gross')
let nl = (Number($('#grossl').text()))
let nh = (Number($('#grossh').text()))
rating.forEach((rating) => {
let ratingn = (Number(rating.textContent))
rating.closest(".ranking-bar").style.width = (0.4 + (ratingn - nl) / (nh - nl) * 100 + '%')
})
}
{
let rating = document.querySelectorAll('.ranking-gross')
const formatToCurrency = amount => {
return "£" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
rating.forEach((rating) => {
let ratingn = (Number(rating.textContent))
rating.textContent =(formatToCurrency(ratingn))
})
}


