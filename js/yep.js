let gameBoard = [
    [null, 1, null, 2, null, 3, null, 4],
    [5, null, 6, null, 7, null, 8, null],
    [null, 9, null, 10, null, 11, null, 12],
    [0, null, 0, null, 0, null, 0, null],
    [null, 0, null, 0, null, 0, null, 0],
    [13, null, 14, null, 15, null, 16, null],
    [null, 17, null, 18, null, 19, null, 20],
    [21, null, 22, null, 23, null, 24, null],
];

var whiteturnmessage = document.querySelector("#whiteturn");
var blackturnmessage = document.querySelector("#blackturn");
let totalblack = 12; 
let totalwhite = 12; 

let whitesideturn = true;
let start = true;

const whitechecker = document.querySelectorAll(".whitechecker");
const blackchecker = document.querySelectorAll(".blackchecker");


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
console.log(whitesideturn);

let selectedPiece = {
isKing: false,
xCordinate: null,
yCordinate: null,
pieceValue: null
}
console.log(selectedPiece);

function pieceClicked()
{
  if(whiteturn = true)
  {
    for(let i = 0; i < whitechecker.length; i++)
    {
     whitechecker[i].addEventListener("click", getPlayerPieces);
    }
  }
  else
  {
    for(let i = 0; i < blackchecker.length; i++)
   {
    blackchecker[i].addEventListener("click", getPlayerPieces);
   }
  }
} 

function getPlayerPieces()
{
  console.log("getplayerpieces" + whitesideturn);
  if(whitesideturn)
  {
   playerPieces = whitechecker;
  }
  else
  {
   playerPieces = blackchecker;
  }
  findPieceOnGameBoard();
  console.log("Yeet");
}

let whitemovex1 = 0; 
let whitemovex2 = 0;

function findPieceOnGameBoard()
{
  selectedPiece.pieceValue = parseInt(event.srcElement.id);
  console.log(selectedPiece.pieceValue);
  console.log(typeof(selectedPiece.pieceValue));
  for(let x = 0; x < gameBoard.length; x++)
  {
    for(let y = 0; y < gameBoard.length; y++)
    {
     if(gameBoard[x][y] == selectedPiece.pieceValue)
     {
      selectedPiece.xCordinate = x; 
      selectedPiece.yCordinate = y;
     }
    }  
  }
  console.log("???");
  whitemovex1 = selectedPiece.xCordinate + 1;
  whitemovex2 = selectedPiece.xCordinate - 1;
  whitemovey = selectedPiece.yCordinate + 1;
}

function whiteMoveForward()
{
  
}

function blackMoveForward()
{

}

function highlightMoves()
{
}

function piecePlaced()
{
 Playerturn();
}

document.querySelector("#Testknapp").addEventListener("click", Playerturn);

pieceClicked();