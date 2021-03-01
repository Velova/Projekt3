let gameBoard = [
    [0, 1, 0, 2, 0, 3, 0, 4],
    [5, 0, 6, 0, 7, 0, 8, 0],
    [0, 9, 0, 10, 0, 11, 0, 12],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [13, 0, 14, 0, 15, 0, 16, 0],
    [0, 17, 0, 18, 0, 19, 0, 20],
    [21, 0, 22, 0, 23, 0, 24, 0],
];

var whiteturnmessage = document.querySelector("#whiteturn");
var blackturnmessage = document.querySelector("#blackturn");
let totalblack = 12; 
let totalwhite = 12; 

let whitesideturn = true;
let start = true;

const whitechecker = document.querySelectorAll(".whitechecker");
const blackchecker = document.querySelectorAll(".blackchecker");

let selectedpiecestring; 
console.log(whitechecker[0]);

if(start)
{
 Playerturn();
 start = false;
}


function Playerturn()
{
 if(whitesideturn)
 {
   whiteturnmessage.style.border = "solid black";
   blackturnmessage.style.border = "none";
   whitesideturn = false;
 }
 else 
 {
   blackturnmessage.style.border = "solid black";
   whiteturnmessage.style.border = "none"; 
   whitesideturn = true;
 }
}


function pieceSelected()
{
  if(whitesideturn)
  {
   for(let i = 0; i < 11; i++)
   {
    whitechecker[i].addEventListener("click", piecePlaced);
   }
  }
  else
  {
   for(let i = 0; i < 11; i++)
   {
    blackchecker[i].addEventListener("click", piecePlaced);
   }
  }
} 


function highlightMoves()
{

}

function piecePlaced()
{
 Playerturn();
}

document.querySelector("#Testknapp").addEventListener("click", Playerturn);

/*
for(i = 0; i < 11; i++)
{
  = document.querySelector("#" + i);
}
*/