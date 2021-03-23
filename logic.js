var randomNumber = Math.random()*20;
randomNumber = Math.ceil(randomNumber);

    console.log(randomNumber);

function guess() {
    let guess = document.getElementById("getNumber").value
    if (guess < randomNumber){
    let instruct = document.getElementById("instruct")
    instruct.innerHTML = "";
    instruct.innerHTML = "Higher";
    noobBotGuess()

    } else if (guess > randomNumber) {
        let instruct = document.getElementById("instruct")
        instruct.innerHTML = "";
        instruct.innerHTML = "Lower"
        noobBotGuess();
    } else if (guess == randomNumber) {
        instruct.innerHTML = "";
        instruct.innerHTML = "Great you win! Thats my number!";
        }
    }

    function noobBotGuess(){
        var noob = Math.random()*20;
        noob = Math.ceil(noob);
        console.log(noob)
        if (noob < randomNumber){
            let instruct = document.getElementById("instruct")
            instruct.innerHTML = "";
            instruct.innerHTML = "Higher";
    
        
            } else if (noob > randomNumber) {
                let instruct = document.getElementById("instruct")
                instruct.innerHTML = "";
                instruct.innerHTML = "Lower";
            } else if (noob == randomNumber) {
                instruct.innerHTML = "";
                instruct.innerHTML = "Noob bot wins! Thats my number!";
            }
    }




