
{
var myElement = document.getElementById('db1');
var mc = new Hammer.Manager(myElement);
mc.add(new Hammer.Pan({direction:Hammer.DIRECTION_HORIZONTAL, threshold:80, pointers: 0}));
mc.on("panend", function(ev) {
  if(ev.direction == Hammer.DIRECTION_LEFT) 
  {
if($('#ab1').css("display") == 'flex') {
$('#ac22').click() }

else if($('#ab2').css("display") == 'flex') {
$('#ac33').click() }

else if($('#ab3').css("display") == 'flex') {
$('#ac44').click() }

else if($('#ab4').css("display") == 'flex') {
$('#ac55').click() }
else if($('#ab5').css("display") == 'flex') {
$('#ac66').click() }
  
  }

 if(ev.direction == Hammer.DIRECTION_RIGHT) {
if($('#ab2').css("display") == 'flex') {
$('#ac11').click() }

else if($('#ab3').css("display") == 'flex') {
$('#ac22').click() }

else if($('#ab4').css("display") == 'flex') {
$('#ac33').click() }
  

else if($('#ab5').css("display") == 'flex') {
$('#ac44').click() }
  

else if($('#ab6').css("display") == 'flex') {
$('#ac55').click() }
  }
});



}

{
{
document.getElementById("dash-button-1").addEventListener("click", () => {
$('.dash-sep').hide()
$('#dashpart1').css("display", "flex");
})

document.getElementById("dash-button-2").addEventListener("click", () => {
$('.dash-sep').hide()
$('#dashpart2').css("display", "flex");
})

document.getElementById("dash-button-3").addEventListener("click", () => {
$('.dash-sep').hide()
$('#dashpart3').css("display", "flex");
})


document.getElementById("dash-button-4").addEventListener("click", () => {
$('.dash-sep').hide()
$('#dashpart5').css("display", "flex");
})


document.getElementById("dash-button-5").addEventListener("click", () => {
$('.dash-sep').hide()
$('#dashpart4').css("display", "flex");
})



document.getElementById("dash-button-7").addEventListener("click", () => {
$('.dash-sep').hide()
$('#dashpart6').css("display", "flex");
})

document.getElementById("mbmenu1").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbmenu1').addClass( "current")

$('.main-section-ops').hide()
$('#db1').css("display", "flex");
$('.dash-sep').hide()
$('#dashpart1').css("display", "flex");

$('.middle-box').hide()
$('#mbox1').css("display", "flex");


$('.mobile-menu-wrapper').click()
$('.bottom-bar-dsb').hide()
$('#db-bar-1').css("display", "flex");
})



document.getElementById("mbmenuleader").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbmenuleader').addClass( "current")

$('.main-section-ops').hide()
$('#db2').css("display", "flex");
$('.middle-box').hide()
$('#mbox1').css("display", "flex");


$('.mobile-menu-wrapper').click()
$('.bottom-bar-dsb').hide()
$('#db-bar-lead').css("display", "flex");
})

document.getElementById("mbmenu2").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbmenu2').addClass( "current")

$('.main-section-ops').hide()
$('#db3').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('#db-bar-2').css("display", "flex");
$('.dash-sep').hide()
$('#dashpart5').css("display", "flex");

   
$('.middle-box').hide()
$('#mbox2').css("display", "flex");

   
$('.mobile-menu-wrapper').click()
})


document.getElementById("mbmenu3").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbmenu3').addClass( "current")

$('.main-section-ops').hide()
$('#db-insights').css("display", "flex");
$('.dash-sep').hide()
$('.bottom-bar-dsb').hide()
$('#db-bar-3').css("display", "flex");
   
   
$('.middle-box').hide()
$('#mbox3').css("display", "flex");


$('.mobile-menu-wrapper').click()
})

document.getElementById("mbmenu4").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbmenu4').addClass( "current")

$('.main-section-ops').hide()
$('#db5').css("display", "flex");
$('.dash-sep').hide()
$('#dashpart8').css("display", "flex");

$('.bottom-bar-dsb').hide()
$('#db-bar-4').css("display", "flex");
   
   
$('.middle-box').hide()
$('#mbox5').css("display", "flex");


$('.mobile-menu-wrapper').click()
})


document.getElementById("mbtraining1").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbtraining1').addClass( "current")

$('.main-section-ops').hide()
$('#db6').css("display", "flex");
$('.bottom-bar-dsb').hide()

$('.middle-box').hide()
$('#mbox4').css("display", "flex");


$('.mobile-menu-wrapper').click()
})
	
	
document.getElementById("mbclucknrun").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbclucknrun').addClass( "current")

$('.main-section-ops').hide()
$('#dbcluck').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('.middle-box').hide()
$('#mbox4').css("display", "flex");

$('.mobile-menu-wrapper').click()
})

document.getElementById("mblockednloaded").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mblockednloaded').addClass( "current")

$('.main-section-ops').hide()
$('#dbloaded').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('.middle-box').hide()
$('#mbox4').css("display", "flex");

$('.mobile-menu-wrapper').click()
})

document.getElementById("mbnomnyam").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbnomnyam').addClass( "current")

$('.main-section-ops').hide()
$('#dbnomnyam').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('.middle-box').hide()
$('#mbox4').css("display", "flex");

$('.mobile-menu-wrapper').click()
})


document.getElementById("mbtraining2").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbtraining2').addClass( "current")

$('.main-section-ops').hide()
$('#db7').css("display", "flex");
$('.bottom-bar-dsb').hide()

$('.middle-box').hide()
$('#mbox4').css("display", "flex");
$('.mobile-menu-wrapper').click()
})

document.getElementById("mbtraining3").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbtraining3').addClass( "current")

$('.main-section-ops').hide()
$('#db8').css("display", "flex");
$('.bottom-bar-dsb').hide()

$('.middle-box').hide()
$('#mbox4').css("display", "flex");
$('.mobile-menu-wrapper').click()
})

document.getElementById("mbtraining4").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbtraining4').addClass( "current")

$('.main-section-ops').hide()
$('#db9').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('.middle-box').hide()
$('#mbox4').css("display", "flex");

$('.mobile-menu-wrapper').click()
})
  
  
document.getElementById("mbtraining10").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbtraining10').addClass( "current")

$('.main-section-ops').hide()
$('#db10').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('.middle-box').hide()
$('#mbox4').css("display", "flex");

$('.mobile-menu-wrapper').click()
})

document.getElementById("mbtraining11").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbtraining11').addClass( "current")

$('.main-section-ops').hide()
$('#db11').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('.middle-box').hide()
$('#mbox4').css("display", "flex");

$('.mobile-menu-wrapper').click()
})
	
document.getElementById("mbfiesta").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbfiesta').addClass( "current")

$('.main-section-ops').hide()
$('#dbfiesta').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('.middle-box').hide()
$('#mbox4').css("display", "flex");

$('.mobile-menu-wrapper').click()
})

document.getElementById("mbrebelrito").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbrebelrito').addClass( "current")

$('.main-section-ops').hide()
$('#dbrebelrito').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('.middle-box').hide()
$('#mbox4').css("display", "flex");

$('.mobile-menu-wrapper').click()
})
	

document.getElementById("mbrealrito").addEventListener("click", () => {
$('.mobile-menu-button').removeClass( "current")
$('#mbrealrito').addClass( "current")

$('.main-section-ops').hide()
$('#db12rr').css("display", "flex");
$('.bottom-bar-dsb').hide()
$('.middle-box').hide()
$('#mbox4').css("display", "flex");

$('.mobile-menu-wrapper').click()
})
	
}

}




   {
 const firebaseConfig = {
    apiKey: "AIzaSyDApbEuGdjDf-dBlOljBvvXAPlZmUx-D5M",
    authDomain: "stonegate-system.firebaseapp.com",
    projectId: "stonegate-system",
    storageBucket: "stonegate-system.appspot.com",
    messagingSenderId: "798322604618",
    appId: "1:798322604618:web:fada6a2e9f09f0319bc4b3",
    measurementId: "G-1J8XNVRV7Q"
  };


const email = document.querySelector("#email");
const signOutButton = document.querySelector("#signOutButton");
const signOutButton2 = document.querySelector("#mobsignout");
const userName = document.querySelector("#userName");
const userName2 = document.querySelector("#userName2");
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
var today = new Date();
var date = (today.getDate()+'-'+(today.getMonth()+1)+'-')+today.getFullYear()




firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const authChanged = firebase.auth().onAuthStateChanged((user) => {

let prognumd = 0

let prognum = 0
let prognum2 = 0
let prognum3 = 0
let prognum4 = 0
let prognum5 = 0
let prognum6 = 0
let prognum8 = 0

let prognumf = 0
let prognumf2 = 0
let prognumf3 = 0
let prognumf4 = 0
let prognumf5 = 0
let prognumf6 = 0
let prognumf8 = 0

let prognumsm = 0
let prognumv = 0


const signout = () => {
auth.signOut();
};
signOutButton.addEventListener('click', signout);
signOutButton2.addEventListener('click', signout);
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


 let profileuids = curUser.uid      
      
{
window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "e84ncf6y",
    name: name, // Full name
    email: emaild, // Email address
    user_id: profileuids // UID FIREBASE
  };
}
{
// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/e84ncf6y'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/e84ncf6y';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
}


      
// if gsign and no name   
if(!!name) {
$('#userName').html(name);
$('#userName2').html(name);
} else {
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Name:user.displayName}, {merge:true})
{
setTimeout(() => { 
window.location.href = '/operations/'+sstid
}, 2000);
}
$('#userName2').html(name);
$('#userName').html(name);
}
	
{
document.getElementById("retakesec1").addEventListener("click", () => {
setTimeout(() => { 
location.replace('https://stonegate.peckwaterbrands.com/operations/'+sstid+'#training2')
location.reload()
}, 500)})
}
{
document.getElementById("retakesec2").addEventListener("click", () => {
setTimeout(() => { 
location.replace('https://stonegate.peckwaterbrands.com/operations/'+sstid+'#training2')
location.reload()
}, 500)})
}

{
document.getElementById("retakesec3").addEventListener("click", () => {
setTimeout(() => { 
location.replace('https://stonegate.peckwaterbrands.com/operations/'+sstid+'#training2')
location.reload()
}, 500)})
}
{
document.getElementById("retakesec4").addEventListener("click", () => {
setTimeout(() => { 
location.replace('https://stonegate.peckwaterbrands.com/operations/'+sstid+'#training2')
location.reload()
}, 500)})
}


{
document.getElementById("retakeftb1").addEventListener("click", () => {
setTimeout(() => { 
location.replace('https://stonegate.peckwaterbrands.com/operations/'+sstid+'#training1')
location.reload()
}, 500)})



document.getElementById("retakeftb2").addEventListener("click", () => {
setTimeout(() => { 
location.replace('https://stonegate.peckwaterbrands.com/operations/'+sstid+'#training1')
location.reload()
}, 500)})



document.getElementById("retakeftb3").addEventListener("click", () => {
setTimeout(() => { 
location.replace('https://stonegate.peckwaterbrands.com/operations/'+sstid+'#training1')
location.reload()
}, 500)})

    
document.getElementById("retakeftb4").addEventListener("click", () => {
setTimeout(() => { 
location.replace('https://stonegate.peckwaterbrands.com/operations/'+sstid+'#training1')
location.reload()
}, 500)})
}
   


if(currentPath !== '/operations/'+sstid){
location.href = '/operations/'+sstid
}
 
// if #actions 

if( ($(window).width() < 1000) && (window.location.href.indexOf("#actions") != -1) ) {
   
$('.mobile-menu-button').removeClass( "current")
$('#mbmenu1').addClass( "current")
$('.main-section-ops').hide()
$('#db1').css("display", "flex");
$('.dash-sep').hide()
$('#dashpart3').css("display", "flex");

$('.middle-box').hide()
$('#mbox1').css("display", "flex");
$('.mobile-menu-wrapper').click()
$('.bottom-bar-dsb').hide()
$('#db-bar-1').css("display", "flex");
}


// if training 1 ftb mobile

if( ($(window).width() < 1000) && (window.location.href.indexOf("#training1") != -1)){
   
$('.mobile-menu-button').removeClass( "current")
$('#mbtraining2').addClass( "current")
$('.main-section-ops').hide()
$('#db7').css("display", "flex");
$('.dash-sep').hide()
$('#dashpart3').css("display", "flex");

$('.middle-box').hide()
$('#mbox1').css("display", "flex");
$('.mobile-menu-wrapper').click()
$('.bottom-bar-dsb').hide()
$('#db-bar-1').css("display", "flex");
}
   
   
   
   
// if training 1 ftb desktop

if( ($(window).width() > 1000) && (window.location.href.indexOf("#training1") != -1)){
 
$('.main-section-ops').hide()
$('#db7').css("display", "flex");
$('.sub-nav').hide()
$('#sb5').css("display", "flex");
$('.nav-selection').removeClass( "selected")
$('#mytra').addClass( "selected")
$('.generic-heading-ops').removeClass( "cur")
$('#ops7').addClass( "cur")
}


// if training 2 sec desktop

if( ($(window).width() > 1000) && (window.location.href.indexOf("#training2") != -1)){
 
$('.main-section-ops').hide()
$('#db6').css("display", "flex");
$('.sub-nav').hide()
$('#sb5').css("display", "flex");
$('.nav-selection').removeClass( "selected")
$('#mytra').addClass( "selected")
$('.generic-heading-ops').removeClass( "cur")
$('#ops6').addClass( "cur")
}

   
   

// if training 2 sec

if( ($(window).width() < 1000) && (window.location.href.indexOf("#training2") != -1)){
   
$('.mobile-menu-button').removeClass( "current")
$('#mbtraining1').addClass( "current")
$('.main-section-ops').hide()
$('#db6').css("display", "flex");
$('.dash-sep').hide()
$('#dashpart3').css("display", "flex");

$('.middle-box').hide()
$('#mbox1').css("display", "flex");
$('.mobile-menu-wrapper').click()
$('.bottom-bar-dsb').hide()
$('#db-bar-1').css("display", "flex");

$('.sub-nav').hide()
$('#sb5').css("display", "flex");

$('.nav-selection').removeClass( "selected")
$('#mytra').addClass( "selected")

}
  
  
  
  
  
  
  
{
      let quiz1 = data['s2p4']; 
      let quiz3 = data['s3p6']; 
      let quiz4 = data['s4p3']; 
      let quiz6 = data['s6p5']; 




if(!!quiz1) {
$('#s1-quiz').hide()
$('#s1-quiz-completed').css("display", "flex");
}

if(!!quiz3) {
$('#s3-quiz').hide()
$('#s3-quiz-completed').css("display", "flex");
}

if(!!quiz4) {
$('#s4-quiz').hide()
$('#s4-quiz-completed').css("display", "flex");
}

if(!!quiz6) {
$('#s6-quiz').hide()
$('#s6-quiz-completed').css("display", "flex");
}

      let quiz1f = data['f2p4']; 
      let quiz3f = data['f3p6']; 
      let quiz4f = data['f4p3']; 
      let quiz6f = data['f6p6']; 




if(!!quiz1f) {
$('#f1-quiz').hide()
$('#f1-quiz-completed').css("display", "flex");
}

if(!!quiz3f) {
$('#f3-quiz').hide()
$('#f3-quiz-completed').css("display", "flex");
}

if(!!quiz4f) {
$('#f4-quiz').hide()
$('#f4-quiz-completed').css("display", "flex");
}

if(!!quiz6f) {
$('#f6-quiz').hide()
$('#f6-quiz-completed').css("display", "flex");
}

}



 let f1p1 = data['f1p1'];    
    let f1p2 = data['f1p2'];    
    let f1p3 = data['f1p3'];    
    let f1p4 = data['f1p4']; 
     
    let f2p1 = data['f2p1'];    
    let f2p2 = data['f2p2'];    
    let f2p3 = data['f2p3'];
    let f2p4 = data['f2p4']

    let f3p1 = data['f3p1'];    
    let f3p2 = data['f3p2']; 
    let f3p3 = data['f3p3'];    
    let f3p4 = data['f3p4']; 
    let f3p5 = data['f3p5'];    
    let f3p6 = data['f3p6'];    

    let f4p1 = data['f4p1'];  
    let f4p2 = data['f4p2'];  
    let f4p3 = data['f4p3'];  


    let f5p1 = data['f5p1'];  
    let f5p2 = data['f5p2'];  


    let f6p1 = data['f6p1']; 
    let f6p2 = data['f6p2']; 
    let f6p3 = data['f6p3']; 
    let f6p4 = data['f6p4']; 
    let f6p5 = data['f6p5']; 
    let f6p6 = data['f6p6']; 
  
    let f7p1 = data['f7p1']; 
    let f7p2 = data['f7p2']; 
    let f7p3 = data['f7p3']; 
    let f7p4 = data['f7p4']; 
    let f7p5 = data['f7p5']; 

let d1p1 = data["d1p1"];
let d1p2 = data["d1p2"];
let d1p3 = data["d1p3"];
let d1p4 = data["d1p4"];

if (d1p1 == true) {
  $("#d1p1").hide();
  $("#d1p1x").show();
  prognumd++;
}
if (d1p2 == true) {
  $("#d1p2").hide();
  $("#d1p2x").show();
  prognumd++;
}

if (d1p3 == true) {
  $("#d1p3").hide();
  $("#d1p3x").show();
  prognumd++;
}

if (d1p4 == true) {
  $("#d1p4").hide();
  $("#d1p4x").show();
  prognumd++;
}

document.querySelector('#prognumd').textContent = prognumd



    if( f1p1 == true) {
$('#f1p1').hide()
$('#f1p1x').show()
prognumf++
}
    if( f1p2 == true) {
$('#f1p2').hide()
$('#f1p2x').show()
prognumf++
}

    if( f1p3 == true) {
$('#f1p3').hide()
$('#f1p3x').show()
prognumf++
}

    if( f1p4 == true) {
$('#f1p4').hide()
$('#f1p4x').show()
prognumf++
}
    if( f2p1 == true) {
$('#f2p1').hide()
$('#f2p1x').show()
prognumf2++
}
    if( f2p2 == true) {
$('#f2p2').hide()
$('#f2p2x').show()
prognumf2++
}
    if( f2p3 == true) {
$('#f2p3').hide()
$('#f2p3x').show()
prognumf2++
}

    if( f2p4 == true) {
$('#f2p4').hide()
$('#f2p4x').show()
prognumf2++
}

    if( f3p1 == true) {
$('#f3p1').hide()
$('#f3p1x').show()
prognumf3++
}
    if( f3p2 == true) {
$('#f3p2').hide()
$('#f3p2x').show()
prognumf3++
}
    if( f3p3 == true) {
$('#f3p3').hide()
$('#f3p3x').show()
prognumf3++
}
    if( f3p4 == true) {
$('#f3p4').hide()
$('#f3p4x').show()
prognumf3++
}
    if( f3p5 == true) {
$('#f3p5').hide()
$('#f3p5x').show()
prognumf3++
}
    if( f3p6 == true) {
$('#f3p6').hide()
$('#f3p6x').show()
prognumf3++
}
    if( f4p1 == true) {
$('#f4p1').hide()
$('#f4p1x').show()
prognumf4++
}
    if( f4p2 == true) {
$('#f4p2').hide()
$('#f4p2x').show()
prognumf4++
}
    if( f4p3 == true) {
$('#f4p3').hide()
$('#f4p3x').show()
prognumf4++
}

    if( f5p1 == true) {
$('#f5p1').hide()
$('#f5p1x').show()
prognumf5++
}
    if( f5p2 == true) {
$('#f5p2').hide()
$('#f5p2x').show()
prognumf5++
}
    if( f6p1 == true) {
$('#f6p1').hide()
$('#f6p1x').show()
prognumf6++
}
    if( f6p2 == true) {
$('#f6p2').hide()
$('#f6p2x').show()
prognumf6++
}
    if( f6p3 == true) {
$('#f6p3').hide()
$('#f6p3x').show()
prognumf6++
}
    if( f6p4 == true) {
$('#f6p4').hide()
$('#f6p4x').show()
prognumf6++
}
    if( f6p5 == true) {
$('#f6p5').hide()
$('#f6p5x').show()
prognumf6++
}
    if( f6p6 == true) {
$('#f6p6').hide()
$('#f6p6x').show()
prognumf6++
}

   if( f7p1 == true) {
$('#f7p1').hide()
$('#f7p1x').show()
prognumf8++
}
  
    if( f7p2 == true) {
$('#f7p2').hide()
$('#f7p2x').show()
prognumf8++
}
  
    if( f7p3 == true) {
$('#f7p3').hide()
$('#f7p3x').show()
prognumf8++
}
    
    if( f7p4 == true) {
$('#f7p4').hide()
$('#f7p4x').show()
prognumf8++
}
  
    if( f7p5 == true) {
$('#f7p5').hide()
$('#f7p5x').show()
prognumf8++
}




document.querySelector('#prognumf').textContent = prognumf
document.querySelector('#prognumf2').textContent = prognumf2
document.querySelector('#prognumf3').textContent = prognumf3
document.querySelector('#prognumf4').textContent = prognumf4
document.querySelector('#prognumf5').textContent = prognumf5
document.querySelector('#prognumf6').textContent = prognumf6
document.querySelector('#prognumf8').textContent = prognumf8

  
  
	
	
    let kprognum = 0
    let kprognum2 = 0
    let kprognum3 = 0
    let kprognum4 = 0
    let kprognum5 = 0
    let kprognum6 = 0
    let kprognum7 = 0

 let k1p1 = data['k1p1'];    
        let k1p2 = data['k1p2'];    
        let k1p3 = data['k1p3'];    
        let k1p4 = data['k1p4']; 
         
        let k2p1 = data['k2p1'];    
        let k2p2 = data['k2p2'];    
        let k2p3 = data['k2p3'];        
        let k2p4 = data['k2p4']; 
        let k3p1 = data['k3p1'];    
        let k3p2 = data['k3p2']; 
        let k3p3 = data['k3p3'];    
        let k3p4 = data['k3p4']; 
        let k3p5 = data['k3p5'];    
        let k3p6 = data['k3p6'];    
        let k4p1 = data['k4p1']; 
        let k4p2 = data['k4p2']; 
        let k4p3 = data['k4p3'];  
        let k5p1 = data['k5p1'];  
        let k6p1 = data['k6p1']; 
        let k6p2 = data['k6p2']; 
        let k6p3 = data['k6p3']; 
        let k6p4 = data['k6p4']; 
        let k6p5 = data['k6p5']; 
    
        let k7p1 = data['k7p1']; 
        let k7p2 = data['k7p2']; 
        let k7p3 = data['k7p3']; 
        let k7p4 = data['k7p4']; 
        let k7p5 = data['k7p5']; 
    
          
        if( k1p1 == true) {
    $('#k1p1').hide()
    $('#k1p1x').show()
    kprognum++
    }
        if( k1p2 == true) {
    $('#k1p2').hide()
    $('#k1p2x').show()
    kprognum++
    }
    
        if( k1p3 == true) {
    $('#k1p3').hide()
    $('#k1p3x').show()
    kprognum++
    }
    
        if( k1p4 == true) {
    $('#k1p4').hide()
    $('#k1p4x').show()
    kprognum++
    }
    
        if( k2p1 == true) {
    $('#k2p1').hide()
    $('#k2p1x').show()
    kprognum2++
    }
        if( k2p2 == true) {
    $('#k2p2').hide()
    $('#k2p2x').show()
    kprognum2++
    }
        if( k2p3 == true) {
    $('#k2p3').hide()
    $('#k2p3x').show()
    kprognum2++
    }
    
        if( k2p4 == true) {
    $('#k2p4').hide()
    $('#k2p4x').show()
    kprognum2++
    }
    
        if( k3p1 == true) {
    $('#k3p1').hide()
    $('#k3p1x').show()
    kprognum3++
    }
        if( k3p2 == true) {
    $('#k3p2').hide()
    $('#k3p2x').show()
    kprognum3++
    }
        if( k3p3 == true) {
    $('#k3p3').hide()
    $('#k3p3x').show()
    kprognum3++
    }
        if( k3p4 == true) {
    $('#k3p4').hide()
    $('#k3p4x').show()
    kprognum3++
    }
        if( k3p5 == true) {
    $('#k3p5').hide()
    $('#k3p5x').show()
    kprognum3++
    }
        if( k3p6 == true) {
    $('#k3p6').hide()
    $('#k3p6x').show()
    kprognum3++
    }
        if( k4p1 == true) {
    $('#k4p1').hide()
    $('#k4p1x').show()
    kprognum4++
    }
        if( k4p2 == true) {
    $('#k4p2').hide()
    $('#k4p2x').show()
    kprognum4++
    }
        if( k4p3 == true) {
    $('#k4p3').hide()
    $('#k4p3x').show()
    kprognum4++
    }
    
        if( k5p1 == true) {
    $('#k5p1').hide()
    $('#k5p1x').show()
    kprognum5++
    }
        if( k6p1 == true) {
    $('#k6p1').hide()
    $('#k6p1x').show()
    kprognum6++
    }
        if( k6p2 == true) {
    $('#k6p2').hide()
    $('#k6p2x').show()
    kprognum6++
    }
        if( k6p3 == true) {
    $('#k6p3').hide()
    $('#k6p3x').show()
    kprognum6++
    }
        if( k6p4 == true) {
    $('#k6p4').hide()
    $('#k6p4x').show()
    kprognum6++
    }
        if( k6p5 == true) {
    $('#k6p5').hide()
    $('#k6p5x').show()
    kprognum6++
    }
    
    
        if( k7p1 == true) {
    $('#k7p1').hide()
    $('#k7p1x').show()
    kprognum7++
    }
    
        if( k7p2 == true) {
    $('#k7p2').hide()
    $('#k7p2x').show()
    kprognum7++
    }
          
        if( k7p3 == true) {
    $('#k7p3').hide()
    $('#k7p3x').show()
    kprognum7++
    }
    
       if( k7p4 == true) {
    $('#k7p4').hide()
    $('#k7p4x').show()
    kprognum7++
    }
          
        if( k7p5 == true) {
    $('#k7p5').hide()
    $('#k7p5x').show()
    kprognum7++
    }


        
    let spk =((kprognum+kprognum2+kprognum3+kprognum4+kprognum5+kprognum6+kprognum7)/28*100)
    let spnk = Math.round(spk)+'%'
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
      .set({KTOWN:spnk}, {merge:true})



    document.querySelector('#kprognum').textContent = kprognum
    document.querySelector('#kprognum2').textContent = kprognum2
    document.querySelector('#kprognum3').textContent = kprognum3
    document.querySelector('#kprognum4').textContent = kprognum4
    document.querySelector('#kprognum5').textContent = kprognum5
    document.querySelector('#kprognum6').textContent = kprognum6
    document.querySelector('#kprognum7').textContent = kprognum7
	
	
	
	
	{
    document.getElementById('k1-quiz').addEventListener('submit', function() {
    
    let k1q1 = document.querySelector('#k1-quiz-1').value == 'correct'
    let k1q2 = document.querySelector('#k1-quiz-2').value == 'correct'
    let k1q3 = document.querySelector('#k1-quiz-3').value == 'correct'
    let k1q4 = document.querySelector('#k1-quiz-4').value == 'correct'
    let k1q5 = document.querySelector('#k1-quiz-5').value == 'correct'
    let k1q6 = document.querySelector('#k1-quiz-6').value == 'correct'
    let k1q7 = document.querySelector('#k1-quiz-7').value == 'correct'
    
    
    let percentage = 0
    if(k1q1) { percentage++}
    if(k1q2) { percentage++}
    if(k1q3) { percentage++}
    if(k1q4) { percentage++}
    if(k1q5) { percentage++}
    if(k1q6) { percentage++}
    if(k1q7) { percentage++}
    
    let correct = Math.round((percentage * 14.28))
    document.getElementById('k1p5percentage').textContent = correct+'%'
    
    if(k1q1 && k1q2 && k1q3 && k1q4 && k1q5 && k1q6 && k1q7 ) {
    $('#k1-quiz-incorrect').hide()
    $('#k1-quiz-correct').css("display", "flex");
    $('#k2p4x').show()
    $('#k2p4').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({k2p4:true},{merge:true})
    
    let kprognum2 = 0
    if (document.querySelector('#k2p4x').style.display == 'block'){kprognum2++}
    if (document.querySelector('#k2p2x').style.display == 'block'){kprognum2++}
    if (document.querySelector('#k2p3x').style.display == 'block'){kprognum2++}
    if (document.querySelector('#k2p4x').style.display == 'block'){kprognum2++}
    document.querySelector('#kprognum2').textContent = kprognum2
    
    }
    
    else {
    $('#k1-quiz-incorrect').css("display", "flex");
    $('#k1-quiz-correct').hide()
    }
    
    })
    }
    
    
    {
    document.getElementById('k3-quiz').addEventListener('submit', function() {
    
    let k3q1 = document.querySelector('#k3-quiz-1').value == 'correct'
    let k3q2 = document.querySelector('#k3-quiz-2').value == 'correct'
    let k3q3 = document.querySelector('#k3-quiz-3').value == 'correct'
    let k3q4 = document.querySelector('#k3-quiz-4').value == 'correct'
    let k3q5 = document.querySelector('#k3-quiz-5').value == 'correct'
    let k3q6 = document.querySelector('#k3-quiz-6').value == 'correct'
    
    
    let percentage = 0
    if(k3q1) { percentage++}
    if(k3q2) { percentage++}
    if(k3q3) { percentage++}
    if(k3q4) { percentage++}
    if(k3q5) { percentage++}
    if(k3q6) { percentage++}
    let correct = Math.round((percentage * 16.66))
    document.getElementById('k3p6percentage').textContent = correct+'%'
    
    if(k3q1 && k3q2 && k3q3 && k3q4 && k3q5 && k3q6 ) {
    $('#k3-quiz-incorrect').hide()
    $('#k3-quiz-correct').css("display", "flex");
    $('#k3p6x').show()
    $('#k3p6').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({k3p6:true},{merge:true})
    
    let kprognum3 = 0
    if (document.querySelector('#k3p1x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p2x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p3x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p4x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p5x').style.display == 'block'){kprognum3++}
    if (document.querySelector('#k3p6x').style.display == 'block'){kprognum3++}
    document.querySelector('#kprognum3').textContent = kprognum3
    
    }
    
    else {
    $('#k3-quiz-incorrect').css("display", "flex");
    $('#k3-quiz-correct').hide()
    console.log('incorrect')
    }
    
    })
    
    }
    

    {
    document.getElementById('k4-quiz').addEventListener('submit', function() {
    
    let k4q1 = document.querySelector('#k4-quiz-1').value == 'correct'
    let k4q2 = document.querySelector('#k4-quiz-2').value == 'correct'
    let k4q3 = document.querySelector('#k4-quiz-3').value == 'correct'
    let k4q4 = document.querySelector('#k4-quiz-4').value == 'correct'
    let k4q5 = document.querySelector('#k4-quiz-5').value == 'correct'
    let k4q6 = document.querySelector('#k4-quiz-6').value == 'correct'
    
    let percentage = 0
    if(k4q1) { percentage++}
    if(k4q2) { percentage++}
    if(k4q3) { percentage++}
    if(k4q4) { percentage++}
    if(k4q5) { percentage++}
    if(k4q6) { percentage++}
    let correct = Math.round((percentage * 16.66))
    document.getElementById('k4p3percentage').textContent = correct+'%'
    
    if(k4q1 && k4q2 && k4q3 && k4q4 && k4q5 && k4q6 ) {
    $('#k4-quiz-incorrect').hide()
    $('#k4-quiz-correct').css("display", "flex");
    $('#k4p3x').show()
    $('#k4p3').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({k4p3:true},{merge:true})
    
    let kprognum4 = 0
    if (document.querySelector('#k4p1x').style.display == 'block'){kprognum4++}
    if (document.querySelector('#k4p2x').style.display == 'block'){kprognum4++}
    if (document.querySelector('#k4p3x').style.display == 'block'){kprognum4++}
    document.querySelector('#kprognum4').textContent = kprognum4
    
    }
    
    else {
    $('#k4-quiz-incorrect').css("display", "flex");
    $('#k4-quiz-correct').hide()
    }
    
    })
    }
    
    {
    document.getElementById('k6-quiz').addEventListener('submit', function() {
    
    let k6q1 = document.querySelector('#k6-quiz-1').value == 'correct'
    let k6q2 = document.querySelector('#k6-quiz-2').value == 'correct'
    let k6q3 = document.querySelector('#k6-quiz-3').value == 'correct'
    let k6q4 = document.querySelector('#k6-quiz-4').value == 'correct'
    let k6q5 = document.querySelector('#k6-quiz-5').value == 'correct'
    let k6q6 = document.querySelector('#k6-quiz-6').value == 'correct'
    let k6q7 = document.querySelector('#k6-quiz-7').value == 'correct'
    
    let percentage = 0
    if(k6q1) { percentage++}
    if(k6q2) { percentage++}
    if(k6q3) { percentage++}
    if(k6q4) { percentage++}
    if(k6q5) { percentage++}
    if(k6q6) { percentage++}
    if(k6q7) { percentage++}
    let correct = Math.round((percentage * 14.28))
    document.getElementById('k6p5percentage').textContent = correct+'%'
    
    if(k6q1 && k6q2 && k6q3 && k6q4 && k6q5 && k6q6 && k6q7) {
    $('#k6-quiz-incorrect').hide()
    $('#k6-quiz-correct').css("display", "flex");
    $('#k6p5x').show()
    $('#k6p5').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({k6p5:true},{merge:true})
    
    let kprognum6 = 0
    if (document.querySelector('#k6p1x').style.display == 'block'){kprognum6++}
    if (document.querySelector('#k6p2x').style.display == 'block'){kprognum6++}
    if (document.querySelector('#k6p3x').style.display == 'block'){kprognum6++}
    if (document.querySelector('#k6p4x').style.display == 'block'){kprognum6++}
    if (document.querySelector('#k6p5x').style.display == 'block'){kprognum6++}
    document.querySelector('#kprognum6').textContent = kprognum6
    
    }
    
    else {
    $('#k6-quiz-incorrect').css("display", "flex");
    $('#k6-quiz-correct').hide()
    }
    
    })
    }
	
	
	
	
	
    let cbprognum = 0
    let cbprognum2 = 0
    let cbprognum3 = 0
    let cbprognum4 = 0
    let cbprognum5 = 0
    let cbprognum6 = 0
    let cbprognum7 = 0
    
 let cb1p1 = data['cb1p1'];    
        let cb1p2 = data['cb1p2'];    
        let cb1p3 = data['cb1p3'];    
        let cb1p4 = data['cb1p4']; 
         
        let cb2p1 = data['cb2p1'];    
        let cb2p2 = data['cb2p2'];    
        let cb2p3 = data['cb2p3'];
        let cb2p4 = data['cb2p4']
    
        let cb3p1 = data['cb3p1'];    
        let cb3p2 = data['cb3p2']; 
        let cb3p3 = data['cb3p3'];    
        let cb3p4 = data['cb3p4']; 
        let cb3p5 = data['cb3p5'];    
        let cb3p6 = data['cb3p6'];    
    
        let cb4p1 = data['cb4p1'];  
        let cb4p2 = data['cb4p2'];  
        let cb4p3 = data['cb4p3'];  
    
    
        let cb5p1 = data['cb5p1'];  
        let cb5p2 = data['cb5p2'];  
    
    
        let cb6p1 = data['cb6p1']; 
        let cb6p2 = data['cb6p2']; 
        let cb6p3 = data['cb6p3']; 
        let cb6p4 = data['cb6p4']; 
        let cb6p5 = data['cb6p5']; 
        let cb6p6 = data['cb6p6']; 
    
    
        let cb7p1 = data['cb7p1']; 
        let cb7p2 = data['cb7p2']; 
        let cb7p3 = data['cb7p3']; 
        let cb7p4 = data['cb7p4']; 
        let cb7p5 = data['cb7p5']; 
    
        if( cb1p1 == true) {
    $('#cb1p1').hide()
    $('#cb1p1x').show()
    cbprognum++
    }
        if( cb1p2 == true) {
    $('#cb1p2').hide()
    $('#cb1p2x').show()
    cbprognum++
    }
    
        if( cb1p3 == true) {
    $('#cb1p3').hide()
    $('#cb1p3x').show()
    cbprognum++
    }
    
        if( cb1p4 == true) {
    $('#cb1p4').hide()
    $('#cb1p4x').show()
    cbprognum++
    }
        if( cb2p1 == true) {
    $('#cb2p1').hide()
    $('#cb2p1x').show()
    cbprognum2++
    }
        if( cb2p2 == true) {
    $('#cb2p2').hide()
    $('#cb2p2x').show()
    cbprognum2++
    }
        if( cb2p3 == true) {
    $('#cb2p3').hide()
    $('#cb2p3x').show()
    cbprognum2++
    }
    
        if( cb2p4 == true) {
    $('#cb2p4').hide()
    $('#cb2p4x').show()
    cbprognum2++
    }
    
        if( cb3p1 == true) {
    $('#cb3p1').hide()
    $('#cb3p1x').show()
    cbprognum3++
    }
        if( cb3p2 == true) {
    $('#cb3p2').hide()
    $('#cb3p2x').show()
    cbprognum3++
    }
        if( cb3p3 == true) {
    $('#cb3p3').hide()
    $('#cb3p3x').show()
    cbprognum3++
    }
        if( cb3p4 == true) {
    $('#cb3p4').hide()
    $('#cb3p4x').show()
    cbprognum3++
    }
        if( cb3p5 == true) {
    $('#cb3p5').hide()
    $('#cb3p5x').show()
    cbprognum3++
    }
        if( cb3p6 == true) {
    $('#cb3p6').hide()
    $('#cb3p6x').show()
    cbprognum3++
    }
        if( cb4p1 == true) {
    $('#cb4p1').hide()
    $('#cb4p1x').show()
    cbprognum4++
    }
        if( cb4p2 == true) {
    $('#cb4p2').hide()
    $('#cb4p2x').show()
    cbprognum4++
    }
        if( cb4p3 == true) {
    $('#cb4p3').hide()
    $('#cb4p3x').show()
    cbprognum4++
    }
    
        if( cb5p1 == true) {
    $('#cb5p1').hide()
    $('#cb5p1x').show()
    cbprognum5++
    }
        if( cb5p2 == true) {
    $('#cb5p2').hide()
    $('#cb5p2x').show()
    cbprognum5++
    }
        if( cb6p1 == true) {
    $('#cb6p1').hide()
    $('#cb6p1x').show()
    cbprognum6++
    }
        if( cb6p2 == true) {
    $('#cb6p2').hide()
    $('#cb6p2x').show()
    cbprognum6++
    }
        if( cb6p3 == true) {
    $('#cb6p3').hide()
    $('#cb6p3x').show()
    cbprognum6++
    }
        if( cb6p4 == true) {
    $('#cb6p4').hide()
    $('#cb6p4x').show()
    cbprognum6++
    }
        if( cb6p5 == true) {
    $('#cb6p5').hide()
    $('#cb6p5x').show()
    cbprognum6++
    }
        if( cb6p6 == true) {
    $('#cb6p6').hide()
    $('#cb6p6x').show()
    cbprognum6++
    }
    
        if( cb7p1 == true) {
    $('#cb7p1').hide()
    $('#cb7p1x').show()
    cbprognum7++
    }
    
    
        if( cb7p2 == true) {
    $('#cb7p2').hide()
    $('#cb7p2x').show()
    cbprognum7++
    }
    
    
        if( cb7p3 == true) {
    $('#cb7p3').hide()
    $('#cb7p3x').show()
    cbprognum7++
    }
    
    
        if( cb7p4 == true) {
    $('#cb7p4').hide()
    $('#cb7p4x').show()
    cbprognum7++
    }
    
    
        if( cb7p5 == true) {
    $('#cb7p5').hide()
    $('#sp5x').show()
    cbprognum7++
    }
    
    
    let spck =((cbprognum+cbprognum2+cbprognum3+cbprognum4+cbprognum5+cbprognum6+cbprognum7)/30*100)
    let spnck = Math.round(spck)+'%'
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
      .set({CBN:spnck}, {merge:true})
 
	
	
	
    document.querySelector('#cbprognum').textContent = cbprognum
    document.querySelector('#cbprognum2').textContent = cbprognum2
    document.querySelector('#cbprognum3').textContent = cbprognum3
    document.querySelector('#cbprognum4').textContent = cbprognum4
    document.querySelector('#cbprognum5').textContent = cbprognum5
    document.querySelector('#cbprognum6').textContent = cbprognum6
    document.querySelector('#cbprognum7').textContent = cbprognum7
	
	
	


  
    {
    document.getElementById('cb1-quiz').addEventListener('submit', function() {
    
    let cb1q1 = document.querySelector('#cb1-quiz-1').value == 'correct'
    let cb1q2 = document.querySelector('#cb1-quiz-2').value == 'correct'
    let cb1q3 = document.querySelector('#cb1-quiz-3').value == 'correct'
    let cb1q4 = document.querySelector('#cb1-quiz-4').value == 'correct'
    let cb1q5 = document.querySelector('#cb1-quiz-5').value == 'correct'
    let cb1q6 = document.querySelector('#cb1-quiz-6').value == 'correct'
    let cb1q7 = document.querySelector('#cb1-quiz-7').value == 'correct'
    
    
    let percentage = 0
    if(cb1q1) { percentage++}
    if(cb1q2) { percentage++}
    if(cb1q3) { percentage++}
    if(cb1q4) { percentage++}
    if(cb1q5) { percentage++}
    if(cb1q6) { percentage++}
    if(cb1q7) { percentage++}
    
    let correct = Math.round((percentage * 14.28))
    document.getElementById('cb1p5percentage').textContent = correct+'%'
    
    if(cb1q1 && cb1q2 && cb1q3 && cb1q4 && cb1q5 && cb1q6 && cb1q7 ) {
    $('#cb1-quiz-incorrect').hide()
    $('#cb1-quiz-correct').css("display", "flex");
    $('#cb2p4x').show()
    $('#cb2p4').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({cb2p4:true},{merge:true})
    
    let cbprognum2 = 0
    if (document.querySelector('#cb2p1x').style.display == 'block'){cbprognum2++}
    if (document.querySelector('#cb2p2x').style.display == 'block'){cbprognum2++}
    if (document.querySelector('#cb2p3x').style.display == 'block'){cbprognum2++}
    if (document.querySelector('#cb2p4x').style.display == 'block'){cbprognum2++}
    document.querySelector('#cbprognum2').textContent = cbprognum2
    
    }
    
    else {
    $('#cb1-quiz-incorrect').css("display", "flex");
    $('#cb1-quiz-correct').hide()
    }
    
    })
    }
    
    
    {
    document.getElementById('cb3-quiz').addEventListener('submit', function() {
    
    let cb3q1 = document.querySelector('#cb3-quiz-1').value == 'correct'
    let cb3q2 = document.querySelector('#cb3-quiz-2').value == 'correct'
    let cb3q3 = document.querySelector('#cb3-quiz-3').value == 'correct'
    let cb3q4 = document.querySelector('#cb3-quiz-4').value == 'correct'
    let cb3q5 = document.querySelector('#cb3-quiz-5').value == 'correct'
    let cb3q6 = document.querySelector('#cb3-quiz-6').value == 'correct'
    
    
    let percentage = 0
    if(cb3q1) { percentage++}
    if(cb3q2) { percentage++}
    if(cb3q3) { percentage++}
    if(cb3q4) { percentage++}
    if(cb3q5) { percentage++}
    if(cb3q6) { percentage++}
    let correct = Math.round((percentage * 16.66))
    document.getElementById('cb3p6percentage').textContent = correct+'%'
    
    if(cb3q1 && cb3q2 && cb3q3 && cb3q4 && cb3q5 && cb3q6 ) {
    $('#cb3-quiz-incorrect').hide()
    $('#cb3-quiz-correct').css("display", "flex");
    $('#cb3p6x').show()
    $('#cb3p6').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({cb3p6:true},{merge:true})
    
    let cbprognum3 = 0
    if (document.querySelector('#cb3p1x').style.display == 'block'){cbprognum3++}
    if (document.querySelector('#cb3p2x').style.display == 'block'){cbprognum3++}
    if (document.querySelector('#cb3p3x').style.display == 'block'){cbprognum3++}
    if (document.querySelector('#cb3p4x').style.display == 'block'){cbprognum3++}
    if (document.querySelector('#cb3p5x').style.display == 'block'){cbprognum3++}
    if (document.querySelector('#cb3p6x').style.display == 'block'){cbprognum3++}
    document.querySelector('#cbprognum3').textContent = cbprognum3
    
    }
    
    else {
    $('#cb3-quiz-incorrect').css("display", "flex");
    $('#cb3-quiz-correct').hide()
    console.log('incorrect')
    }
    
    })
    
    }
    
    
    {
    document.getElementById('cb4-quiz').addEventListener('submit', function() {
    
    let cb4q1 = document.querySelector('#cb4-quiz-1').value == 'correct'
    let cb4q2 = document.querySelector('#cb4-quiz-2').value == 'correct'
    let cb4q3 = document.querySelector('#cb4-quiz-3').value == 'correct'
    let cb4q4 = document.querySelector('#cb4-quiz-4').value == 'correct'
    let cb4q5 = document.querySelector('#cb4-quiz-5').value == 'correct'
    let cb4q6 = document.querySelector('#cb4-quiz-6').value == 'correct'
    
    let percentage = 0
    if(cb4q1) { percentage++}
    if(cb4q2) { percentage++}
    if(cb4q3) { percentage++}
    if(cb4q4) { percentage++}
    if(cb4q5) { percentage++}
    if(cb4q6) { percentage++}
    let correct = Math.round((percentage * 16.66))
    document.getElementById('cb4p3percentage').textContent = correct+'%'
    
    if(cb4q1 && cb4q2 && cb4q3 && cb4q4 && cb4q5 && cb4q6 ) {
    $('#cb4-quiz-incorrect').hide()
    $('#cb4-quiz-correct').css("display", "flex");
    $('#cb4p3x').show()
    $('#cb4p3').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({f4p3:true},{merge:true})
    
    let cbprognum4 = 0
    if (document.querySelector('#cb4p1x').style.display == 'block'){cbprognum4++}
    if (document.querySelector('#cb4p2x').style.display == 'block'){cbprognum4++}
    if (document.querySelector('#cb4p3x').style.display == 'block'){cbprognum4++}
    document.querySelector('#cbprognum4').textContent = cbprognum4
    
    }
    
    else {
    $('#cb4-quiz-incorrect').css("display", "flex");
    $('#cb4-quiz-correct').hide()
    }
    
    })
    }
    
    
    
    {
    document.getElementById('cb6-quiz').addEventListener('submit', function() {
    
    let cb6q1 = document.querySelector('#cb6-quiz-1').value == 'correct'
    let cb6q2 = document.querySelector('#cb6-quiz-2').value == 'correct'
    let cb6q3 = document.querySelector('#cb6-quiz-3').value == 'correct'
    let cb6q4 = document.querySelector('#cb6-quiz-4').value == 'correct'
    let cb6q5 = document.querySelector('#cb6-quiz-5').value == 'correct'
    let cb6q6 = document.querySelector('#cb6-quiz-6').value == 'correct'
    let cb6q7 = document.querySelector('#cb6-quiz-7').value == 'correct'
    let cb6q8 = document.querySelector('#cb6-quiz-8').value == 'correct'
    
    
    let percentage = 0
    if(cb6q1) { percentage++}
    if(cb6q2) { percentage++}
    if(cb6q3) { percentage++}
    if(cb6q4) { percentage++}
    if(cb6q5) { percentage++}
    if(cb6q6) { percentage++}
    if(cb6q7) { percentage++}
    if(cb6q8) { percentage++}
    let correct = Math.round((percentage * 12.50))
    document.getElementById('cb6p5percentage').textContent = correct+'%'
    
    if(cb6q1 && cb6q2 && cb6q3 && cb6q4 && cb6q5 && cb6q6 && cb6q7 && cb6q8) {
    $('#cb6-quiz-incorrect').hide()
    $('#cb6-quiz-correct').css("display", "flex");
    $('#cb6p6x').show()
    $('#cb6p6').hide()
    
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
    .set({cb6p6:true},{merge:true})
    
    let cbprognum6 = 0
    if (document.querySelector('#cb6p1x').style.display == 'block'){cbprognum6++}
    if (document.querySelector('#cb6p2x').style.display == 'block'){cbprognum6++}
    if (document.querySelector('#cb6p3x').style.display == 'block'){cbprognum6++}
    if (document.querySelector('#cb6p4x').style.display == 'block'){cbprognum6++}
    if (document.querySelector('#cb6p5x').style.display == 'block'){cbprognum6++}
    if (document.querySelector('#cb6p6x').style.display == 'block'){cbprognum6++}
    document.querySelector('#cbprognum6').textContent = cbprognum6
    
    }
    
    else {
    $('#cb6-quiz-incorrect').css("display", "flex");
    $('#cb6-quiz-correct').hide()
    }
    
    })
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 let v1p1 = data['v1p1'];    

 if( v1p1 == true) {
$('#v1p1').hide()
$('#v1p1x').show()
prognumv++
}

let spx =((prognumv)/1*100)
let spnx = Math.round(spx)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({verygoodburger:spnx}, {merge:true})

document.querySelector('#prognumv').textContent = prognumv
  
  
  
    let sm1p1 = data['sm1p1'];    


    if( sm1p1 == true) {
$('#sm1p1').hide()
$('#sm1p1x').show()
prognumsm++
}

let spz =((prognumsm)/1*100)
let spnz = Math.round(spz)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({sammies:spnz}, {merge:true})

  document.querySelector('#prognumsm').textContent = prognumsm

  

    let s1p1 = data['s1p1'];    
    let s1p2 = data['s1p2'];    
    let s1p3 = data['s1p3'];    
    let s1p4 = data['s1p4']; 
    let s2p1 = data['s2p1'];    
    let s2p2 = data['s2p2'];    
    let s2p3 = data['s2p3'];        
    let s2p4 = data['s2p4']; 
    let s3p1 = data['s3p1'];    
    let s3p2 = data['s3p2']; 
    let s3p3 = data['s3p3'];    
    let s3p4 = data['s3p4']; 
    let s3p5 = data['s3p5'];    
    let s3p6 = data['s3p6'];    
    let s4p1 = data['s4p1']; 
    let s4p2 = data['s4p2']; 
    let s4p3 = data['s4p3'];  
    let s5p1 = data['s5p1'];  
    let s6p1 = data['s6p1']; 
    let s6p2 = data['s6p2']; 
    let s6p3 = data['s6p3']; 
    let s6p4 = data['s6p4']; 
    let s6p5 = data['s6p5']; 

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

    if( s7p1 == true) {
$('#s7p1').hide()
$('#s7p1x').show()
prognum8++
}

    if( s7p2 == true) {
$('#s7p2').hide()
$('#s7p2x').show()
prognum8++
}

    if( s7p3 == true) {
$('#s7p3').hide()
$('#s7p3x').show()
prognum8++
}
  
      if( s7p4 == true) {
$('#s7p4').hide()
$('#s7p4x').show()
prognum8++
}
  
    if( s7p5 == true) {
$('#s7p5').hide()
$('#s7p5x').show()
prognum8++
}




document.querySelector('#prognum').textContent = prognum
document.querySelector('#prognum2').textContent = prognum2
document.querySelector('#prognum3').textContent = prognum3
document.querySelector('#prognum4').textContent = prognum4
document.querySelector('#prognum5').textContent = prognum5
document.querySelector('#prognum6').textContent = prognum6
document.querySelector('#prognum8').textContent = prognum8

	
	

    let rrprognum = 0;
    let rrprognum2 = 0;
    let rrprognum3 = 0;
    let rrprognum4 = 0;
    let rrprognum5 = 0;


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



      document.querySelector("#rrprognum").textContent = rrprognum;
      document.querySelector("#rrprognum2").textContent = rrprognum2;
      document.querySelector("#rrprognum3").textContent = rrprognum3;
      document.querySelector("#rrprognum4").textContent = rrprognum4;
      document.querySelector("#rrprognum5").textContent = rrprognum5;


	
	
	
	
	
	
	
    let rprognum = 0;
    let rprognum2 = 0;
    let rprognum3 = 0;
    let rprognum4 = 0;
    let rprognum5 = 0;

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

    document.querySelector("#rprognum").textContent = rprognum;
    document.querySelector("#rprognum2").textContent = rprognum2;
    document.querySelector("#rprognum3").textContent = rprognum3;
    document.querySelector("#rprognum4").textContent = rprognum4;
    document.querySelector("#rprognum5").textContent = rprognum5;
	
	

let mprognum = 0
let mprognum2 = 0
let mprognum3 = 0
let mprognum4 = 0
let mprognum5 = 0

    let m1p1 = data['m1p1'];    
    let m1p2 = data['m1p2'];    
    let m1p3 = data['m1p3'];    
    let m1p4 = data['m1p4']; 
    let m1p5 = data['m1p5'];    
    let m1p6 = data['m1p6'];    
    let m1p7 = data['m1p7'];    
     
    let m2p1 = data['m2p1'];    
    let m2p2 = data['m2p2'];    
    let m2p3 = data['m2p3'];
    let m2p4 = data['m2p4'];
    let m2p5 = data['m2p5'];    
    let m2p6 = data['m2p6'];    
    let m2p7 = data['m2p7'];
    let m2p8 = data['m2p8'];

    let m3p1 = data['m3p1'];    
    let m3p2 = data['m3p2'];    
    let m3p3 = data['m3p3'];
    let m3p4 = data['m3p4'];
    
    let m4p1 = data['m4p1'];    
    let m4p2 = data['m4p2'];    
    let m4p3 = data['m4p3'];
    let m4p4 = data['m4p4'];

    let m5p1 = data['m5p1'];

    if( m1p1 == true) {
$('#m1p1').hide()
$('#m1p1x').show()
mprognum++
}
    if( m1p2 == true) {
$('#m1p2').hide()
$('#m1p2x').show()
mprognum++
}

    if( m1p3 == true) {
$('#m1p3').hide()
$('#m1p3x').show()
mprognum++
}

    if( m1p4 == true) {
$('#m1p4').hide()
$('#m1p4x').show()
mprognum++
}

    if( m1p5 == true) {
$('#m1p5').hide()
$('#m1p5x').show()
mprognum++
}

    if( m1p6 == true) {
$('#m1p6').hide()
$('#m1p6x').show()
mprognum++
}

    if( m1p7 == true) {
$('#m1p7').hide()
$('#m1p7x').show()
mprognum++
}
  
if( m2p1 == true) {
$('#m2p1').hide()
$('#m2p1x').show()
mprognum2++
}
    
if( m2p2 == true) {
$('#m2p2').hide()
$('#m2p2x').show()
mprognum2++
}
  
    
if( m2p3 == true) {
$('#m2p3').hide()
$('#m2p3x').show()
mprognum2++
}
    
if( m2p4 == true) {
$('#m2p4').hide()
$('#m2p4x').show()
mprognum2++
}

if( m2p5 == true) {
$('#m2p5').hide()
$('#m2p5x').show()
mprognum2++
}

if( m2p6 == true) {
$('#m2p6').hide()
$('#m2p6x').show()
mprognum2++
}
    
if( m2p7 == true) {
$('#m2p7').hide()
$('#m2p7x').show()
mprognum2++
}

if( m2p8 == true) {
$('#m2p8').hide()
$('#m2p8x').show()
mprognum2++
}

if( m3p1 == true) {
$('#m3p1').hide()
$('#m3p1x').show()
mprognum3++
}
    
if( m3p2 == true) {
$('#m3p2').hide()
$('#m3p2x').show()
mprognum3++
}

if( m3p3 == true) {
$('#m3p3').hide()
$('#m3p3x').show()
mprognum3++
}

if( m3p4 == true) {
$('#m3p4').hide()
$('#m3p4x').show()
mprognum3++
}

if( m4p1 == true) {
$('#m4p1').hide()
$('#m4p1x').show()
mprognum4++
}
    
if( m4p2 == true) {
$('#m4p2').hide()
$('#m4p2x').show()
mprognum4++
}
  
if( m4p3 == true) {
$('#m4p3').hide()
$('#m4p3x').show()
mprognum4++
}  

if( m4p4 == true) {
$('#m4p4').hide()
$('#m4p4x').show()
mprognum4++
}

if( m5p1 == true) {
$('#m5p1').hide()
$('#m5p1x').show()
mprognum5++
}
document.querySelector('#mprognum').textContent = mprognum
document.querySelector('#mprognum2').textContent = mprognum2
document.querySelector('#mprognum3').textContent = mprognum3
document.querySelector('#mprognum4').textContent = mprognum4
document.querySelector('#mprognum5').textContent = mprognum5

	
	
let firstletter = name.substring(0, 1)
$('.firstletter').html(firstletter);
let restaurant = data['Restaurant']; 
let profileuid = curUser.uid
      let course1 = data['ftbcourse']
      let course2 = data['seccourse']
      let course3 = data['wbwcourse']
      let course4 = data['dlvcourse']
      let course5 = data['smcourse']
      let course6 = data['vcourse']
      let course7 = data['mcourse']
      let course8 = data['rcourse']
      let course9 = data['nyamcourse']
      let course10 = data['lockedcourse']
      let course11 = data['cluckcourse']
      let course12 = data['rebelritocourse']

if(course1 == true){
$('#train1').css('display', 'flex');
$('#mbtraining2').css('display', 'flex');

$('#cf2').append(new Option('Flip The Bird', 'Flip The Bird'))
} else  {
$('#train1').hide()
$('#mbtraining2').hide()
}
if(course2 == true){
$('#ops7').css('display', 'block');
$('#mbtraining1').css('display', 'flex');

$('#cf2').append(new Option('Seoul Chikin', 'Seoul Chikin'))
} else  {
$('#ops7').hide()
$('#mbtraining1').hide()

}
if(course3 == true){
$('#mbtraining3').css('display', 'flex');
$('#ops8').css('display', 'block');
$('#cf2').append(new Option('Wham Bam Wings', 'Wham Bam Wings'))
} else  {
$('#mbtraining3').hide()
$('#ops8').hide()
}
if(course4 == true){
 $('#ops9').css('display', 'flex');
} else  {
$('#ops9').hide()
}

if(course5 == true){
$('#ops10').css('display', 'flex');
$('#mbtraining10').css('display', 'flex');
$('#cf2').append(new Option('Sammies', 'Sammies'))
} else  {
$('#ops10').hide()
$('#mbtraining10').hide()
}
if(course6 == true){
$('#ops11').css('display', 'flex');
$('#mbtraining11').css('display', 'flex');
$('#cf2').append(new Option('Very Good Burger', 'Very Good Burger'))
} else  {
$('#ops11').hide()
$('#mbtraining11').hide()

}
if(course7 == true){
$('#opsfiesta').css('display', 'flex');
$('#mbfiesta').css('display', 'flex');
$('#cf2').append(new Option('Fiesta Mexico', 'Fiesta Mexico'))
} else  {
$('#opsfiesta').hide()
$('#mbfiesta').hide()
}
if(course8 == true){
$('#opsrebelrito').css('display', 'flex');
$('#mbrebelrito').css('display', 'flex');
$('#cf2').append(new Option('Rebel Rito', 'Rebel Rito'))
} else  {
$('#opsrebelrito').hide()
$('#mbrebelrito').hide()
}
if(course9 == true){
$('#opsnyam').css('display', 'flex');
$('#mbnomnyam').css('display', 'flex');
$('#cf2').append(new Option('Nom Nyam Chicken ', 'Nom Nyam Chicken'))
} else  {
$('#opsnyam').hide()
$('#mbnomnyam').hide()
}

if(course10 == true){
$('#opslockedloaded').css('display', 'flex');
$('#mblockednloaded').css('display', 'flex');
$('#cf2').append(new Option('Locked N Loaded', 'Locked N Loaded'))
} else  {
$('#opslockedloaded').hide()
$('#mblockednloaded').hide()
}

if(course11 == true){
$('#opscluckrun').css('display', 'flex');
$('#mbclucknrun').css('display', 'flex');
$('#cf2').append(new Option('Cluck N Run', 'Cluck N Run'))
} else  {
$('#opscluckrun').hide()
$('#mbclucknrun').hide()
}

if(course12 == true){
$('#opsrealrito').css('display', 'flex');
$('#mbrealrito').css('display', 'flex');
$('#cf2').append(new Option('Rebel Rito', 'Rebel Rito'))
} else  {
$('#opsrealrito').hide()
$('#mbrealrito').hide()
}

let sp =((prognum+prognum2+prognum3+prognum4+prognum5+prognum6+prognum8)/28*100)
let spn = Math.round(sp)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({SEC:spn}, {merge:true})

let fp =((prognumf+prognumf2+prognumf3+prognumf4+prognumf5+prognumf6+prognumf8)/30*100)
let fpn = Math.round(fp)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({FTB:fpn}, {merge:true})



let dp =((prognumd)/4*100)
let dpn = Math.round(dp)+'%'
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
  .set({deliverect:dpn}, {merge:true})


document.querySelector('#profile-uid').textContent=profileuid;
document.querySelector('#profile-name').textContent=name;
document.querySelector('#profile-email').textContent=emaild;
if(!!restaurant) {
document.querySelector('#profile-restaurant').textContent=restaurant;
} else {document.querySelector('#profile-restaurant').textContent='-';}
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Timestamp:date}, {merge:true})

  
if(!!emaild) {
$('#email').html(emaild);
} else {  
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({Email:user.email}, {merge:true})
$('#email').html(emaild);
}
})

} else {
console.log('user logged out');
signOutButton.style.display="none";
if('/' != currentPath){location.href = '/login';}
maincontent.style.display='none';
loader.style.display='flex';



}})})



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

let prognum2 = 0
if (document.querySelector('#s2p4x').style.display == 'block'){prognum2++}
if (document.querySelector('#s2p2x').style.display == 'block'){prognum2++}
if (document.querySelector('#s2p3x').style.display == 'block'){prognum2++}
if (document.querySelector('#s2p4x').style.display == 'block'){prognum2++}
document.querySelector('#prognum2').textContent = prognum2

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
.set({s3p6:true},{merge:true})

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
.set({s4p3:true},{merge:true})

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

let percentage = 0
if(s6q1) { percentage++}
if(s6q2) { percentage++}
if(s6q3) { percentage++}
if(s6q4) { percentage++}
if(s6q5) { percentage++}
if(s6q6) { percentage++}
if(s6q7) { percentage++}
let correct = Math.round((percentage * 14.28))
document.getElementById('s6p5percentage').textContent = correct+'%'

if(s6q1 && s6q2 && s6q3 && s6q4 && s6q5 && s6q6 && s6q7) {
$('#s6-quiz-incorrect').hide()
$('#s6-quiz-correct').css("display", "flex");
$('#s6p5x').show()
$('#s6p5').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s6p5:true},{merge:true})

let prognum6 = 0
if (document.querySelector('#s6p1x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p2x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p3x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p4x').style.display == 'block'){prognum6++}
if (document.querySelector('#s6p5x').style.display == 'block'){prognum6++}
document.querySelector('#prognum6').textContent = prognum6

}

else {
$('#s6-quiz-incorrect').css("display", "flex");
$('#s6-quiz-correct').hide()
}

})
}
 

{
document.getElementById('f1-quiz').addEventListener('submit', function() {

let f1q1 = document.querySelector('#f1-quiz-1').value == 'correct'
let f1q2 = document.querySelector('#f1-quiz-2').value == 'correct'
let f1q3 = document.querySelector('#f1-quiz-3').value == 'correct'
let f1q4 = document.querySelector('#f1-quiz-4').value == 'correct'
let f1q5 = document.querySelector('#f1-quiz-5').value == 'correct'
let f1q6 = document.querySelector('#f1-quiz-6').value == 'correct'
let f1q7 = document.querySelector('#f1-quiz-7').value == 'correct'


let percentage = 0
if(f1q1) { percentage++}
if(f1q2) { percentage++}
if(f1q3) { percentage++}
if(f1q4) { percentage++}
if(f1q5) { percentage++}
if(f1q6) { percentage++}
if(f1q7) { percentage++}

let correct = Math.round((percentage * 14.28))
document.getElementById('f1p5percentage').textContent = correct+'%'

if(f1q1 && f1q2 && f1q3 && f1q4 && f1q5 && f1q6 && f1q7 ) {
$('#f1-quiz-incorrect').hide()
$('#f1-quiz-correct').css("display", "flex");
$('#f2p4x').show()
$('#f2p4').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({f2p4:true},{merge:true})

let prognumf2 = 0
if (document.querySelector('#f2p1x').style.display == 'block'){prognumf2++}
if (document.querySelector('#f2p2x').style.display == 'block'){prognumf2++}
if (document.querySelector('#f2p3x').style.display == 'block'){prognumf2++}
if (document.querySelector('#f2p4x').style.display == 'block'){prognumf2++}
document.querySelector('#prognumf2').textContent = prognumf2

}

else {
$('#f1-quiz-incorrect').css("display", "flex");
$('#f1-quiz-correct').hide()
}

})
}


{
document.getElementById('f3-quiz').addEventListener('submit', function() {

let f3q1 = document.querySelector('#f3-quiz-1').value == 'correct'
let f3q2 = document.querySelector('#f3-quiz-2').value == 'correct'
let f3q3 = document.querySelector('#f3-quiz-3').value == 'correct'
let f3q4 = document.querySelector('#f3-quiz-4').value == 'correct'
let f3q5 = document.querySelector('#f3-quiz-5').value == 'correct'
let f3q6 = document.querySelector('#f3-quiz-6').value == 'correct'


let percentage = 0
if(f3q1) { percentage++}
if(f3q2) { percentage++}
if(f3q3) { percentage++}
if(f3q4) { percentage++}
if(f3q5) { percentage++}
if(f3q6) { percentage++}
let correct = Math.round((percentage * 16.66))
document.getElementById('f3p6percentage').textContent = correct+'%'

if(f3q1 && f3q2 && f3q3 && f3q4 && f3q5 && f3q6 ) {
$('#f3-quiz-incorrect').hide()
$('#f3-quiz-correct').css("display", "flex");
$('#f3p6x').show()
$('#f3p6').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({f3p6:true},{merge:true})

let prognumf3 = 0
if (document.querySelector('#f3p1x').style.display == 'block'){prognumf3++}
if (document.querySelector('#f3p2x').style.display == 'block'){prognumf3++}
if (document.querySelector('#f3p3x').style.display == 'block'){prognumf3++}
if (document.querySelector('#f3p4x').style.display == 'block'){prognumf3++}
if (document.querySelector('#f3p5x').style.display == 'block'){prognumf3++}
if (document.querySelector('#f3p6x').style.display == 'block'){prognumf3++}
document.querySelector('#prognumf3').textContent = prognumf3

}

else {
$('#f3-quiz-incorrect').css("display", "flex");
$('#f3-quiz-correct').hide()
console.log('incorrect')
}

})

}


{
document.getElementById('f4-quiz').addEventListener('submit', function() {

let f4q1 = document.querySelector('#f4-quiz-1').value == 'correct'
let f4q2 = document.querySelector('#f4-quiz-2').value == 'correct'
let f4q3 = document.querySelector('#f4-quiz-3').value == 'correct'
let f4q4 = document.querySelector('#f4-quiz-4').value == 'correct'
let f4q5 = document.querySelector('#f4-quiz-5').value == 'correct'
let f4q6 = document.querySelector('#f4-quiz-6').value == 'correct'

let percentage = 0
if(f4q1) { percentage++}
if(f4q2) { percentage++}
if(f4q3) { percentage++}
if(f4q4) { percentage++}
if(f4q5) { percentage++}
if(f4q6) { percentage++}
let correct = Math.round((percentage * 16.66))
document.getElementById('f4p3percentage').textContent = correct+'%'

if(f4q1 && f4q2 && f4q3 && f4q4 && f4q5 && f4q6 ) {
$('#f4-quiz-incorrect').hide()
$('#f4-quiz-correct').css("display", "flex");
$('#f4p3x').show()
$('#f4p3').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({f4p3:true},{merge:true})

let prognumf4 = 0
if (document.querySelector('#f4p1x').style.display == 'block'){prognumf4++}
if (document.querySelector('#f4p2x').style.display == 'block'){prognumf4++}
if (document.querySelector('#f4p3x').style.display == 'block'){prognumf4++}
document.querySelector('#prognumf4').textContent = prognumf4

}

else {
$('#f4-quiz-incorrect').css("display", "flex");
$('#f4-quiz-correct').hide()
}

})
}



{
document.getElementById('f6-quiz').addEventListener('submit', function() {

let f6q1 = document.querySelector('#f6-quiz-1').value == 'correct'
let f6q2 = document.querySelector('#f6-quiz-2').value == 'correct'
let f6q3 = document.querySelector('#f6-quiz-3').value == 'correct'
let f6q4 = document.querySelector('#f6-quiz-4').value == 'correct'
let f6q5 = document.querySelector('#f6-quiz-5').value == 'correct'
let f6q6 = document.querySelector('#f6-quiz-6').value == 'correct'
let f6q7 = document.querySelector('#f6-quiz-7').value == 'correct'
let f6q8 = document.querySelector('#f6-quiz-8').value == 'correct'


let percentage = 0
if(f6q1) { percentage++}
if(f6q2) { percentage++}
if(f6q3) { percentage++}
if(f6q4) { percentage++}
if(f6q5) { percentage++}
if(f6q6) { percentage++}
if(f6q7) { percentage++}
if(f6q8) { percentage++}
let correct = Math.round((percentage * 12.50))
document.getElementById('f6p5percentage').textContent = correct+'%'

if(f6q1 && f6q2 && f6q3 && f6q4 && f6q5 && f6q6 && f6q7 && f6q8) {
$('#f6-quiz-incorrect').hide()
$('#f6-quiz-correct').css("display", "flex");
$('#f6p6x').show()
$('#f6p6').hide()

firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({f6p6:true},{merge:true})

let prognumf6 = 0
if (document.querySelector('#f6p1x').style.display == 'block'){prognumf6++}
if (document.querySelector('#f6p2x').style.display == 'block'){prognumf6++}
if (document.querySelector('#f6p3x').style.display == 'block'){prognumf6++}
if (document.querySelector('#f6p4x').style.display == 'block'){prognumf6++}
if (document.querySelector('#f6p5x').style.display == 'block'){prognumf6++}
if (document.querySelector('#f6p6x').style.display == 'block'){prognumf6++}
document.querySelector('#prognumf6').textContent = prognumf6

}

else {
$('#f6-quiz-incorrect').css("display", "flex");
$('#f6-quiz-correct').hide()
}

})
}
{

document.getElementById("retake-s1").addEventListener("click", () => {
  $("#s1-quiz").css("display", "flex");
  $("#s1-quiz-completed").hide();
});

document.getElementById("retake-s3").addEventListener("click", () => {
  $("#s3-quiz").css("display", "flex");
  $("#s3-quiz-completed").hide();
});

document.getElementById("retake-s4").addEventListener("click", () => {
  $("#s4-quiz").css("display", "flex");
  $("#s4-quiz-completed").hide();
});

document.getElementById("retake-s6").addEventListener("click", () => {
  $("#s6-quiz").css("display", "flex");
  $("#s6-quiz-completed").hide();
});


document.getElementById("retake-f1").addEventListener("click", () => {
  $("#f1-quiz").css("display", "flex");
  $("#f1-quiz-completed").hide();
});

document.getElementById("retake-f3").addEventListener("click", () => {
  $("#f3-quiz").css("display", "flex");
  $("#f3-quiz-completed").hide();
});

document.getElementById("retake-f4").addEventListener("click", () => {
  $("#f4-quiz").css("display", "flex");
  $("#f4-quiz-completed").hide();
});

document.getElementById("retake-f6").addEventListener("click", () => {
  $("#f6-quiz").css("display", "flex");
  $("#f6-quiz-completed").hide();
});
}

{
{
let rating = Number($('#rat11').text())
let rathigh = Number($('#rathigh').text())
let ratlow = Number($('#ratlow').text())
if(rating>rathigh) {
$('#ra3').show()
$('#ra2').hide()
$('#ra1').hide()}
if(rating<ratlow) {
$('#ra3').hide()
$('#ra2').show()
$('#ra1').hide()
}}{
let preptime =  Number($('#prep11').text())
let prephigh =  Number($('#prephigh').text())
let preplow =  Number($('#preplow').text())
if(preptime<prephigh) {
$('#pa3').show()
$('#pa2').hide()
$('#pa1').hide()
}
if(preptime>preplow) {
$('#pa3').hide()
$('#pa2').show()
$('#pa1').hide()}
$('#rat11').text($('#rat1').text())
$('#prep11').text($('#prep1').text()) }
let rating = document.querySelectorAll('.amredtext')
rating.forEach((rating) => {
let r = rating.textContent
let rr = r.replace(/-/g,'')
rating.textContent = rr})
}
{
const loader = document.querySelector("#loadanimation");
const maincontent = document.querySelector("#maincontent");
window.addEventListener("load", function(){
maincontent.style.display = 'flex'
loader.style.display = 'none'
}); 
}
