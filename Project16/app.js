  const  celciusInput  = document.getElementById("celcius")
   const fahrenheitInput = document.getElementById("fahrenheit")
   const kevinInput = document.getElementById("kevin")
   const tempInputs =  document.querySelectorAll("input")
   tempInputs.forEach(input=>{
     input.addEventListener("input",(e)=>{
        // input 
        let temValue = e.target.value
        // Name temp
        let inputName = e.target.name
      if(e.target.value === "") {
         celciusInput.value = null
         fahrenheitInput.value = null
         kevinInput.value = null
         return
      }
      //oparation temp
       if(inputName === "celcius")  {
         // c - f
         let fahrenheit = temValue * 1.8 + 32
         fahrenheitInput.value = fahrenheit.toFixed(2)
         // c -k
        let kelvin  = temValue + 273
        kevinInput.value=kelvin
       }else if(inputName === "fahrenheit") {
   let celcius = (temValue-32)/1.8
     celciusInput.value = celcius.toFixed(2)
     let kelvin = (temValue-32)/1.8+372
       kevinInput.value = kelvin.toFixed(2)
       }else if(inputName === "kevin") {
         let celcius = temValue - 273
         celciusInput.value = celcius.toFixed(2)
         let fahrenheit =(temValue-273)*1.8+32
         fahrenheitInput.value = fahrenheit.toFixed(2)
       }

     })
   })
   