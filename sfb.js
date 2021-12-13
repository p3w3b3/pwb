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
let prognum2 = 0
let prognum3 = 0
let prognum4 = 0
let prognum5 = 0
let prognum6 = 0
let prognum7 = 0

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
    let s1p1 = data['s1p1'];    
    let s1p2 = data['s1p2'];    
    let s1p3 = data['s1p3'];    
    let s1p4 = data['s1p4']; 
    let s1p5 = data['s1p5'];    
    let s1p6 = data['s1p6'];
    let s1p7 = data['s1p7'];    
    let s1p8 = data['s1p8']; 
    let s2p1 = data['s2p1'];    
    let s2p2 = data['s2p2'];    
    let s2p3 = data['s2p3'];    
    let s2p4 = data['s2p4']; 
    let s2p5 = data['s2p5'];    
    let s2p6 = data['s2p6'];
    let s2p7 = data['s2p7'];    
    let s2p8 = data['s2p8'];
    let s3p1 = data['s3p1'];    
    let s3p2 = data['s3p2']; 
    let s3p3 = data['s3p3'];    
    let s3p4 = data['s3p4']; 
    let s3p5 = data['s3p5'];    
    let s4p1 = data['s4p1']; 
    let s4p2 = data['s4p2']; 
    let s4p3 = data['s4p3']; 
    let s4p4 = data['s4p4']; 
    let s5p1 = data['s5p1']; 
    let s5p2 = data['s5p2']; 
    let s5p3 = data['s5p3']; 
    let s5p4 = data['s5p4']; 
    let s5p5 = data['s5p5']; 
    let s6p1 = data['s6p1']; 
    let s6p2 = data['s6p2']; 
    let s6p3 = data['s6p3']; 
    let s6p4 = data['s6p4']; 
    let s7p1 = data['s7p1']; 
    let s7p2 = data['s7p2']; 
    let s7p3 = data['s7p3']; 
    let s7p4 = data['s7p4']; 
    let s7p5 = data['s7p5']; 

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

    if( s1p5 == true) {
$('#s1p5').hide()
$('#s1p5x').show()
prognum++
}

    if( s1p6 == true) {
$('#s1p6').hide()
$('#s1p6x').show()
prognum++
}

    if( s1p7 == true) {
$('#s1p7').hide()
$('#s1p7x').show()
prognum++
}

    if( s1p8 == true) {
$('#s1p8').hide()
$('#s1p8x').show()
prognum++
}
    if( s2p1 == true) {
$('#s2p1').hide()
$('#s2p1x').show()
prognum2++
}
    if( s2p2 == true) {
$('#s2p2').hide()
$('#s2p2x').show()
prognum2++
}
    if( s2p3 == true) {
$('#s2p3').hide()
$('#s2p3x').show()
prognum2++
}
    if( s2p4 == true) {
$('#s2p4').hide()
$('#s2p4x').show()
prognum2++
}
    if( s2p5 == true) {
$('#s2p5').hide()
$('#s2p5x').show()
prognum2++
}
    if( s2p6 == true) {
$('#s2p6').hide()
$('#s2p6x').show()
prognum2++
}
    if( s2p7 == true) {
$('#s2p7').hide()
$('#s2p7x').show()
prognum2++
}
    if( s3p1 == true) {
$('#s3p1').hide()
$('#s3p1x').show()
prognum3++
}
    if( s3p2 == true) {
$('#s3p2').hide()
$('#s3p2x').show()
prognum3++
}
    if( s3p3 == true) {
$('#s3p3').hide()
$('#s3p3x').show()
prognum3++
}
    if( s3p4 == true) {
$('#s3p4').hide()
$('#s3p4x').show()
prognum3++
}
    if( s3p5 == true) {
$('#s3p5').hide()
$('#s3p5x').show()
prognum3++
}
    if( s4p1 == true) {
$('#s4p1').hide()
$('#s4p1x').show()
prognum4++
}
    if( s4p2 == true) {
$('#s4p2').hide()
$('#s4p2x').show()
prognum4++
}
    if( s4p3 == true) {
$('#s4p3').hide()
$('#s4p3x').show()
prognum4++
}
    if( s4p4 == true) {
$('#s4p4').hide()
$('#s4p4x').show()
prognum4++
}
    if( s5p1 == true) {
$('#s5p1').hide()
$('#s5p1x').show()
prognum5++
}
    if( s5p2 == true) {
$('#s5p2').hide()
$('#s5p2x').show()
prognum5++
}
    if( s5p3 == true) {
$('#s5p3').hide()
$('#s5p3x').show()
prognum5++
}
    if( s5p4 == true) {
$('#s5p4').hide()
$('#s5p4x').show()
prognum5++
}
    if( s5p5 == true) {
$('#s5p5').hide()
$('#s5p5x').show()
prognum5++
}
    if( s6p1 == true) {
$('#s6p1').hide()
$('#s6p1x').show()
prognum6++
}
    if( s6p2 == true) {
$('#s6p2').hide()
$('#s6p2x').show()
prognum6++
}
    if( s6p3 == true) {
$('#s6p3').hide()
$('#s6p3x').show()
prognum6++
}
    if( s6p4 == true) {
$('#s6p4').hide()
$('#s6p4x').show()
prognum6++
}
    if( s7p1 == true) {
$('#s7p1').hide()
$('#s7p1x').show()
prognum7++
}
    if( s7p2 == true) {
$('#s7p2').hide()
$('#s7p2x').show()
prognum7++
}
    if( s7p3 == true) {
$('#s7p3').hide()
$('#s7p3x').show()
prognum7++
}
    if( s7p4 == true) {
$('#s7p4').hide()
$('#s7p4x').show()
prognum7++
}
    if( s7p5 == true) {
$('#s7p5').hide()
$('#s7p5x').show()
prognum7++
}


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
         window.location.href = '/dashboard/training/seoul-chikin';
  
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
document.querySelector('#prognum2').textContent = prognum2
document.querySelector('#prognum3').textContent = prognum3
document.querySelector('#prognum4').textContent = prognum4
document.querySelector('#prognum5').textContent = prognum5
document.querySelector('#prognum6').textContent = prognum6
document.querySelector('#prognum7').textContent = prognum7

})})
