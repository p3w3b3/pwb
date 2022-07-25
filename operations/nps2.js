{
setTimeout(() => { 
$(document).ready(function(){
{
const element = $("#obname");
const textToReplace = element.text();
const newText = textToReplace.replace("&#39;", "'");
element.text(newText); 
}

{
document.getElementById('npsform').addEventListener('submit', function() {
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({rated:true}, {merge:true})
})

setTimeout(() => {     
let curUser = firebase.auth().currentUser
let myFS = firebase.firestore()
let docRef = myFS.doc("users/" + firebase.auth().currentUser.uid);
docRef.get().then(docSnap => {
let data = docSnap.data()
let rtrue = data['rated']; 

if(!!rtrue) {
document.querySelector('#npsdiv').style.display = 'none'
} else {
document.querySelector('#npsdiv').style.display = 'flex'
}
}, 2000);


document.querySelector('#question-name').value = document.querySelector('#userName2').textContent
document.querySelector('#question-fbid').value = document.querySelector('#profile-uid').textContent
document.querySelector('#question-stid').value = document.querySelector('#mystid').textContent

{
for (let i = 1; i<4 ;i++)
document.querySelector("#star-"+i).addEventListener("click", function () {
document.querySelector('#question1input').value = i
})
}

{
for (let i = 1; i<4 ;i++)
document.querySelector("#starr-"+i).addEventListener("click", function () {
document.querySelector('#question2input').value = i
})
}
{
for (let i = 1; i<4 ;i++)
document.querySelector("#starrr-"+i).addEventListener("click", function () {
document.querySelector('#question3input').value = i
})
}

})}})

, 5000})
}
