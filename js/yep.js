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
let blackturn = "Black's turn";
let x = false;

function Playerturn(playerturn)
{
 if(playerturn % 2 == 0)
 {
   document.getElementById("playerturn").innerHTML = whiteturn;
 }
 else
 {
  document.getElementById("playerturn").innerHTML = blackturn;
 }
 playerturn++; 
}

function Piececheck()
{
  
}

function test()
{
  console.log("testfunktion");
  x = true;
  //document.getElementById("test").style.backgroundColor = "red";
}

if(x == true)
{
  console.log("if");
  document.getElementById("test").style.backgroundColor = "red";
}

//document.getElementsByClassName(square).onclick = Piececheck();

//document.getElementsByClassName("square").innerHTML.onclick = "BLYAT"

//document.getElementsByid("test").innerHTML = console.log("HMm");

