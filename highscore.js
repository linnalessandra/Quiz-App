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
    let div = document.getElementById("opponentDiv")
    
    list.forEach((listItem => {
        let name = document.createElement("p")
        name.innerText = listItem.name
        let score = document.createElement("p")
        score.innerText = listItem.score
        div.appendChild(name, score)
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
