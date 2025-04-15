// Access All Buttons 

let gamebtn = document.querySelectorAll(".game-btn");
let resetbtn = document.querySelector(".reset");

// Turns of Players 

let turnO = true;
// Access All Wining Points
const winingpnt = [
    [ 0, 1, 2 ],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 5]
]

// Apply Event Listeners When Click on Button Which Action Perform

