const progressEl = document.querySelector(".progress")
window.onscroll =  () => scrollProgress() 
 function scrollProgress() {
const pageHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight
const scrollTop = document.documentElement.scrollTop
   const scrollpercentage = (scrollTop/pageHeight)*100
  progressEl.style.visibility="visible"
  progressEl.style.width=scrollpercentage+"%"
 }
