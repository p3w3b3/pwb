{
let timeset = 0
    $('.date-field').timepicker({

  timeFormat: "HH:mm",
  interval: 15,
  defaultTime: "",
  startTime: "00:00",
  dynamic: false,
  dropdown: true,
  scrollbar: false,
  change: function() {
timeset++

if(timeset>0) {
    $("#continueb2").hide();
    $("#nextb2").css("display", "flex");
}
  }})

document.addEventListener("change", () => {
  const field4 = !!document.querySelector("#rad1").checked;
  const field5 = !!document.querySelector("#rad2").checked;

  if (field4) {
    $("#datep1").css("display", "flex");
    $("#datep2").hide();
  }
  if (field5) {
    $("#datep1").hide();
    $("#datep2").css("display", "flex");
  }

})

}

{
    $('.date-field2').timepicker({

  timeFormat: "HH:mm",
  interval: 15,
  defaultTime: "",
  startTime: "00:00",
  dynamic: false,
  dropdown: true,
  scrollbar: false,
    })}



{

(function($) {

  $('.date-field').attr('autocomplete','off').keydown(function(e){

    // Input Value var
    var inputValue = $(this).val();

    // Make sure keypress value is a Number
    if( (e.keyCode > 47 && e.keyCode < 58) || e.keyCode == 8){

      // Make sure first value is not greater than 2
      if(inputValue.length == 0){
        if(e.keyCode > 49){
          e.preventDefault();
          $(this).val(2);
        }
      }

      // Make sure second value is not greater than 4
      else if(inputValue.length == 1 && e.keyCode != 8){
        e.preventDefault();
        if( inputValue[0]==2 && e.keyCode > 50 ){
          $(this).val(inputValue + '3:');
        }
        else{
          $(this).val(inputValue + String.fromCharCode(e.keyCode) + ':');
        }
      }

      else if(inputValue.length == 2 && e.keyCode != 8){
        e.preventDefault();
        if( e.keyCode > 52 ){
          $(this).val(inputValue + ':5');
        }
        else{
          $(this).val(inputValue + ':' + String.fromCharCode(e.keyCode));
        }
      }

      // Make sure that third value is not greater than 5
      else if(inputValue.length == 3 && e.keyCode != 8){
        if( e.keyCode > 52 ){
          e.preventDefault();
          $(this).val( inputValue + '5' );
        }
      }

      // Make sure only 5 Characters can be input
      else if(inputValue.length > 4 && e.keyCode != 8){
        e.preventDefault();
        return false;
      }
    }

    // Prevent Alpha and Special Character inputs
    else{
      e.preventDefault();
      return false;
    }
  }); // End Timepicker KeyUp function

})(jQuery);
}

{

(function($) {

  $('.date-field2').attr('autocomplete','off').keydown(function(e){

    // Input Value var
    var inputValue = $(this).val();

    // Make sure keypress value is a Number
    if( (e.keyCode > 47 && e.keyCode < 58) || e.keyCode == 8){

      // Make sure first value is not greater than 2
      if(inputValue.length == 0){
        if(e.keyCode > 49){
          e.preventDefault();
          $(this).val(2);
        }
      }

      // Make sure second value is not greater than 4
      else if(inputValue.length == 1 && e.keyCode != 8){
        e.preventDefault();
        if( inputValue[0]==2 && e.keyCode > 50 ){
          $(this).val(inputValue + '3:');
        }
        else{
          $(this).val(inputValue + String.fromCharCode(e.keyCode) + ':');
        }
      }

      else if(inputValue.length == 2 && e.keyCode != 8){
        e.preventDefault();
        if( e.keyCode > 52 ){
          $(this).val(inputValue + ':5');
        }
        else{
          $(this).val(inputValue + ':' + String.fromCharCode(e.keyCode));
        }
      }

      // Make sure that third value is not greater than 5
      else if(inputValue.length == 3 && e.keyCode != 8){
        if( e.keyCode > 52 ){
          e.preventDefault();
          $(this).val( inputValue + '5' );
        }
      }

      // Make sure only 5 Characters can be input
      else if(inputValue.length > 4 && e.keyCode != 8){
        e.preventDefault();
        return false;
      }
    }

    // Prevent Alpha and Special Character inputs
    else{
      e.preventDefault();
      return false;
    }
  }); // End Timepicker KeyUp function

})(jQuery);
}



document.addEventListener("input", () => {
  const ff1 = !!document.getElementById("f1").value;
  const ff2 = !!document.getElementById("f2").value;
  const ff3 = !!document.getElementById("f3").value;
  const ff4 = !!document.getElementById("f4").value;
  const ff6 = !!document.getElementById("f6").value;
  const ff7 = !!document.getElementById("f7").value;
  const ff8 = !!document.getElementById("f8").value;

  if (ff1 && ff2 && ff3 && ff4 && ff6 && ff7 && ff8) {
    $("#nextb1").show();
    $("#continueb1").hide();
  } else {
    $("#nextb1").hide();
    $("#continueb1").show();
  }
});


document.getElementById("nextb1").addEventListener("click", () => {
  $("#first-p2").css("display", "flex");
  $("#hidden1").hide();
});

document.getElementById("nextb2").addEventListener("click", () => {
  $("#hidden2").hide();
  $("#first-p3").css("display", "flex");
});

document.getElementById("nextb3").addEventListener("click", () => {
  $("#firstpart").hide();
  $("#secondpart").css("display", "flex");
});

document.getElementById("return1").addEventListener("click", () => {
  $("#firstpart").css("display", "flex");
  $("#secondpart").hide();
});

document.getElementById("return2").addEventListener("click", () => {
  $("#secondpart").css("display", "flex");
  $("#thirdpart").hide();
});

document.getElementById("return3").addEventListener("click", () => {
  $("#thirdpart").css("display", "flex");
  $("#fourthpart").hide();
});

document.getElementById("return4").addEventListener("click", () => {
  $("#fourthpart").css("display", "flex");
  $("#fifthpart").hide();
});

document.getElementById("return6").addEventListener("click", () => {
  $("#sixthpart").css("display", "flex");
  $("#seventhpart").hide();
});

document.getElementById("return5").addEventListener("click", () => {
  $("#fifthpart").css("display", "flex");
  $("#sixthpart").hide();
});

document.getElementById("nextb4").addEventListener("click", () => {
  $("#hidden3").hide();
  $("#secondp2").css("display", "flex");
});

document.getElementById("nextb5").addEventListener("click", () => {
  $("#secondp3").css("display", "flex");
  $("#hidden4").hide();
});

document.getElementById("nextb6").addEventListener("click", () => {
  $("#third-p2").css("display", "flex");
  $("#hidden5").hide();
});

document.getElementById("nextb7").addEventListener("click", () => {
  $("#third-p3").css("display", "flex");
  $("#hidden6").hide();
});

document.getElementById("nextb8").addEventListener("click", () => {
  $("#fourthpart").css("display", "flex");
  $("#thirdpart").hide();
});

document.getElementById("nextb9").addEventListener("click", () => {
  $("#fourth-2").css("display", "flex");
  $("#hidden7").hide();
});

document.getElementById("nextb10").addEventListener("click", () => {
  $("#fifthpart").css("display", "flex");
  $("#fourthpart").hide();
});

document.getElementById("nextb11").addEventListener("click", () => {
  $("#sixthpart").css("display", "flex");
  $("#fifthpart").hide();
});

document.getElementById("nextb12").addEventListener("click", () => {
  $("#sixth-p2").css("display", "flex");
  $("#hidden8").hide();
});

document.getElementById("nextb13").addEventListener("click", () => {
  $("#seventhpart").css("display", "flex");
  $("#sixthpart").hide();
});

document.addEventListener("input", () => {
  const field7 = !!document.querySelector("#closed1").checked;
  const field8 = !!document.querySelector("#closed2").checked;
  const field9 = !!document.querySelector("#closed3").checked;
  const field10 = !!document.querySelector("#closed4").checked;
  const field11 = !!document.querySelector("#closed5").checked;
  const field12 = !!document.querySelector("#closed6").checked;
  const field13 = !!document.querySelector("#closed7").checked;
  const field14 = !!document.querySelector("#cls1").checked;
  const field15 = !!document.querySelector("#cls2").checked;
  const field16 = !!document.querySelector("#cls3").checked;
  const field17 = !!document.querySelector("#cls4").checked;
  const field18 = !!document.querySelector("#cls5").checked;
  const field19 = !!document.querySelector("#cls6").checked;
  const field20 = !!document.querySelector("#cls7").checked;
  const field21 = !!document.querySelector("#rad3").checked;
  const field22 = !!document.getElementById("Kitchen-Video").files.length;
  const field23 = !!document.querySelector("#field23").value;
  const field24 = !!document.querySelector("#field24").value;
  const field25 = !!document.querySelector("#rad33").checked;

  if (field7) {
    $("#dt1").attr("disabled", "disabled");
    $("#dt11").attr("disabled", "disabled");
    $("#dt2").attr("disabled", "disabled");
    $("#dt22").attr("disabled", "disabled");
    $("#dt1").css("background-color", "#272724");
    $("#dt11").css("background-color", "#272724");
    $("#dt2").css("background-color", "#272724");
    $("#dt22").css("background-color", "#272724");
  } else {
    $("#dt1").removeAttr("disabled");
    $("#dt11").removeAttr("disabled");
    $("#dt2").removeAttr("disabled");
    $("#dt22").removeAttr("disabled");
    $("#dt1").css("background-color", "#e7e7e7");
    $("#dt11").css("background-color", "#e7e7e7");
    $("#dt2").css("background-color", "#e7e7e7");
    $("#dt22").css("background-color", "#e7e7e7");
  }

  if (field8) {
    $("#dt3").attr("disabled", "disabled");
    $("#dt33").attr("disabled", "disabled");
    $("#dt4").attr("disabled", "disabled");
    $("#dt44").attr("disabled", "disabled");
    $("#dt3").css("background-color", "#272724");
    $("#dt33").css("background-color", "#272724");
    $("#dt4").css("background-color", "#272724");
    $("#dt44").css("background-color", "#272724");
  } else {
    $("#dt3").removeAttr("disabled");
    $("#dt33").removeAttr("disabled");
    $("#dt4").removeAttr("disabled");
    $("#dt44").removeAttr("disabled");
    $("#dt3").css("background-color", "#e7e7e7");
    $("#dt33").css("background-color", "#e7e7e7");
    $("#dt4").css("background-color", "#e7e7e7");
    $("#dt44").css("background-color", "#e7e7e7");
  }

  if (field9) {
    $("#dt5").attr("disabled", "disabled");
    $("#dt55").attr("disabled", "disabled");
    $("#dt6").attr("disabled", "disabled");
    $("#dt66").attr("disabled", "disabled");
    $("#dt5").css("background-color", "#272724");
    $("#dt55").css("background-color", "#272724");
    $("#dt6").css("background-color", "#272724");
    $("#dt66").css("background-color", "#272724");
  } else {
    $("#dt5").removeAttr("disabled");
    $("#dt55").removeAttr("disabled");
    $("#dt6").removeAttr("disabled");
    $("#dt66").removeAttr("disabled");
    $("#dt5").css("background-color", "#e7e7e7");
    $("#dt55").css("background-color", "#e7e7e7");
    $("#dt6").css("background-color", "#e7e7e7");
    $("#dt66").css("background-color", "#e7e7e7");
  }

  if (field10) {
    $("#dt7").attr("disabled", "disabled");
    $("#dt77").attr("disabled", "disabled");
    $("#dt8").attr("disabled", "disabled");
    $("#dt88").attr("disabled", "disabled");
    $("#dt7").css("background-color", "#272724");
    $("#dt77").css("background-color", "#272724");
    $("#dt8").css("background-color", "#272724");
    $("#dt88").css("background-color", "#272724");
  } else {
    $("#dt7").removeAttr("disabled");
    $("#dt77").removeAttr("disabled");
    $("#dt8").removeAttr("disabled");
    $("#dt88").removeAttr("disabled");
    $("#dt7").css("background-color", "#e7e7e7");
    $("#dt77").css("background-color", "#e7e7e7");
    $("#dt8").css("background-color", "#e7e7e7");
    $("#dt88").css("background-color", "#e7e7e7");
  }

  if (field11) {
    $("#dt9").attr("disabled", "disabled");
    $("#dt99").attr("disabled", "disabled");
    $("#dt10").attr("disabled", "disabled");
    $("#dt100").attr("disabled", "disabled");
    $("#dt9").css("background-color", "#272724");
    $("#dt99").css("background-color", "#272724");
    $("#dt10").css("background-color", "#272724");
    $("#dt100").css("background-color", "#272724");
  } else {
    $("#dt9").removeAttr("disabled");
    $("#dt99").removeAttr("disabled");
    $("#dt10").removeAttr("disabled");
    $("#dt100").removeAttr("disabled");
    $("#dt9").css("background-color", "#e7e7e7");
    $("#dt99").css("background-color", "#e7e7e7");
    $("#dt10").css("background-color", "#e7e7e7");
    $("#dt100").css("background-color", "#e7e7e7");
  }

  if (field12) {
    $("#dt111").attr("disabled", "disabled");
    $("#dt1111").attr("disabled", "disabled");
    $("#dt12").attr("disabled", "disabled");
    $("#dt122").attr("disabled", "disabled");
    $("#dt111").css("background-color", "#272724");
    $("#dt1111").css("background-color", "#272724");
    $("#dt12").css("background-color", "#272724");
    $("#dt122").css("background-color", "#272724");
  } else {
    $("#dt111").removeAttr("disabled");
    $("#dt1111").removeAttr("disabled");
    $("#dt12").removeAttr("disabled");
    $("#dt122").removeAttr("disabled");
    $("#dt111").css("background-color", "#e7e7e7");
    $("#dt1111").css("background-color", "#e7e7e7");
    $("#dt12").css("background-color", "#e7e7e7");
    $("#dt122").css("background-color", "#e7e7e7");
  }

  if (field13) {
    $("#dt13").attr("disabled", "disabled");
    $("#dt133").attr("disabled", "disabled");
    $("#dt14").attr("disabled", "disabled");
    $("#dt144").attr("disabled", "disabled");
    $("#dt13").css("background-color", "#272724");
    $("#dt133").css("background-color", "#272724");
    $("#dt14").css("background-color", "#272724");
    $("#dt144").css("background-color", "#272724");
  } else {
    $("#dt13").removeAttr("disabled");
    $("#dt133").removeAttr("disabled");
    $("#dt14").removeAttr("disabled");
    $("#dt144").removeAttr("disabled");
    $("#dt13").css("background-color", "#e7e7e7");
    $("#dt133").css("background-color", "#e7e7e7");
    $("#dt14").css("background-color", "#e7e7e7");
    $("#dt144").css("background-color", "#e7e7e7");
  }

  if (field14) {
    $("#dat1").attr("disabled", "disabled");
    $("#dat11").attr("disabled", "disabled");
    $("#dat1").css("background-color", "#272724");
    $("#dat11").css("background-color", "#272724");
  } else {
    $("#dat1").removeAttr("disabled");
    $("#dat11").removeAttr("disabled");
    $("#dat1").css("background-color", "#e7e7e7");
    $("#dat11").css("background-color", "#e7e7e7");
  }

  if (field15) {
    $("#dat2").attr("disabled", "disabled");
    $("#dat22").attr("disabled", "disabled");
    $("#dat2").css("background-color", "#272724");
    $("#dat22").css("background-color", "#272724");
  } else {
    $("#dat2").removeAttr("disabled");
    $("#dat22").removeAttr("disabled");
    $("#dat2").css("background-color", "#e7e7e7");
    $("#dat22").css("background-color", "#e7e7e7");
  }

  if (field16) {
    $("#dat3").attr("disabled", "disabled");
    $("#dat33").attr("disabled", "disabled");
    $("#dat3").css("background-color", "#272724");
    $("#dat33").css("background-color", "#272724");
  } else {
    $("#dat3").removeAttr("disabled");
    $("#dat33").removeAttr("disabled");
    $("#dat3").css("background-color", "#e7e7e7");
    $("#dat33").css("background-color", "#e7e7e7");
  }

  if (field17) {
    $("#dat4").attr("disabled", "disabled");
    $("#dat44").attr("disabled", "disabled");
    $("#dat4").css("background-color", "#272724");
    $("#dat44").css("background-color", "#272724");
  } else {
    $("#dat4").removeAttr("disabled");
    $("#dat44").removeAttr("disabled");
    $("#dat4").css("background-color", "#e7e7e7");
    $("#dat44").css("background-color", "#e7e7e7");
  }

  if (field18) {
    $("#dat5").attr("disabled", "disabled");
    $("#dat55").attr("disabled", "disabled");
    $("#dat5").css("background-color", "#272724");
    $("#dat55").css("background-color", "#272724");
  } else {
    $("#dat5").removeAttr("disabled");
    $("#dat55").removeAttr("disabled");
    $("#dat5").css("background-color", "#e7e7e7");
    $("#dat55").css("background-color", "#e7e7e7");
  }

  if (field19) {
    $("#dat6").attr("disabled", "disabled");
    $("#dat66").attr("disabled", "disabled");
    $("#dat6").css("background-color", "#272724");
    $("#dat66").css("background-color", "#272724");
  } else {
    $("#dat6").removeAttr("disabled");
    $("#dat66").removeAttr("disabled");
    $("#dat6").css("background-color", "#e7e7e7");
    $("#dat66").css("background-color", "#e7e7e7");
  }

  if (field20) {
    $("#dat7").attr("disabled", "disabled");
    $("#dat77").attr("disabled", "disabled");
    $("#dat7").css("background-color", "#272724");
    $("#dat77").css("background-color", "#272724");
  } else {
    $("#dat7").removeAttr("disabled");
    $("#dat77").removeAttr("disabled");
    $("#dat7").css("background-color", "#e7e7e7");
    $("#dat77").css("background-color", "#e7e7e7");
  }

  if (field21 && field22) {
    $("#nextb3").show();
    $("#continueb3").hide();
  } else if ((field25 && field22) || field25) {
    $("#nextb3").hide();
    $("#continueb3").show();
  }
});

document.addEventListener("input", () => {
  const field1 = !!document.querySelector("#rad4").checked;

  const field2 = !!document.querySelector("#rad5").checked;
  const field3 = !!document.querySelector("#field25").value;
  const field4 = !!document.querySelector("#field26").value;
  const field5 = !!document.querySelector("#field27").value;

  if (field1) {
    $("#nextb5").show();
    $("#hco").hide();
    $("#continueb5").hide();
  }
  if (field2) {
    $("#nextb5").hide();
    $("#hco").show();
    $("#continueb5").show();
  }
  if (field2 && field3 && field4 && field5) {
    $("#nextb5").show();
    $("#continueb5").hide();
  }
});

{
document.addEventListener("input", () => {
  const f1 = document.getElementById("field23").value;
  const f2 = document.getElementById("field24").value;
  const f3 = document.getElementById("chk1").checked;
  const f4 = document.getElementById("chk2").checked;
  const f5 = document.getElementById("chk3").checked;

  const f6 = document.getElementById("ff1").value;
  const f7 = document.getElementById("ff2").value;
  const f8 = document.getElementById("ff3").value;

  const f9 = document.getElementById("ff4").value;
  const f10 = document.getElementById("ff5").value;
  const f11 = document.getElementById("ff6").value;

  const f12 = document.getElementById("ff7").value;
  const f13 = document.getElementById("ff8").value;
  const f14 = document.getElementById("ff9").value;

const ftwo = (!!f1 && !!f2)



// if only first two fields
  if (ftwo && !f3 && !f4 && !f5) {
    $("#nextb4").css("display", "flex");
    $("#continueb4").css("display", "none");
    $("#spb4").css("display", "none");
  }
// site manager
  if (ftwo && !f3 && !!f4 && !f5) {
    $("#nextb4").css("display", "none");
    $("#continueb4").css("display", "none");
    $("#spb4").css("display", "flex");

document.getElementById('spb4').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "none");
    $("#ffbox2").css("display", "flex");
    $("#ffbox3").css("display", "none");

}}


// operations manager
  if (ftwo && !f3 && !f4 && !!f5) {
    $("#nextb4").css("display", "none");
    $("#continueb4").css("display", "none");
    $("#spb4").css("display", "flex");

document.getElementById('spb4').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "none");
    $("#ffbox2").css("display", "none");
    $("#ffbox3").css("display", "flex");

}}



//  finance department + site manager
if (ftwo && !!f3 && !!f4 && !f5) {
    $("#nextb4").css("display", "none");
    $("#continueb4").css("display", "none");
    $("#spb4").css("display", "flex");

document.getElementById('spb4').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "flex");
    $("#ffbox2").css("display", "none");
    $("#ffbox3").css("display", "none");

}}



//  finance department + site manager + operations manager
if (ftwo && !!f3 && !!f4 && !!f5) {
    $("#nextb4").css("display", "none");
    $("#continueb4").css("display", "none");
    $("#spb4").css("display", "flex");

document.getElementById('spc2').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "none");
    $("#ffbox2").css("display", "none");
    $("#ffbox3").css("display", "flex");

}}



//  finance department (all fields)  + site manager + operations manager
if (ftwo && !!f3 && !!f4 && !!f5 && !!f6 && !!f7 && !!f8) {
   
     $("#sp1").css("display", "none");
    $("#spc1").css("display", "flex");
document.getElementById('spc1').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "none");
    $("#ffbox2").css("display", "flex");
    $("#ffbox3").css("display", "none");
}}


//  finance department (all fields)  + site manager ( all fields )  + operations manager
if (ftwo && !!f3 && !!f4 && !!f5 && !!f6 && !!f7 && !!f8 && !!f9 && !!f10 && f11) {
   
    $("#sp2").css("display", "none");
    $("#spc2").css("display", "flex");
document.getElementById('spc2').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "none");
    $("#ffbox2").css("display", "none");
    $("#ffbox3").css("display", "flex");
}}



//  finance department (all fields)  + site manager ( all fields )  + operations manager ( all fields)
if (ftwo && !!f3 && !!f4 && !!f5 && !!f6 && !!f7 && !!f8 && !!f9 && !!f10 && !!f11 && !!f12 && !!f13 && !!f14) {
   
    $("#sp3").css("display", "none");
    $("#spc3").css("display", "flex");
document.getElementById('spc3').onclick = function() { 
    $("#hidden3").css("display", "none");
    $("#secondp2").css("display", "flex");
}}



//  finance department
if (ftwo && !!f3 && !f4 && !f5) {
    $("#nextb4").css("display", "none");
    $("#continueb4").css("display", "none");
    $("#spb4").css("display", "flex");

document.getElementById('spb4').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "flex");
    $("#ffbox2").css("display", "none");
    $("#ffbox3").css("display", "none");

}}


//  finance department ( all fields) 
if (ftwo && !!f3 && !f4 && !f5 && !!f6 && !!f7 && !!f8) {
    $("#sp1").css("display", "none");
    $("#spc1").css("display", "flex");
document.getElementById('spc1').onclick = function() { 
    $("#hidden3").css("display", "none");
    $("#secondp2").css("display", "flex");

}}


//  finance department ( all fields)  + site manager
if (ftwo && !!f3 && !!f4 && !f5 && !!f6 && !!f7 && !!f8) {
    $("#sp1").css("display", "none");
    $("#spc1").css("display", "flex");
document.getElementById('spc1').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "none");
    $("#ffbox2").css("display", "flex");
    $("#ffbox3").css("display", "none");
}}


//  finance department ( all fields)  + site manager ( all fields)
if (ftwo && !!f3 && !!f4 && !f5 && !!f6 && !!f7 && !!f8 && !!f9 && !!f10 && !!f11) {
    $("#sp2").css("display", "none");
    $("#spc2").css("display", "flex");
document.getElementById('spc2').onclick = function() { 
    $("#hidden3").css("display", "none");
    $("#secondp2").css("display", "flex");
}}







//  site manager + operations manager
if (ftwo && !f3 && !!f4 && !!f5) {
    $("#nextb4").css("display", "none");
    $("#continueb4").css("display", "none");
    $("#spb4").css("display", "flex");

document.getElementById('spb4').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "none");
    $("#ffbox2").css("display", "flex");
    $("#ffbox3").css("display", "none");

}}

//  site manager ( all fields ) + operations manager
if (ftwo && !f3 && !!f4 && !!f5 && !!f9 && !!f10 && !!f11) {
    $("#sp2").css("display", "none");
    $("#spc2").css("display", "flex");

document.getElementById('spc2').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "none");
    $("#ffbox2").css("display", "none");
    $("#ffbox3").css("display", "flex");

}}


//  site manager ( all fields ) + operations manager ( all fields) 
if (ftwo && !f3 && !!f4 && !!f5 && !!f9 && !!f10 && !!f11 && !!f12 && !!f13 && !!f14) {
    $("#sp3").css("display", "none");
    $("#spc3").css("display", "flex");

document.getElementById('spc3').onclick = function() { 
    $("#hidden3").css("display", "none");
    $("#secondp2").css("display", "flex");

}}



//  operations manager ( all fields)
if (ftwo && !f3 && !f4 && !!f5 && !!f12 && !!f13 && !!f14) {
    $("#sp3").css("display", "none");
    $("#spc3").css("display", "flex");

document.getElementById('spc3').onclick = function() { 
    $("#hidden3").css("display", "none");
    $("#secondp2").css("display", "flex");

}}



//  site manager( all fields)
if (ftwo && !f3 && !!f4 && !f5 && !!f9 && !!f10 && !!f11) {
    $("#sp2").css("display", "none");
    $("#spc2").css("display", "flex");

document.getElementById('spc2').onclick = function() { 
    $("#hidden3").css("display", "none");
    $("#secondp2").css("display", "flex");

}}





//  finance department + operations manager
if (ftwo && !!f3 && !f4 && !!f5) {
    $("#nextb4").css("display", "none");
    $("#continueb4").css("display", "none");
    $("#spb4").css("display", "flex");

document.getElementById('spb4').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "flex");
    $("#ffbox2").css("display", "none");
    $("#ffbox3").css("display", "none");

}}

//  finance department ( all fields ) + operations manager
if (ftwo && !!f3 && !f4 && !!f5 && !!f6 && !!f7 && !!f8) {
    $("#sp1").css("display", "none");
    $("#spc1").css("display", "flex");

document.getElementById('spc1').onclick = function() { 
    $("#mainbox").css("display", "none");
    $("#ffbox1").css("display", "none");
    $("#ffbox2").css("display", "none");
    $("#ffbox3").css("display", "flex");

}}


//  site manager ( all fields ) + operations manager ( all fields) 
if (ftwo && !!f3 && !f4 && !!f5 && !!f6 && !!f7 && !!f8 && !!f12 && !!f13 && !!f14) {
    $("#sp3").css("display", "none");
    $("#spc3").css("display", "flex");

document.getElementById('spc3').onclick = function() { 
    $("#hidden3").css("display", "none");
    $("#secondp2").css("display", "flex");

}}





})

}

{
  document.getElementById("chef2").addEventListener("input", function () {
    let chef2value = document.getElementById("chef2").value;
    let v = parseInt(document.getElementById("chef2").value);
    let cf1 = $("#cf1").show();
    let cf2 = $("#cf2").show();
    let cf3 = $("#cf3").show();
    let cf4 = $("#cf4").show();
    let cf5 = $("#cf5").show();
    let cf6 = $("#cf6").show();
    let cf7 = $("#cf7").show();
    let cf8 = $("#cf8").show();
    let cf9 = $("#cf9").show();
    let cf10 = $("#cf10").show();
    let continuecf1nextcf1 =
      $("#continuecf1").show() &&
      $("#nextcf1").hide() &&
      $("#finishcf1").hide();
    let continuecf1nextcf2 =
      $("#continuecf2").show() &&
      $("#nextcf2").hide() &&
      $("#finishcf2").hide();
    let continuecf1nextcf3 =
      $("#continuecf3").show() &&
      $("#nextcf3").hide() &&
      $("#finishcf3").hide();
    let continuecf1nextcf4 =
      $("#continuecf4").show() &&
      $("#nextcf4").hide() &&
      $("#finishcf4").hide();
    let continuecf1nextcf5 = $("#continuecf5").show() && $("#finishcf5").hide();

    if (v === 0) {
      $("#finishchef1").show() &&
        $("#nextcf1").hide() &&
        $("#continuecf1").hide() &&
        $("#cf1").hide();
    }

    if (v === 1) {
      cf1 &&
        $("#cf2").hide() &&
        $("#cf3").hide() &&
        $("#cf4").hide() &&
        $("#cf5").hide() &&
        $("#cf6").hide() &&
        $("#cf7").hide() &&
        $("#cf8").hide() &&
        $("#cf9").hide();
    }

    if (v === 2) {
      cf1 &&
        cf2 &&
        $("#cf3").hide() &&
        $("#cf4").hide() &&
        $("#cf5").hide() &&
        $("#cf6").hide() &&
        $("#cf7").hide() &&
        $("#cf8").hide() &&
        $("#cf9").hide() &&
        continuecf1nextcf1;
    }

    if (v === 3) {
      cf1 &&
        cf2 &&
        cf3 &&
        $("#cf4").hide() &&
        $("#cf5").hide() &&
        $("#cf6").hide() &&
        $("#cf7").hide() &&
        $("#cf8").hide() &&
        $("#cf9").hide();
    }

    if (v === 4) {
      cf1 &&
        cf2 &&
        cf3 &&
        cf4 &&
        $("#cf5").hide() &&
        $("#cf6").hide() &&
        $("#cf7").hide() &&
        $("#cf8").hide() &&
        $("#cf9").hide();
    }

    if (v === 5) {
      cf1 &&
        cf2 &&
        cf3 &&
        cf4 &&
        cf5 &&
        $("#cf6").hide() &&
        $("#cf7").hide() &&
        $("#cf8").hide() &&
        $("#cf9").hide();
    }

    if (v === 6) {
      cf1 &&
        cf2 &&
        cf3 &&
        cf4 &&
        cf5 &&
        cf6 &&
        $("#cf7").hide() &&
        $("#cf8").hide() &&
        $("#cf9").hide();
    }

    if (v === 7) {
      cf1 &&
        cf2 &&
        cf3 &&
        cf4 &&
        cf5 &&
        cf6 &&
        cf7 &&
        $("#cf8").hide() &&
        $("#cf9").hide();
    }

    if (v === 8) {
      cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && cf7 && cf8 && $("#cf9").hide();
    }

    if (v === 9) {
      cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && cf7 && cf8 && cf9;
    }
  });
}

document.addEventListener("input", () => {
  let v = parseInt(document.getElementById("chef2").value);

  const cf1f1 = !!document.getElementById("cf1-f1").value;
  const cf1f2 = !!document.getElementById("cf1-f2").value;

  const cf2f1 = !!document.getElementById("cf2-f1").value;
  const cf2f2 = !!document.getElementById("cf2-f2").value;

  const cf3f1 = !!document.getElementById("cf3-f1").value;
  const cf3f2 = !!document.getElementById("cf3-f2").value;

  const cf4f1 = !!document.getElementById("cf4-f1").value;
  const cf4f2 = !!document.getElementById("cf4-f2").value;

  const cf5f1 = !!document.getElementById("cf5-f1").value;
  const cf5f2 = !!document.getElementById("cf5-f2").value;

  const cf6f1 = !!document.getElementById("cf6-f1").value;
  const cf6f2 = !!document.getElementById("cf6-f2").value;

  const cf7f1 = !!document.getElementById("cf7-f1").value;
  const cf7f2 = !!document.getElementById("cf7-f2").value;

  const cf8f1 = !!document.getElementById("cf8-f1").value;
  const cf8f2 = !!document.getElementById("cf8-f2").value;

  const cf9f1 = !!document.getElementById("cf9-f1").value;
  const cf9f2 = !!document.getElementById("cf9-f2").value;

  if (v === 1 && cf1f1 && cf1f2) {
    document.getElementById("continuecf1").style.display = "none";
    document.getElementById("nextcf1").style.display = "none";
    document.getElementById("finishchef1").style.display = "block";
  }

  if (v === 2 && cf1f1 && cf1f2 && cf2f1 && cf2f2) {
    document.getElementById("continuecf2").style.display = "none";
    document.getElementById("nextcf2").style.display = "none";
    document.getElementById("finishchef2").style.display = "block";
  }

  if (v === 3 && cf1f1 && cf1f2 && cf2f1 && cf2f2 && cf3f1 && cf3f2) {
    document.getElementById("continuecf2").style.display = "none";
    document.getElementById("nextcf2").style.display = "none";
    document.getElementById("finishchef2").style.display = "block";
  }

if (v === 3 && cf1f1 && cf1f2 && cf2f1 && cf2f2 && (!document.getElementById("cf3-f1").value) && (!document.getElementById("cf3-f2").value)) {
    document.getElementById("continuecf2").style.display = "block";
    document.getElementById("nextcf2").style.display = "none";
    document.getElementById("finishchef2").style.display = "none";
  }

  if (v === 5 && cf1f1 && cf1f2 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && (!document.getElementById("cf5-f1").value) && (!document.getElementById("cf5-f2").value)) {
    document.getElementById("continuecf3").style.display = "block";
    document.getElementById("nextcf3").style.display = "none";
    document.getElementById("finishchef3").style.display = "none";
  }

  if (v === 7 && cf1f1 && cf1f2 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && (!document.getElementById("cf7-f1").value) && (!document.getElementById("cf7-f2").value)) {
    document.getElementById("continuecf4").style.display = "block";
    document.getElementById("nextcf4").style.display = "none";
    document.getElementById("finishchef4").style.display = "none";
  }

  if (v === 9 && cf1f1 && cf1f2 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2 && cf8f1 && cf8f2 &&  (!document.getElementById("cf9-f1").value) && (!document.getElementById("cf9-f2").value)) {
    document.getElementById("continuecf").style.display = "block";
    document.getElementById("nextcf5").style.display = "none";
    document.getElementById("finishchef5").style.display = "none";
  }





  if (
    v === 4 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2
  ) {
    document.getElementById("continuecf3").style.display = "none";
    document.getElementById("nextcf3").style.display = "none";
    document.getElementById("finishchef3").style.display = "block";
  }

  if (
    v === 5 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2 &&
    cf5f1 &&
    cf5f2
  ) {
    document.getElementById("continuecf3").style.display = "none";
    document.getElementById("nextcf3").style.display = "none";
    document.getElementById("finishchef3").style.display = "block";
  }

  if (
    v === 6 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2 &&
    cf5f1 &&
    cf5f2
  ) {
    document.getElementById("continuecf3").style.display = "none";
    document.getElementById("nextcf3").style.display = "block";
    document.getElementById("finishchef3").style.display = "none";
  }

  if (
    v === 6 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2 &&
    cf5f1 &&
    cf5f2 &&
    cf6f1 &&
    cf6f2
  ) {
    document.getElementById("continuecf4").style.display = "none";
    document.getElementById("nextcf4").style.display = "none";
    document.getElementById("finishchef4").style.display = "block";
  }
  if (
    v === 7 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2 &&
    cf5f1 &&
    cf5f2 &&
    cf6f1 &&
    cf6f2 &&
    cf7f1 &&
    cf7f2
  ) {
    document.getElementById("continuecf4").style.display = "none";
    document.getElementById("nextcf4").style.display = "none";
    document.getElementById("finishchef4").style.display = "block";
  }
  if (
    v === 8 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2 &&
    cf5f1 &&
    cf5f2 &&
    cf6f1 &&
    cf6f2 &&
    cf7f1 &&
    cf7f2
  ) {
    document.getElementById("continuecf4").style.display = "none";
    document.getElementById("nextcf4").style.display = "block";
    document.getElementById("finishchef4").style.display = "none";
  }
  if (
    v === 8 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2 &&
    cf5f1 &&
    cf5f2 &&
    cf6f1 &&
    cf6f2 &&
    cf7f1 &&
    cf7f2 &&
    cf8f1 &&
    cf8f2
  ) {
    document.getElementById("continuecf5").style.display = "none";
    document.getElementById("finishchef5").style.display = "block";
  }
  if (
    v === 9 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2 &&
    cf5f1 &&
    cf5f2 &&
    cf6f1 &&
    cf6f2 &&
    cf7f1 &&
    cf7f2 &&
    cf8f1 &&
    cf8f2 &&
    cf9f1 &&
    cf9f2
  ) {
    document.getElementById("continuecf5").style.display = "none";
    document.getElementById("finishchef5").style.display = "block";
  }
  if (v > 1 && cf1f1 && cf1f2) {
    document.getElementById("continuecf1").style.display = "none";
    document.getElementById("nextcf1").style.display = "block";
    document.getElementById("finishchef1").style.display = "none";
  }
  if (v > 3 && cf1f1 && cf1f2 && cf2f1 && cf2f2 && cf3f1 && cf3f2) {
    document.getElementById("continuecf2").style.display = "none";
    document.getElementById("nextcf2").style.display = "block";
    document.getElementById("finishchef2").style.display = "none";
  }

  if (
    v > 5 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2 &&
    cf5f1 &&
    cf5f2
  ) {
    document.getElementById("continuecf3").style.display = "none";
    document.getElementById("nextcf3").style.display = "block";
    document.getElementById("finishchef3").style.display = "none";
  }
  if (
    v > 7 &&
    cf1f1 &&
    cf1f2 &&
    cf2f1 &&
    cf2f2 &&
    cf3f1 &&
    cf3f2 &&
    cf4f1 &&
    cf4f2 &&
    cf5f1 &&
    cf5f2 &&
    cf6f1 &&
    cf6f2 &&
    cf7f1 &&
    cf7f2
  ) {
    document.getElementById("continuecf4").style.display = "none";
    document.getElementById("nextcf4").style.display = "block";
    document.getElementById("finishchef4").style.display = "none";
  }
});
{
  document.addEventListener("input", ({ target }) => {
    if (["field28", "field29"].includes(target.id)) {
      const allHaveValues = Array.from(
        document.querySelectorAll("#field28, #field29")
      ).every(({ value }) => value);
      document.querySelector("#continueb7").style.display = allHaveValues
        ? "none"
        : "block";
      document.querySelector("#nextb7").style.display = allHaveValues
        ? "block"
        : "none";
    }
  });
}

{
  document.addEventListener("input", () => {
    const tf1 = !!document.getElementById("tf1").value;
    const tf2 = !!document.getElementById("tf2").value;
    const tf3 = !!document.getElementById("tf3").value;
    const tf4 = !!document.getElementById("tf4").value;
    const tf5 = !!document.getElementById("tf5").value;
    const p8check = !!document.getElementById("Tech-Delivery-Yes").checked;
    const p8check2 = !!document.getElementById("Tech-Delivery-No").checked;

    if (p8check) {
      document.getElementById("tech-box").style.display = "none";
      document.getElementById("continueb8").style.display = "none";
      document.getElementById("nextb8").style.display = "flex";
    }

    if (p8check2) {
      document.getElementById("tech-box").style.display = "flex";
      document.getElementById("continueb8").style.display = "flex";
      document.getElementById("nextb8").style.display = "none";
    } else {
      document.getElementById("tech-box").style.display = "none";
    }

    if (p8check2 && tf1 && tf2 && tf3 && tf4 && tf5) {
      document.getElementById("continueb8").style.display = "none";
      document.getElementById("nextb8").style.display = "flex";
    }
  });
}

{
  document.addEventListener("input", () => {
    const checkbox1 = !!document.getElementById("cb1").checked;
    const checkbox2 = !!document.getElementById("cb2").checked;
    const checkbox3 = !!document.getElementById("cb3").checked;
    const checkbox4 = !!document.getElementById("cb4").checked;
    const checkbox5 = !!document.getElementById("cb5").checked;
    const field1 = !!document.getElementById("cb6").value;
    const allHaveValues =
      checkbox1 || checkbox2 || checkbox3 || checkbox4 || (checkbox5 && field1);
    document.getElementById("continueb9").style.display = allHaveValues
      ? "none"
      : "block";
    document.getElementById("nextb9").style.display = allHaveValues
      ? "block"
      : "none";
    if (checkbox5) {
      document.querySelector("#cb6").style.display = "block";
    } else {
      document.querySelector("#cb6").style.display = "none";
    }
  });
}

{
  document.addEventListener("input", ({ target }) => {
    if (
      ["p2-1", "p2-2", "p2-3", "p2-4", "p2-5", "p2-6", "p2-7"].includes(
        target.id
      )
    ) {
      const allHaveValues = Array.from(
        document.querySelectorAll("#p2-1, #p2-2,#p2-3,#p2-4,#p2-5,#p2-6,#p2-7")
      ).every(({ value }) => value);
      if (allHaveValues) {
        document.getElementById("continueb10").style.display = "none";
        document.getElementById("nextb10").style.display = "block";
      } else {
        document.getElementById("nextb10").style.display = "none";
        document.getElementById("continueb10").style.display = "block";
      }
    }
  });
}

document.addEventListener("input", () => {
  const cch1 = !!document.querySelector("#agree1").checked;
  const cch2 = !!document.querySelector("#agree3").checked;
  const cch3 = !!document.querySelector("#agree5").checked;

  if (cch1 && cch2 && cch3) {
    $("#nextb11").css("display", "flex");
    $("#continueb11").hide();
  } else {
    $("#nextb11").hide();
    $("#continueb11").css("display", "flex");
  }
});

document.addEventListener("input", () => {
  const instr = !!document.querySelector("#ds1").value;
  const fileup = !!document.getElementById("location-pin").files.length;

  if (instr && fileup) {
    $("#nextb13").css("display", "flex");
    $("#continueb13").hide();
  } else {
    $("#nextb13").hide();
    $("#continueb13").css("display", "flex");
  }
});

$(".date-pick").timepicker({
  timeFormat: "HH:mm",
  interval: 60,
  minTime: "10",
  maxTime: "6:00pm",
  defaultTime: "",
  startTime: "10:00",
  dynamic: false,
  dropdown: true,
  scrollbar: true,
});












document.addEventListener("input", () => {
  const a1 = !!document.querySelector("#ap1").checked;
  const a2 = !!document.querySelector("#ap2").checked;
  const a3 = !!document.querySelector("#ap3").checked;
  const a4 = !!document.querySelector("#ap4").checked;

  const hd1 = !!document.querySelector("#hd1").checked;
  const hd2 = !!document.querySelector("#hd2").checked;
  const hd3 = !!document.querySelector("#hd3").checked;
  const hd4 = !!document.querySelector("#hd4").checked;
  const hd5 = !!document.querySelector("#hd5").checked;
  const hd6 = !!document.querySelector("#hd6").checked;
  const hd7 = !!document.querySelector("#hd7").checked;


  const hd11 = !!document.querySelector("#hd11").checked;
  const hd22 = !!document.querySelector("#hd22").checked;
  const hd33 = !!document.querySelector("#hd33").checked;
  const hd44 = !!document.querySelector("#hd44").checked;
  const hd55 = !!document.querySelector("#hd55").checked;
  const hd66 = !!document.querySelector("#hd66").checked;
  const hd77 = !!document.querySelector("#hd77").checked;


  if (a2) {
    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
    $("#splanned").hide();
  } else {
    $("#nextb12").hide();
    $("#continueb12").css("display", "flex");
  }

  if (a1) {
    $("#splanned").css("display", "flex");
  }

  if (a1 && a3) {
    $("#datep3").css("display", "flex");
    $("#datep4").hide();
  } else {
    $("#datep3").hide();
  }

  if (a1 && a4) {
    $("#datep4").css("display", "flex");
    $("#datep3").hide();
  } else {
    $("#datep4").hide();
  }

  if (hd1) {
    $("#dtt1").removeAttr("disabled");
    $("#dtt1").css("background-color", "#e7e7e7");

    $("#dtt2").removeAttr("disabled");
    $("#dtt2").css("background-color", "#e7e7e7");

    $("#dtt3").removeAttr("disabled");
    $("#dtt3").css("background-color", "#e7e7e7");

    $("#dtt4").removeAttr("disabled");
    $("#dtt4").css("background-color", "#e7e7e7");

    $("#clsd1").removeAttr("disabled");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
    $("#cl1").css("background-color", "#e7e7e7");
  } else {
    $("#dtt1").attr("disabled", "disabled");
    $("#dtt1").css("background-color", "#272724");

    $("#dtt2").attr("disabled", "disabled");
    $("#dtt2").css("background-color", "#272724");
    
    $("#dtt3").attr("disabled", "disabled");
    $("#dtt3").css("background-color", "#272724");
    
    $("#dtt4").attr("disabled", "disabled");
    $("#dtt4").css("background-color", "#272724");
   
    $("#clsd1").attr("disabled", "disabled");
    $("#cl1").css("background-color", "#272724");
}

  if (hd2) {
    $("#dtt5").removeAttr("disabled");
    $("#dtt5").css("background-color", "#e7e7e7");
    $("#dtt6").removeAttr("disabled");
    $("#dtt6").css("background-color", "#e7e7e7");
    $("#dtt7").removeAttr("disabled");
    $("#dtt7").css("background-color", "#e7e7e7");
    $("#dtt8").removeAttr("disabled");
    $("#dtt8").css("background-color", "#e7e7e7");
    $("#clsd2").removeAttr("disabled");
    $("#cl2").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dtt5").attr("disabled", "disabled");
    $("#dtt5").css("background-color", "#272724");
    $("#dtt6").attr("disabled", "disabled");
    $("#dtt6").css("background-color", "#272724");
    $("#dtt7").attr("disabled", "disabled");
    $("#dtt7").css("background-color", "#272724");
    $("#dtt8").attr("disabled", "disabled");
    $("#dtt8").css("background-color", "#272724");
    $("#clsd2").attr("disabled", "disabled");
    $("#cl2").css("background-color", "#272724");
}

  if (hd3) {
    $("#dtt9").removeAttr("disabled");
    $("#dtt9").css("background-color", "#e7e7e7");
    $("#dtt10").removeAttr("disabled");
    $("#dtt10").css("background-color", "#e7e7e7");
    $("#dtt11").removeAttr("disabled");
    $("#dtt11").css("background-color", "#e7e7e7");
    $("#dtt12").removeAttr("disabled");
    $("#dtt12").css("background-color", "#e7e7e7");
    $("#clsd3").removeAttr("disabled");
    $("#cl3").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dtt9").attr("disabled", "disabled");
    $("#dtt9").css("background-color", "#272724");
    $("#dtt10").attr("disabled", "disabled");
    $("#dtt10").css("background-color", "#272724");
    $("#dtt11").attr("disabled", "disabled");
    $("#dtt11").css("background-color", "#272724");
    $("#dtt12").attr("disabled", "disabled");
    $("#dtt12").css("background-color", "#272724");
    $("#clsd3").attr("disabled", "disabled");
    $("#cl3").css("background-color", "#272724");
}

  if (hd4) {
    $("#dtt13").removeAttr("disabled");
    $("#dtt13").css("background-color", "#e7e7e7");
    $("#dtt14").removeAttr("disabled");
    $("#dtt14").css("background-color", "#e7e7e7");
    $("#dtt15").removeAttr("disabled");
    $("#dtt15").css("background-color", "#e7e7e7");
    $("#dtt16").removeAttr("disabled");
    $("#dtt16").css("background-color", "#e7e7e7");
    $("#clsd4").removeAttr("disabled");
    $("#cl4").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dtt13").attr("disabled", "disabled");
    $("#dtt13").css("background-color", "#272724");
    $("#dtt14").attr("disabled", "disabled");
    $("#dtt14").css("background-color", "#272724");
    $("#dtt15").attr("disabled", "disabled");
    $("#dtt15").css("background-color", "#272724");
    $("#dtt16").attr("disabled", "disabled");
    $("#dtt16").css("background-color", "#272724");
    $("#clsd4").attr("disabled", "disabled");
    $("#cl4").css("background-color", "#272724");
}

  if (hd5) {
    $("#dtt17").removeAttr("disabled");
    $("#dtt17").css("background-color", "#e7e7e7");
    $("#dtt18").removeAttr("disabled");
    $("#dtt18").css("background-color", "#e7e7e7");
    $("#dtt19").removeAttr("disabled");
    $("#dtt19").css("background-color", "#e7e7e7");
    $("#dtt20").removeAttr("disabled");
    $("#dtt20").css("background-color", "#e7e7e7");
    $("#clsd5").removeAttr("disabled");
    $("#cl5").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dtt17").attr("disabled", "disabled");
    $("#dtt17").css("background-color", "#272724");
    $("#dtt18").attr("disabled", "disabled");
    $("#dtt18").css("background-color", "#272724");
    $("#dtt19").attr("disabled", "disabled");
    $("#dtt19").css("background-color", "#272724");
    $("#dtt20").attr("disabled", "disabled");
    $("#dtt20").css("background-color", "#272724");
    $("#clsd5").attr("disabled", "disabled");
    $("#cl5").css("background-color", "#272724");
}

  if (hd6) {
    $("#dtt21").removeAttr("disabled");
    $("#dtt21").css("background-color", "#e7e7e7");
    $("#dtt22").removeAttr("disabled");
    $("#dtt22").css("background-color", "#e7e7e7");
    $("#dtt23").removeAttr("disabled");
    $("#dtt23").css("background-color", "#e7e7e7");
    $("#dtt24").removeAttr("disabled");
    $("#dtt24").css("background-color", "#e7e7e7");
    $("#clsd6").removeAttr("disabled");
    $("#cl6").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dtt21").attr("disabled", "disabled");
    $("#dtt21").css("background-color", "#272724");
    $("#dtt22").attr("disabled", "disabled");
    $("#dtt22").css("background-color", "#272724");
    $("#dtt23").attr("disabled", "disabled");
    $("#dtt23").css("background-color", "#272724");
    $("#dtt24").attr("disabled", "disabled");
    $("#dtt24").css("background-color", "#272724");
    $("#clsd6").attr("disabled", "disabled");
    $("#cl6").css("background-color", "#272724");
}


  if (hd7) {
    $("#dtt25").removeAttr("disabled");
    $("#dtt25").css("background-color", "#e7e7e7");
    $("#dtt26").removeAttr("disabled");
    $("#dtt26").css("background-color", "#e7e7e7");
    $("#dtt27").removeAttr("disabled");
    $("#dtt27").css("background-color", "#e7e7e7");
    $("#dtt28").removeAttr("disabled");
    $("#dtt28").css("background-color", "#e7e7e7");
    $("#clsd7").removeAttr("disabled");
    $("#cl7").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dtt25").attr("disabled", "disabled");
    $("#dtt25").css("background-color", "#272724");
    $("#dtt26").attr("disabled", "disabled");
    $("#dtt26").css("background-color", "#272724");
    $("#dtt27").attr("disabled", "disabled");
    $("#dtt27").css("background-color", "#272724");
    $("#dtt28").attr("disabled", "disabled");
    $("#dtt28").css("background-color", "#272724");
    $("#clsd7").attr("disabled", "disabled");
    $("#cl7").css("background-color", "#272724");
}



if (hd11) {
    $("#dts1").removeAttr("disabled");
    $("#dts1").css("background-color", "#e7e7e7");
    $("#dts2").removeAttr("disabled");
    $("#dts2").css("background-color", "#e7e7e7");
    $("#clsd11").removeAttr("disabled");
    $("#cl11").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dts1").attr("disabled", "disabled");
    $("#dts1").css("background-color", "#272724");
    $("#dts2").attr("disabled", "disabled");
    $("#dts2").css("background-color", "#272724");
    $("#clsd11").attr("disabled", "disabled");
    $("#cl11").css("background-color", "#272724");
}

if (hd22) {
    $("#dts3").removeAttr("disabled");
    $("#dts3").css("background-color", "#e7e7e7");
    $("#dts4").removeAttr("disabled");
    $("#dts4").css("background-color", "#e7e7e7");
    $("#clsd22").removeAttr("disabled");
    $("#cl22").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dts3").attr("disabled", "disabled");
    $("#dts3").css("background-color", "#272724");
    $("#dts4").attr("disabled", "disabled");
    $("#dts4").css("background-color", "#272724");
    $("#clsd22").attr("disabled", "disabled");
    $("#cl22").css("background-color", "#272724");
}


if (hd33) {
    $("#dts5").removeAttr("disabled");
    $("#dts5").css("background-color", "#e7e7e7");
    $("#dts6").removeAttr("disabled");
    $("#dts6").css("background-color", "#e7e7e7");
    $("#clsd33").removeAttr("disabled");
    $("#cl33").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dts5").attr("disabled", "disabled");
    $("#dts5").css("background-color", "#272724");
    $("#dts6").attr("disabled", "disabled");
    $("#dts6").css("background-color", "#272724");
    $("#clsd33").attr("disabled", "disabled");
    $("#cl33").css("background-color", "#272724");
}

if (hd44) {
    $("#dts7").removeAttr("disabled");
    $("#dts7").css("background-color", "#e7e7e7");
    $("#dts8").removeAttr("disabled");
    $("#dts8").css("background-color", "#e7e7e7");
    $("#clsd44").removeAttr("disabled");
    $("#cl44").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dts7").attr("disabled", "disabled");
    $("#dts7").css("background-color", "#272724");
    $("#dts8").attr("disabled", "disabled");
    $("#dts8").css("background-color", "#272724");
    $("#clsd44").attr("disabled", "disabled");
    $("#cl44").css("background-color", "#272724");
}

if (hd55) {
    $("#dts9").removeAttr("disabled");
    $("#dts9").css("background-color", "#e7e7e7");
    $("#dts10").removeAttr("disabled");
    $("#dts10").css("background-color", "#e7e7e7");
    $("#clsd55").removeAttr("disabled");
    $("#cl55").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dts9").attr("disabled", "disabled");
    $("#dts9").css("background-color", "#272724");
    $("#dts10").attr("disabled", "disabled");
    $("#dts10").css("background-color", "#272724");
    $("#clsd55").attr("disabled", "disabled");
    $("#cl55").css("background-color", "#272724");
}

if (hd66) {
    $("#dts11").removeAttr("disabled");
    $("#dts11").css("background-color", "#e7e7e7");
    $("#dts12").removeAttr("disabled");
    $("#dts12").css("background-color", "#e7e7e7");
    $("#clsd66").removeAttr("disabled");
    $("#cl66").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dts11").attr("disabled", "disabled");
    $("#dts11").css("background-color", "#272724");
    $("#dts12").attr("disabled", "disabled");
    $("#dts12").css("background-color", "#272724");
    $("#clsd66").attr("disabled", "disabled");
    $("#cl66").css("background-color", "#272724");
}


if (hd77) {
    $("#dts13").removeAttr("disabled");
    $("#dts13").css("background-color", "#e7e7e7");
    $("#dts14").removeAttr("disabled");
    $("#dts14").css("background-color", "#e7e7e7");
    $("#clsd77").removeAttr("disabled");
    $("#cl77").css("background-color", "#e7e7e7");

    $("#nextb12").css("display", "flex");
    $("#continueb12").hide();
  } else {
    $("#dts13").attr("disabled", "disabled");
    $("#dts13").css("background-color", "#272724");
    $("#dts14").attr("disabled", "disabled");
    $("#dts14").css("background-color", "#272724");
    $("#clsd77").attr("disabled", "disabled");
    $("#cl77").css("background-color", "#272724");
}

});


// Jquery Dependency

$(".currfield").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
});


function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "£" + left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "£" + input_val;
    
    // final formatting
    if (blur === "blur") {
      input_val += ".00";
    }
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}
