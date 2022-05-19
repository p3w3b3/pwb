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
    let rprognum = 0;
    let rprognum2 = 0;
    let rprognum3 = 0;
    let rprognum4 = 0;
    let rprognum5 = 0;

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

        let r1p1 = data["r1p1"];
        let r1p2 = data["r1p2"];
        let r1p3 = data["r1p3"];
        let r1p4 = data["r1p4"];
        let r1p5 = data["r1p5"];
        let r1p6 = data["r1p6"];
        let r1p7 = data["r1p7"];

        let r2p1 = data["r2p1"];
        let r2p2 = data["r2p2"];
        let r2p3 = data["r2p3"];
        let r2p4 = data["r2p4"];
        let r2p5 = data["r2p5"];
        let r2p6 = data["r2p6"];
        let r2p7 = data["r2p7"];
        let r2p8 = data["r2p8"];

        let r3p1 = data["r3p1"];
        let r3p2 = data["r3p2"];
        let r3p3 = data["r3p3"];
        let r3p4 = data["r3p4"];

        let r4p1 = data["r4p1"];
        let r4p2 = data["r4p2"];
        let r4p3 = data["r4p3"];
        let r4p4 = data["r4p4"];

        let r5p1 = data["r5p1"];

        if (r1p1 == true) {
          $("#r1p1").hide();
          $("#r1p1x").show();
          rprognum++;
        }
        if (r1p2 == true) {
          $("#r1p2").hide();
          $("#r1p2x").show();
          rprognum++;
        }

        if (r1p3 == true) {
          $("#r1p3").hide();
          $("#r1p3x").show();
          rprognum++;
        }

        if (r1p4 == true) {
          $("#r1p4").hide();
          $("#r1p4x").show();
          rprognum++;
        }

        if (r1p5 == true) {
          $("#r1p5").hide();
          $("#r1p5x").show();
          rprognum++;
        }

        if (r1p6 == true) {
          $("#r1p6").hide();
          $("#r1p6x").show();
          rprognum++;
        }

        if (r1p7 == true) {
          $("#r1p7").hide();
          $("#r1p7x").show();
          rprognum++;
        }

        if (r2p1 == true) {
          $("#r2p1").hide();
          $("#r2p1x").show();
          rprognum2++;
        }

        if (r2p2 == true) {
          $("#r2p2").hide();
          $("#r2p2x").show();
          rprognum2++;
        }

        if (r2p3 == true) {
          $("#r2p3").hide();
          $("#r2p3x").show();
          rprognum2++;
        }

        if (r2p4 == true) {
          $("#r2p4").hide();
          $("#r2p4x").show();
          rprognum2++;
        }

        if (r2p5 == true) {
          $("#r2p5").hide();
          $("#r2p5x").show();
          rprognum2++;
        }

        if (r2p6 == true) {
          $("#r2p6").hide();
          $("#r2p6x").show();
          rprognum2++;
        }

        if (r2p7 == true) {
          $("#r2p7").hide();
          $("#r2p7x").show();
          rprognum2++;
        }

        if (r2p8 == true) {
          $("#r2p8").hide();
          $("#r2p8x").show();
          rprognum2++;
        }

        if (r3p1 == true) {
          $("#r3p1").hide();
          $("#r3p1x").show();
          rprognum3++;
        }

        if (r3p2 == true) {
          $("#r3p2").hide();
          $("#r3p2x").show();
          rprognum3++;
        }

        if (r3p3 == true) {
          $("#r3p3").hide();
          $("#r3p3x").show();
          rprognum3++;
        }

        if (r3p4 == true) {
          $("#r3p4").hide();
          $("#r3p4x").show();
          rprognum3++;
        }

        if (r4p1 == true) {
          $("#r4p1").hide();
          $("#r4p1x").show();
          rprognum4++;
        }

        if (r4p2 == true) {
          $("#r4p2").hide();
          $("#r4p2x").show();
          rprognum4++;
        }

        if (r4p3 == true) {
          $("#r4p3").hide();
          $("#r4p3x").show();
          rprognum4++;
        }

        if (r4p4 == true) {
          $("#r4p4").hide();
          $("#r4p4x").show();
          rprognum4++;
        }

        if (r5p1 == true) {
          $("#r5p1").hide();
          $("#r5p1x").show();
          rprognum5++;
        }

        let sp =
          ((rprognum + rprognum2 + rprognum3 + rprognum4 + rprognum5) / 24) *
          100;
        let spn = Math.round(sp) + "%";
        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ MXC: spn }, { merge: true });

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
      document.querySelector("#rprognum").textContent = rprognum;
      document.querySelector("#rprognum2").textContent = rprognum2;
      document.querySelector("#rprognum3").textContent = rprognum3;
      document.querySelector("#rprognum4").textContent = rprognum4;
      document.querySelector("#rprognum5").textContent = rprognum5;
    });
  });
}
