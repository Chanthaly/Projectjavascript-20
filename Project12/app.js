  const Btn =  document.querySelector(".Btn")
  const container = document.querySelector(".container")
  const message = [
    "ສະບາຍດີ",
    "Hello",
    "Good  night",
    "Good morning",
    "Good afternoon"
  ]
  Btn.addEventListener("click",()=> createNotification())
  function createNotification() {
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText = rdMessage();
    container.appendChild(notificationEl)
    setTimeout(() => {
         notificationEl.remove()
    },3000);
  }
 
  function rdMessage() {
   return message[Math.floor(Math.random()*message.length)]
    
  }

 