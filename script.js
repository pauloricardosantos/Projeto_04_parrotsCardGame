const buttonSend = document.querySelector("#send");

function startGame() {

    buttonSend.addEventListener("click", function (e) {
        e.preventDefault();

        const inputName = document.querySelector(".inputName");
        let valueName = inputName.value

        const cardsGame = document.querySelector(".inputCardsGame");
        let valueCardsGame = cardsGame.value;
        const resto = (valueCardsGame % 2)

        if (valueCardsGame < 4 || valueCardsGame > 14 || resto !== 0) {
            alert("Veja a Regra sobre o número de cartas")
        }
        else {
            alert("Ebaaa, vamos começar!")
            numberCards(valueCardsGame)
        }
    })
}
startGame()


function numberCards(valueCardsGame) {
    let contador = 0;

    while (contador < valueCardsGame) {

        let carta = document.querySelector(".cards-game");
        carta.innerHTML =
            `<li>
                <div class="card">
                    <img src="/assets/front.png" alt="">
                </div>
            </li>`
            + carta.innerHTML;
        contador++;
    }
}
