const buttonSend = document.querySelector("#send");
let valueName = ""
let valueCardsGame = 0

const parrolCards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"]

let choosedCards = [];

buttonSend.addEventListener("click", function (e) {
    e.preventDefault();

    const inputName = document.querySelector(".inputName");
    valueName = inputName.value

    const cardsGame = document.querySelector(".inputCardsGame");
    valueCardsGame = cardsGame.value;
    const resto = (valueCardsGame % 2)

    if (valueCardsGame < 4 || valueCardsGame > 14 || resto !== 0) {
        alert("Veja a Regra sobre o número de cartas")
    }
    else {
        alert("Preparado " + valueName + "? \n Vamos começar!!!!")
        sendCard()
    }
})


function sendCard() {
    mix()
    for (let i = 0; i < (valueCardsGame / 2); i++) {
        choosedCards.push(parrolCards[i]);
        choosedCards.push(parrolCards[i]);
    }
    choosedCards.sort(comparator);
    const card = document.querySelector(".cards-game");
    for (let i = 0; i < valueCardsGame; i++) {
        card.innerHTML +=
            `<li>
                <div id="${choosedCards[i]}" onclick="cursorClick(this)" "data-identifier="card" class="card">
                    <div data-identifier="front-face" class="front-face face">
                        <img src="/assets/front.png" alt="">
                    </div>
                    <div  data-identifier="back-face" class="back-face face">
                    <img src="/assets/${choosedCards[i]}.gif" alt="">
                    </div>
                </div>
            </li>`
        const welcome = document.querySelector('.container-apresentacao')
        welcome.classList.add('hidden')

    }
}
function mix() {
    parrolCards.sort(comparator)
}
function comparator() {
    return Math.random() - 0.5;
}

let escolhaDeCarta = 0
let primeiraCarta
let segundaCarta
let contadorJogadas = 0

function cursorClick(card) {

    card.classList.add("card-selected")
    escolhaDeCarta++


    if (escolhaDeCarta == 1) {
        primeiraCarta = card
        contadorJogadas++

    }
    if (escolhaDeCarta == 2) {
        segundaCarta = card
        contadorJogadas++

        if (primeiraCarta.innerHTML == segundaCarta.innerHTML) {
            escolhaDeCarta = 0
            finalGame()
        } else {
            setTimeout(atraso, 1000)
            function atraso() {

                primeiraCarta.classList.remove("card-selected")
                segundaCarta.classList.remove("card-selected")
            }
            escolhaDeCarta = 0
        }
    }
}
function finalGame() {

    const quantidadeCartasViradas = document.querySelectorAll(".card-selected")
    if (quantidadeCartasViradas.length == valueCardsGame) {
        alert("Você ganhou em " + contadorJogadas + " jogadas!")
    }
}
