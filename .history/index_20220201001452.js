window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#restart');
const announcer = document.querySelector('.announcer');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';




    resetButton.addEventListener('click', resetBoard);

  });
// let board =[
//     ["-","-","-"],
//     ["-","-","-"],
//     ["-","-","-"]
// ];
// let boardStr =board[0].join(" ")+
// "\n"+
// board[1].join(" ")+
// "\n"+
// board[2].join(" ");