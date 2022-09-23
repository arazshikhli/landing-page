const anchors=document.querySelectorAll('a[href*="#"]');
for(let anchor of anchors){
    anchor.addEventListener("click",function(){
        event.preventDefault();
        const blockID=anchor.getAttribute('href');
        document.querySelector(''+blockID).scrollIntoView(
            {behavior:"smooth",
        block:"start"}
        )
    })
}
document.querySelector('.btn-video-play').onclick=()=>{
    document.querySelector('.wrapper-content-container').style.display='none';
    document.querySelector('.stop').style.display='inline-block';
}

document.querySelector('.btn-stop').onclick=()=>{
    document.querySelector('.wrapper-content-container').style.display='flex';
    document.querySelector('.stop').style.display='none';
}
