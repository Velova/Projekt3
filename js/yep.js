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

let playerturn = true; 
let whiteturn = "White's turn";
let blackturn = "Black's turn";
let totalblack = 12; 
let totalwhite = 12; 

function Playerturn()
{
 
}

const white = [
  document.querySelector("#w1"),
  document.querySelector("#w2"),
  document.querySelector("#w3"),
  document.querySelector("#w4"),

  document.querySelector("#w5"),
  document.querySelector("#w6"),
  document.querySelector("#w7"),
  document.querySelector("#w8"),

  document.querySelector("#w9"),
  document.querySelector("#w10"),
  document.querySelector("#w11"),
  document.querySelector("#w12")
]

const black = [
  document.querySelector("#b13"),
  document.querySelector("#b14"),
  document.querySelector("#b15"),
  document.querySelector("#b16"),

  document.querySelector("#b17"),
  document.querySelector("#b18"),
  document.querySelector("#b19"),
  document.querySelector("#b20"),

  document.querySelector("#b21"),
  document.querySelector("#b22"),
  document.querySelector("#b23"),
  document.querySelector("#b24")
]



white[0].addEventListener("click", pieceHovered(white[0]));


function pieceHovered()
{
 
} 



/*
for(i = 1; i < 12; i++)
{
  = document.querySelector("#" + i);
}
*/