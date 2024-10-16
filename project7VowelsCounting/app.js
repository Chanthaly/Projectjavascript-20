  const countEl = document.querySelector(".count")
  const inPut = document.querySelector("input")
  inPut.addEventListener("keyup",()=>{
    let word = inPut.value.toLowerCase();
let vowelCoun = 0
for(i=0;i<word.length;i++){
    let letter = word[i]
    if(letter.match(/([a,e,i,o,u])/)) {
      vowelCoun++
    }
}
countEl.innerHTML =`${vowelCoun} ` 
  })