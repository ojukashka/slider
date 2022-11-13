let container = document.getElementById("slides")
let Back = document.getElementById("prev")
let Next = document.getElementById("next")
let count = 0
Next.addEventListener('click',next)
Back.addEventListener('click',prev)

function next(){
    slide(1)
}
function prev(){
    slide(-1)
}
function slide(arg){
    let slides = document.getElementsByClassName("div")
    for(i=0;i<slides.length;i++){
        slides[i].style.display='none'
    }
    count+=arg
    if(count<0){
        count=3
    }
    if(count>=slides.length){
        count=0
    }
    slides[count].style.display='block'
}
setInterval(next,1000)