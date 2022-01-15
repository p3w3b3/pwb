Webflow.push(function() {
$('#search-field').submit(function() {
return false;
});
});
const email = document.querySelector("#email");
const signOutButton = document.querySelector("#signOutButton");
const userName = document.querySelector("#userName");
const userName2 = document.querySelector("#userName2");
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
var today = new Date();
var date = (today.getDate()+'-'+(today.getMonth()+1)+'-')+today.getFullYear()
document.querySelector(".closetracker").addEventListener("click", function() {
$('.tracking-popup').hide()
$('.tracking-wrapper').hide() 
})

document.querySelector(".tracking-wrapper").addEventListener("click", function() {
$('.tracking-popup').hide()
$('.tracking-wrapper').hide() 
})


document.querySelector(".closeadduser").addEventListener("click", function() {

$('#createuserpopup').hide() 
$('.signwrapper').hide() 
})


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
let firstletter = name.substring(0, 1)
$('.firstletter').html(firstletter);
let restaurant = data['Restaurant']; 
let profileuid = curUser.uid
let pdt1 = data['pdate1']; 
let pdt2 = data['pdate2']; 
let pdt3 = data['pdate3']; 
let pdt4 = data['pdate4']; 
let pdt5 = data['pdate5']; 

if(!!pdt1) {
$('#daterow1').css('display', 'flex');
$('#daterow1ph').hide()
document.querySelector('#dated1').textContent=pdt1;
} else {
$('#daterow1').hide()
$('#daterow1ph').css('display', 'flex');
}
if(!!pdt2) {
$('#daterow2').css('display', 'flex');
$('#daterow2ph').hide()
document.querySelector('#dated2').textContent=pdt2;
} else {
$('#daterow2').hide()
$('#daterow2ph').css('display', 'flex');
}
if(!!pdt3) {
$('#daterow3').css('display', 'flex');
$('#daterow3ph').hide()
document.querySelector('#dated3').textContent=pdt3;
} else {
$('#daterow3').hide()
$('#daterow3ph').css('display', 'flex');
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
document.querySelector('#profile-uid').textContent=profileuid;
document.querySelector('#profile-name').textContent=name;
document.querySelector('#profile-email').textContent=emaild;
if(!!restaurant) {
document.querySelector('#profile-restaurant').textContent=restaurant;
} else {document.querySelector('#profile-restaurant').textContent='-';}
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Timestamp:date}, {merge:true})
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
let currentPath = location.href;
if('https://www.peckwaterbrands.com/dashboard#contact' === currentPath){
$('#homebox').hide()
$('.ob-box').hide()
$('#obsidebar').hide()
$('#contactbox').show()
$(".nav-button").css("border-color","transparent");
$("#n4").css("border-color","white");
} else if('https://www.peckwaterbrands.com/dashboard#onboarding' === currentPath){
$('#homebox').hide()
$('.ob-box').hide()
$('#obsidebar').show()
$('#ob1').show()
$('#contactbox').hide()
$(".nav-button").css("border-color","transparent");
$("#n2").css("border-color","white");
} else if('https://www.peckwaterbrands.com/dashboard#tracking' === currentPath){
$('#homebox').hide()
$('.ob-box').hide()
$('#obsidebar').hide()
$('#ob1').hide()
$('#contactbox').hide()
$('#trackerbox').show()
$(".nav-button").css("border-color","transparent");
}{{
const db = firebase.firestore();    
let myResults = [];
let myUid = [];
db.collection("users").get().then((querySnapshot) => {
querySnapshot.forEach((doc) => {
myResults.push({data:doc.data()})
myUid.push({id:doc.id}); 
});
var e = $('#training-table');
for (let i = 0; i < myResults.length; i++) {
const newItem = e.clone();
newItem.children("#uName")[0].textContent = (myResults[i].data.Name);
newItem.children("#Enrolled")[0].textContent = (myResults[i].data.Enrolled);
newItem.children("#uRestaurant")[0].textContent = (myResults[i].data.Restaurant);
newItem.children("#uTimestamp")[0].textContent = (myResults[i].data.Timestamp);
newItem[0].id = 'user-' + i
newItem.find('#tracking-name')[0].textContent = ('User - ' + myResults[i].data.Name);
newItem.find('#tracking-id')[0].textContent = (myUid[i].id);
newItem.children('#uPopup')[0].id = 'uPopup-' + i
newItem.find('#uButton')[0].id = 'uButton-' + i
newItem.find('#accesslevel')[0].id = 'accesslevel-' + i
newItem.find('#popfieldfirst')[0].id = 'popfieldfirst-' + i
newItem.find('#popfieldsecond')[0].id = 'popfieldsecond-' + i
newItem.find('#popfieldthird')[0].id = 'popfieldthird-' + i
newItem.find('#popfieldfourth')[0].id = 'popfieldfourth-' + i
newItem.find('#popfieldfifth')[0].id = 'popfieldfifth-' + i
var pfield1 = (myResults[i].data.pdate1)
var pfield2 = (myResults[i].data.pdate2)
var pfield3 = (myResults[i].data.pdate3)
var pfield4 = (myResults[i].data.pdate4)
var pfield5 = (myResults[i].data.pdate5)
if(pfield1 == undefined) {
newItem.find("#popfieldfirst-"+i)[0].placeholder = '-'
} else { 
newItem.find("#popfieldfirst-"+i)[0].placeholder = pfield1
}
if(pfield2 == undefined) {
newItem.find("#popfieldsecond-"+i)[0].placeholder = '-'
} else { 
newItem.find("#popfieldsecond-"+i)[0].placeholder = pfield2
}
if(pfield3 == undefined) {
newItem.find("#popfieldthird-"+i)[0].placeholder = '-'
} else { 
newItem.find("#popfieldthird-"+i)[0].placeholder = pfield3
}
if(pfield4 == undefined) {
newItem.find("#popfieldfourth-"+i)[0].placeholder = '-'
} else { 
newItem.find("#popfieldfourth-"+i)[0].placeholder = pfield4
}
if(pfield5 == undefined) {
newItem.find("#popfieldfifth-"+i)[0].placeholder = '-'
} else { 
newItem.find("#popfieldfifth-"+i)[0].placeholder = pfield5
}
document.addEventListener("input", () => {
let paccess = newItem.find('#accesslevel-'+i)[0].value
let pdate1 = newItem.find('#popfieldfirst-'+i)[0].value
let pdate2 = newItem.find('#popfieldsecond-'+i)[0].value
let pdate3 = newItem.find('#popfieldthird-'+i)[0].value
let pdate4 = newItem.find('#popfieldfourth-'+i)[0].value
let pdate5 = newItem.find('#popfieldfifth-'+i)[0].value
let tid = (myUid[i].id);
newItem.find('#uButton-'+i)[0].addEventListener('click', function() {
if(paccess === 'prereq') {
firebase.firestore().doc("users/"+tid)
.set({prereq:true},{merge:true}) }

if(paccess === 'admin') {
firebase.firestore().doc("users/"+tid)
.set({prereq:true},{merge:true})
firebase.firestore().doc("users/"+tid)
.set({admin:true},{merge:true}) }
if(!!pdate1) {
firebase.firestore().doc("users/"+tid)
.set({pdate1:pdate1},{merge:true}) }
if(!!pdate2) {
firebase.firestore().doc("users/"+tid)
.set({pdate2:pdate2},{merge:true})}
if(!!pdate3) {
firebase.firestore().doc("users/"+tid)
.set({pdate3:pdate3},{merge:true})}
if(!!pdate4) {
firebase.firestore().doc("users/"+tid)
.set({pdate4:pdate4},{merge:true})}
if(!!pdate5) {
firebase.firestore().doc("users/"+tid)
.set({pdate5:pdate5},{merge:true})}
})})

newItem.children("#uGear")[0].addEventListener("click", function(){ 
$(('#uPopup-')+i).show()
$('.tracking-wrapper').show() 
})

newItem.find('#uClose')[0].addEventListener("click", function(){ 
$(('#uPopup-')+i).hide()
$('.tracking-wrapper').hide() 
});

newItem.find('#uButton-'+i)[0].addEventListener("click", function(){ 
$(('#uPopup-')+i).hide()
$('.tracking-wrapper').hide() 
});

var ftbn = parseInt(myResults[i].data.FTB)
var secn = parseInt(myResults[i].data.SEC)
var wbwn = parseInt(myResults[i].data.WBW)
let totn  = 0
if((myResults[i].data.FTB == undefined)) {
newItem.children("#uFTB")[0].textContent = '0%'
var ftbn = 0
} else { 
newItem.children("#uFTB")[0].textContent = ftbn + '%'
}
if((myResults[i].data.SEC == undefined)) {
newItem.children("#uSEC")[0].textContent = '0%'
var secn = 0
} else { 
newItem.children("#uSEC")[0].textContent = secn + '%'
}
if((myResults[i].data.WBW == undefined)) {
newItem.children("#uWBW")[0].textContent = '0%'
var wbwn = 0
} else { 
newItem.children("#uWBW")[0].textContent = wbwn + '%'
}
let totaln = (secn+ftbn+wbwn)/300*100
let ntotal = (Math.round(totaln)+'%')
if(ntotal !== 'NaN%') {
newItem.children("#uTotal")[0].textContent = ntotal
} else { 
newItem.children("#uTotal")[0].textContent = ' '
}
newItem.insertAfter('.training-headings')
}})
}
setTimeout(() => { 
$('.training-table').css('opacity', '1.0')
$('#training-table').remove()
}, 2500);
}
