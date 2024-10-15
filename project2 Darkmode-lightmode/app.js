const timeEl = document.querySelector(".time");
const btntoggle = document.querySelector(".toggle");
function SetTime() {
   const time = new Date()
   const houre = time.getHours()
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    timeEl.innerHTML = `${houre}:${minutes<10 ? `0${minutes}` : minutes }:${seconds < 10   ? `0${seconds}` : seconds }`
   
}
btntoggle.addEventListener("click",(e) =>{
 const html=document.querySelector('html')
 if(html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "ໂໝດກາງຄືນ"
 }else {
    html.classList.add("dark");
    e.target.innerHTML = "ໂໝດກາງວັນ"
 }

})
SetTime()
setInterval(SetTime,1000)