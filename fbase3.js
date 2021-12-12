const email = document.querySelector('#email'); 
const signOutButton = document.querySelector('#signOutButton');
const userName = document.querySelector('#userName');
const userName2 = document.querySelector('#userName2');
const userProfilePic = document.querySelector('#userProfilePic');
const userProfilePic2 = document.querySelector('#userProfilePic2');
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

let prognumw = 0
let prognum2w = 0
let prognum3w = 0
let prognum4w = 0
let prognum5w = 0
let prognum6w = 0
let prognum7w = 0


const signout = () => {
    auth.signOut();
}

auth.onAuthStateChanged(async (user) => {
  let currentPath = window.location.pathname;
  if (user) {
    maincontent.style.display='flex';
		loader.style.display='none';
    let myFS = firebase.firestore()
    let docSnap = await myFS.doc("users/"+firebase.auth().currentUser.uid).get();
    let data = docSnap.data()
    let prereq = data['prereq'];

    let w1p1 = data['w1p1'];    
    let w1p2 = data['w1p2'];    
    let w1p3 = data['w1p3'];    
    let w1p4 = data['w1p4']; 
    let w1p5 = data['w1p5'];    
    let w1p6 = data['w1p6'];
    let w1p7 = data['w1p7'];    
    let w1p8 = data['w1p8']; 
    let w1p9 = data['w1p9']; 
    let w2p1 = data['w2p1'];    
    let w2p2 = data['w2p2'];    
    let w2p3 = data['w2p3'];    
    let w2p4 = data['w2p4']; 
    let w2p5 = data['w2p5'];    
    let w2p6 = data['w2p6'];
    let w2p7 = data['w2p7'];    
    let w2p8 = data['w2p8'];
    let w3p1 = data['w3p1'];    
    let w3p2 = data['w3p2']; 
    let w3p3 = data['w3p3'];    
    let w3p4 = data['w3p4']; 
    let w3p5 = data['w3p5'];     
    let w4p1 = data['w4p1']; 
    let w4p2 = data['w4p2']; 
    let w4p3 = data['w4p3']; 
    let w4p4 = data['w4p4']; 
    let w4p5 = data['w4p5']; 
    let w4p6 = data['w4p6']; 
    let w4p7 = data['w4p7']; 
    let w5p1 = data['w5p1']; 
    let w5p2 = data['w5p2']; 
    let w5p3 = data['w5p3'];  
    let w6p1 = data['w6p1']; 
    let w6p2 = data['w6p2']; 
    let w6p3 = data['w6p3']; 
    let w6p4 = data['w6p4']; 

    if( w1p1 == true) {
$('#w1p1').hide()
$('#w1p1x').show()
prognumw++
}
    if( w1p2 == true) {
$('#w1p2').hide()
$('#w1p2x').show()
prognumw++
}
    if( w1p3 == true) {
$('#w1p3').hide()
$('#w1p3x').show()
prognumw++
}
    if( w1p4 == true) {
$('#w1p4').hide()
$('#w1p4x').show()
prognumw++
}
    if( w1p5 == true) {
$('#w1p5').hide()
$('#w1p5x').show()
prognumw++
}
    if( w1p6 == true) {
$('#w1p6').hide()
$('#w1p6x').show()
prognumw++
}
    if( w1p7 == true) {
$('#w1p7').hide()
$('#w1p7x').show()
prognumw++
}
    if( w1p8 == true) {
$('#w1p8').hide()
$('#w1p8x').show()
prognumw++
}
    if( w1p9 == true) {
$('#w1p9').hide()
$('#w1p9x').show()
prognumw++
}
    if( w2p1 == true) {
$('#w2p1').hide()
$('#w2p1x').show()
prognum2w++
}
    if( w2p2 == true) {
$('#w2p2').hide()
$('#w2p2x').show()
prognum2w++
}
    if( w2p3 == true) {
$('#w2p3').hide()
$('#w2p3x').show()
prognum2w++
}
    if( w2p4== true) {
$('#w2p4').hide()
$('#w2p4x').show()
prognum2w++
}
    if( w2p5== true) {
$('#w2p5').hide()
$('#w2p5x').show()
prognum2w++
}
    if( w2p6== true) {
$('#w2p6').hide()
$('#w2p6x').show()
prognum2w++
}
    if( w2p7== true) {
$('#w2p7').hide()
$('#w2p7x').show()
prognum2w++
}
    if( w2p8== true) {
$('#w2p8').hide()
$('#w2p8x').show()
prognum2w++
}
    if( w3p1== true) {
$('#w3p1').hide()
$('#w3p1x').show()
prognum3w++
}
    if( w3p2== true) {
$('#w3p2').hide()
$('#w3p2x').show()
prognum3w++
}
    if( w3p3== true) {
$('#w3p3').hide()
$('#w3p3x').show()
prognum3w++
}
    if( w3p4== true) {
$('#w3p4').hide()
$('#w3p4x').show()
prognum3w++
}
    if( w3p5== true) {
$('#w3p5').hide()
$('#w3p5x').show()
prognum3w++
}
    if( w4p1== true) {
$('#w4p1').hide()
$('#w4p1x').show()
prognum4w++
}
    if( w4p2== true) {
$('#w4p2').hide()
$('#w4p2x').show()
prognum4w++
}
    if( w4p3== true) {
$('#w4p3').hide()
$('#w4p3x').show()
prognum4w++
}
    if( w4p4== true) {
$('#w4p4').hide()
$('#w4p4x').show()
prognum4w++
}
    if( w4p5== true) {
$('#w4p5').hide()
$('#w4p5x').show()
prognum4w++
}
    if( w4p6== true) {
$('#w4p6').hide()
$('#w4p6x').show()
prognum4w++
}
    if( w4p7== true) {
$('#w4p7').hide()
$('#w4p7x').show()
prognum4w++
}
    if( w5p1 == true) {
$('#w5p1').hide()
$('#w5p1x').show()
prognum5w++
}
    if( w5p2 == true) {
$('#w5p2').hide()
$('#w5p2x').show()
prognum5w++
}
    if( w5p3== true) {
$('#w5p3').hide()
$('#w5p3x').show()
prognum5w++
}
    if( w6p1	== true) {
$('#w6p1').hide()
$('#w6p1x').show()
prognum6w++
}
    if( w6p2	== true) {
$('#w6p2').hide()
$('#w6p2x').show()
prognum6w++
}
    if( w6p3	== true) {
$('#w6p3').hide()
$('#w6p3x').show()
prognum6w++
}
    if( w6p4	== true) {
$('#w6p4').hide()
$('#w6p4x').show()
prognum6w++
}

    if (prereq == false) {
      maincontent.style.display='none';
		  loader.style.display='flex';
      location.href = '/onboarding';
    }

    signOutButton.style.display="block";

    if(userName !== null){
      userName.innerHTML= user.displayName;
    }
     if(userName2 !== null){
      userName2.innerHTML= user.displayName;
    }
    if(email !== null){
    email.innerHTML= user.email;
    }
    if(userProfilePic !== null){
      userProfilePic.src=user.photoURL;
    }
    if(userProfilePic2 !== null){
      userProfilePic2.src=user.photoURL;
    }
    
    if (userProfilePic.src == 'https://www.peckwaterbrands.com/null' && userProfilePic2.src == 'https://www.peckwaterbrands.com/null') {
    userProfilePic.src = 'https://uploads-ssl.webflow.com/5ed4bdaf08ecb446579ff8c0/61a8e6ea274ee2654c685d00_avatar-placeholder.png'
    userProfilePic2.src = 'https://uploads-ssl.webflow.com/5ed4bdaf08ecb446579ff8c0/61a8e6ea274ee2654c685d00_avatar-placeholder.png'
}

  } else {
    console.log('user logged out');
    signOutButton.style.display="none";
    if('/' != currentPath){location.href = '/login';}
    maincontent.style.display='none';
		loader.style.display='flex';
  }
signOutButton.addEventListener('click', signout);

document.querySelector('#prognumw').textContent = prognumw
document.querySelector('#prognum2w').textContent = prognum2w
document.querySelector('#prognum3w').textContent = prognum3w
document.querySelector('#prognum4w').textContent = prognum4w
document.querySelector('#prognum5w').textContent = prognum5w
document.querySelector('#prognum6w').textContent = prognum6w
})})
