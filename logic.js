let smartEarlierGuess = []
let hackerEarlierGuess = []

const checked = localStorage.getItem('id');
if (checked == 'Check1') {
    document.getElementById("selectBtn").addEventListener("click", guess)
} else if (checked == 'Check2') {
    document.getElementById("selectBtn").addEventListener("click", guessVsSmart)
} else if (checked == 'Check3') {
    document.getElementById("selectBtn").addEventListener("click", guessVsHacker)
}

window.addEventListener("load", initSite)

function initSite() {
    highlightYou()
}

let randomNumber = Math.random()*20
randomNumber = Math.ceil(randomNumber)

console.log(randomNumber)

/* Highlight You */

function highlightYou() {
    let YouHighlight = document.getElementById("boxYou");
    YouHighlight.classList.toggle("opponentYou");
}

/* Highlight noobBot */

function highlightNoob() {
    let noobHighlight = document.getElementById("boxNoob");
    noobHighlight.classList.toggle("opponentNoob");
}

/* Highlight smartBot */

function highlightSmart() {
    let smartHighlight = document.getElementById("boxSmart");
    smartHighlight.classList.toggle("opponentSmart");
}

/* Vänta på noobBot */

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
    document.getElementById("selectBtn").disabled = false;
}






function guess() {
    let instruct = document.getElementById("timerDiv")
    let guess = document.getElementById("getNumber").value
    let you = document.getElementById("you")
    
    you.innerHTML = ""
    you.innerHTML = guess
    document.getElementById("getNumber").value = ""

    highlightYou()
    document.getElementById("selectBtn").disabled = true;

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






//PLAYERS GUESS VS SMART BOT   
function guessVsSmart() {
    let instruct = document.getElementById("timerDiv")
    let guess = document.getElementById("getNumber").value
    let you = document.getElementById("you")
    
    you.innerHTML = ""
    you.innerHTML = guess
    document.getElementById("getNumber").value = ""

    highlightYou()
    document.getElementById("selectBtn").disabled = true;

    if (guess < randomNumber){
        instruct.innerHTML = ""
        instruct.innerHTML = "Higher"
        awaitInstructSmart()
    
    } else if (guess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        awaitInstructSmart()

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


//SMART BOTS GUESS
function smartBotGuess(){

    let instruct = document.getElementById("timerDiv")

    let smartGuess = Math.random()*20
    smartGuess = Math.ceil(smartGuess)
    console.log(smartGuess)

    function numberCheck(array) {
        for (i = 0; i < array.length; i++) {
            
            if (smartGuess == array[i]) {
                smartGuess = Math.random()*20
                smartGuess = Math.ceil(smartGuess)
                numberCheck(array)
            }
        }
    }

    numberCheck(smartEarlierGuess)

    smartEarlierGuess.push(smartGuess)
    console.log("Array: " + smartEarlierGuess)

    let smartBotGuess = document.getElementById("smartBotGuess")
    smartBotGuess.innerHTML = ""
    smartBotGuess.innerHTML = smartGuess

    highlightSmart()
    

    if (smartGuess < randomNumber){
        
        instruct.innerHTML = ""
        instruct.innerHTML = "Higher"
        awaitInstructPlayer()

    
    } else if (smartGuess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        awaitInstructPlayer()

    } else if (smartGuess == randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Noob bot wins! Thats my number!"
        
        if (confirm('Smart bot wins! Thats my number! Do you want to play again?')) {
            // Yes
            window.location.reload()
            } else {
            // No
            }
        }
}

//ADDS 3 SECONDS DELAY BEFORE SMART BOTS GUESS
function awaitSmart() {
    console.log("awaitSmart running")
    setTimeout(smartBotGuess, 3000)  
}

//ADDS 3 SECONDS DELAY AFTER PLAYERS GUESS
function awaitInstructSmart() {
    console.log("awaitInstructSmart running")
    setTimeout(smartNext, 3000)
}

//INSTRUCTOR SAYS ITS SMART BOTS TURN
function smartNext() {
    let instruct = document.getElementById("timerDiv")
    instruct.innerHTML = ""
    instruct.innerHTML = "Smart-bot, you're up!"

    /* highlightSmart() */
    awaitSmart()
}





//PLAYERS GUESS VS HACKER BOT
function guessVsHacker() {
    let instruct = document.getElementById("timerDiv")
    let guess = document.getElementById("getNumber").value
    let you = document.getElementById("you")
    
    you.innerHTML = ""
    you.innerHTML = guess
    document.getElementById("getNumber").value = ""

    hackerEarlierGuess.push(guess)

    highlightYou()
    document.getElementById("selectBtn").disabled = true;

    if (guess < randomNumber){
        instruct.innerHTML = ""
        instruct.innerHTML = "Higher"
        awaitInstructHacker()
    
    } else if (guess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        awaitInstructHacker()

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


//HACKER BOTS GUESS
function hackerBotGuess(){

    let instruct = document.getElementById("timerDiv")

    let hackerGuess = Math.random()*20
    hackerGuess = Math.ceil(hackerGuess)
    console.log(hackerGuess)

    function numberCheck(array) {
        for (i = 0; i < array.length; i++) {
            
            if (hackerGuess == array[i]) {
                hackerGuess = Math.random()*20
                hackerGuess = Math.ceil(hackerGuess)
                numberCheck(array)
            }
        }
    }
    
    numberCheck(hackerEarlierGuess)

    hackerEarlierGuess.push(hackerGuess)
    console.log("Array: " + hackerEarlierGuess)

    let hackerBotGuess = document.getElementById("hackerBotGuess")
    hackerBotGuess.innerHTML = ""
    hackerBotGuess.innerHTML = hackerGuess

    /* highlightHacker() */
    
    if (hackerGuess < randomNumber){
        
        instruct.innerHTML = ""
        instruct.innerHTML = "Higher"
        awaitInstructPlayer()

    
    } else if (hackerGuess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        awaitInstructPlayer()

    } else if (hackerGuess == randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Noob bot wins! Thats my number!"
        
        if (confirm('Hacker bot wins! Thats my number! Do you want to play again?')) {
            // Yes
            window.location.reload()
            } else {
            // No
            }
        }
}

//ADDS 3 SECONDS DELAY BEFORE HACKER BOTS GUESS
function awaitHacker() {
    console.log("awaitHacker running")
    setTimeout(hackerBotGuess, 3000)  
}

//ADDS 3 SECONDS DELAY AFTER PLAYERS GUESS
function awaitInstructHacker() {
    console.log("awaitInstructHacker running")
    setTimeout(hackerNext, 3000)
}

//INSTRUCTOR SAYS ITS HACKER BOTS TURN
function hackerNext() {
    let instruct = document.getElementById("timerDiv")
    instruct.innerHTML = ""
    instruct.innerHTML = "Hacker-bot, you're up!"

    /* highlightHacker() */
    awaitHacker()
}







