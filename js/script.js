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


function ShowMenuItem(link_name, item_name, btn_name){
    const blockForMouse=document.querySelector(link_name);
    blockForMouse.addEventListener("mouseover",function(event){
                document.querySelector(item_name).style.opacity=1;
                document.querySelector(btn_name).style.backgroundColor="#323969";
                
            })
}



function HideMenuItem(link_name, item_name, btn_name){
    const blockForMouse=document.querySelector(link_name);
    blockForMouse.addEventListener("mouseout",function(event){
                document.querySelector(item_name).style.opacity=0;
                document.querySelector(item_name).style.transition="all 0.7s";
                document.querySelector(btn_name).style.backgroundColor="#ff6d6d";
            })
}
ShowMenuItem(".link-1", ".items-name-1", ".nav-btn-1");
HideMenuItem(".link-1", ".items-name-1", ".nav-btn-1");
ShowMenuItem(".link-2", ".items-name-2", ".nav-btn-2");
HideMenuItem(".link-2", ".items-name-2", ".nav-btn-2");
ShowMenuItem(".link-3", ".items-name-3", ".nav-btn-3");
HideMenuItem(".link-3", ".items-name-3", ".nav-btn-3");
ShowMenuItem(".link-4", ".items-name-4", ".nav-btn-4");
HideMenuItem(".link-4", ".items-name-4", ".nav-btn-4");
ShowMenuItem(".link-5", ".items-name-5", ".nav-btn-5");
HideMenuItem(".link-5", ".items-name-5", ".nav-btn-5");

const tryButton=document.querySelector('.btn-try');
const closeTryForm=document.querySelector('.try-close-btn');
function showTryForm(){
     document.querySelector('.try-form').style.display="flex";
    console.log("mishka najata");
   
}
tryButton.addEventListener("click",showTryForm);
function HiddeTryForm(){
    document.querySelector('.try-form').style.display="none";
    
}
closeTryForm.addEventListener("click", HiddeTryForm);


