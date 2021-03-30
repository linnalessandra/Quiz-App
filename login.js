window.addEventListener("load", initsite)


function initsite() {

}

function checkUser() {
    const name = localStorage.getItem('name');
    if (localStorage.getItem("name") === null){
        window.location.href = "login.html"
    } else {
        window.location.href = "opponent.html"
    }
} 

//anrop för att lägga till user i datbasen
async function addUser() {
    let name = document.getElementById("quickLogIn")
 
    if (name.value.length < 3) {
        // pratbubbla-kod
        let brake = document.createElement("BR")
        let instruct = document.getElementById("timerDivUser")
        instruct.innerHTML = ""
        instruct.innerHTML = "Blip blop! Error 404. Error" + " Give me a longer name."
    } else {
        localStorage.setItem("name", name.value)
        window.location.href = "opponent.html"
    }
    }
        
//function för knapp till startsida
function goToIndex() {
    window.location.href = "index.html"
}



//hämtar user
/* async function getUser() {
    let url = new URL("http://localhost/recievers/userReciever.php")
    let params = { action: "getUser"}
    url.search = new URLSearchParams(params)
    let user await makeRequest(url, "GET")
    return user
}
 */

//request metod
async function makeRequest(url, method, body) {
    try {
        const respone = await fetch(url, { method, body })
        return respone.json()
    } catch(err) {
        console.log(err)
    }
}