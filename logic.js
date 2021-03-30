let numberOfGuesses = 0
let numberOfBotGuesses = 0
let placeholderGuess = 0
let maxGuess = 21
let minGuess = 0

function getRandomNumberBetween(min,max){
    return Math.ceil(Math.random()*(max-min+1)+min);
}

let smartEarlierGuess = []

let versus = document.getElementById("versus")
let fadeSmart = document.getElementById("boxSmart")
let fadeNoob = document.getElementById("boxNoob")
let fadeHacker = document.getElementById("boxHacker")

const checked = localStorage.getItem('id');
const name = localStorage.getItem('name');

if (checked == 'Check1') {
    document.getElementById("selectBtn").addEventListener("click", guess)
    versus.innerText = "NOOBBOT VS " + name.toUpperCase()
    fadeSmart.style.opacity = "0.5";
    fadeHacker.style.opacity = "0.5";
} else if (checked == 'Check2') {
    document.getElementById("selectBtn").addEventListener("click", guessVsSmart)
    versus.innerHTML = "SMARTBOT VS " + name.toUpperCase()
    fadeNoob.style.opacity = "0.5";
    fadeHacker.style.opacity = "0.5";
} else if (checked == 'Check3') {
    document.getElementById("selectBtn").addEventListener("click", guessVsHacker)
    versus.innerHTML = "HACKERBOT VS " + name.toUpperCase()
    fadeSmart.style.opacity = "0.5";
    fadeNoob.style.opacity = "0.5";
}

/* Guess redirect  */

document.getElementById("getNumber").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 1) this.value = 1;
    if (v > 20) this.value = 20;
  });

/* Press enter afer input */

var input = document.getElementById("getNumber");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("selectBtn").click();
  }
});

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

/* Highlight HackerBot */

function highlightHacker() {
    let hackerHighlight = document.getElementById("boxHacker");
    hackerHighlight.classList.toggle("opponentHacker");
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
    setTimeout(noFuncSmart, 2000)
}

//SWOW HACKERBOT'S GUESS 1 SEC
function awaitInstructPlayerHacker() {
    console.log("awaitInstructPlayer running")
    setTimeout(noFuncHacker,1000)
}

function noFuncHacker() {
    document.getElementById("hackerBotGuess").innerText = 0
   
}

function delayFuncHacker() {
    setTimeout(playerNext, 3000)
}

//
function awaitInstructNoob() {
    console.log("awaitInstructNoob running")
    setTimeout(noobNext, 3000)
}

function noobNext() {
    let instruct = document.getElementById("timerDiv")
    instruct.innerHTML = ""
    instruct.innerHTML = "NoobBot, you're up!"

    highlightNoob()
    awaitNoob()
}

function playerNext() {
    document.getElementById("smartBotGuess").innerHTML = "0"
    document.getElementById("hackerBotGuess").innerHTML = "0"
    let instruct = document.getElementById("timerDiv")
    instruct.innerHTML = ""
    instruct.innerHTML = name + ", you're up!"
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

        addHighscore(name, numberOfGuesses)
        let modalObject = document.getElementById("gameModal");
        let image = document.createElement("img");
        image.setAttribute("src", "/assets/you.png");
        document.getElementById("winnerPic").appendChild(image);
        winnerText.innerHTML = ""
        winnerText.innerHTML = "Great " + name +  " wins!"
        modalObject.style.display = "block";

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
        let modalObject = document.getElementById("gameModal");
        let image = document.createElement("img");
        image.setAttribute("src", "/assets/normalBot.png");
        document.getElementById("winnerPic").appendChild(image);
        winnerText.innerHTML = ""
        winnerText.innerHTML = "NoobBot wins!"
        modalObject.style.display = "block";

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
        addHighscore(name, numberOfGuesses)
        let modalObject = document.getElementById("gameModal");
        let image = document.createElement("img");
        image.setAttribute("src", "/assets/you.png");
        document.getElementById("winnerPic").appendChild(image);
        winnerText.innerHTML = ""
        winnerText.innerHTML = "Great " + name +  " wins!"
        modalObject.style.display = "block";
        
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

    highlightSmart()
    

    if (smartGuess < randomNumber){
        
        instruct.innerHTML = ""
        instruct.innerHTML = "Higher"
        awaitInstructPlayerSmart()
        delayFuncSmart()

    
    } else if (smartGuess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        awaitInstructPlayerSmart()
        delayFuncSmart()

    } else if (smartGuess == randomNumber) {
        let modalObject = document.getElementById("gameModal");
        let image = document.createElement("img");
        image.setAttribute("src", "/assets/smartbot.png");
        document.getElementById("winnerPic").appendChild(image);
        winnerText.innerHTML = ""
        winnerText.innerHTML = "SmartBot wins!"
        modalObject.style.display = "block";
        
        }
}

function noFuncSmart() {
    document.getElementById("smartBotGuess").innerText = 0
   
}

function delayFuncSmart() {
    setTimeout(playerNext, 3000)
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
    instruct.innerHTML = "SmartBot, you're up!"

    highlightSmart()
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
        addHighscore(name, numberOfGuesses)
        let modalObject = document.getElementById("gameModal");
        let image = document.createElement("img");
        image.setAttribute("src", "/assets/you.png");
        document.getElementById("winnerPic").appendChild(image);
        winnerText.innerHTML = ""
        winnerText.innerHTML = "Great " + name +  " wins!"
        modalObject.style.display = "block";
        
       
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
        delayFuncHacker()

    } else if (hackerGuess > randomNumber) {
        instruct.innerHTML = ""
        instruct.innerHTML = "Lower"
        maxGuess = hackerGuess--
        awaitInstructPlayerHacker()
        delayFuncHacker()

    } else if (hackerGuess == randomNumber) {
        let modalObject = document.getElementById("gameModal");
        let image = document.createElement("img");
        image.setAttribute("src", "/assets/hackerBot.png");
        document.getElementById("winnerPic").appendChild(image);
        winnerText.innerHTML = ""
        winnerText.innerHTML = "HackerBot wins!"
        modalObject.style.display = "block";
        
        }
}

//ADDS 1 SECONDS DELAY BEFORE HACKER BOTS GUESS
function awaitHacker() {
    console.log("awaitHacker running")
    setTimeout(hackerBotGuess, 1500)  
}

function delay() {
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
    instruct.innerHTML = "HackerBot, you're up!"

    highlightHacker()
    awaitHacker()
    /* delay() */
}

async function addHighscore(name, score) {
    let playerInfo = {
        name: name,
        score: score
    }

    let body = new FormData()
    body.append("action", "addHighscore")
    body.append("playerInfo", JSON.stringify(playerInfo))

    //JSON.stringify(playerInfo)

    let request = await makeRequest("/recievers/userRecievers.php", "POST", body)
    console.log(request)
}

async function makeRequest(url, method, body) {
    try {
        const respone = await fetch(url, { method, body })
        return respone.json()
    } catch(err) {
        console.log(err)
    }
}







