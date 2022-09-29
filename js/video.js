let videoContent=document.querySelector('.video');
let videoPlayButton=document.querySelector('.btn-video-play');
let videoStopButton=document.querySelector('.btn-stop');
videoPlayButton.addEventListener("click",function(event){
videoContent.play();
})
videoStopButton.addEventListener("click",function(event){
    videoContent.pause();
    videoContent.currentTime=0;
})