const texField = document.querySelector("#textfield");
const h1Field = document.querySelector("#theAnswer");
const button = document.querySelector("#button");
const hint = document.querySelector("#hint");
const displayhint = document.querySelector("#displayHint");

const winner = WinningNumber(); // might have to go after "function"


function WinningNumber() {
    return Math.ceil(Math.random()*100);
}

// if : invalid
// else if :   != wrong number        /// else if :   number < winner
// else if :   != wrong number        ///  guess higher
// else if :   number > winner          else if    number > winner
// else if :   guess lower             /// guess                               
 // else : right number = winner lower

 let arr = []
 let hintarr = [winner, ` ${WinningNumber()}`, ` ${WinningNumber()}`]



 
hint.addEventListener("click", function(e) {
    displayhint.innerHTML =  hintarr;
    

})

let size = 30
let colorarr = ['red','blue','green', 'coral', 'yellow']
let i = 0

//import audio
// const audio = new Audio('audio.mp3');


button.addEventListener("click", function(e){
    const guess = texField.value;
 
    if (guess == winner) {
        h1Field.innerHTML = "Winner Winner Chicken Dinner";
    
    }
    else if (guess <= winner && arr.length != 5) {
        h1Field.innerHTML = "Guess Higher";
        h1Field.style.fontSize = `${size}px`;
        h1Field.style.color = colorarr[i++]
        size = size + 10
        arr.push(guess)

    }
    else if (guess >= winner && arr.length != 5) {
        h1Field.innerHTML = "Guess Lower";
        h1Field.style.fontSize = `${size}px`;
        size = size - 2
        arr.push(guess)
    }

    if (arr.length == 5) {
     
     h1Field.innerHTML =  "Game Over" +" 😱 "+ "<br> <br> " +   "The Number Was:" + " " + winner; 
    
    }

    
    console.log("guess", guess, "winning number", winner, "arr.length:", arr.length)


})


// A winning number between 1-100 will be randomly generated.

// The player inputs their guess in a text input field.
// The player clicks a button to submit their guess.
// If the player guesses the winning number, they win! Otherwise, they are allowed to try again.
// The game should give a hint after each guess, letting them know whether to guess higher or lower as well as how close they are.
// After five unsuccessful guesses, the game is over and the player loses.





//    <input id = "textfield" type = "text"/>
//    <input type = "button"  id = "button" value = "submit" /> 


// const textField = document.querySelector("input");
// const croissantButton = document.querySelector("#croissant-button")
// const entriesList = document.querySelector("ul")

// croissantButton.addEventListener("click", function(e) {
    
    
//     const listItem = document.createElement("li");
//     listItem.textContent = textField.value;

//     entriesList.appendChild(listItem);
// })

// croissantButton.addEventListener("enter", function(e) {
    
//     const listItem = document.createElement("li");
//     listItem.textContent = textField.value;
//     entriesList.appendChild(listItem);
// }) 
