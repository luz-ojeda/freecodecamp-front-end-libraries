let display = document.getElementById("display")
let volume = 50;
let audioElement;

let playDrumPad = function (event) {
    let sound;
    if (event.type ==
        'mousedown' && event.target.classList.contains('drum-pad')) {

        audioElement = event.target.querySelector("audio")

    } else if (['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes(event.key.toUpperCase())) {

        audioElement = document.getElementById(event.key.toUpperCase())
        audioElement.parentNode.classList.add("drum-pad-active")

    }
    sound = new Audio(audioElement.src)
    sound.play()
    sound.volume = volume / 100
    display.innerText = audioElement.parentNode.id.replace("-", " ")
}

let buttons = document.getElementById("button-container")
let removePlayEffect = function () {
    audioElement.parentNode.classList.remove("drum-pad-active")
}

buttons.addEventListener('mousedown', playDrumPad)
document.addEventListener('keydown', playDrumPad)
document.addEventListener('keyup', removePlayEffect)





