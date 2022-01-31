window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#res');
const announcer = document.querySelector('.announcer');
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