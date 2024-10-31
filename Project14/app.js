  const container = document.getElementById("container")
const getContries = async() => {
    const url = 'https://restcountries.com/v2/all'
   const  res =    await fetch(url)
  const items =  await  res.json()
items.forEach (element =>{
  createCard(element)
     console.log(items);
     
})
  
}
const createCard=(data)=>{
  const cardEl = document.createElement("div")
  cardEl.classList.add("contry")
  const contentHTML = `
   <div class="img-contriner">
     <img src=" ${data.flag}" />
   </div>
    <div class="info">
       <h3 class="name">  ${data.name} </h3>
       <small> ເມືອງຫຼວງ : <span>${data.capital}</span></small>
    </div>
  `
  cardEl.innerHTML = contentHTML
  container.appendChild(cardEl)
} 
getContries()