{
  const email = document.querySelector("#email");
  const signOutButton = document.querySelector("#signOutButton");
  const userName = document.querySelector("#userName");
  const userName2 = document.querySelector("#userName2");
  const loader = document.querySelector("#loadanimation");
  const maincontent = document.querySelector("#maincontent");

 const firebaseConfig = {
    apiKey: "AIzaSyDApbEuGdjDf-dBlOljBvvXAPlZmUx-D5M",
    authDomain: "stonegate-system.firebaseapp.com",
    projectId: "stonegate-system",
    storageBucket: "stonegate-system.appspot.com",
    messagingSenderId: "798322604618",
    appId: "1:798322604618:web:fada6a2e9f09f0319bc4b3",
    measurementId: "G-1J8XNVRV7Q"
  };


  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const authChanged = firebase.auth().onAuthStateChanged((user) => {
    let rrprognum = 0;
    let rrprognum2 = 0;
    let rrprognum3 = 0;
    let rrprognum4 = 0;
    let rrprognum5 = 0;

    const signout = () => {
      auth.signOut();
    };

    signOutButton.addEventListener("click", signout);

    auth.onAuthStateChanged(async (user) => {
      let currentPath = window.location.pathname;
      if (user) {
        maincontent.style.display = "flex";
        loader.style.display = "none";
        let myFS = firebase.firestore();
        let docSnap = await myFS
          .doc("users/" + firebase.auth().currentUser.uid)
          .get();
        let data = docSnap.data();
        let prereq = data["prereq"];
        let name = data["Name"];
        let emaild = data["Email"];
        let firstletter = name.substring(0, 1);
        $(".firstletter").html(firstletter);

        let rr1p1 = data["rr1p1"];
        let rr1p2 = data["rr1p2"];
        let rr1p3 = data["rr1p3"];
        let rr1p4 = data["rr1p4"];
        let rr1p5 = data["rr1p5"];
        let rr1p6 = data["rr1p6"];
        let rr1p7 = data["rr1p7"];

        let rr2p1 = data["rr2p1"];
        let rr2p2 = data["rr2p2"];
        let rr2p3 = data["rr2p3"];
        let rr2p4 = data["rr2p4"];
        let rr2p5 = data["rr2p5"];
        let rr2p6 = data["rr2p6"];
        let rr2p7 = data["rr2p7"];
        let rr2p8 = data["rr2p8"];

        let rr3p1 = data["rr3p1"];
        let rr3p2 = data["rr3p2"];
        let rr3p3 = data["rr3p3"];
        let rr3p4 = data["rr3p4"];

        let rr4p1 = data["rr4p1"];
        let rr4p2 = data["rr4p2"];
        let rr4p3 = data["rr4p3"];
        let rr4p4 = data["rr4p4"];

        let rr5p1 = data["rr5p1"];

        if (rr1p1 == true) {
          $("#rr1p1").hide();
          $("#rr1p1x").show();
          rrprognum++;
        }
        if (rr1p2 == true) {
          $("#rr1p2").hide();
          $("#rr1p2x").show();
          rrprognum++;
        }

        if (rr1p3 == true) {
          $("#rr1p3").hide();
          $("#rr1p3x").show();
          rrprognum++;
        }

        if (rr1p4 == true) {
          $("#rr1p4").hide();
          $("#rr1p4x").show();
          rrprognum++;
        }

        if (rr1p5 == true) {
          $("#rr1p5").hide();
          $("#rr1p5x").show();
          rrprognum++;
        }

        if (rr1p6 == true) {
          $("#rr1p6").hide();
          $("#rr1p6x").show();
          rrprognum++;
        }

        if (rr1p7 == true) {
          $("#rr1p7").hide();
          $("#rr1p7x").show();
          rrprognum++;
        }

        if (rr2p1 == true) {
          $("#rr2p1").hide();
          $("#rr2p1x").show();
          rrprognum2++;
        }

        if (rr2p2 == true) {
          $("#rr2p2").hide();
          $("#rr2p2x").show();
          rrprognum2++;
        }

        if (rr2p3 == true) {
          $("#rr2p3").hide();
          $("#rr2p3x").show();
          rrprognum2++;
        }

        if (rr2p4 == true) {
          $("#rr2p4").hide();
          $("#rr2p4x").show();
          rrprognum2++;
        }

        if (rr2p5 == true) {
          $("#rr2p5").hide();
          $("#rr2p5x").show();
          rrprognum2++;
        }

        if (rr2p6 == true) {
          $("#rr2p6").hide();
          $("#rr2p6x").show();
          rrprognum2++;
        }

        if (rr2p7 == true) {
          $("#rr2p7").hide();
          $("#rr2p7x").show();
          rrprognum2++;
        }

        if (rr2p8 == true) {
          $("#rr2p8").hide();
          $("#rr2p8x").show();
          rrprognum2++;
        }

        if (rr3p1 == true) {
          $("#rr3p1").hide();
          $("#rr3p1x").show();
          rrprognum3++;
        }

        if (rr3p2 == true) {
          $("#rr3p2").hide();
          $("#rr3p2x").show();
          rrprognum3++;
        }

        if (rr3p3 == true) {
          $("#rr3p3").hide();
          $("#rr3p3x").show();
          rrprognum3++;
        }

        if (rr3p4 == true) {
          $("#rr3p4").hide();
          $("#rr3p4x").show();
          rrprognum3++;
        }

        if (rr4p1 == true) {
          $("#rr4p1").hide();
          $("#rr4p1x").show();
          rrprognum4++;
        }

        if (rr4p2 == true) {
          $("#rr4p2").hide();
          $("#rr4p2x").show();
          rrprognum4++;
        }

        if (rr4p3 == true) {
          $("#rr4p3").hide();
          $("#rr4p3x").show();
          rrprognum4++;
        }

        if (rr4p4 == true) {
          $("#rr4p4").hide();
          $("#rr4p4x").show();
          rrprognum4++;
        }

        if (rr5p1 == true) {
          $("#rr5p1").hide();
          $("#rr5p1x").show();
          rrprognum5++;
        }

        let sp =
          ((rrprognum + rrprognum2 + rrprognum3 + rrprognum4 + rrprognum5) / 24) *
          100;
        let spn = Math.round(sp) + "%";
        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ RRITO: spn }, { merge: true });

        if (prereq !== true) {
          location.href = "/onboarding";
        }
        if (!!name) {
          $("#userName2").html(name);
        } else {
          firebase
            .firestore()
            .doc("users/" + firebase.auth().currentUser.uid)
            .set({ Name: user.displayName }, { merge: true });
          {
            setTimeout(() => {
              window.location.href = "/dashboard/training/rebel-rito";
            }, 2000);
          }

          $("#userName2").html(name);
        }

        if (!!emaild) {
          $("#email").html(emaild);
        }
      } else {
        console.log("user logged out");
        signOutButton.style.display = "none";
        if ("/" != currentPath) {
          location.href = "/login";
        }
        maincontent.style.display = "none";
        loader.style.display = "flex";
      }
      signOutButton.addEventListener("click", signout);
      document.querySelector("#rrprognum").textContent = rrprognum;
      document.querySelector("#rrprognum2").textContent = rrprognum2;
      document.querySelector("#rrprognum3").textContent = rrprognum3;
      document.querySelector("#rrprognum4").textContent = rrprognum4;
      document.querySelector("#rrprognum5").textContent = rrprognum5;
    });
  });
}
