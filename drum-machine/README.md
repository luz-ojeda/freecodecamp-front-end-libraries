# Drum Machine

 ## [Codepen](https://codepen.io/lezojeda/pen/ZgoyNp)

 Project for the FreeCodeCamp ["Build a Drum Machine"](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine/) challenge from the Front End Libraries section.
For this project I used only JavaScript (and HTML & CSS of course) and took the opportunity to practice and implement DOM manipulation learnt in [The Modern JavaScript Tutorial](https://javascript.info/document).

 The main element in the script.js file is the function expression *playDrumPad* which first checks if the event type consists of a click ('mousedown') or keydown (by checking if the event key is one of the pads' id, e.g. Q or W). 
 
If the pad was clicked then assigns to audioElement the corresponding audio, this is because we click the button HTML element but the audio HTML element is nested within it. If we instead use the keyboard then audioElement is assigned to the element with the id equal to the event key (e.g. if we pressed the W we will the HTML with id="W") and also we add the drum-pad-active which serves aesthetic purposes.

Then, a new Audio class is instantiated and asigned to the audioElement src attribute which holds the audio file (this allows us to play any pad consecutively without having to wait for the audio file to finish). We then call the play method on this new Audio element (assigned to sound), establish its volume property and display the inner text based on the id of the audioElement parentNode (the button element).

Later in the script we find the *removePlayEffect* . Its purpose is to remove the aesthetic effect achieved by adding the drum-pad-active class by removing this class. This function will be triggered whenever a keyup event is detected. 

Finally we have the event listener additions. First we assign to the button container the mousedown event and then to the whole document the keydown and keyup events for keyboard supports. 
