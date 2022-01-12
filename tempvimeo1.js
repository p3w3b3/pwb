{
  var iframe = document.querySelector("#s2p1video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s2p1").hide();
    $("#s2p1x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ s2p1: true }, { merge: true });
    let prognum2 = 0;
    if (document.querySelector("#s2p1x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p2x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p3x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p4x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p5x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p6x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p7x").style.display == "block") {
      prognum2++;
    }
    document.querySelector("#prognum2").textContent = prognum2;
  };
  player.on("ended", finished);
}
{
  var iframe = document.querySelector("#s2p2video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s2p2").hide();
    $("#s2p2x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ s2p2: true }, { merge: true });
    let prognum2 = 0;
    if (document.querySelector("#s2p1x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p2x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p3x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p4x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p5x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p6x").style.display == "block") {
      prognum2++;
    }
    if (document.querySelector("#s2p7x").style.display == "block") {
      prognum2++;
    }
    document.querySelector("#prognum2").textContent = prognum2;
  };
  player.on("ended", finished);
}

{
  var iframe = document.querySelector("#s3p1video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s3p1").hide();
    $("#s3p1x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ s3p1: true }, { merge: true });
    let prognum3 = 0;
    if (document.querySelector("#s3p1x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p2x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p3x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p4x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p5x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p6x").style.display == "block") {
      prognum3++;
    }
    document.querySelector("#prognum3").textContent = prognum3;
  };
  player.on("ended", finished);
}

{
  var iframe = document.querySelector("#s3p2video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s3p2").hide();
    $("#s3p2x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ s3p2: true }, { merge: true });
    let prognum3 = 0;
    if (document.querySelector("#s3p1x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p2x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p3x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p4x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p5x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p6x").style.display == "block") {
      prognum3++;
    }
    document.querySelector("#prognum3").textContent = prognum3;
  };
  player.on("ended", finished);
}

{
  var iframe = document.querySelector("#s3p3video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s3p3").hide();
    $("#s3p3x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ s3p3: true }, { merge: true });
    let prognum3 = 0;
    if (document.querySelector("#s3p1x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p2x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p3x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p4x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p5x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p6x").style.display == "block") {
      prognum3++;
    }
    document.querySelector("#prognum3").textContent = prognum3;
  };
  player.on("ended", finished);
}


{
  var iframe = document.querySelector("#s3p4video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s3p4").hide();
    $("#s3p4x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ s3p4: true }, { merge: true });
    let prognum3 = 0;
    if (document.querySelector("#s3p1x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p2x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p3x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p4x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p5x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p6x").style.display == "block") {
      prognum3++;
    }
    document.querySelector("#prognum3").textContent = prognum3;
  };
  player.on("ended", finished);
}


{
  var iframe = document.querySelector("#s3p5video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s3p5").hide();
    $("#s3p5x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ s3p5: true }, { merge: true });
    let prognum3 = 0;
    if (document.querySelector("#s3p1x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p2x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p3x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p4x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p5x").style.display == "block") {
      prognum3++;
    }
    if (document.querySelector("#s3p6x").style.display == "block") {
      prognum3++;
    }
    document.querySelector("#prognum3").textContent = prognum3;
  };
  player.on("ended", finished);
}



{
  var iframe = document.querySelector("#s4p1video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s4p1").hide();
    $("#s4p1x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ s4p1: true }, { merge: true });
    let prognum4 = 0;
    if (document.querySelector("#s4p1x").style.display == "block") {
      prognum4++;
    }
  
    document.querySelector("#prognum4").textContent = prognum4;
  };
  player.on("ended", finished);
}


{
  var iframe = document.querySelector("#s5p1video");
  var player = new Vimeo.Player(iframe);
  var finished = function () {
    videoended = "true";
    $("#s5p1").hide();
    $("#s5p1x").show();
    firebase
      .firestore()
      .doc("users/" + firebase.auth().currentUser.uid)
      .set({ s5p1: true }, { merge: true });
    let prognum5 = 0;
    if (document.querySelector("#s5p1x").style.display == "block") {
      prognum5++;
    }
      if (document.querySelector("#s5p5x").style.display == "block") {
      prognum5++;
    }
    document.querySelector("#prognum5").textContent = prognum5;
  };
  player.on("ended", finished);
}
