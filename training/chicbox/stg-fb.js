{

    const email = document.querySelector('#email'); 
    const signOutButton = document.querySelector('#signOutButton');
    const userName = document.querySelector('#userName');
    const userName2 = document.querySelector('#userName2');
    const loader = document.querySelector('#loadanimation');
    const maincontent = document.querySelector('#maincontent');
    
    
const firebaseConfig = {
    apiKey: "AIzaSyDApbEuGdjDf-dBlOljBvvXAPlZmUx-D5M",
    authDomain: "stonegate-system.firebaseapp.com",
    projectId: "stonegate-system",
    storageBucket: "stonegate-system.appspot.com",
    messagingSenderId: "798322604618",
    appId: "1:798322604618:web:fada6a2e9f09f0319bc4b3",
    measurementId: "G-1J8XNVRV7Q"
  };

    
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const authChanged = firebase.auth().onAuthStateChanged(user =>{
    let cbprognum = 0
    let cbprognum2 = 0
    let cbprognum3 = 0
    let cbprognum4 = 0
    let cbprognum5 = 0
    let cbprognum6 = 0
    let cbprognum8 = 0
    
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
    cbprognum8++
    }
    
    
        if( cb7p2 == true) {
    $('#cb7p2').hide()
    $('#cb7p2x').show()
    cbprognum8++
    }
    
    
        if( cb7p3 == true) {
    $('#cb7p3').hide()
    $('#cb7p3x').show()
    cbprognum8++
    }
    
    
        if( cb7p4 == true) {
    $('#cb7p4').hide()
    $('#cb7p4x').show()
    cbprognum8++
    }
    
    
        if( cb7p5 == true) {
    $('#cb7p5').hide()
    $('#sp5x').show()
    cbprognum8++
    }
    
    
    let sp =((cbprognum+cbprognum2+cbprognum3+cbprognum4+cbprognum5+cbprognum6+cbprognum8)/30*100)
    let spn = Math.round(sp)+'%'
    firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
      .set({CBN:spn}, {merge:true})
    
    
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
    document.querySelector('#cbprognum').textContent = cbprognum
    document.querySelector('#cbprognum2').textContent = cbprognum2
    document.querySelector('#cbprognum3').textContent = cbprognum3
    document.querySelector('#cbprognum4').textContent = cbprognum4
    document.querySelector('#cbprognum5').textContent = cbprognum5
    document.querySelector('#cbprognum6').textContent = cbprognum6
    document.querySelector('#cbprognum8').textContent = cbprognum8
    
    })})
    
    }
    
    
    
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
    
