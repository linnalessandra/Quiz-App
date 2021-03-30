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
    let number = 1 
    list.forEach((listItem => {

        let name = document.createElement("p")
        name.innerText = number + ". " + listItem.name + " " + listItem.score + "p"
        div.appendChild(name)
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
