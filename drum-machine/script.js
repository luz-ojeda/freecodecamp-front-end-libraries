let display = document.getElementById("display")

let playDrumPad = function(event) {
    if(event.target.classList.contains('drum-pad')) {
        audioElement = event.target.querySelector("audio")
        
        let sound = new Audio(audioElement.src)
        sound.play()
    }
}

display.addEventListener('click', playDrumPad)
