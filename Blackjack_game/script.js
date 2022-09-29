
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let pointEl = document.getElementById("point-el")


function random(CARDS) { 
    return CARDS[Math.floor(Math.random() * CARDS.length)]
}

const BJ_POINT = 21
const CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 1]


let message = ""
let flag = true
let point

function restart() { 
    messageEl.textContent = "Play game!" 
    cardsEl.textContent = "Cards: "
    pointEl.textContent = "Point: "
    firstCard = 0
    secondCard = 0
    addCard = 0
    point = 0
    newPoint = 0
    flag = true
}

function start() {
    let firstCard = random(CARDS)
    let secondCard = random(CARDS)
    let point = firstCard + secondCard
    if (flag) {
        if (point < BJ_POINT) {
            message = "Do you want to draw a new card?"
        } else if (point === BJ_POINT) {
            message = "Congratulation! You've got Blackjack"
        } else {
            message = "You're out of the game! Sorry"
        }
        messageEl.textContent = message
        cardsEl.textContent += firstCard + " " + secondCard + " "
        pointEl.textContent += point
        flag = false
    } else if (point >= 2 && point < 21 ) {
        alert("Please! Draw a new card.")
    } else { 
        alert("Please! Reset the game.")
    }
    return this.point = point
    }
function drawCard() {
    let thePoint = this.point
    // console.log(thePoint)
    if (thePoint <= 20) {
        let addCard = random(CARDS)
        // console.log(addCard)
        thePoint += addCard
        cardsEl.textContent += " " + addCard
        pointEl.textContent = "Point: " + thePoint
        if (thePoint < BJ_POINT) {
            message = "Do you want to draw a new card?"
        } else if (thePoint === BJ_POINT) {
            message = "Congratulation! You've got Blackjack"
        } else {
            message = "You're out of the game! Sorry"
        }
        messageEl.textContent = message
    } else if (thePoint >= 21) {
        alert("Restart the game, please!")
    } else { 
        alert("Start the game, please!")
    }
    return this.point = thePoint
}


