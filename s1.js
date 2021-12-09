

{
// char entity "icons" for less charsx
var i_play  = "▸",
    i_pause = "▮▮",
    i_stop  = "▪";

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
var yt_video_data = {
  "furthest": 0
};

tag.src = "https://www.youtube.com/iframe_api";    
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
  var player2;
      var player3;
          var player4;
              var player5;
                  var player6;
                      var player7;
                          var player8;

  function onYouTubePlayerAPIReady() {
    player = new YT.Player('s1p1video', {
      height: '390',
      width: '640',
      videoId: 'UVA8pPxOPk4',
events: {
      'onStateChange': onPlayerStateChange
    }
  })

    player2 = new YT.Player('s1p2video', {
      height: '390',
      width: '640',
      videoId: 'f7wkRET0hbo',
events: {
      'onStateChange': onPlayerStateChange
    }
  })

    player3 = new YT.Player('s1p3video', {
      height: '390',
      width: '640',
      videoId: 'f7wkRET0hbo',
events: {
      'onStateChange': onPlayerStateChange
    }
  })

    player4 = new YT.Player('s1p4video', {
      height: '390',
      width: '640',
      videoId: 'f7wkRET0hbo',
events: {
      'onStateChange': onPlayerStateChange
    }
  })

    player5 = new YT.Player('s1p5video', {
      height: '390',
      width: '640',
      videoId: 'f7wkRET0hbo',
events: {
      'onStateChange': onPlayerStateChange
    }
  })

    player6 = new YT.Player('s1p6video', {
      height: '390',
      width: '640',
      videoId: 'f7wkRET0hbo',
events: {
      'onStateChange': onPlayerStateChange
    }
  })

    player7 = new YT.Player('s1p7video', {
      height: '390',
      width: '640',
      videoId: 'f7wkRET0hbo',
events: {
      'onStateChange': onPlayerStateChange
    }
  })

    player8 = new YT.Player('s1p8video', {
      height: '390',
      width: '640',
      videoId: 'f7wkRET0hbo',
events: {
      'onStateChange': onPlayerStateChange
    }
  })



}



function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    updateYtVideoData(i_play);
  } else if (event.data == YT.PlayerState.PAUSED) {
    updateYtVideoData(i_play);
  } else if (event.data == YT.PlayerState.ENDED) {
    updateYtVideoData(i_stop);
  }
}

// tracking interaction data
function updateYtVideoData(which) {
  // getting video progress
  var progress = ytVideoProgress();
  var progress2 = ytVideoProgress2();
  var progress3 = ytVideoProgress3();
  var progress4 = ytVideoProgress4();
  var progress5 = ytVideoProgress5();
  var progress6  = ytVideoProgress6();
  var progress7 = ytVideoProgress7();
  var progress8 = ytVideoProgress8();


if (progress > 85){
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s1p1:true}, {merge:true})
$('#s1p1').hide()
$('#s1p1x').show()
}

if (progress2 > 85){
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s1p2:true}, {merge:true})
$('#s1p2').hide()
$('#s1p2x').show()
}

if (progress3 > 85){
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s1p3:true}, {merge:true})
$('#s1p3').hide()
$('#s1p3x').show()
}

if (progress4 > 85){
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s1p4:true}, {merge:true})
$('#s1p4').hide()
$('#s1p4x').show()
}

if (progress5 > 85){
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s1p5:true}, {merge:true})
$('#s1p5').hide()
$('#s1p5x').show()
}

if (progress6 > 85){
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s1p6:true}, {merge:true})
$('#s1p6').hide()
$('#s1p6x').show()
}

if (progress7 > 85){
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s1p7:true}, {merge:true})
$('#s1p7').hide()
$('#s1p7x').show()
}

if (progress8 > 85){
firebase.firestore().doc("users/"+firebase.auth().currentUser.uid)
.set({s1p8:true}, {merge:true})
$('#s1p8').hide()
$('#s1p8x').show()
}

  // set furthest if progress is the furthest
  yt_video_data.furthest = Math.max(yt_video_data.furthest, progress);
  // add current video progress to sequence
  // if video is complete
  if (which == i_stop) { yt_video_data.furthest = 100; }
}

// getting video progress in 0-100 percentage value
function ytVideoProgress() {
  var ratio = player.getCurrentTime() / player.getDuration(),
      percent = ratio * 100,
      round_percent = Math.round(percent * 10) / 10;
  return round_percent;
}

function ytVideoProgress2() {
  var ratio = player2.getCurrentTime() / player2.getDuration(),
      percent = ratio * 100,
      round_percent = Math.round(percent * 10) / 10;
  return round_percent;
}

function ytVideoProgress3() {
  var ratio = player3.getCurrentTime() / player3.getDuration(),
      percent = ratio * 100,
      round_percent = Math.round(percent * 10) / 10;
  return round_percent;
}

function ytVideoProgress4() {
  var ratio = player4.getCurrentTime() / player4.getDuration(),
      percent = ratio * 100,
      round_percent = Math.round(percent * 10) / 10;
  return round_percent;
}

function ytVideoProgress5() {
  var ratio = player5.getCurrentTime() / player5.getDuration(),
      percent = ratio * 100,
      round_percent = Math.round(percent * 10) / 10;
  return round_percent;
}

function ytVideoProgress6() {
  var ratio = player6.getCurrentTime() / player6.getDuration(),
      percent = ratio * 100,
      round_percent = Math.round(percent * 10) / 10;
  return round_percent;
}

function ytVideoProgress7() {
  var ratio = player7.getCurrentTime() / player7.getDuration(),
      percent = ratio * 100,
      round_percent = Math.round(percent * 10) / 10;
  return round_percent;
}

function ytVideoProgress8() {
  var ratio = player8.getCurrentTime() / player8.getDuration(),
      percent = ratio * 100,
      round_percent = Math.round(percent * 10) / 10;
  return round_percent;
}



}

{



}
