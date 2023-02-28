// skills
let skills = document.querySelector(".our-skills");
let progress = document.querySelectorAll(".skill-progress span");
progress.forEach((element)=>{
    element.style.width = "0"
});
window.onscroll = function(){
    if(window.scrollY >= skills.offsetTop + 100){
            progress.forEach((element)=>{
            element.style.width = element.dataset.width;
    });
    }
}
// ..........
// last events
let countDownDate = new Date("dec 31, 2023 00:00:00").getTime();
console.log(countDownDate);
let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow ;
    let days = Math.floor(dateDiff / ( 1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % ( 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % ( 1000 * 60 * 60 ) / (1000 * 60 ));
    let seconds = Math.floor(dateDiff % ( 1000 * 60 ) / (1000));
    document.querySelector(".time .unit:nth-child(1) span:first-child").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".time .unit:nth-child(2) span:first-child").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".time .unit:nth-child(3) span:first-child").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".time .unit:nth-child(4) span:first-child").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (dateDiff < 0){
        clearInterval(counter)
    }
},1000)
// .........