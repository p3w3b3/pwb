{

const email = document.querySelector('#email'); 
const signOutButton = document.querySelector('#signOutButton');
const userName = document.querySelector('#userName');
const userName2 = document.querySelector('#userName2');
const loader = document.querySelector('#loadanimation');
const maincontent = document.querySelector('#maincontent');



// Firebase configuration
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
const authChanged = firebase.auth().onAuthStateChanged(user =>{
let prognumsm = 0

const signout = () => {
    auth.signOut();
}

signOutButton.addEventListener('click', signout);


auth.onAuthStateChanged(async (user) => {
  let currentPath = window.location.pathname;
  if (user) {
    maincontent.style.display='flex';
		loader.style.display='none';
    let myFS = firebase.firestore()
    let docSnap = await myFS.doc("users/"+firebase.auth().currentUser.uid).get();
    let data = docSnap.data()
    let prereq = data['prereq'];
      let name = data['Name'];
      let emaild = data['Email']; 
      	  let firstletter = name.substring(0, 1)
        $('.firstletter').html(firstletter);
    let sm1p1 = data['sm1p1'];    


    if( sm1p1 == true) {
$('#sm1p1').hide()
$('#sm1p1x').show()
prognumsm++
}

let sp =((prognumsm)/1*100)
let spn = Math.round(sp)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({sammies:spn}, {merge:true})


 if(prereq !== true) {
        location.href = '/onboarding';
        }
 if(!!name) {
      $('#userName2').html(name);
  } else {
  
  firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({Name:user.displayName}, {merge:true})
  {
  setTimeout(() => { 
         window.location.href = '/dashboard/training/sammies';
  
  }, 2000);
  
  }
  
      $('#userName2').html(name);
  }

  if(!!emaild) {
      $('#email').html(emaild);
  }} else {
    console.log('user logged out');
    signOutButton.style.display="none";
    if('/' != currentPath){location.href = '/login';}
    maincontent.style.display='none';
		loader.style.display='flex';
  }
signOutButton.addEventListener('click', signout);
document.querySelector('#prognumsm').textContent = prognumsm

})})

}
