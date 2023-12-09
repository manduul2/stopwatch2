// EventListener -> tag-d event baigaa uguig sonsoh/shalgah
// ES6-> variable/tag/document.addEventListener('click/keyboard/scroll,()=>{}');
const time = document.getElementsByTagName('h1')[0]
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const lap = document.querySelector('.lap')
const ol =document.getElementsByTagName('ol')[0];
let doil=0,second=0,minute=0,hour=0;
// setInrerval --> hyzgaargui ajilna
function watch(){
    doil++
    time.innerText = "0" +hour+":"+"0"+minute+":"+"0"+second+":"+"0"+doil
    if(doil==100){
        doil=0
        second++
    if (second==60){
       minute++;
       second=0;
    } if(minute==60){
         minute=0;
         hour++;
       }if(doil==100){
        doil=0
        doil++
       }
    }else if(doil>=10){
        time.innerText = "0" +hour+":"+"0"+minute+":"+""+second+":"+ ""+doil
    }
    let d = doil<1000 ? "0"+doil : doil
    let s = second<10 ? "0"+second : second
    let m = minute<10 ? "0"+minute : minute
    let h = hour<10 ? "0"+hour : hour
    time.innerText = h+":"+m+":"+s+":"+d
}
let up;
start.addEventListener('click',()=>{
   up=setInterval(watch,10)
   document.querySelector('.start').disabled = true
   document.querySelector('.stop').disabled = false
});
stop.addEventListener('click',()=>{
    clearInterval(up)
    document.querySelector('.start').disabled = false
    document.querySelector('.stop').disabled = true
})
reset.addEventListener('click',()=>{
    doil=0
    second = 0
    minute=0
    hour=0
    time.innerText="00:00:00:00"
    clearInterval(up)
})
lap.addEventListener('click',()=>{
    let liEl = document.createElement('li');
    ol.append(liEl)
    liEl.innerText= time.innerText = "0" +hour+":"+"0"+minute+":"+"0"+second+":"+"0"+doil
    if(second>=10){
        time.innerText = "0" +hour+":"+"0"+minute+":"+""+second+":"+ "0"+doil
    }

})