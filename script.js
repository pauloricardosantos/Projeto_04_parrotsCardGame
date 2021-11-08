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

let clickCard = 0
let firstCard
let secondCard
let counterMove = 0

function cursorClick(card) {

    card.classList.add("card-selected")
    clickCard++


    if (clickCard == 1) {
        firstCard = card
        counterMove++

    }
    if (clickCard == 2) {
        secondCard = card
        counterMove++

        if (firstCard.innerHTML == secondCard.innerHTML) {
            clickCard = 0
            endGame()
        } else {
            setTimeout(delay, 1000)
            function delay() {

                firstCard.classList.remove("card-selected")
                secondCard.classList.remove("card-selected")
            }
            clickCard = 0
        }
    }
}
function endGame() {

    const turnCard = document.querySelectorAll(".card-selected")
    if (turnCard.length == valueCardsGame) {
        alert("Parabéns " + counterMove + " jogadas!")
    }
}

