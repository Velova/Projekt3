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

let whitesideturn;
let start = true;

var whitechecker = document.querySelectorAll(".whitechecker");
var blackchecker = document.querySelectorAll(".blackchecker");

var squares = document.querySelectorAll(".square");
var blacksquares = document.querySelectorAll(".blacksquare");
/*
for(let i = 0; i < squares.length; i++)
{
 console.log(squares[i]);
}
*/



function Start()
{
 if(start)
 {
  whiteturnmessage.style.border = "solid red";
  whitesideturn = true;
 }
 start = false;
}


function Playerturn()
{
 if(whitesideturn)
 {
   whiteturnmessage.style.border = "solid red";
   blackturnmessage.style.border = "none";
 }
 else 
 {
   blackturnmessage.style.border = "solid red";
   whiteturnmessage.style.border = "none"; 
 }
}
//console.log(whitesideturn);

let selectedPiece = {
isKing: false,
xCordinate: null,
yCordinate: null,
pieceValue: null
}

function giveCheckersEventListener()
{
  whitechecker = document.querySelectorAll(".whitechecker");
  blackchecker = document.querySelectorAll(".blackchecker");
  Start();
  if(whitesideturn)
  {
    for(let i = 0; i < whitechecker.length; i++)
    {
     whitechecker[i].addEventListener("click", getPlayerPieces);
     whitechecker[i].addEventListener("click", function(){whitechecker[i].style.borderColor = "orange"});
    }
  }
  else
  {
    for(let i = 0; i < blackchecker.length; i++)
    {
     blackchecker[i].addEventListener("click", getPlayerPieces);
     blackchecker[i].addEventListener("click", function(){blackchecker[i].style.borderColor = "orange"});
    }
  }
} 

function removeCheckersEventListener()
{
  if(whitesideturn)
  {
    for(let i = 0; i < whitechecker.length; i++)
    {
     whitechecker[i].removeEventListener("click", getPlayerPieces);
     whitechecker[i].removeEventListener("click", function(){whitechecker[i].style.borderColor = "orange"});
    }
  }
  else
  {
    for(let i = 0; i < blackchecker.length; i++)
    {
     blackchecker[i].removeEventListener("click", getPlayerPieces);
     blackchecker[i].removeEventListener("click", function(){blackchecker[i].style.borderColor = "orange"});
    }
  }
}

function getPlayerPieces()
{
  //console.log("getplayerpieces" + whitesideturn);
  for(let  i = 0; i < blacksquares.length; i++)
  {
    blacksquares[i].style.backgroundColor = "black";
  }
  if(whitesideturn)
  {
    for(let i = 0; i < whitechecker.length; i++)
    {
      whitechecker[i].style.borderColor = "white";
    }
  }
  else
  {
    for(let i = 0; i < blackchecker.length; i++)
    {
      blackchecker[i].style.borderColor = "white";
    }
  }
  
  
  findPieceOnGameBoard();
}

let whitemovex1 = 0; 
let whitemovex2 = 0;

function findPieceOnGameBoard()
{
  selectedPiece.pieceValue = parseInt(event.srcElement.id);
  /*
  console.log(selectedPiece.pieceValue);
  console.log(typeof(selectedPiece.pieceValue));
  */
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
    /*
    console.log("blackmovex1: " + blackmovex1);
    console.log("blackmovex2: " + blackmovex2);
    console.log("blackmovey: " + blackmovey);
    console.log("Blackupright: " + gameBoard[blackmovey][blackmovex1]);
    console.log("Blackupleft: " + gameBoard[blackmovey][blackmovex2]);
    */
  }
  /*
  console.log("selectedxCordinate" + selectedPiece.xCordinate);
  console.log("selectedyCordinate" + selectedPiece.yCordinate);
  */
  checkForLegalMoves();
  //Playerturn();//Temporary, for testing
}

function checkForLegalMoves()
{
  if(whitesideturn)
  {
    totalsquaresy = saveyCordinate * 8 - 1;//Count the squares in the previous y rows
    totalsquaresx1 = savexCordinate - 1;
    totalsquaresx2 = savexCordinate + 1;
    totalsquares1 = totalsquaresy + totalsquaresx1;
    totalsquares2 = totalsquaresy + totalsquaresx2;
    /*
    console.log("totalsquares1: " + totalsquares1 + "Square: " + squares[totalsquares1]);
    console.log("totalsquares2: " + totalsquares2 + "Square: " + squares[totalsquares2]);
    console.log("totalsquaresy: " + totalsquaresy);
    console.log("totalsquaresx1: " + totalsquaresx1);
    console.log("totalsqauresx2: " + totalsquaresx2); 
    */
  }
  else
  {
    totalsquaresy = (saveyCordinate - 2) * 8 - 1;
    totalsquaresx1 = savexCordinate - 1;
    totalsquaresx2 = savexCordinate + 1;
    totalsquares1 = totalsquaresy + totalsquaresx1;
    totalsquares2 = totalsquaresy + totalsquaresx2;
    /*
    console.log("totalsquares1: " + totalsquares1 + "Square: " + squares[totalsquares1]);
    console.log("totalsquares2: " + totalsquares2 + "Square: " + squares[totalsquares2]);
    console.log("totalsquaresy: " + totalsquaresy);
    console.log("totalsquaresx1: " + totalsquaresx1);
    console.log("totalsqauresx2: " + totalsquaresx2);
    */ 
  }
 
 highlightMoves();
}

function blackMoveForward()
{

}

function highlightMoves()
{
  if(whitesideturn)
  { 
    if(squares[totalsquares2].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] == 0) // downleft empty, downright whitesquare
    {
     squares[totalsquares1].style.backgroundColor = "#99ff99";
     squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
    }
    else if(squares[totalsquares2].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] > 12 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate - 2] == 0) // white downright, blackdownleft, nothing downdownleftleft
    {
      squares[totalsquares1 + 7].style.backgroundColor = "#99ff99";
      squares[totalsquares1 + 7].setAttribute("onclick", "piecePlaced(" + (totalsquares1 + 7) + ")");
    }
    else if(squares[totalsquares2].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] > 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] < 13) //whitesquare downright, whitedownleft
    {
    }
    else if(squares[totalsquares1].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] == 0) // whitesquare downleft, nothing downright
    {
      squares[totalsquares2].style.backgroundColor = "#99ff99";
      squares[totalsquares2].setAttribute("onclick", "piecePlaced(" + totalsquares2 + ")");
    }
    else if(squares[totalsquares1].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] > 12 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate + 2] == 0) // whitesquare downleft, black downright, nothing downdownrightright
    {
      squares[totalsquares2 + 9].style.backgroundColor = "#99ff99";
      squares[totalsquares2 + 9].setAttribute("onclick", "piecePlaced(" + (totalsquares2 + 9) + ")");
    }
    else if(squares[totalsquares1].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] > 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] < 13)
    {

    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] > 12 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate - 2] == 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] == 0) // black downleft, nothing downdownleftleft, nothing downright
    {
      squares[totalsquares1 + 7].style.backgroundColor = "#99ff99";
      squares[totalsquares1 + 7].setAttribute("onclick", "piecePlaced(" + (totalsquares1 + 7) + ")");
      squares[totalsquares2].style.backgroundColor = "#99ff99";
      squares[totalsquares2].setAttribute("onclick", "piecePlaced(" + totalsquares2 + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] > 12 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate + 2] == 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] == 0) // black downright, nothing downdownrightright, nothing downleft
    {
      squares[totalsquares1].style.backgroundColor = "#99ff99";
      squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
      squares[totalsquares2 + 9].style.backgroundColor = "#99ff99";
      squares[totalsquares2 + 9].setAttribute("onclick", "piecePlaced(" + (totalsquares2 + 9) + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] > 12 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate - 2] == 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] > 12 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate + 2] == 0)// black downleft, nothing downdownleftleft. black downright, nothing downdownrightright
    { 
      squares[totalsquares1 + 7].style.backgroundColor = "#99ff99";
      squares[totalsquares1 + 7].setAttribute("onclick", "piecePlaced(" + (totalsquares1 + 7) + ")");
      squares[totalsquares2 + 9].style.backgroundColor = "#99ff99";
      squares[totalsquares2 + 9].setAttribute("onclick", "piecePlaced(" + (totalsquares2 + 9) + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] != 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] != 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] > 12 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate + 2] == 0)//black downright, checker downdownright. black downright, nothing downdownrightright
    {
      squares[totalsquares2 + 9].style.backgroundColor = "#99ff99";
      squares[totalsquares2 + 9].setAttribute("onclick", "piecePlaced(" + (totalsquares2 + 9) + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] > 12 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate - 2] == 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] != 0 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate + 2] != 0)// black downright, nothing downdownrightright. checker downright, checker downdownright
    {
      squares[totalsquares1 + 7].style.backgroundColor = "#99ff99";
      squares[totalsquares1 + 7].setAttribute("onclick", "piecePlaced(" + (totalsquares1 + 7) + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] != 0 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate - 2] != 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] != 0 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate + 2] != 0) // checker downright, checker downdownrightright. checker downleft, checker downdownleftleft. 
    {
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] != 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] != 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] == 0)// checker downleft, checker downdownleftleft. nothing downright. 
    {
      squares[totalsquares2].style.backgroundColor = "#99ff99";
      squares[totalsquares2].setAttribute("onclick", "piecePlaced(" + totalsquares2 + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] == 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] != 0 && gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate + 2] != 0) // 
    {
      squares[totalsquares1].style.backgroundColor = "#99ff99";
      squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] < 13 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] > 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] == 0)// white downleft. nothing downright. 
    {
      squares[totalsquares1].style.backgroundColor = "#99ff99";
      squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] == 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] < 13 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] > 0)// nothing downleft. white downright. 
    {
      squares[totalsquares1].style.backgroundColor = "#99ff99";
      squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] > 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] < 13 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] > 0 && gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] < 13)// white downleft. white downright. 
    {

    }
    else
    {
      squares[totalsquares1].style.backgroundColor = "#99ff99";
      squares[totalsquares2].style.backgroundColor = "#99ff99";
      squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
      squares[totalsquares2].setAttribute("onclick", "piecePlaced(" + totalsquares2 + ")");
    }
   
  }
  else 
  {
    if(squares[totalsquares2].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] == 0) // Upleft empty. Upright whitesquare
    {
     squares[totalsquares1].style.backgroundColor = "#99ff99";
     squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
    }
    else if(squares[totalsquares2].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] > 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] < 13 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] == 0) // Upleft white. upupleftleft empty. Upright whitesquare. 
    {
      squares[totalsquares1 - 9].style.backgroundColor = "#99ff99";
      squares[totalsquares1 - 9].setAttribute("onclick", "piecePlaced(" + (totalsquares1 - 9) + ")");
    }
    else if(squares[totalsquares2].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] != 0 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] != 0) // Upleft checker. Upupleftleft checker. Upright whitesquare. 
    {
    }
    else if(squares[totalsquares2].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] > 12) // Upleft black. Upright whitesquare. 
    {  
    }
    else if(squares[totalsquares1].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] == 0) // Upright empty. Upleft whitesquare
    {
      squares[totalsquares2].style.backgroundColor = "#99ff99";
      squares[totalsquares2].setAttribute("onclick", "piecePlaced(" + totalsquares2 + ")");
    }
    else if(squares[totalsquares1].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] > 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] < 13 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] == 0) // Upleft whitesquare. Upright white. Upuprightright empty. 
    {
      squares[totalsquares2 - 7].style.backgroundColor = "#99ff99";
      squares[totalsquares2 - 7].setAttribute("onclick", "piecePlaced(" + (totalsquares2 - 7) + ")");
    }
    else if(squares[totalsquares1].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] != 0 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] != 0)// Upleft whitesquare. Upright checker. Upuprightright checker. 
    {
    }
    else if(squares[totalsquares1].classList.contains("whitesquare") && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] > 12) //Upleft whitesquare. Upright black. 
    {
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] > 12 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] > 12)//Upleft black. Upright black.
    {
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] > 12 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] == 0)
    {
      squares[totalsquares2].style.backgroundColor = "#99ff99";
      squares[totalsquares2].setAttribute("onclick", "piecePlaced(" + totalsquares2 + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] == 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] > 12) //Upleft empty. Upright black.
    {
      squares[totalsquares1].style.backgroundColor = "#99ff99";
      squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] > 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] < 13 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] == 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] == 0)//Upleft white. Upupleftleft empty. Upright empty. 
    {
      squares[totalsquares1 - 9].style.backgroundColor = "#99ff99";
      squares[totalsquares1 - 9].setAttribute("onclick", "piecePlaced(" + (totalsquares1 - 9) + ")");
      squares[totalsquares2].style.backgroundColor = "#99ff99";
      squares[totalsquares2].setAttribute("onclick", "piecePlaced(" + totalsquares2 + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] == 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] > 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] < 13 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] == 0 )// Upleft empty. Upright white. Upuprightright empty. 
    {
      squares[totalsquares1].style.backgroundColor = "#99ff99";
      squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
      squares[totalsquares2 - 7].style.backgroundColor = "#99ff99";
      squares[totalsquares2 - 7].setAttribute("onclick", "piecePlaced(" + (totalsquares2 - 7) + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] > 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] < 13 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] == 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] > 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] < 13 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] == 0)//Upleft white. Upupleftleft empty. Upright white. Upuprightright empty.
    {
      squares[totalsquares1 - 9].style.backgroundColor = "#99ff99";
      squares[totalsquares1 - 9].setAttribute("onclick", "piecePlaced(" + (totalsquares1 - 9) + ")");
      squares[totalsquares2 - 7].style.backgroundColor = "#99ff99";
      squares[totalsquares2 - 7].setAttribute("onclick", "piecePlaced(" + (totalsquares2 - 7) + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] != 0 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] != 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] > 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] < 13 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] == 0)// Upleft checker. Upupleftleft checker. Upright white. Upupright empty. 
    {
      squares[totalsquares2 - 7].style.backgroundColor = "#99ff99";
      squares[totalsquares2 - 7].setAttribute("onclick", "piecePlaced(" + (totalsquares2 - 7) + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] > 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] < 13 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] == 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] != 0 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] != 0) // Upleft white. Upupleftleft empty. Upright checker. Upuprightright checker. 
    {
      squares[totalsquares1 - 9].style.backgroundColor = "#99ff99";
      squares[totalsquares1 - 9].setAttribute("onclick", "piecePlaced(" + (totalsquares1 - 9) + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] != 0 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] != 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] == 0)//Upleft checker. Upupleftleft checker. Upright empty. 
    {
      squares[totalsquares2].setAttribute("onclick", "piecePlaced(" + totalsquares2 + ")");
      squares[totalsquares2].style.backgroundColor = "#99ff99";
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] == 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] != 0 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] != 0)//Upleft empty. Upright checker. Upuprightright checker. 
    {
      squares[totalsquares1].style.backgroundColor = "#99ff99";
      squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
    }
    else if(gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] != 0 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] != 0 && gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] != 0 && gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] != 0) // Upleft checker. Upupleftleft checker. Upright checker. Upuprightright checker.
    {
      
    }
    else
    {
      squares[totalsquares1].style.backgroundColor = "#99ff99";
      squares[totalsquares2].style.backgroundColor = "#99ff99";
      squares[totalsquares1].setAttribute("onclick", "piecePlaced(" + totalsquares1 + ")");
      squares[totalsquares2].setAttribute("onclick", "piecePlaced(" + totalsquares2 + ")");
   }
  }
  
  
}

function turnChanger()
{
  if(whitesideturn)
  {
    whitesideturn = false;  
  }
  else 
  {
    whitesideturn = true;
  }
}

function removeOnClick()
{
  for(let i = 0; i < squares.length; i++)
  {
    squares[i].removeAttribute("onclick");
  }
}

function checkForWin()
{
  if(totalblack == 0)
  {
    alert("White wins!");
  }
  else if(totalwhite == 0)
  {
    alert("Black wins!");
  }
}

function piecePlaced(clickedsquare)
{
  //console.log("clickedsquare: " + clickedsquare);
 if(whitesideturn)
 {
   /*
   console.log("xCordinate: " + selectedPiece.xCordinate);
   console.log("yCordinate: " + selectedPiece.yCordinate);
   console.log("Gameboard: " + gameBoard[selectedPiece.yCordinate][selectedPiece.xCordinate]);//Well, they are reverted. Too lazy to fix ngl
   */
   gameBoard[selectedPiece.yCordinate][selectedPiece.xCordinate] = 0;
   squares[clickedsquare].innerHTML = "<div id='" + selectedPiece.pieceValue +  "' class='whitechecker checker'></div>";
  if(clickedsquare == totalsquares1)
  {
   squares[clickedsquare - 7].innerHTML = "";
   gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] = selectedPiece.pieceValue; 
  }
  else if(clickedsquare == totalsquares1 + 7)
  {
    squares[clickedsquare - 14].innerHTML = "";
    squares[clickedsquare - 7].innerHTML = "";
    totalblack--;
    gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] = 0;
    gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate - 2] = selectedPiece.pieceValue;
  }
  else if(clickedsquare == totalsquares2)
  {
   squares[clickedsquare - 9].innerHTML = "";
   gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] = selectedPiece.pieceValue; 
  }
  else if(clickedsquare == totalsquares2 + 9)
  {
    squares[clickedsquare - 18].innerHTML = "";
    squares[clickedsquare - 9].innerHTML = "";
    totalblack--;
    gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] = 0;
    gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate + 2] = selectedPiece.pieceValue; 
  }
  else if(clickedsquare == totalsquares1 - 16)
  {
    squares[clickedsquare + 9].innerHTML = "";
    gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] = selectedPiece.pieceValue;
  }
  else if(clickedsquare == totalsquares2 - 16)
  {
    squares[clickedsquare + 7].innerHTML = "";
    gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] = selectedPiece.pieceValue;
  }
  else if(clickedsquare == totalsquares1 - 25)
  {
    squares[clickedsquare + 18].innerHTML = "";
    squares[clickedsquare + 9].innerHTML = "";
    totalblack--;
    gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] = 0;
    gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] = selectedPiece.pieceValue;
  }
  else if(clickedsquare = totalsquares2 - 23)
  {
    squares[clickedsquare + 14].innerHTML = "";
    squares[clickedsquare + 7].innerHTML = "";
    totalblack--;
    gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] = 0;
    gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] = selectedPiece.pieceValue;
  }
  for(let  i = 0; i < blacksquares.length; i++)
  {
    blacksquares[i].style.backgroundColor = "black";
  }
 }
 else
 {
   gameBoard[selectedPiece.yCordinate][selectedPiece.xCordinate] = 0;
   squares[clickedsquare].innerHTML = "<div id ='" + selectedPiece.pieceValue + "' class ='blackchecker checker'></div>";
   if(clickedsquare == totalsquares1)
  {
   squares[clickedsquare + 9].innerHTML = "";
   gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] = selectedPiece.pieceValue;
  }
  else if(clickedsquare == totalsquares1 - 9)
  {
    squares[clickedsquare + 18].innerHTML = "";
    squares[clickedsquare + 9].innerHTML = "";
    totalwhite--;
    gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate - 1] = 0;
    gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate - 2] = selectedPiece.pieceValue; 
  }
  else if(clickedsquare == totalsquares2)
  {
   squares[clickedsquare + 7].innerHTML = "";
   gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] = selectedPiece.pieceValue;
  }
  else if(clickedsquare == totalsquares2 - 7)
  {
    squares[clickedsquare + 14].innerHTML = "";
    squares[clickedsquare + 7].innerHTML = "";
    totalwhite--;
    gameBoard[selectedPiece.yCordinate - 1][selectedPiece.xCordinate + 1] = 0;
    gameBoard[selectedPiece.yCordinate - 2][selectedPiece.xCordinate + 2] = selectedPiece.pieceValue; 
  }
  else if(clickedsquare == totalsquares1 + 16)
  {
    squares[clickedsquare - 7].innerHTML = "";
    gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] = selectedPiece.pieceValue;
  }
  else if(clickedsquare == totalsquares2 + 16)
  {
    squares[clickedsquare - 9].innerHTML = "";
    gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] = selectedPiece.pieceValue;
  }
  else if(clickedsquare == totalsquares1 + 23)
  {
    squares[clickedsquare - 14].innerHTML = "";
    squares[clickedsquare - 7].innerHTML = "";
    totalwhite--;
    gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate - 1] = 0;
    gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate - 2] = selectedPiece.pieceValue;
  }
  else if(clickedsquare == totalsquares2 + 25)
  {
    squares[clickedsquare - 18].innerHTML = "";
    squares[clickedsquare - 9].innerHTML = "";
    totalwhite--;
    gameBoard[selectedPiece.yCordinate + 1][selectedPiece.xCordinate + 1] = 0;
    gameBoard[selectedPiece.yCordinate + 2][selectedPiece.xCordinate + 2] = selectedPiece.pieceValues;
  }
  for(let  i = 0; i < blacksquares.length; i++)
  {
    blacksquares[i].style.backgroundColor = "black";
  }
 }
 checkForWin();
 removeOnClick();
 removeCheckersEventListener();
 turnChanger();
 Playerturn();
 giveCheckersEventListener();
}
giveCheckersEventListener();