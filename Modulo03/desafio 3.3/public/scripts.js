const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        const paginaId = card.getAttribute("id")
        window.location.href = `/courses/${paginaId}`
      


    })
}

