{

const email = document.querySelector('#email'); 
const signOutButton = document.querySelector('#signOutButton');
const userName = document.querySelector('#userName');
const userName2 = document.querySelector('#userName2');
const loader = document.querySelector('#loadanimation');
const maincontent = document.querySelector('#maincontent');



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
let prognum = 0
let prognum2 = 0
let prognum3 = 0
let prognum4 = 0
let prognum5 = 0
let prognum6 = 0
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

    let s1p1 = data['f1p1'];    
    let s1p2 = data['f1p2'];    
    let s1p3 = data['f1p3'];    
    let s1p4 = data['f1p4']; 
     
    let s2p1 = data['f2p1'];    
    let s2p2 = data['f2p2'];    
    let s2p3 = data['f2p3'];
    let s2p4 = data['f2p4']

    let s3p1 = data['f3p1'];    
    let s3p2 = data['f3p2']; 
    let s3p3 = data['f3p3'];    
    let s3p4 = data['f3p4']; 
    let s3p5 = data['f3p5'];    
    let s3p6 = data['f3p6'];    

    let s4p1 = data['s4p1'];  
    let s4p2 = data['s4p2'];  
    let s4p3 = data['s4p3'];  


    let s5p1 = data['f5p1'];  
    let s5p2 = data['f5p2'];  


    let s6p1 = data['f6p1']; 
    let s6p2 = data['f6p2']; 
    let s6p3 = data['f6p3']; 
    let s6p4 = data['f6p4']; 
    let s6p5 = data['f6p5']; 
    let s6p6 = data['f6p6']; 



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
    if( s3p6 == true) {
$('#s3p6').hide()
$('#s3p6x').show()
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
    if( s6p5 == true) {
$('#s6p5').hide()
$('#s6p5x').show()
prognum6++
}
    if( s6p6 == true) {
$('#s6p6').hide()
$('#s6p6x').show()
prognum6++
}


let sp =((prognum+prognum2+prognum3+prognum4+prognum5+prognum6)/25*100)
let spn = Math.round(sp)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({FTB:spn}, {merge:true})


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
         window.location.href = '/dashboard/training/flip-the-bird';
  
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
})})

}



{
document.getElementById('s1-quiz').addEventListener('submit', function() {

let s1q1 = document.querySelector('#s1-quiz-1').value == 'correct'
let s1q2 = document.querySelector('#s1-quiz-2').value == 'correct'
let s1q3 = document.querySelector('#s1-quiz-3').value == 'correct'
let s1q4 = document.querySelector('#s1-quiz-4').value == 'correct'
let s1q5 = document.querySelector('#s1-quiz-5').value == 'correct'
let s1q6 = document.querySelector('#s1-quiz-6').value == 'correct'
let s1q7 = document.querySelector('#s1-quiz-7').value == 'correct'


let percentage = 0
if(s1q1) { percentage++}
if(s1q2) { percentage++}
if(s1q3) { percentage++}
if(s1q4) { percentage++}
if(s1q5) { percentage++}
if(s1q6) { percentage++}
if(s1q7) { percentage++}

let correct = Math.round((percentage * 14.28))
document.getElementById('s1p5percentage').textContent = correct+'%'

if(s1q1 && s1q2 && s1q3 && s1q4 && s1q5 && s1q6 && s1q7 ) {
$('#s1-quiz-incorrect').hide()
$('#s1-quiz-correct').css("display", "flex");
$('#s2p4x').show()
$('#s2p4').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s2p4:true},{merge:true})

let prognum = 0
if (document.querySelector('#s1p1x').style.display == 'block'){prognum++}
if (document.querySelector('#s1p2x').style.display == 'block'){prognum++}
if (document.querySelector('#s1p3x').style.display == 'block'){prognum++}
if (document.querySelector('#s1p4x').style.display == 'block'){prognum++}
if (document.querySelector('#s1p5x').style.display == 'block'){prognum++}
document.querySelector('#prognum').textContent = prognum

}

else {
$('#s1-quiz-incorrect').css("display", "flex");
$('#s1-quiz-correct').hide()
}

})
}


{
document.getElementById('s3-quiz').addEventListener('submit', function() {

let s3q1 = document.querySelector('#s3-quiz-1').value == 'correct'
let s3q2 = document.querySelector('#s3-quiz-2').value == 'correct'
let s3q3 = document.querySelector('#s3-quiz-3').value == 'correct'
let s3q4 = document.querySelector('#s3-quiz-4').value == 'correct'
let s3q5 = document.querySelector('#s3-quiz-5').value == 'correct'
let s3q6 = document.querySelector('#s3-quiz-6').value == 'correct'


let percentage = 0
if(s3q1) { percentage++}
if(s3q2) { percentage++}
if(s3q3) { percentage++}
if(s3q4) { percentage++}
if(s3q5) { percentage++}
if(s3q6) { percentage++}
let correct = Math.round((percentage * 16.66))
document.getElementById('s3p6percentage').textContent = correct+'%'

if(s3q1 && s3q2 && s3q3 && s3q4 && s3q5 && s3q6 ) {
$('#s3-quiz-incorrect').hide()
$('#s3-quiz-correct').css("display", "flex");
$('#s3p6x').show()
$('#s3p6').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({f3p6:true},{merge:true})

let prognum3 = 0
if (document.querySelector('#s3p1x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p2x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p3x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p4x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p5x').style.display == 'block'){prognum3++}
if (document.querySelector('#s3p6x').style.display == 'block'){prognum3++}
document.querySelector('#prognum3').textContent = prognum3

}

else {
$('#s3-quiz-incorrect').css("display", "flex");
$('#s3-quiz-correct').hide()
console.log('incorrect')
}

})

}


{
document.getElementById('s4-quiz').addEventListener('submit', function() {

let s4q1 = document.querySelector('#s4-quiz-1').value == 'correct'
let s4q2 = document.querySelector('#s4-quiz-2').value == 'correct'
let s4q3 = document.querySelector('#s4-quiz-3').value == 'correct'
let s4q4 = document.querySelector('#s4-quiz-4').value == 'correct'
let s4q5 = document.querySelector('#s4-quiz-5').value == 'correct'
let s4q6 = document.querySelector('#s4-quiz-6').value == 'correct'

let percentage = 0
if(s4q1) { percentage++}
if(s4q2) { percentage++}
if(s4q3) { percentage++}
if(s4q4) { percentage++}
if(s4q5) { percentage++}
if(s4q6) { percentage++}
let correct = Math.round((percentage * 16.66))
document.getElementById('s4p3percentage').textContent = correct+'%'

if(s4q1 && s4q2 && s4q3 && s4q4 && s4q5 && s4q6 ) {
$('#s4-quiz-incorrect').hide()
$('#s4-quiz-correct').css("display", "flex");
$('#s4p3x').show()
$('#s4p3').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({f4p3:true},{merge:true})

let prognum4 = 0
if (document.querySelector('#s4p1x').style.display == 'block'){prognum4++}
if (document.querySelector('#s4p2x').style.display == 'block'){prognum4++}
if (document.querySelector('#s4p3x').style.display == 'block'){prognum4++}
document.querySelector('#prognum4').textContent = prognum4

}

else {
$('#s4-quiz-incorrect').css("display", "flex");
$('#s4-quiz-correct').hide()
}

})
}



{
document.getElementById('s6-quiz').addEventListener('submit', function() {

let s6q1 = document.querySelector('#s6-quiz-1').value == 'correct'
let s6q2 = document.querySelector('#s6-quiz-2').value == 'correct'
let s6q3 = document.querySelector('#s6-quiz-3').value == 'correct'
let s6q4 = document.querySelector('#s6-quiz-4').value == 'correct'
let s6q5 = document.querySelector('#s6-quiz-5').value == 'correct'
let s6q6 = document.querySelector('#s6-quiz-6').value == 'correct'
let s6q7 = document.querySelector('#s6-quiz-7').value == 'correct'
let s6q8 = document.querySelector('#s6-quiz-8').value == 'correct'


let percentage = 0
if(s6q1) { percentage++}
if(s6q2) { percentage++}
if(s6q3) { percentage++}
if(s6q4) { percentage++}
if(s6q5) { percentage++}
if(s6q6) { percentage++}
if(s6q7) { percentage++}
if(s6q8) { percentage++}
let correct = Math.round((percentage * 12.50))
document.getElementById('s6p5percentage').textContent = correct+'%'

if(s6q1 && s6q2 && s6q3 && s6q4 && s6q5 && s6q6 && s6q7 && s6q8) {
$('#s6-quiz-incorrect').hide()
$('#s6-quiz-correct').css("display", "flex");
$('#s6p6x').show()
$('#s6p6').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({f6p6:true},{merge:true})

let prognum6 = 0
if (document.querySelector('#s6p1x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p2x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p3x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p4x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p5x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p6x').style.display == 'block'){prognum6++}
document.querySelector('#prognum6').textContent = prognum6

}

else {
$('#s6-quiz-incorrect').css("display", "flex");
$('#s6-quiz-correct').hide()
}

})
}
