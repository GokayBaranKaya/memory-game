window.addEventListener("DOMContentLoaded", function(){
    const cards = [
        {
            name: "cheeseburder",
            img: "imgs/cheeseburger.png"
        },
        {
            name: "fries",
            img: "imgs/fries.png"
        },
        {
            name: "cheeseburder",
            img: "imgs/hotdog.png"
        },
        {
            name: "cheeseburder",
            img: "imgs/ice-cream.png"
        },
        {
            name: "cheeseburder",
            img: "imgs/milkshake.png"
        },
        {
            name: "cheeseburder",
            img: "imgs/pizza.png"
        },
        {
            name: "cheeseburder",
            img: "imgs/cheeseburger.png"
        },
        {
            name: "fries",
            img: "imgs/fries.png"
        },
        {
            name: "cheeseburder",
            img: "imgs/hotdog.png"
        },
        {
            name: "cheeseburder",
            img: "imgs/ice-cream.png"
        },
        {
            name: "cheeseburder",
            img: "imgs/milkshake.png"
        },
        {
            name: "cheeseburder",
            img: "imgs/pizza.png"
        }
    ]
    
    const board = document.getElementById("board")
    const score = document.querySelector("#score")
    let currentScore = 0
    let previousNumbers = []
    let cardsFlipped = []
    



    //creating the board
    function createBoard(){
        for (let i = 0; i < cards.length; i++){
            const boardPiece = document.createElement("img")
            boardPiece.setAttribute("src", "imgs/blank.png")
            assingCards()
            boardPiece.setAttribute("data-id", previousNumbers[previousNumbers.length-1])
            board.appendChild(boardPiece)
            //flipping the cards
            boardPiece.addEventListener("click", function(){
                const dataId = boardPiece.getAttribute("data-id")
                cardsFlipped.push(cards[dataId].img)
                boardPiece.setAttribute("src", cards[dataId].img)
                if(cardsFlipped.length === 2){
                    setTimeout(checkMatch, "300")
                }
            })
        }
    }


    //checking for the matches
    function checkMatch(){
        const imgs = document.querySelectorAll("img")
        if (cardsFlipped[0] === cardsFlipped[1]){
            alert("MATCH")
            imgs.forEach(img => {
                src = img.getAttribute("src")
                if (src === cardsFlipped[0]){
                    img.setAttribute("src", "imgs/white.png")
                }
            })
            isGameOver()
        }else{
            alert("TRY AGAIN")
            imgs.forEach(img => {
                src = img.getAttribute("src")
                if (src !== "imgs/white.png"){
                    img.setAttribute("src", "imgs/blank.png")
                }
            })
        }
        cardsFlipped = []
    }
    //checking if the game is over
    function isGameOver(){
        currentScore++
        score.textContent = currentScore
        if (currentScore === 6){
            alert("Game Over")
            const imgs = document.querySelectorAll("img")
            imgs.forEach(img => {
                img.classList.add("inactive")
            })
        }
    }
   


    //assigning cards
    function assingCards(){
        let number = Math.floor(Math.random()*12)
        while(previousNumbers.includes(number)){
            number = Math.floor(Math.random()*12)
        }
        previousNumbers.push(number)
    }
    
    createBoard()
})


