setTimeout(() => { 
  {
    document.getElementById("d1p1button").addEventListener("click", (event) => {
      $(".section1selection").css("background-color", "white");
      $(".section1div").hide();
      $("#d1p1video").show();
      $("#d1p1button").css("background-color", "#e7edf0");
    });
  }
  
  {
    document.getElementById("d1p2button").addEventListener("click", (event) => {
      $(".section1selection").css("background-color", "white");
      $(".section1div").hide();
      $("#d1p2video").show();
      $("#d1p2button").css("background-color", "#e7edf0");
    });
  }
  
  {
    document.getElementById("d1p3button").addEventListener("click", (event) => {
      $(".section1selection").css("background-color", "white");
      $(".section1div").hide();
      $("#d1p3video").show();
      $("#d1p3button").css("background-color", "#e7edf0");
    });
  }
  
  {
    document.getElementById("d1p4button").addEventListener("click", (event) => {
      $(".section1selection").css("background-color", "white");
      $(".section1div").hide();
      $("#d1p4video").show();
      $("#d1p4button").css("background-color", "#e7edf0");
    });
  }
  
  
  const checkcompleted1 = function() {
  let prognum = 0;
      if (document.querySelector("#d1p1x").style.display == "block") {
        prognum++;
      }
      if (document.querySelector("#d1p2x").style.display == "block") {
        prognum++;
      }
      if (document.querySelector("#d1p3x").style.display == "block") {
        prognum++;
      }
      if (document.querySelector("#d1p4x").style.display == "block") {
        prognum++;
      }
      document.querySelector("#prognum").textContent = prognum;
  }
  
  {
    var iframe = document.querySelector("#d1p1video");
    var player = new Vimeo.Player(iframe);
    var finished = function () {
      videoended = "true";
      $("#d1p1").hide();
      $("#d1p1x").show();
      firebase
        .firestore()
        .doc("users/" + firebase.auth().currentUser.uid)
        .set({ d1p1: true }, { merge: true });
      checkcompleted1()
    };
    player.on("ended", finished);
  }
  
  {
    var iframe = document.querySelector("#d1p2video");
    var player = new Vimeo.Player(iframe);
    var finished = function () {
      videoended = "true";
      $("#d1p2").hide();
      $("#d1p2x").show();
      firebase
        .firestore()
        .doc("users/" + firebase.auth().currentUser.uid)
        .set({ d1p2: true }, { merge: true });
      checkcompleted1()
    };
    player.on("ended", finished);
  }
  
  {
    var iframe = document.querySelector("#d1p3video");
    var player = new Vimeo.Player(iframe);
    var finished = function () {
      videoended = "true";
      $("#d1p3").hide();
      $("#d1p3x").show();
      firebase
        .firestore()
        .doc("users/" + firebase.auth().currentUser.uid)
        .set({ d1p3: true }, { merge: true });
      checkcompleted1()
    };
    player.on("ended", finished);
  }
  
  {
    var iframe = document.querySelector("#d1p4video");
    var player = new Vimeo.Player(iframe);
    var finished = function () {
      videoended = "true";
      $("#d1p4").hide();
      $("#d1p4x").show();
      firebase
        .firestore()
        .doc("users/" + firebase.auth().currentUser.uid)
        .set({ d1p4: true }, { merge: true });
      checkcompleted1()
    };
    player.on("ended", finished);
  }
  
  
  
  }, 2000);
  
