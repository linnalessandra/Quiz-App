localStorage.setItem("id", "Check1");

function selectOnlyThis(id) {

    for (var i = 1;i <= 3; i++) {
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
    localStorage.setItem("id", id);
}

function playGame() {
        window.location.href = "game.html"
}


