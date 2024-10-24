const sound = ["Effect1","Effect2","Effect3","Effect4","Effect5"]
sound.forEach(sound=> {
    const btn = document.createElement("button")
    btn.innerText = sound
    document.getElementById("controller").appendChild(btn)
    btn.addEventListener("click" , () => {
      document.getElementById(sound).play()
        
    })
})