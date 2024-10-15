const opBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn')
const modalContainer = document.querySelector('.container-modal')
opBtn.addEventListener('click' , () => {
modalContainer.classList.add('show')
});
closeBtn.addEventListener('click' , () => {
    modalContainer.classList.remove('show')
})