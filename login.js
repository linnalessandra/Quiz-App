window.addEventListener("load", initsite)


function initsite() {

}


//anrop för att lägga till user i datbasen
async function addUser() {
    let name = document.getElementById("quickLogIn")
    localStorage.setItem("name", name.value)
    window.location.href = "opponent.html"
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