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

const squares = document.querySelectorAll(".square");
const blacksquares = document.querySelectorAll(".blacksquare");
/*
for(let i = 0; i < squares.length; i++)
{
 console.log(squares[i]);
}
*/

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
  if(whitesideturn)
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
  for(let  i = 0; i < blacksquares.length; i++)
  {
    blacksquares[i].style.backgroundColor = "black";
  }
  for(let i = 0; i < whitechecker.length; i++)
  {
    whitechecker[i].style.borderColor = "white";
  }
  findPieceOnGameBoard();
}

let whitemovex1 = 0; 
let whitemovex2 = 0;

function findPieceOnGameBoard()
{
  selectedPiece.pieceValue = parseInt(event.srcElement.id);
  console.log(selectedPiece.pieceValue);
  console.log(typeof(selectedPiece.pieceValue));
  for(let y = 0; y < gameBoard.length; y++)
  {
    for(let x = 0; x < gameBoard.length; x++)
    {
     if(gameBoard[x][y] == selectedPiece.pieceValue)
     {
      selectedPiece.xCordinate = y; 
      selectedPiece.yCordinate = x;
      // x and y are reverted for some reason so yeah...
      savexCordinate = y + 1;
      saveyCordinate = x + 1;
      //+1 because we'll need to count the squares later
     }
    }  
  }
  checkerMoveForward();
}

function checkerMoveForward()
{
  if(whitesideturn)
  {
    whitemovex1 = selectedPiece.xCordinate + 1;
    whitemovex2 = selectedPiece.xCordinate - 1;
    whitemovey = selectedPiece.yCordinate + 1;
    /*
    console.log("whitemovex1: " + whitemovex1);
    console.log("whitemovex2: " + whitemovex2);
    console.log("whitemovey: " + whitemovey);
    console.log("Whitedownright: " + gameBoard[whitemovey][whitemovex1]);
    console.log("Whitedownleft: " + gameBoard[whitemovey][whitemovex2]);
    */
  }
  else
  {
    blackmovex1 = selectedPiece.xCordinate + 1;
    blackmovex2 = selectedPiece.xCordinate - 1;
    blackmovey = selectedPiece.yCordinate - 1;
    console.log("blackmovex1: " + blackmovex1);
    console.log("blackmovex2: " + blackmovex2);
    console.log("blackmovey: " + blackmovey);
    console.log("Blackupright: " + gameBoard[blackmovey][blackmovex1]);
    console.log("Blackupleft: " + gameBoard[blackmovey][blackmovex2]);
  }
  console.log("selectedxCordinate" + selectedPiece.xCordinate);
  console.log("selectedyCordinate" + selectedPiece.yCordinate);
  
  checkForLegalMoves();
  //Playerturn();//Temporary, for testing
}

function checkForLegalMoves()
{
 totalsquaresy = saveyCordinate * 8 - 1;//Count the squares in the previous y rows
 totalsquaresx1 = savexCordinate - 1;
 totalsquaresx2 = savexCordinate + 1;
 totalsquares1 = totalsquaresy + totalsquaresx1;
 totalsquares2 = totalsquaresy + totalsquaresx2;
 console.log("totalsquares1: " + totalsquares1 + "Square: " + squares[totalsquares1]);
 console.log("totalsquares2: " + totalsquares2 + "Square: " + squares[totalsquares2]);
 console.log("totalsquaresy: " + totalsquaresy);
 console.log("totalsquaresx1: " + totalsquaresx1);
 console.log("totalsqauresx2: " + totalsquaresx2); 
 highlightMoves();
}

function blackMoveForward()
{

}

function highlightMoves()
{
  whitechecker[selectedPiece.pieceValue - 1].style.borderColor = "orange";
  
  if(squares[totalsquares2].classList.contains("whitesquare"))
  {
   squares[totalsquares1].style.backgroundColor = "red";
  }
  else if(squares[totalsquares1].classList.contains("whitesquare"))
  {
    squares[totalsquares2].style.backgroundColor = "red";
  }
  else
  {
    squares[totalsquares1].style.backgroundColor = "red";
    squares[totalsquares2].style.backgroundColor = "red";
  }
  
}

function piecePlaced()
{
 //whitechecker[selectedPiece.pieceValue - 1].style.display = "none";
 Playerturn();
}

document.querySelector("#Testknapp").addEventListener("click", Playerturn);

pieceClicked();