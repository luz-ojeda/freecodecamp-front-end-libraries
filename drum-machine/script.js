let volume;

let playDrumPad = function (event) {
    let sound;
    if (event.type ==
        'click' && event.target.classList.contains('drum-pad')) {

        audioElement = event.target.querySelector("audio")

        sound = new Audio(audioElement.src)
        sound.play()
        sound.volume = volume / 100

    } else if (['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes(event.key.toUpperCase())) {

        audioElement = document.getElementById(event.key.toUpperCase())

        sound = new Audio(audioElement.src)
        sound.play()
        sound.volume = volume / 100

    }
}

let drumPadColorChange = function(event) {

}

document.getElementById("button-container").addEventListener('click', playDrumPad)
document.addEventListener('keydown', playDrumPad)
display.addEventListener('mousedown', drumPadColorChange)



