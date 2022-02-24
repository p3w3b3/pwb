Webflow.push(function () {
  $("#search-field").submit(function () {
    return false;
  });
});
const email = document.querySelector("#email");
const signOutButton = document.querySelector("#signOutButton");
const signOutButton2 = document.querySelector("#signoutmobile");

const userName = document.querySelector("#userName");
const userName2 = document.querySelector("#userName2");
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
document.querySelector(".closetracker").addEventListener("click", function () {
  $(".tracking-popup").hide();
  $(".tracking-wrapper").hide();
});

document
  .querySelector(".tracking-wrapper")
  .addEventListener("click", function () {
    $(".tracking-popup").hide();
    $(".tracking-wrapper").hide();
  });

document.querySelector(".closeadduser").addEventListener("click", function () {
  $("#createuserpopup").hide();
  $(".signwrapper").hide();
});
const firebaseConfig = {
  apiKey: "AIzaSyB5X0NgXNQ8d3UjqVP5p_xB9Yt8cOk1ut8",
  authDomain: "peckwater-system.firebaseapp.com",
  projectId: "peckwater-system",
  storageBucket: "peckwater-system.appspot.com",
  messagingSenderId: "620518934310",
  appId: "1:620518934310:web:84c9c701f5794161d863e7",
  measurementId: "G-EZSWDWDTB6"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const authChanged = firebase.auth().onAuthStateChanged((user) => {
  const signout = () => {
    auth.signOut();
  };
  signOutButton.addEventListener("click", signout);
  signOutButton2.addEventListener("click", signout);

  auth.onAuthStateChanged(async (user) => {
    let currentPath = window.location.pathname;
    if (user) {
      let curUser = firebase.auth().currentUser;
      let myFS = firebase.firestore();
      let docRef = myFS.doc("users/" + curUser.uid);
      docRef.get().then((docSnap) => {
        let data = docSnap.data();
        let name = data["Name"];
        let emaild = data["Email"];
        let prereq = data["prereq"];
        let restaurant = data["Restaurant"];
        let profileuid = curUser.uid;
        let pdt1 = data["pdate1"];
        let pdt2 = data["pdate2"];
        let pdt3 = data["pdate3"];
        let pdt4 = data["pdate4"];
        let pdt5 = data["pdate5"];
        let course1 = data["ftbcourse"];
        let course2 = data["seccourse"];
        let course3 = data["wbwcourse"];
        let course4 = data["dlvcourse"];
        let course5 = data["smcourse"];
        let course6 = data["vcourse"];

        
docuemnt.querySelector('#mystid').textContent = profileuid
    
        let admin = data["admin"];

        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ prereq: true }, { merge: true });
        
        
        if (course1 || course2 || course3 || course4 || course5 || course6) {
          $("#n3").show();
          $("#trainingmob").show();
        } else {
          $("#n3").hide();
          $("#trainingmob").hide();
        }

        if (course1) {
          $("#cr1").css("display", "flex");
          $("#crs1").css("display", "flex");
        } else {
          $("#cr1").hide();
          $("#crs1").hide();
        }

        if (course2) {
          $("#cr2").css("display", "flex");
          $("#crs2").css("display", "flex");
        } else {
          $("#cr2").hide();
          $("#crs2").hide();
        }

        if (course3) {
          $("#cr3").css("display", "flex");
          $("#crs3").css("display", "flex");
        } else {
          $("#cr3").hide();
          $("#crs3").hide();
        }

        if (course4) {
          $("#cr4").css("display", "flex");
          $("#crs4").css("display", "flex");
        } else {
          $("#cr4").hide();
          $("#crs4").hide();
        }

if(course5){
$('#cr01').css('display', 'flex');
$('#crs01').css('display', 'flex');

} else  {
$('#cr01').hide()
$('#crs01').hide()

}

if(course6 == true){
$('#cr02').css('display', 'flex');
$('#crs02').css('display', 'flex');
} else  {
$('#cr02').hide()
$('#crs02').hide()

}
        if (!!admin) {
          $("#n5").show();
          $("#trackermob").show();
        } else {
          $("#n5").hide();
          $("#trackermob").hide();
        }

        document.querySelector("#userName").textContent = name;

        if (!!pdt1) {
          $("#daterow1").css("display", "flex");
          $("#daterow1ph").hide();
          document.querySelector("#dated1").textContent = pdt1;
        } else {
          $("#daterow1").hide();
          $("#daterow1ph").css("display", "flex");
        }
        if (!!pdt2) {
          $("#daterow2").css("display", "flex");
          $("#daterow2ph").hide();
          document.querySelector("#dated2").textContent = pdt2;
        } else {
          $("#daterow2").hide();
          $("#daterow2ph").css("display", "flex");
        }
        if (!!pdt3) {
          $("#daterow3").css("display", "flex");
          $("#daterow3ph").hide();
          document.querySelector("#dated3").textContent = pdt3;
        } else {
          $("#daterow3").hide();
          $("#daterow3ph").css("display", "flex");
        }
        if (!!pdt4) {
          $("#daterow4").css("display", "flex");
          $("#daterow4ph").hide();
          document.querySelector("#dated4").textContent = pdt4;
        } else {
          $("#daterow4").hide();
          $("#daterow4ph").css("display", "flex");
        }
        if (!!pdt5) {
          $("#daterow5").css("display", "flex");
          $("#daterow5ph").hide();
          document.querySelector("#dated5").textContent = pdt5;
        } else {
          $("#daterow5").hide();
          $("#daterow5ph").css("display", "flex");
        }
        document.querySelector("#profile-uid").textContent = profileuid;
        document.querySelector("#profile-name").textContent = name;
        document.querySelector("#profile-email").textContent = emaild;
        if (!!restaurant) {
          document.querySelector(
            "#profile-restaurant"
          ).textContent = restaurant;
        } else {
          document.querySelector("#profile-restaurant").textContent = "-";
        }
        firebase
          .firestore()
          .doc("users/" + firebase.auth().currentUser.uid)
          .set({ Timestamp: date }, { merge: true });
        //if(prereq !== true) {
        // location.href = '/onboarding';}

        if (!!emaild) {
          $("#email").html(emaild);
        } else {
          firebase
            .firestore()
            .doc("users/" + firebase.auth().currentUser.uid)
            .set({ Email: user.email }, { merge: true });
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
              window.location.href = "/dashboard";
            }, 2000);
          }
          $("#userName2").html(name);
        }
        
        let firstletter = name.substring(0, 1);
        $(".firstletter").html(firstletter);
        
      });
    } else {
    auth.signOut();
location.href = '/login'
    }

    let currentPath2 = location.href;
    if ("https://www.peckwaterbrands.com/dashboard#contact" === currentPath2) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#obsidebar").hide();
      $("#contactbox").show();
      $(".nav-button").css("border-color", "transparent");
      $("#n4").css("border-color", "white");
    } else if (
      "https://www.peckwaterbrands.com/dashboard#onboarding" === currentPath2
    ) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#ob1").show();
      $("#contactbox").hide();
      $(".nav-button").css("border-color", "transparent");
      $("#n2").css("border-color", "white");
    } else if (
      "https://www.peckwaterbrands.com/dashboard#onboarding1" === currentPath2
    ) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#obsidebar").show();
      $("#ob1").show();
      $("#contactbox").hide();
      $(".nav-button").css("border-color", "transparent");
      $("#n2").css("border-color", "white");
    } else if (
      "https://www.peckwaterbrands.com/dashboard#onboarding2" === currentPath2
    ) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#ob2").show();
      $("#contactbox").hide();
      $(".nav-button").css("border-color", "transparent");
      $("#n2").css("border-color", "white");
    } else if (
      "https://www.peckwaterbrands.com/dashboard#tracking" === currentPath2
    ) {
      $("#homebox").hide();
      $(".ob-box").hide();
      $("#obsidebar").hide();
      $("#ob1").hide();
      $("#contactbox").hide();
      $("#trackerbox").show();
      $(".nav-button").css("border-color", "transparent");
      $("#n5").css("border-color", "white");
    }
    {
      {
        const db = firebase.firestore();
        let myResults = [];
        let myUid = [];
        db.collection("users")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              myResults.push({ data: doc.data() });
              myUid.push({ id: doc.id });
            });
            var e = $("#training-table");
            for (let i = 0; i < myResults.length; i++) {
              const newItem = e.clone();
              newItem.children("#uName")[0].textContent =
                myResults[i].data.Name;
              newItem.children("#Enrolled")[0].textContent =
                myResults[i].data.Enrolled;
              newItem.children("#uRestaurant")[0].textContent =
                myResults[i].data.Restaurant;
              newItem.children("#uTimestamp")[0].textContent =
                myResults[i].data.Timestamp;
              newItem[0].id = "user-" + i;
              newItem.find("#tracking-name")[0].textContent =
                "User - " + myResults[i].data.Name;
              newItem.find("#tracking-id")[0].textContent = myUid[i].id;
              newItem.children("#uPopup")[0].id = "uPopup-" + i;
              newItem.find("#uButton")[0].id = "uButton-" + i;
              newItem.find("#accesslevel")[0].id = "accesslevel-" + i;
              newItem.find("#course1")[0].id = "course1-" + i;
              newItem.find("#course2")[0].id = "course2-" + i;
              newItem.find("#course3")[0].id = "course3-" + i;
              newItem.find("#course4")[0].id = "course4-" + i;
              newItem.find("#course5")[0].id = "course5-" + i;
              newItem.find("#course6")[0].id = "course6-" + i;
              newItem.find("#popfieldfirst")[0].id = "popfieldfirst-" + i;
              newItem.find("#stid")[0].id = "stid-" + i;

              newItem.find("#uSTID")[0].id = "uSTID-" + i;
              newItem.find("#ftbcount")[0].id = "ftbcount-" + i;
              newItem.find("#seccount")[0].id = "seccount-" + i;
              newItem.find("#wbwcount")[0].id = "wbwcount-" + i;
              newItem.find("#dlvcount")[0].id = "dlvcount-" + i;

              newItem.find("#ftbtrue")[0].id = "ftbtrue-" + i;
              newItem.find("#sectrue")[0].id = "sectrue-" + i;
              newItem.find("#wbwtrue")[0].id = "wbwtrue-" + i;
              newItem.find("#dlvtrue")[0].id = "dlvtrue-" + i;

              newItem.find("#popfieldsecond")[0].id = "popfieldsecond-" + i;
              newItem.find("#popfieldthird")[0].id = "popfieldthird-" + i;
              newItem.find("#popfieldfourth")[0].id = "popfieldfourth-" + i;
              newItem.find("#popfieldfifth")[0].id = "popfieldfifth-" + i;
              var pfield1 = myResults[i].data.pdate1;

              var pfield2 = myResults[i].data.pdate2;
              var pfield3 = myResults[i].data.pdate3;
              var pfield4 = myResults[i].data.pdate4;
              var pfield5 = myResults[i].data.pdate5;

              var datastid = myResults[i].data.stid;

              var accessps = myResults[i].data.prereq;
              var accessps2 = myResults[i].data.admin;
              var accessps3 = myResults[i].data.operations;

              var course11 = myResults[i].data.ftbcourse;
              var course22 = myResults[i].data.seccourse;
              var course33 = myResults[i].data.wbwcourse;
              var course44 = myResults[i].data.dlvcourse;
              var course55 = myResults[i].data.smcourse;
              var course66 = myResults[i].data.vcourse;

              if (course11 == undefined) {
                newItem.find("#course1-" + i)[0].checked = false;
                newItem.find("#ftbtrue-" + i)[0].textContent = false;
              } else if (course11 == true) {
                newItem.find("#course1-" + i)[0].checked = true;
                newItem.find("#ftbtrue-" + i)[0].textContent = true;
              }

              if (course22 == undefined) {
                newItem.find("#course2-" + i)[0].checked = false;
                newItem.find("#sectrue-" + i)[0].textContent = false;
              } else if (course22 == true) {
                newItem.find("#course2-" + i)[0].checked = true;
                newItem.find("#sectrue-" + i)[0].textContent = true;
              }

              if (course33 == undefined) {
                newItem.find("#course3-" + i)[0].checked = false;
                newItem.find("#wbwtrue-" + i)[0].textContent = false;
              } else if (course33 == true) {
                newItem.find("#course3-" + i)[0].checked = true;
                newItem.find("#wbwtrue-" + i)[0].textContent = true;
              }

              if (course44 == undefined) {
                newItem.find("#course4-" + i)[0].checked = false;
                newItem.find("#dlvtrue-" + i)[0].textContent = false;
              } else if (course44 == true) {
                newItem.find("#course4-" + i)[0].checked = true;
                newItem.find("#dlvtrue-" + i)[0].textContent = false;
              }

              if (course55 == undefined) {
                newItem.find("#course5-" + i)[0].checked = false;
              } else if (course55 == true) {
                newItem.find("#course5-" + i)[0].checked = true;
              }

              if (course66 == undefined) {
                newItem.find("#course6-" + i)[0].checked = false;
              } else if (course66 == true) {
                newItem.find("#course6-" + i)[0].checked = true;
              }



              if (accessps == undefined && accessps == undefined) {
                newItem.find("#accesslevel-" + i)[0].value = "";
              }

              if (!!accessps3) {
                newItem.find("#accesslevel-" + i)[0].value = "operations";
              }

              if (!!accessps) {
                newItem.find("#accesslevel-" + i)[0].value = "preq";
              }

              if (!!accessps && !!accessps2) {
                newItem.find("#accesslevel-" + i)[0].value = "admin";
              }

              if (datastid == undefined) {
                newItem.find("#stid-" + i)[0].textContent = "-";
              } else {
                newItem.find("#stid-" + i)[0].textContent = datastid;
              }

              if (pfield1 == undefined) {
                newItem.find("#popfieldfirst-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldfirst-" + i)[0].placeholder = pfield1;
              }
              if (pfield2 == undefined) {
                newItem.find("#popfieldsecond-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldsecond-" + i)[0].placeholder = pfield2;
              }
              if (pfield3 == undefined) {
                newItem.find("#popfieldthird-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldthird-" + i)[0].placeholder = pfield3;
              }
              if (pfield4 == undefined) {
                newItem.find("#popfieldfourth-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldfourth-" + i)[0].placeholder = pfield4;
              }
              if (pfield5 == undefined) {
                newItem.find("#popfieldfifth-" + i)[0].placeholder = "-";
              } else {
                newItem.find("#popfieldfifth-" + i)[0].placeholder = pfield5;
              }
              document.addEventListener("input", () => {
                let course1 = newItem.find("#course1-" + i)[0].checked == true;
                let course2 = newItem.find("#course2-" + i)[0].checked == true;
                let course3 = newItem.find("#course3-" + i)[0].checked == true;
                let course4 = newItem.find("#course4-" + i)[0].checked == true;
                let course5 = newItem.find("#course5-" + i)[0].checked == true;
                let course6 = newItem.find("#course6-" + i)[0].checked == true;
                
                let paccess = newItem.find("#accesslevel-" + i)[0].value;
                let stid = newItem.find("#stid-" + i)[0].value;

                let pdate1 = newItem.find("#popfieldfirst-" + i)[0].value;
                let pdate2 = newItem.find("#popfieldsecond-" + i)[0].value;
                let pdate3 = newItem.find("#popfieldthird-" + i)[0].value;
                let pdate4 = newItem.find("#popfieldfourth-" + i)[0].value;
                let pdate5 = newItem.find("#popfieldfifth-" + i)[0].value;
                let tid = myUid[i].id;
                newItem
                  .find("#uButton-" + i)[0]
                  .addEventListener("click", function () {
                    if (course1) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ ftbcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ ftbcourse: false }, { merge: true });
                    }

                    if (course2) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ seccourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ seccourse: false }, { merge: true });
                    }

                    if (course3) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ wbwcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ wbwcourse: false }, { merge: true });
                    }

                    if (course4) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ dlvcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ dlvcourse: false }, { merge: true });
                    }
                  
                              if (course5) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ smcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ smcourse: false }, { merge: true });
                    }
                          
                              if (course6) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ vcourse: true }, { merge: true });
                    } else {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ vcourse: false }, { merge: true });
                    }
                  
                  
                  

                    if (paccess === "operations") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ operations: true }, { merge: true });
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ prereq: true }, { merge: true });
                    }

                    if (paccess === "preq") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ prereq: true }, { merge: true });
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ admin: false }, { merge: true });
                    }

                    if (paccess === "admin") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ 
                        prereq: true }, { merge: true });
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ admin: true }, { merge: true });
                    }

                    if (stid !== undefined && stid !== "-" && stid !== " ") {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ stid: stid }, { merge: true });
                    }

                    if (!!pdate1) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate1: pdate1 }, { merge: true });
                    }
                    if (!!pdate2) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate2: pdate2 }, { merge: true });
                    }
                    if (!!pdate3) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate3: pdate3 }, { merge: true });
                    }
                    if (!!pdate4) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate4: pdate4 }, { merge: true });
                    }
                    if (!!pdate5) {
                      firebase
                        .firestore()
                        .doc("users/" + tid)
                        .set({ pdate5: pdate5 }, { merge: true });
                    }
                  });
              });

              newItem
                .children("#uGear")[0]
                .addEventListener("click", function () {
                  $("#uPopup-" + i).show();
                  $(".tracking-wrapper").show();
                });

              newItem.find("#uClose")[0].addEventListener("click", function () {
                $("#uPopup-" + i).hide();
                $(".tracking-wrapper").hide();
              });

              newItem
                .find("#uButton-" + i)[0]
                .addEventListener("click", function () {
                  $("#uPopup-" + i).hide();
                  $(".tracking-wrapper").hide();
                });

              var ftbn = parseInt(myResults[i].data.FTB);
              var secn = parseInt(myResults[i].data.SEC);
              var wbwn = parseInt(myResults[i].data.WBW);
              var dlv = parseInt(myResults[i].data.deliverect);
              var stidtxt = myResults[i].data.stid;

              var ftbtrue = myResults[i].data.ftbtrue;
              var sectrue = myResults[i].data.sectrue;
              var wbwtrue = myResults[i].data.wbwtrue;
              var dlvtrue = myResults[i].data.dlvtrue;

              let totn = 0;
              if (myResults[i].data.FTB == undefined) {
                newItem.children("#uFTB")[0].textContent = "0%";
                newItem.children("#ftbcount-" + i)[0].textContent = "0%";

                var ftbn = 0;
              } else {
                newItem.children("#uFTB")[0].textContent = ftbn + "%";
                newItem.children("#ftbcount-" + i)[0].textContent = ftbn + "%";
              }
              if (myResults[i].data.SEC == undefined) {
                newItem.children("#uSEC")[0].textContent = "0%";
                newItem.children("#seccount-" + i)[0].textContent = "0%";

                var secn = 0;
              } else {
                newItem.children("#uSEC")[0].textContent = secn + "%";
                newItem.children("#seccount-" + i)[0].textContent = secn + "%";
              }
              if (myResults[i].data.WBW == undefined) {
                newItem.children("#uWBW")[0].textContent = "0%";
                newItem.children("#wbwcount-" + i)[0].textContent = "0%";

                var wbwn = 0;
              } else {
                newItem.children("#uWBW")[0].textContent = wbwn + "%";
                newItem.children("#wbwcount-" + i)[0].textContent = wbwn + "%";
              }
              if (myResults[i].data.deliverect == undefined) {
                newItem.children("#uDLV")[0].textContent = "0%";
                newItem.children("#dlvcount-" + i)[0].textContent = "0%";

                var dlv = 0;
              } else {
                newItem.children("#uDLV")[0].textContent = dlv + "%";
                newItem.children("#dlvcount-" + i)[0].textContent = dlv + "%";
              }

              if (myResults[i].data.stid == undefined) {
                newItem.children("#uSTID-" + i)[0].textContent = "-";
              } else {
                newItem.children("#uSTID-" + i)[0].textContent = stidtxt;
              }

              let totaln = ((secn + ftbn + wbwn + dlv) / 400) * 100;
              let ntotal = Math.round(totaln) + "%";
              if (ntotal !== "NaN%") {
                newItem.children("#uTotal")[0].textContent = ntotal;
              } else {
                newItem.children("#uTotal")[0].textContent = " ";
              }
              newItem.insertAfter(".training-headings");
            }
          });
      }
      setTimeout(() => {
        $(".training-table").css("opacity", "1.0");
        $("#training-table").remove();
      }, 2500);
    }
  });
});
