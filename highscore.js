getHighscore()

async function getHighscore() {
    let request = makeRequest("/recievers/userRecievers.php", "GET")
    console.log(request)
    request.then(function(result) {
        console.log(result) // "Some User token"
        renderHighscore(result)
     })
}

function renderHighscore(list) {
    let div = document.getElementById("highscoreDiv")
    let number = 1 
    list.forEach((listItem => {

        let highscoreLine = document.createElement("hr")
        highscoreLine.style.borderTop = "2px dotted white"
        let name = document.createElement("h4")
        name.innerText = number + ". " + listItem.name + " " + listItem.score + "p"

        div.appendChild(name)
        div.appendChild(highscoreLine)
        number++
    }))
}

async function makeRequest(url, method, body) {
    try {
        const respone = await fetch(url, { method, body })
        return respone.json()
    } catch(err) {
        console.log(err)
    }
}
