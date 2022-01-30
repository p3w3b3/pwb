  {
  const firebaseConfig = {    
  apiKey: "AIzaSyB5X0NgXNQ8d3UjqVP5p_xB9Yt8cOk1ut8",
  authDomain: "peckwater-system.firebaseapp.com",
  projectId: "peckwater-system",
  storageBucket: "peckwater-system.appspot.com",
  messagingSenderId: "620518934310",
  appId: "1:620518934310:web:84c9c701f5794161d863e7",
  measurementId: "G-EZSWDWDTB6"
};


const email = document.querySelector("#email");
const signOutButton = document.querySelector("#signOutButton");
const userName = document.querySelector("#userName");
const userName2 = document.querySelector("#userName2");
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
var today = new Date();
var date = (today.getDate()+'-'+(today.getMonth()+1)+'-')+today.getFullYear()



firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const authChanged = firebase.auth().onAuthStateChanged((user) => {
const signout = () => {
auth.signOut();
};
signOutButton.addEventListener('click', signout);
auth.onAuthStateChanged(async (user) => {
let currentPath = window.location.pathname;
if(user) {
let curUser = firebase.auth().currentUser;
let myFS = firebase.firestore()
let docRef = myFS.doc("users/" + curUser.uid);
docRef.get().then(docSnap => {
let data = docSnap.data()
let name = data['Name'];
let emaild = data['Email']; 
let prereq = data['prereq']; 
let sstid = data['stid'].toLowerCase()


if(currentPath !== '/operations/'+sstid){
location.href = '/dashboard';
}


let firstletter = name.substring(0, 1)
$('.firstletter').html(firstletter);
let restaurant = data['Restaurant']; 
let profileuid = curUser.uid
      let course1 = data['ftbcourse']
      let course2 = data['seccourse']
      let course3 = data['wbwcourse']
      let course4 = data['dlvcourse']

if(course1 == true){
$('#train1').css('display', 'flex');
$('#cf2').append(new Option('Flip The Bird', 'Flip The Bird'))
} else  {
$('#train1').hide()
}
if(course2 == true){
$('#ops7').css('display', 'block');
$('#cf2').append(new Option('Seoul Chikin', 'Seoul Chikin'))
} else  {
$('#ops7').hide()
}
if(course3 == true){
$('#ops8').css('display', 'block');
$('#cf2').append(new Option('Wham Bam Wings', 'Wham Bam Wings'))
} else  {
$('#ops8').hide()
}
if(course4 == true){
$('#ops9').css('display', 'flex');
} else  {
$('#ops9').hide()
}

document.querySelector('#profile-uid').textContent=profileuid;
document.querySelector('#profile-name').textContent=name;
document.querySelector('#profile-email').textContent=emaild;
if(!!restaurant) {
document.querySelector('#profile-restaurant').textContent=restaurant;
} else {document.querySelector('#profile-restaurant').textContent='-';}
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Timestamp:date}, {merge:true})


if(!!name) {
$('#userName2').html(name);
} else {
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Name:user.displayName}, {merge:true})
{
setTimeout(() => { 
window.location.href = '/onboarding'; 
}, 2000);
}
$('#userName2').html(name);
}  
if(!!emaild) {
$('#email').html(emaild);
} else {  
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Email:user.email}, {merge:true})
$('#email').html(emaild);
}
})
signOutButton.style.display="block";
maincontent.style.display='flex';
loader.style.display='none';
} else {
console.log('user logged out');
signOutButton.style.display="none";
if('/' != currentPath){location.href = '/login';}
maincontent.style.display='none';
loader.style.display='flex';
}})})

}
