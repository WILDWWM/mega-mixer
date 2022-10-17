let card = document.getElementById("card");
    let flipper = document.getElementById("flipper");

    flipper.addEventListener("click", function( event ) {
        card.classList.toggle('flip');
    });