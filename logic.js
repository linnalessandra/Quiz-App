let numberOfGuesses = 0
let numberOfBotGuesses = 0
let placeholderGuess = 0
let maxGuess = 21
let minGuess = 0

function getRandomNumberBetween(min,max){
    return Math.ceil(Math.random()*(max-min+1)+min);
}

let smartEarlierGuess = []

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

//SHOW PLAYER INSTRUCTIONS 
function awaitInstructPlayer() {
    console.log("awaitInstructPlayer running")
    setTimeout(playerNext, 3000)
}

//SHOW SMARTBOT'S GUESS 2 SEC
function awaitInstructPlayerSmart() {
    console.log("awaitInstructPlayer running")
    setTimeout(playerNext, 2000)
}

//SWOW HACKERBOT'S GUESS 1 SEC
function awaitInstructPlayerHacker() {
    console.log("awaitInstructPlayer running")
    setTimeout(playerNext, 1000)
}

//
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
    document.getElementById("smartBotGuess").innerHTML = "0"
    document.getElementById("hackerBotGuess").innerHTML = "0"
    let instruct = document.getElementById("timerDiv")
    instruct.innerHTML = ""
    instruct.innerHTML = "Player, you're up!"
    highlightYou()
    document.getElementById("selectBtn").disabled = false;
}

function guess() {

    numberOfGuesses++

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
    numberOfBotGuesses++

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

    numberOfGuesses++
    let instruct = document.getElementById("timerDiv")
    let guess = document.getElementById("getNumber").value
    let you = document.getElementById("you")
    
    you.innerHTML = ""
    you.innerHTML = guess
    document.getElementById("getNumber").value = ""

    smartEarlierGuess.push(guess)

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
    numberOfBotGuesses++
    
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

    /* highlightSmart() */
    
    if (smartGuess < randomNumber){
        
        instruct.innerHTML = ""
        instruct.innerHTML = "Higher"
        awaitInstructPlayerSmart()

    
    } else if (smartGuess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        awaitInstructPlayerSmart()

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

//ADDS 2 SECONDS DELAY BEFORE SMART BOTS GUESS
function awaitSmart() {
    console.log("awaitSmart running")
    setTimeout(smartBotGuess, 2000)  
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
    
    numberOfGuesses++

    let instruct = document.getElementById("timerDiv")
    let guess = document.getElementById("getNumber").value
    placeholderGuess = guess

    let you = document.getElementById("you")
    
    you.innerHTML = ""
    you.innerHTML = guess
    document.getElementById("getNumber").value = ""

    highlightYou()
    document.getElementById("selectBtn").disabled = true;

    if (guess < randomNumber){
        instruct.innerHTML = ""
        instruct.innerHTML = "Higher"
        if (guess > minGuess) {
            minGuess = guess++
            awaitInstructHacker()
        } else {
            awaitInstructHacker()
        }
        
    
    } else if (guess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        if (guess < maxGuess) {
            maxGuess = guess--
            awaitInstructHacker()
        } else {
            awaitInstructHacker()
        }

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
    numberOfBotGuesses++
    
    let instruct = document.getElementById("timerDiv")

    let hackerGuess = Math.random()*20
    hackerGuess = Math.ceil(hackerGuess)
    console.log("hacker start guess: " + hackerGuess)
    
    if (randomNumber < placeholderGuess) {
        //Lower
        console.log("if")
        lower()
    } else if (randomNumber > placeholderGuess) {
        //Higher
        console.log("else if")
        higher()
    }

    function lower() {
        if (hackerGuess < maxGuess) {
            if (hackerGuess > minGuess) {
            console.log("lower guess: " + hackerGuess)
            } else {
                hackerGuess = getRandomNumberBetween(minGuess, maxGuess)
                console.log("lower()")
                lower()
            }
        } else {
            hackerGuess = getRandomNumberBetween(minGuess, maxGuess)
            console.log("lower()")
            lower()
        } 
    }
    
    function higher() {
        if (hackerGuess > minGuess) {
            if (maxGuess > hackerGuess) {
            console.log("higher guess: " + hackerGuess)
            } else {
                hackerGuess = getRandomNumberBetween(minGuess, maxGuess)
                higher() 
            }
        } else {
            console.log("higher()")
            hackerGuess = getRandomNumberBetween(minGuess, maxGuess)
            higher()
        }
    }
    
    console.log("Hacker guess: " + hackerGuess)

    let hackerBotGuess = document.getElementById("hackerBotGuess")
    hackerBotGuess.innerHTML = ""
    hackerBotGuess.innerHTML = hackerGuess

    /* highlightHacker() */
    
    if (hackerGuess < randomNumber){
        instruct.innerHTML = ""
        instruct.innerHTML = "Higher"
        minGuess = hackerGuess++
        awaitInstructPlayerHacker()

    } else if (hackerGuess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        maxGuess = hackerGuess--
        awaitInstructPlayerHacker()

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

//ADDS 1 SECONDS DELAY BEFORE HACKER BOTS GUESS
function awaitHacker() {
    console.log("awaitHacker running")
    setTimeout(hackerBotGuess, 1000)  
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







