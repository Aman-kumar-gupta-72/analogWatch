let watchTime=document.querySelector(`.watchTime`);

let stopBtn = document.getElementById(`stopBtn`);
let startBtn = document.getElementById(`startBtn`);
let resetBtn = document.getElementById(`resetBtn`);

let msec=0;
let secs=0;
let mins=0;
let hrs=0;


let timeId =null;


startBtn.addEventListener('click', function (){
    if(timeId ==null){
        clearInterval(timeId);

    }
    timeId=setInterval(startTimer,10);
});
stopBtn.addEventListener(`click`,
function  () {
    clearInterval(timeId);

    
});
resetBtn.addEventListener(`click`,function (){
    clearInterval(timeId);
    watchTime .innerHTML=`00 : 00 : 00 : 00`
    mins=secs=secs=hr=0;
});
function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
        if(mins==60){
            mins=0;
            hrs++;
        }
    }
    let msecString=msec<10?`0${msec}`:msec;
    let secsString=secs<10?`0${secs}`:secs;
    let minsString=mins<10?`0${mins}`:mins;
    let hrsString= hrs<10?`0${hrs}`:hrs;

    watchTime.innerHTML=`${hrsString} : ${minsString} : ${secsString} : ${msecString}`;
}
