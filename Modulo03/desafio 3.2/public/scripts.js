const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        const paginaId = card.getAttribute("id")
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${paginaId}`
        


    })
}


document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modal.classList.remove("active")
})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    modal.classList.add("active");
})

classList