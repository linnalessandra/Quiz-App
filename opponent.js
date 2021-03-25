function selectOnlyThis(id) {

    for (var i = 1;i <= 3; i++) {
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function playGame() {
        window.location.href = "game.html"
}