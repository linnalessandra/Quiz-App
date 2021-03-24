window.addEventListener("load", initSite)

function initSite() {
    highlightYou()
}

let randomNumber = Math.random()*20
randomNumber = Math.ceil(randomNumber)

console.log(randomNumber)

function highlightYou() {
    let YouHighlight = document.getElementById("boxYou");
    YouHighlight.classList.toggle("opponentYou");
}


function highlightNoob() {
    let noobHighlight = document.getElementById("boxNoob");
    noobHighlight.classList.toggle("opponentNoob");
}

function awaitNoob() {
    console.log("awaitNoob running")
    setTimeout(noobBotGuess, 3000)  
}

function awaitInstructPlayer() {
    console.log("awaitInstructPlayer running")
    setTimeout(playerNext, 3000)
}

function awaitInstructNoob() {
    console.log("awaitInstructNoob running")
    setTimeout(noobNext, 3000)
}

function noobNext() {
    let instruct = document.getElementById("timerDiv")
    instruct.innerHTML = ""
    instruct.innerHTML = "Noob, you're up!"

    highlightNoob()
    awaitNoob()
}

function playerNext() {
    let instruct = document.getElementById("timerDiv")
    instruct.innerHTML = ""
    instruct.innerHTML = "Player, you're up!"
    highlightYou()
}

function guess() {
    let instruct = document.getElementById("timerDiv")
    let guess = document.getElementById("getNumber").value
    let you = document.getElementById("you")
    
    you.innerHTML = ""
    you.innerHTML = guess
    
    highlightYou()
    
    if (guess < randomNumber){
        instruct.innerHTML = ""
        instruct.innerHTML = "Higher"
        awaitInstructNoob()
    
    } else if (guess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        awaitInstructNoob()

    } else if (guess == randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Great you win! Thats my number!"
        
        if (confirm('Great you win! Thats my number! Do you want to play again?')) {
            // Yes
            window.location.reload()
          } else {
            window.location("index.html")
          }
        }
    }

    function noobBotGuess(){
        let instruct = document.getElementById("timerDiv")

        let noobGuess = Math.random()*20
        noobGuess = Math.ceil(noobGuess)
        console.log(noobGuess)

        let noob = document.getElementById("noob")
        noob.innerHTML = ""
        noob.innerHTML = noobGuess

        highlightNoob()

        if (noobGuess < randomNumber){
            
            instruct.innerHTML = ""
            instruct.innerHTML = "Higher"
            awaitInstructPlayer()
    
        
        } else if (noobGuess > randomNumber) {
            instruct.innerHTML = ""
            instruct.innerHTML = "Lower"
            awaitInstructPlayer()

        } else if (noobGuess == randomNumber) {
            instruct.innerHTML = ""
            instruct.innerHTML = "Noob bot wins! Thats my number!"
            
            if (confirm('Noob bot wins! Thats my number! Do you want to play again?')) {
                // Yes
                window.location.reload()
                } else {
                // No
                }
            }
    }




