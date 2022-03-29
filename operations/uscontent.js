{
firebase.firestore().doc("stid/"+'{{wf {&quot;path&quot;:&quot;uid&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}')
.set({}, {merge:true})
let curUser = firebase.auth().currentUser;
let myFS = firebase.firestore()
let docRef = myFS.doc("stid/" + '{{wf {&quot;path&quot;:&quot;uid&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}')
docRef.get().then(docSnap => {
let data = docSnap.data()
let uscontents = data['uscontent'];

if(!!uscontents) {
$('#uscontent1').text('$')
$('#uscontent2').text('$')
$('#uscontent3').text('$')
$('#uscontent4').text('$')
$('#uscontent5').text('$')
$('#uscontent6').text('$')
$('#uscontent7').text('$')
$('#uscontent8').text('$')


$('#rev11').text('$')
$('#rev22').text('$')
$('.poundmarkuscontent').text('$')
$('.uscontentsign').text('$')
$('.uscontentsign1').text('$')
$('.amtextsign').text('$')
$('.amtextsign1').text('$')
$('.amtextsign2').text('$')
$('.amtextsign3').text('$')
$('.ranking-gross').hide()
$('.ranking-gross-usd').show()
{
let rating = document.querySelectorAll('.ranking-gross-usd')
rating.forEach((rating) => {
let ratnumb = (Number(rating.textContent)*1.31)
rating.textContent = ratnumb.toFixed(2)
})
}
}
})}
