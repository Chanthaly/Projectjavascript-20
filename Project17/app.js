  const reslut = document.getElementById('result');
  const filter = document.getElementById('filter')
  const listItem = []
  filter.addEventListener("input" , (e)=>{
      const search = e.target.value.toLowerCase()
listItem.forEach(item=>{
    if(item.innerText.toLowerCase().includes(search)){
    } else {
        item.classList.add("hide") 
    }
})
      
  })
 async function getData () {
    const url ="https://restcountries.com/v2/all"
  const respone =    await fetch(url)
  reslut.innerHTML = "" 
  const items = await respone.json()
 items.forEach(data=>{
     const li = document.createElement("li")
     listItem.push(li)
     li.innerHTML = `
  <img src="${data.flag}" />
  <div class="info">
      <h4>${data.name}</h4>
      <P>${formatNumber(data.population)}</P>
  </div>
     `
     reslut.appendChild(li)
 })
 function formatNumber(num) {

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

}
 }
 getData()