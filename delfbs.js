{

const email = document.querySelector('#email'); 
const signOutButton = document.querySelector('#signOutButton');
const userName = document.querySelector('#userName');
const userName2 = document.querySelector('#userName2');
const loader = document.querySelector('#loadanimation');
const maincontent = document.querySelector('#maincontent');



// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-OWwg266yBXpTD8LM5wQSd6qhFCkMFLI",
  authDomain: "peckwater-8b3e7.firebaseapp.com",
  projectId: "peckwater-8b3e7",
  storageBucket: "peckwater-8b3e7.appspot.com",
  messagingSenderId: "784921135307",
  appId: "1:784921135307:web:29232c32ec3426815ab34e"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const authChanged = firebase.auth().onAuthStateChanged(user =>{
let prognum = 0

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
    let s1p1 = data['d1p1'];    
    let s1p2 = data['d1p2'];    
    let s1p3 = data['d1p3'];    
    let s1p4 = data['d1p4']; 


    if( s1p1 == true) {
$('#s1p1').hide()
$('#s1p1x').show()
prognum++
}
    if( s1p2 == true) {
$('#s1p2').hide()
$('#s1p2x').show()
prognum++
}

    if( s1p3 == true) {
$('#s1p3').hide()
$('#s1p3x').show()
prognum++
}

    if( s1p4 == true) {
$('#s1p4').hide()
$('#s1p4x').show()
prognum++
}


let sp =((prognum)/4*100)
let spn = Math.round(sp)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({deliverect:spn}, {merge:true})


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
         window.location.href = '/dashboard/training/deliverect';
  
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
document.querySelector('#prognum').textContent = prognum

})})

}
