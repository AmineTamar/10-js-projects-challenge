
function countdown(){
    const currentdate = new Date()
const newyeardate = new Date("2025-01-01")

    let secDiff =  (newyeardate- currentdate) / 1000;

    const seconds = document.querySelector(".seconds")
    
    seconds.innerHTML = secDiff;

   


}
countdown();
setInterval(countdown,1000)