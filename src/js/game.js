const pacman = document.getElementById("pacman");
const ghost = document.getElementById("ghost");

document.addEventListener("keydown", function(event) {
jump();
});

function jump () {
    if (pacman.classList !="jump"){
    pacman.classList.add("jump")
    }
    setTimeout ( function(){
    pacman.classList.remove("jump")
    },300)
}

let isAlive = setInterval ( function() {
    let pacmanTop = parseInt(window.getComputedStyle(pacman).getPropertyValue("top"));
    let ghostLeft = parseInt(window.getComputedStyle(ghost).getPropertyValue("left"));

    if (ghostLeft < 27 && ghostLeft > 0 && pacmanTop >= 150) {
        alert("GAME OVER!!!")
    }
}, 10)
