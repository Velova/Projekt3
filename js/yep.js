let gameBoard = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
];

let playerturn = 1; 
let whiteturn = "White's turn";
let redturn = "Red's turn";

function Playerturn(playerturn)
{
 if(playerturn % 2 == 0)
 {
   document.write(redturn);
 }
 else
 {
  document.getElementById("playerturn").innerHTML = "YEP"
 }
 playerturn++; 
}

function Piececheck()
{
  
}

document.getElementsByClassName(square).onclick = Piececheck();

document.getElementsByClassName("square").innerHTML.onclick = "BLYAT"

