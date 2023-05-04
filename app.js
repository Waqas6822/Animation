var curse=document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove" ,(e)=>{
    let x=e.pageX;
    let y=e.pageY;


   curse.style.top=y + "px";
   curse.style.left=x + "px";
   curse.style.display="block";

    function mouseStopped(){
        curse.style.display="none";
    }

    clearTimeout(timeout);
    timeout=setTimeout(mouseStopped ,1000)

});

document.addEventListener("mouseout" ,()=>{
    curse.style.display="none";

})