{    
  document.getElementById("chef2").addEventListener("input", function () {
    let chef1value = document.getElementById("chef1").value;
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
    let continuecf1nextcf1 = $("#continuecf1").show() && $("#nextcf1").hide() && $("#finishcf1").hide(); 
    let continuecf1nextcf2 = $("#continuecf2").show() && $("#nextcf2").hide() && $("#finishcf2").hide();  
    let continuecf1nextcf3 = $("#continuecf3").show() && $("#nextcf3").hide() && $("#finishcf3").hide(); 
    let continuecf1nextcf4 = $("#continuecf4").show() && $("#nextcf4").hide() && $("#finishcf4").hide();  
    let continuecf1nextcf5 = $("#continuecf5").show() && $("#finishcf5").hide(); 
    if (v > chef1value) this.value = chef1value;



    if (v === 0) { $("#finishchef1").show() && $("#nextcf1").hide() && $("#continuecf1").hide() && $("#cf1").hide()  }

    if (v === 1) { cf1 && $("#cf2").hide() && $("#cf3").hide() && $("#cf4").hide() && $("#cf5").hide() && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide() } 

    if (v === 2) { cf1 && cf2 && $("#cf3").hide() && $("#cf4").hide() && $("#cf5").hide() && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide() && continuecf1nextcf1  } 

    if (v === 3) { cf1 && cf2 && cf3 && $("#cf4").hide() && $("#cf5").hide() && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide() } 

    if (v === 4) { cf1 && cf2 && cf3 && cf4 && $("#cf5").hide() && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide() } 

    if (v === 5) { cf1 && cf2 &&
 cf3 && cf4 && cf5 && $("#cf6").hide() && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide() } 

    if (v === 6) { cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && $("#cf7").hide() && $("#cf8").hide() && $("#cf9").hide() } 

    if (v === 7) { cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && cf7 && $("#cf8").hide() && $("#cf9").hide() } 

    if (v === 8) { cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && cf7 && cf8 && $("#cf9").hide() } 

    if (v === 9) { cf1 && cf2 && cf3 && cf4 && cf5 && cf6 && cf7 && cf8 && cf9 } 

  })}
  
  document.addEventListener("input", () => {

    let v = parseInt(document.getElementById("chef2").value);

    const cf1f1 = !!document.getElementById("cf1-f1").value;
    const cf1f2 = !!document.getElementById("cf1-f2").value;
    const cf1f3 = !!document.getElementById("cf1-f3").value;

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

    if ( (v === 1) && cf1f1 && cf1f2 && cf1f3 ) {
      document.getElementById("continuecf1").style.display = "none";
      document.getElementById("nextcf1").style.display = "none";
      document.getElementById("finishchef1").style.display = "block";
    } 

   if( ( v === 2) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 ) {
      document.getElementById("continuecf2").style.display = "none";
      document.getElementById("nextcf2").style.display = "none";
      document.getElementById("finishchef2").style.display = "block";

    }


if( ( v === 3) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 ) {
      document.getElementById("continuecf2").style.display = "none";
      document.getElementById("nextcf2").style.display = "none";
      document.getElementById("finishchef2").style.display = "block";

    }

if( ( v === 4) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 ) {
      document.getElementById("continuecf3").style.display = "none";
      document.getElementById("nextcf3").style.display = "none";
      document.getElementById("finishchef3").style.display = "block";

    }

if( ( v === 5) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2) {
      document.getElementById("continuecf3").style.display = "none";
      document.getElementById("nextcf3").style.display = "none";
      document.getElementById("finishchef3").style.display = "block";

    }

if( ( v === 6) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 ) {
      document.getElementById("continuecf3").style.display = "none";
      document.getElementById("nextcf3").style.display = "block";
      document.getElementById("finishchef3").style.display = "none";

    }

if( ( v === 6) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 ) {
      document.getElementById("continuecf4").style.display = "none";
      document.getElementById("nextcf4").style.display = "none";
      document.getElementById("finishchef4").style.display = "block";

    }
if( ( v === 7) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2 ) {
      document.getElementById("continuecf4").style.display = "none";
      document.getElementById("nextcf4").style.display = "none";
      document.getElementById("finishchef4").style.display = "block";

    }
if( ( v === 8) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2 ) {
      document.getElementById("continuecf4").style.display = "none";
      document.getElementById("nextcf4").style.display = "block";
      document.getElementById("finishchef4").style.display = "none";

    }
if( ( v === 8) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2 && cf8f1 && cf8f2 ) {
      document.getElementById("continuecf5").style.display = "none";
      document.getElementById("finishchef5").style.display = "block";

    }
if( ( v === 9) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2 && cf8f1 && cf8f2 && cf9f1 && cf9f2 ) {
      document.getElementById("continuecf5").style.display = "none";
      document.getElementById("finishchef5").style.display = "block";

    }
if( ( v > 1) && cf1f1 && cf1f2 && cf1f3 ) {
      document.getElementById("continuecf1").style.display = "none";
      document.getElementById("nextcf1").style.display = "block";
      document.getElementById("finishchef1").style.display = "none";

    }
if( ( v > 3 ) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 ) {
      document.getElementById("continuecf2").style.display = "none";
      document.getElementById("nextcf2").style.display = "block";
      document.getElementById("finishchef2").style.display = "none";

    }

if( ( v > 5 ) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 ) {
      document.getElementById("continuecf3").style.display = "none";
      document.getElementById("nextcf3").style.display = "block";
      document.getElementById("finishchef3").style.display = "none";

    }
if( ( v > 7 ) && cf1f1 && cf1f2 && cf1f3 && cf2f1 && cf2f2 && cf3f1 && cf3f2 && cf4f1 && cf4f2 && cf5f1 && cf5f2 && cf6f1 && cf6f2 && cf7f1 && cf7f2) {
      document.getElementById("continuecf4").style.display = "none";
      document.getElementById("nextcf4").style.display = "block";
      document.getElementById("finishchef4").style.display = "none";

    }

})
